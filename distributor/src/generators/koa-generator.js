import JavaScriptParserVisitor from "../antlr4/JavaScriptParserVisitor.js";

export default class KoaGenerator extends JavaScriptParserVisitor {
    constructor(print) {
        super();
        this.print = print;
    }

    visitBlock(ctx) {
        if(ctx === null) return;
        this.print(`{\n`);
        super.visitBlock(ctx);
        this.print(`}\n`);
    }

    visitImportStatement(ctx) {
        if(ctx === null) return;
        this.print('import ');
        this.visitImportFromBlock(ctx.importFromBlock());
    }

    visitImportFromBlock(ctx) {
        if(ctx === null) return;
        if(ctx.importFrom() !== null) {
            this.visitImportDefault(ctx.importDefault());
            this.visitImportNamespace(ctx.importNamespace());
            this.visitModuleItems(ctx.moduleItems());
            this.visitImportFrom(ctx.importFrom());
            this.print(';\n')
        } else {
            this.print(`${ctx.StringLiteral()};\n`);
        }
    }

    visitModuleItems(ctx) {
        if(ctx === null) return;
        this.print('{ ');
        const aliasNamesStr = ctx.aliasName().map((an) => this.generateAliasName(an));
        this.print(aliasNamesStr.join(', '));
        this.print(' }');
    }

    visitImportDefault(ctx) {
        if(ctx === null) return;
        this.print(`${this.generateAliasName(ctx.aliasName())},`);
    }

    visitImportNamespace(ctx) {
        if(ctx === null) return;
        if (ctx.getText().startsWith('*')) {
            this.print('*');
            if(ctx.identifierName().length > 0) {
                this.print(` as ${this.generateIdentifierName(ctx.identifierName()[0])}`);
            }
        } else {
            this.print(this.generateIdentifierName(ctx.identifierName()[0]));
            if(ctx.identifierName().length > 1) {
                this.print(` as ${this.generateIdentifierName(ctx.identifierName()[1])}`);
            }
        }
    }

    visitImportFrom(ctx) {
        if(ctx === null) return;
        this.print(` from ${ctx.StringLiteral().getText()}`);
    }

    generateAliasName(ctx) {
        const id1 = this.generateIdentifierName(ctx.identifierName()[0]);
        let id2 = '';
        if (ctx.identifierName().length === 2) {
            id2 = ` as ${this.generateIdentifierName(ctx.identifierName()[1])}`;
        }
        return `${id1}${id2}`;
    }

    generateIdentifierName(ctx) {
        return ctx.getText();
    }
}
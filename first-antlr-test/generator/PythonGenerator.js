import MyGrammarVisitor from "../gen/MyGrammarVisitor.js";

export default class PythonGenerator extends MyGrammarVisitor {
    constructor(print) {
        super();
        this.print = print;
    }

    visitPrograma(ctx) {
        this.print(`function ${ctx.ID().getText()}() {\n`);
        super.visitPrograma(ctx);
        this.print(`}\n`);
    }

    visitField(ctx) {
        this.print(`   ${ctx.nome.text} : ${ctx.tipo.text};\n`);
    }
}
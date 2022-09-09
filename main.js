import antlr4 from 'antlr4';
import PythonGenerator from './generator/PythonGenerator.js';
import MyGrammarLexer from './gen/MyGrammarLexer.js';
import MyGrammarParser from './gen/MyGrammarParser.js';
import fs from 'fs';

function main(args) {
    const [ inputFile, outputFile ] = args;
    
    if(fs.existsSync(outputFile)) {
        fs.rmSync(outputFile);
    }

    const input = fs.readFileSync(inputFile, { encoding: 'utf8' });
    const chars = new antlr4.InputStream(input);
    const lexer = new MyGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.programa();
    const generator = new PythonGenerator((content) => {
        fs.appendFileSync(outputFile, content);
    });
    tree.accept(generator)
}

const args = process.argv.slice(2);
main(args)


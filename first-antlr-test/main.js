import antlr4 from 'antlr4';
import PythonGenerator from './generator/PythonGenerator.js';
import MyGrammarLexer from './gen/MyGrammarLexer.js';
import MyGrammarParser from './gen/MyGrammarParser.js';
import fs from 'fs';
import sleep from 'sleep';

function main(args) {
    const [ inputFile, outputFile ] = args;

    let fsWait = false;

    console.log(`Watching ${inputFile}`);

    fs.watch(inputFile, (event, filename) => {
        if (filename) {
            if (fsWait) return;
            fsWait = true;
            fsWait = setTimeout(() => {
                fsWait = false;
            }, 500);
            console.log(`Generating new ${outputFile}`);
            sleep.msleep(100);
            generateCode(inputFile, outputFile);
           
        }
    });

}

function generateCode(inputFile, outputFile) {
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
    tree.accept(generator);
}

const args = process.argv.slice(2);
main(args)


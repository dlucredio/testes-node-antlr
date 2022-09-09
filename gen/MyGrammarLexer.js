// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,6,35,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,5,4,27,8,
4,10,4,12,4,30,9,4,1,5,1,5,1,5,1,5,0,0,6,1,1,3,2,5,3,7,4,9,5,11,6,1,0,3,
2,0,65,90,97,122,3,0,48,57,65,90,97,122,3,0,9,10,13,13,32,32,35,0,1,1,0,
0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,1,13,1,
0,0,0,3,18,1,0,0,0,5,20,1,0,0,0,7,22,1,0,0,0,9,24,1,0,0,0,11,31,1,0,0,0,
13,14,5,112,0,0,14,15,5,114,0,0,15,16,5,111,0,0,16,17,5,103,0,0,17,2,1,0,
0,0,18,19,5,91,0,0,19,4,1,0,0,0,20,21,5,93,0,0,21,6,1,0,0,0,22,23,5,61,0,
0,23,8,1,0,0,0,24,28,7,0,0,0,25,27,7,1,0,0,26,25,1,0,0,0,27,30,1,0,0,0,28,
26,1,0,0,0,28,29,1,0,0,0,29,10,1,0,0,0,30,28,1,0,0,0,31,32,7,2,0,0,32,33,
1,0,0,0,33,34,6,5,0,0,34,12,1,0,0,0,2,0,28,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MyGrammarLexer extends antlr4.Lexer {

    static grammarFileName = "MyGrammar.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'prog'", "'['", "']'", "'='" ];
	static symbolicNames = [ null, null, null, null, null, "ID", "WS" ];
	static ruleNames = [ "T__0", "T__1", "T__2", "T__3", "ID", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

MyGrammarLexer.EOF = antlr4.Token.EOF;
MyGrammarLexer.T__0 = 1;
MyGrammarLexer.T__1 = 2;
MyGrammarLexer.T__2 = 3;
MyGrammarLexer.T__3 = 4;
MyGrammarLexer.ID = 5;
MyGrammarLexer.WS = 6;




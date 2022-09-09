// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import MyGrammarListener from './MyGrammarListener.js';
import MyGrammarVisitor from './MyGrammarVisitor.js';

const serializedATN = [4,1,6,20,2,0,7,0,2,1,7,1,1,0,1,0,1,0,1,0,4,0,9,8,
0,11,0,12,0,10,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,2,0,2,0,0,18,0,4,1,0,
0,0,2,15,1,0,0,0,4,5,5,1,0,0,5,6,5,5,0,0,6,8,5,2,0,0,7,9,3,2,1,0,8,7,1,0,
0,0,9,10,1,0,0,0,10,8,1,0,0,0,10,11,1,0,0,0,11,12,1,0,0,0,12,13,5,3,0,0,
13,14,5,0,0,1,14,1,1,0,0,0,15,16,5,5,0,0,16,17,5,4,0,0,17,18,5,5,0,0,18,
3,1,0,0,0,1,10];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class MyGrammarParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'prog'", "'['", "']'", "'='" ];
    static symbolicNames = [ null, null, null, null, null, "ID", "WS" ];
    static ruleNames = [ "programa", "field" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MyGrammarParser.ruleNames;
        this.literalNames = MyGrammarParser.literalNames;
        this.symbolicNames = MyGrammarParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MyGrammarParser.RULE_programa);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 4;
	        this.match(MyGrammarParser.T__0);
	        this.state = 5;
	        this.match(MyGrammarParser.ID);
	        this.state = 6;
	        this.match(MyGrammarParser.T__1);
	        this.state = 8; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 7;
	            this.field();
	            this.state = 10; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	        this.state = 12;
	        this.match(MyGrammarParser.T__2);
	        this.state = 13;
	        this.match(MyGrammarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MyGrammarParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        localctx.nome = this.match(MyGrammarParser.ID);
	        this.state = 16;
	        this.match(MyGrammarParser.T__3);
	        this.state = 17;
	        localctx.tipo = this.match(MyGrammarParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MyGrammarParser.EOF = antlr4.Token.EOF;
MyGrammarParser.T__0 = 1;
MyGrammarParser.T__1 = 2;
MyGrammarParser.T__2 = 3;
MyGrammarParser.T__3 = 4;
MyGrammarParser.ID = 5;
MyGrammarParser.WS = 6;

MyGrammarParser.RULE_programa = 0;
MyGrammarParser.RULE_field = 1;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_programa;
    }

	ID() {
	    return this.getToken(MyGrammarParser.ID, 0);
	};

	EOF() {
	    return this.getToken(MyGrammarParser.EOF, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MyGrammarVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MyGrammarParser.RULE_field;
        this.nome = null; // Token
        this.tipo = null; // Token
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MyGrammarParser.ID);
	    } else {
	        return this.getToken(MyGrammarParser.ID, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MyGrammarListener ) {
	        listener.exitField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MyGrammarVisitor ) {
	        return visitor.visitField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MyGrammarParser.ProgramaContext = ProgramaContext; 
MyGrammarParser.FieldContext = FieldContext; 

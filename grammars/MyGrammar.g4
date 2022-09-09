grammar MyGrammar;

ID: [a-zA-Z][a-zA-Z0-9]*;
WS: (' '|'\t'|'\r'|'\n') -> skip;

programa: 'prog' ID '[' field+ ']' EOF;

field: nome=ID '=' tipo=ID;
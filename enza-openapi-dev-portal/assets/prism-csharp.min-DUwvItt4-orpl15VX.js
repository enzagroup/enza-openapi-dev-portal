import{f as J}from"./entry.client-CdX3K8v7.js";function K(n,s){for(var e=0;e<s.length;e++){const a=s[e];if(typeof a!="string"&&!Array.isArray(a)){for(const o in a)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(a,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>a[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var N={},D;function Q(){return D||(D=1,function(n){function s(t,p){return t.replace(/<<(\d+)>>/g,function(m,I){return"(?:"+p[+I]+")"})}function e(t,p,m){return RegExp(s(t,p),"")}function a(t,p){for(var m=0;m<p;m++)t=t.replace(/<<self>>/g,function(){return"(?:"+t+")"});return t.replace(/<<self>>/g,"[^\\s\\S]")}var o="bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void",l="class enum interface record struct",v="add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)",y="abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield";function u(t){return"\\b(?:"+t.trim().replace(/ /g,"|")+")\\b"}var x=u(l),g=RegExp(u(o+" "+l+" "+v+" "+y)),M=u(l+" "+v+" "+y),T=u(o+" "+l+" "+y),b=a("<(?:[^<>;=+\\-*/%&|^]|<<self>>)*>",2),f=a("\\((?:[^()]|<<self>>)*\\)",2),i="@?\\b[A-Za-z_]\\w*\\b",h=s("<<0>>(?:\\s*<<1>>)?",[i,b]),d=s("(?!<<0>>)<<1>>(?:\\s*\\.\\s*<<1>>)*",[M,h]),k="\\[\\s*(?:,\\s*)*\\]",U=s("<<0>>(?:\\s*(?:\\?\\s*)?<<1>>)*(?:\\s*\\?)?",[d,k]),Z=s("[^,()<>[\\];=+\\-*/%&|^]|<<0>>|<<1>>|<<2>>",[b,f,k]),q=s("\\(<<0>>+(?:,<<0>>+)+\\)",[Z]),c=s("(?:<<0>>|<<1>>)(?:\\s*(?:\\?\\s*)?<<2>>)*(?:\\s*\\?)?",[q,d,k]),r={keyword:g,punctuation:/[<>()?,.:[\]]/},_=`'(?:[^\r
'\\\\]|\\\\.|\\\\[Uux][\\da-fA-F]{1,8})'`,$=`"(?:\\\\.|[^\\\\"\r
])*"`;n.languages.csharp=n.languages.extend("clike",{string:[{pattern:e("(^|[^$\\\\])<<0>>",['@"(?:""|\\\\[^]|[^\\\\"])*"(?!")']),lookbehind:!0,greedy:!0},{pattern:e("(^|[^@$\\\\])<<0>>",[$]),lookbehind:!0,greedy:!0}],"class-name":[{pattern:e("(\\busing\\s+static\\s+)<<0>>(?=\\s*;)",[d]),lookbehind:!0,inside:r},{pattern:e("(\\busing\\s+<<0>>\\s*=\\s*)<<1>>(?=\\s*;)",[i,c]),lookbehind:!0,inside:r},{pattern:e("(\\busing\\s+)<<0>>(?=\\s*=)",[i]),lookbehind:!0},{pattern:e("(\\b<<0>>\\s+)<<1>>",[x,h]),lookbehind:!0,inside:r},{pattern:e("(\\bcatch\\s*\\(\\s*)<<0>>",[d]),lookbehind:!0,inside:r},{pattern:e("(\\bwhere\\s+)<<0>>",[i]),lookbehind:!0},{pattern:e("(\\b(?:is(?:\\s+not)?|as)\\s+)<<0>>",[U]),lookbehind:!0,inside:r},{pattern:e("\\b<<0>>(?=\\s+(?!<<1>>|with\\s*\\{)<<2>>(?:\\s*[=,;:{)\\]]|\\s+(?:in|when)\\b))",[c,T,i]),inside:r}],keyword:g,number:/(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,operator:/>>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,punctuation:/\?\.?|::|[{}[\];(),.:]/}),n.languages.insertBefore("csharp","number",{range:{pattern:/\.\./,alias:"operator"}}),n.languages.insertBefore("csharp","punctuation",{"named-parameter":{pattern:e("([(,]\\s*)<<0>>(?=\\s*:)",[i]),lookbehind:!0,alias:"punctuation"}}),n.languages.insertBefore("csharp","class-name",{namespace:{pattern:e("(\\b(?:namespace|using)\\s+)<<0>>(?:\\s*\\.\\s*<<0>>)*(?=\\s*[;{])",[i]),lookbehind:!0,inside:{punctuation:/\./}},"type-expression":{pattern:e("(\\b(?:default|sizeof|typeof)\\s*\\(\\s*(?!\\s))(?:[^()\\s]|\\s(?!\\s)|<<0>>)*(?=\\s*\\))",[f]),lookbehind:!0,alias:"class-name",inside:r},"return-type":{pattern:e("<<0>>(?=\\s+(?:<<1>>\\s*(?:=>|[({]|\\.\\s*this\\s*\\[)|this\\s*\\[))",[c,d]),inside:r,alias:"class-name"},"constructor-invocation":{pattern:e("(\\bnew\\s+)<<0>>(?=\\s*[[({])",[c]),lookbehind:!0,inside:r,alias:"class-name"},"generic-method":{pattern:e("<<0>>\\s*<<1>>(?=\\s*\\()",[i,b]),inside:{function:e("^<<0>>",[i]),generic:{pattern:RegExp(b),alias:"class-name",inside:r}}},"type-list":{pattern:e("\\b((?:<<0>>\\s+<<1>>|record\\s+<<1>>\\s*<<5>>|where\\s+<<2>>)\\s*:\\s*)(?:<<3>>|<<4>>|<<1>>\\s*<<5>>|<<6>>)(?:\\s*,\\s*(?:<<3>>|<<4>>|<<6>>))*(?=\\s*(?:where|[{;]|=>|$))",[x,h,i,c,g.source,f,"\\bnew\\s*\\(\\s*\\)"]),lookbehind:!0,inside:{"record-arguments":{pattern:e("(^(?!new\\s*\\()<<0>>\\s*)<<1>>",[h,f]),lookbehind:!0,greedy:!0,inside:n.languages.csharp},keyword:g,"class-name":{pattern:RegExp(c),greedy:!0,inside:r},punctuation:/[,()]/}},preprocessor:{pattern:/(^[\t ]*)#.*/m,lookbehind:!0,alias:"property",inside:{directive:{pattern:/(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,lookbehind:!0,alias:"keyword"}}}});var j=$+"|"+_,B=s(`/(?![*/])|//[^\r
]*[\r
]|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>`,[j]),E=a(s(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[B]),2),R="\\b(?:assembly|event|field|method|module|param|property|return|type)\\b",C=s("<<0>>(?:\\s*\\(<<1>>*\\))?",[d,E]);n.languages.insertBefore("csharp","class-name",{attribute:{pattern:e("((?:^|[^\\s\\w>)?])\\s*\\[\\s*)(?:<<0>>\\s*:\\s*)?<<1>>(?:\\s*,\\s*<<1>>)*(?=\\s*\\])",[R,C]),lookbehind:!0,greedy:!0,inside:{target:{pattern:e("^<<0>>(?=\\s*:)",[R]),alias:"keyword"},"attribute-arguments":{pattern:e("\\(<<0>>*\\)",[E]),inside:n.languages.csharp},"class-name":{pattern:RegExp(d),inside:{punctuation:/\./}},punctuation:/[:,]/}}});var w=`:[^}\r
]+`,O=a(s(`[^"'/()]|<<0>>|\\(<<self>>*\\)`,[B]),2),S=s("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[O,w]),z=a(s(`[^"'/()]|/(?!\\*)|/\\*(?:[^*]|\\*(?!/))*\\*/|<<0>>|\\(<<self>>*\\)`,[j]),2),A=s("\\{(?!\\{)(?:(?![}:])<<0>>)*<<1>>?\\}",[z,w]);function P(t,p){return{interpolation:{pattern:e("((?:^|[^{])(?:\\{\\{)*)<<0>>",[t]),lookbehind:!0,inside:{"format-string":{pattern:e("(^\\{(?:(?![}:])<<0>>)*)<<1>>(?=\\}$)",[p,w]),lookbehind:!0,inside:{punctuation:/^:/}},punctuation:/^\{|\}$/,expression:{pattern:/[\s\S]+/,alias:"language-csharp",inside:n.languages.csharp}}},string:/[\s\S]+/}}n.languages.insertBefore("csharp","string",{"interpolation-string":[{pattern:e('(^|[^\\\\])(?:\\$@|@\\$)"(?:""|\\\\[^]|\\{\\{|<<0>>|[^\\\\{"])*"',[S]),lookbehind:!0,greedy:!0,inside:P(S,O)},{pattern:e('(^|[^@\\\\])\\$"(?:\\\\.|\\{\\{|<<0>>|[^\\\\"{])*"',[A]),lookbehind:!0,greedy:!0,inside:P(A,z)}],char:{pattern:RegExp(_),greedy:!0}}),n.languages.dotnet=n.languages.cs=n.languages.csharp}(Prism)),N}var F=Q();const G=J(F),L=K({__proto__:null,default:G},[F]);export{L as p};
//# sourceMappingURL=prism-csharp.min-DUwvItt4-orpl15VX.js.map

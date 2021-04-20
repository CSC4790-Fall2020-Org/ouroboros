$("head").prepend("<style nonce> mark{ background: yellow; color: black; }</style>");
var keywords= ["data"," privacy", "private", "user", "personal"];
var regExp = /(?<=(\n|)).*?([dD][a][t][a]|[pP][e][r][s][o][n]|[pP][r][i][v]).*?([.]|$)/;
$("html").markRegExp(regExp, acrossElements=true);
$("span").markRegExp(regExp, acrossElements=true); // TODO make facebook work

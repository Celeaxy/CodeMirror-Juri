// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
const spec_Identifier = {__proto__:null,if:8, repeat:20, then:22, iterate:24, as:26, return:28, break:30, fun:34, operator:38, to:48, init:52}
export const parser = LRParser.deserialize({
  version: 13,
  states: ")YQYQPOOOwQPO'#DPO!YQPO'#C}OOQO'#DP'#DPO!eQPO'#CqOOQO'#DW'#DWO!`QPO'#C}OOQO'#Cw'#CwQYQPOOO!jQPO'#DOO!jQPO'#DTO!rQPO'#ClO!wQQO'#CnO!jQPO'#C}O!|QPO,59lO!jQPO,59pO!jQPO,59OOOQO,59i,59iO#UQPO,59]OOQO-E6u-E6uO#^QPO'#DPO#uQPO,59jO$TQPO,59oO$`QPO,59WO$jQPO,59YO$tQPO,59iOOQO'#Cx'#CxO%PQPO1G/WOOQO1G/W1G/WO%XQPO1G/[O%dQPO1G.jO%xQPO'#DXOOQO1G.w1G.wO&QQPO'#DYO&VQPO1G/UOYQPO1G/UO&^QPO1G/ZO&cQPO1G.rO&fQPO1G.rO&mQPO1G.tO&pQPO1G.tOOQO1G/T1G/TOOQO-E6v-E6vOOQO7+$r7+$rO&wQPO,59sO'SQPO,59sOOQO,59s,59sO'[QPO,59tO'dQPO7+$pOOQO7+$p7+$pO'kQPO7+$uO'rQPO7+$^O'yQPO7+$`O(QQPO1G/_OOQO'#Cy'#CyOOQO-E6w-E6wOOQO1G/_1G/_OOQO1G/`1G/`O(VQPO1G/`O([QPO<<HaO(cQPO7+$yOOQO7+$z7+$zOOQO<<He<<He",
  stateData: "(h~OpOSPOS~ORPOSXOXRO[YO^]O_UOaZOc[OfSO~OT^Oy_OusXvsX}sX~Ou`Ov`O}aO~OybO~ORdOXRO~ORgO~OdhO~OUjOVlO~OgoOjqO~OT^OYsXZsXusXvsX]sX}sX~OYrOZsOu`Ov`O~O]tOu`Ov`O~OUjO}`a~PYOUjO}ba~PYOu`Ov`O}yO~OUjOV{O~Ou`Ov`O}xi~Ou`Ov`O}WiYWiZWi]Wi~OX|Oi!OO~OX!PO~O}ri~PYOR!SO~OUjO}`i~PYOUjO}bi~PYOh!VOXmXimX~OX!WOi!YO~OX!ZO]![O~O}rq~PYO}wq~PYO}`q~PYO}bq~PYOX!^O~OR!_O~O}wy~PYOi!`O~O",
  goto: "%f}PPPPPPPP!OPPPPPPP!fP!fPP!fPPPPP!w#g#uPPP#{$`$q!OPP$`$`P$`%c%cyROWXY]_`ghrsuvwx!Q!S!T!U!]oTOWghrsuvwx!Q!S!T!U!]QWO^cWvx!Q!T!U!]QvgQxhQ!QrQ!TuQ!UwR!]!SQk^QugQwhVzkuwQ}oR!X}lVOWghruvwx!Q!S!T!U!]R!RsoUOWghrsuvwx!Q!S!T!U!]nQOWghrsuvwx!Q!S!T!U!]QeXQfYQi]Qm_Rn`Rpb",
  nodeNames: "⚠ LineComment Program Identifier if ( Parameter ) BinaryExpression Number repeat then iterate as return break FunctionDeclaration fun OperatorDeclaration operator Operator ListDeclaration ListIdentifier [ to ] init",
  maxTerm: 45,
  skippedNodes: [0,1],
  repeatNodeCount: 3,
  tokenData: "(h~RiXY!pYZ#[[]!p]^#[pq!pst#atu#oxy$Yyz$_z{$d{|$d}!O$d!P!Q$d!Q![%l![!]&V!^!_'S!_!`'p!`!a'S!c!}#o!}#O(^#O#P#R#P#Q(c#R#S#o#T#o#o$g~#o~!uSp~XY!p[]!ppq!p#O#P#R~#UQYZ!p]^!p~#aO}~~#fRP~OY#aZ]#a^~#a~#vUR~U~tu#o!Q![#o!c!}#o#R#S#o#T#o#o$g~#o~$_OT~~$dOV~R$kVdQuPz{%Q{|%Q}!O%Q!P!Q%Q!^!_%Q!_!`%Q!`!a%QQ%VVdQz{%Q{|%Q}!O%Q!P!Q%Q!^!_%Q!_!`%Q!`!a%Q~%qQX~!O!P%w!Q![%l~%zP!Q![%}~&SPX~!Q![%}~&YTtu&i!c!}&i#R#S&i#T#o&i$g~&i~&pUf~R~tu&i!Q![&i!c!}&i#R#S&i#T#o&i$g~&iR'ZVdQvPz{%Q{|%Q}!O%Q!P!Q%Q!^!_%Q!_!`%Q!`!a%QR'wVdQyPz{%Q{|%Q}!O%Q!P!Q%Q!^!_%Q!_!`%Q!`!a%Q~(cOg~~(hOi~",
  tokenizers: [0, 1],
  topRules: {"Program":[0,2]},
  specialized: [{term: 3, get: value => spec_Identifier[value] || -1}],
  tokenPrec: 0
})

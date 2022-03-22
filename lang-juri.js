import { parser } from "juri";
import { LRLanguage } from "@codemirror/language";
import { styleTags, tags as t } from "@codemirror/highlight";
import { LanguageSupport } from "@codemirror/language"
import { completeFromList } from "@codemirror/autocomplete"

let parserWithMetadata = parser.configure({
    props: [
        styleTags({
            Identifier: t.identifier,
            Parameter: t.parameter,
            LineComment: t.lineComment,
            Number: t.number,
            "( ) [ ]": t.paren
        }),
        indentNodeProp.add({
            Application: context => context.column(context.node.from) + context.unit
        }),
        foldNodeProp.add({
            Application: foldInside
        })
    ]
})


const autocompletion = exampleLanguage.data.of({
    autocomplete: completeFromList([
        { label: "fun", type: "keyword" },
        { label: "repeat", type: "keyword" },
        { label: "print", type: "function" },
        { label: "input", type: "function" }
    ])
})

const juriLang = LRLanguage.define({
    parser: parserWithMetadata,
    languageData: {
        commentTokens: { line: "#" }
    }
})



export function juri() {
    return new LanguageSupport(juriLang, [autocompletion])
}
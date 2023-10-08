
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import typescript from "refractor/lang/typescript";
import tsx from "refractor/lang/tsx";

Refractor.registerLanguage(js);
Refractor.registerLanguage(typescript);
Refractor.registerLanguage(tsx);


interface CodeInputProps {
    code: string;
    language: string;
}


export const RichTextComponents = {
    types: {
        myCodeField: ({ value }: any) => {
            return (
                <Refractor language={value.language} value={value.code} />
            );
        },
    },
}

export const CodeInput: React.FC<CodeInputProps> = (props) => {
    const { code, language } = props;
    return (
        <Refractor language={language} value={code} />
    );
};
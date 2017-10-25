export default function (node: (SVGGraphicsElement & SVGPathElement) | HTMLElement): {
    get: (unmappedKey: string) => any;
    set: (values: string | {
        [key: string]: string | number;
    }, value?: any) => any;
    render: (forceRender?: boolean) => any;
};
export declare const createStyler: ({onRead, onRender, aliasMap, useCache}: {
    onRead: (key: string, props: {
        [key: string]: any;
    }) => any;
    onRender: (state: {
        [key: string]: string | number;
    }, props: {
        [key: string]: any;
    }, changedValues: string[]) => void;
    aliasMap?: {
        [key: string]: string;
    };
    useCache?: boolean;
}) => (props?: {
    [key: string]: any;
}) => {
    get: (unmappedKey: string) => any;
    set: (values: string | {
        [key: string]: string | number;
    }, value?: any) => any;
    render: (forceRender?: boolean) => any;
};

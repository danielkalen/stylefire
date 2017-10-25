export declare type State = {
    [key: string]: string | number;
};
export declare type Props = {
    [key: string]: any;
};
export declare type ChangedValues = string[];
export declare type Config = {
    onRead: (key: string, props: Props) => any;
    onRender: (state: State, props: Props, changedValues: ChangedValues) => void;
    aliasMap?: {
        [key: string]: string;
    };
    useCache?: boolean;
};

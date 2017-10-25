import { State, Props, Config } from './types';
declare const createStyler: ({onRead, onRender, aliasMap, useCache}: Config) => (props?: Props) => {
    get: (unmappedKey: string) => any;
    set: (values: string | State, value?: any) => any;
    render: (forceRender?: boolean) => any;
};
export default createStyler;

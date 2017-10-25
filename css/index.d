declare const _default: (element: HTMLElement, props?: {
    enableHardwareAcceleration?: boolean;
}) => {
    get: (unmappedKey: string) => any;
    set: (values: string | {
        [key: string]: string | number;
    }, value?: any) => any;
    render: (forceRender?: boolean) => any;
};
export default _default;

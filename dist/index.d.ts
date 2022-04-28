export interface Model {
    namespace: string;
    state: {
        [key: string]: any;
    };
    effects: any;
}
export interface UpdateProps {
    name: string;
    payload: {
        [key: string]: any;
    };
}
export interface dispatchProps {
    type: string;
    payload?: {
        [key: string]: any;
    } | string | number;
}
export interface StoreIns {
    init: (models: Model[]) => void;
    getState: (name?: string) => ({
        [key: string]: any;
    });
    update: (val: UpdateProps) => void;
    dispatch: (val: dispatchProps) => void;
    [key: string]: any;
}
declare class Store implements StoreIns {
    private state;
    init(models: Model[]): void;
    getState: (name: string | undefined) => any;
    update: (props: UpdateProps) => void;
    dispatch: ({ type, payload }: dispatchProps) => void;
    constructor();
}
export default Store;

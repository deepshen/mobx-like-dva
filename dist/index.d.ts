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
    state: {
        [key: string]: any;
    };
    init: (models: Model[]) => void;
    getState: () => ({
        [key: string]: any;
    });
    update: (val: UpdateProps) => void;
    dispatch: (val: dispatchProps) => void;
    [key: string]: any;
}
declare class Store implements StoreIns {
    state: any;
    init(models: Model[]): void;
    getState: () => any;
    update: (props: UpdateProps) => void;
    dispatch: ({ type, payload }: dispatchProps) => void;
    constructor();
}
export default Store;

import { makeAutoObservable } from 'mobx';
class Store {
    state = {};
    init(models) {
        let _this = this;
        models.map((item) => {
            const { namespace, state = {}, effects = [] } = item;
            _this.state[namespace] = state;
            Object.keys(effects).map(i => {
                _this[`${namespace}/${i}`] = (val) => effects[i](val, { update: _this.update, get: _this.getState, dispatch: _this.dispatch });
                return i;
            });
            return item;
        });
    }
    getState = () => {
        return this.state;
    };
    update = (props) => {
        const { name, payload = {} } = props || {};
        this.state[name] = {
            ...this.state[name],
            ...payload
        };
    };
    dispatch = ({ type, payload }) => {
        const _this = this;
        _this[type](payload);
    };
    constructor() {
        makeAutoObservable(this);
    }
}
export const store = new Store();

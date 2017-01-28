const isPromise = v => v && typeof v.then === 'function';

const promiseMiddleware = store => next => action => {
    if (isPromise(action.payload)) {
        store.dispatch('ASYNC_BEGIN', {subtype: action.type});
        //noinspection JSUnresolvedFunction resolved by isPromise
        action.payload.then(
            res => {
                action.payload = res;
                store.dispatch(action);
            },
            error => {
                action.error = true;
                action.payload = error.response.body;
                store.dispatch(action);
            }
        );
    } else {
        next(action)
    }
};


export default promiseMiddleware;
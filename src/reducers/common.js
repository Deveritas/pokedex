const defaultState = { test: "Hello World" };

export default function Common (state = defaultState, action) {
    switch (action.type) {
        case 'REDIRECT':
            return {
                ...state,
                redirectTo: null
            };
        default:
            return state;
    }
}
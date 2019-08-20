import { AppState } from './app.state';
import { AppActionTypes, AppActions } from './app.actions';

const intitalState: AppState = {
    appReducer: {
        connected: false,
        data: '<p>test</p>'
    }
};

export function appReducer(state: AppState = intitalState, action: AppActions) {
    switch (action.type) {
        case AppActionTypes.ConnectToServer: {
            return {
                ...state,
            };
        }
        case AppActionTypes.ConnectToServerSuccess: {
            return {
                ...state,
                connected: action.payload,
            };
        }
        case AppActionTypes.UpdateWindow: {
            return {
                ...state,
                data: state.appReducer.data += action.payload,
            };
        }
        case AppActionTypes.sendToServer: {
            return {
                ...state,

            };
        }
        default:
            return state;
    }
}

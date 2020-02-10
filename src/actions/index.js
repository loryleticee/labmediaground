import axios from "axios";
import {ws} from "../services/websocket";

const URL = "https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages";

export const ADD_MESSAGE            = "ADD_MESSAGE";
export const LOAD_MESSAGE_PENDING   = "LOAD_MESSAGE_PENDING";
export const LOAD_MESSAGE_SUCCESS   = "LOAD_MESSAGE_SUCCESS";
export const LOAD_MESSAGE_ERROR     = "LOAD_MESSAGE_ERROR";

export const LOG_USER               = "LOG_USER";

export const logUser = (username) => ({
    type    : LOG_USER,
    username,
});

export const addMessage = (message) => {
    const action = {
        type        : ADD_MESSAGE,
        username    : message.username,
        message     : message.message,
        sentAt      : new Date(),
    };
    ws.send(JSON.stringify(action));

    return action;
};

export const getMessages = () => {
    return (dispatch) => {
        dispatch({type: LOAD_MESSAGE_PENDING});
        return axios.get(URL)
            .then(json => {
                dispatch({type: LOAD_MESSAGE_SUCCESS, messages: json.data})
            })
            .catch(err => {
                dispatch({type: LOAD_MESSAGE_ERROR, error: err})})
    }
};
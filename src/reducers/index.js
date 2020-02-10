import {combineReducers} from "redux";
import {messageList} from "./Chat";
import {userName} from "./Log";

export const adminReducer  = combineReducers({
    messageList : messageList,
    username    : userName,
});
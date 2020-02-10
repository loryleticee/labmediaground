import {ADD_MESSAGE, LOAD_MESSAGE_PENDING, LOAD_MESSAGE_ERROR, LOAD_MESSAGE_SUCCESS} from "../actions"

const INIT_STATE = [
    {
        username: "toto",
        message: "hello word",
        sentAt  : new Date()
    }
];

export const messageList = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let newState = {
                username: action.username,
                message : action.message,
                sentAt  : action.sentAt,
            };

            return state.concat(newState);

        case LOAD_MESSAGE_PENDING:
            return state;

        case LOAD_MESSAGE_SUCCESS:
            const newData = (msg, index) =>(
                state.concat(msg)
            );
            action.messages.forEach(newData);

            return  state;

        case LOAD_MESSAGE_ERROR:
            return [...state, {
                message : action.error,
                username: "system",
                sentAt  : new Date(),
            }];

        default :
            return state;
    }
};
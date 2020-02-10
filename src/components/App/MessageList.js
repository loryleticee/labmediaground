import React, {useEffect} from "react";
import MessageItem from "./MessageItem";
import ShowMessage from "../../containers/ShowMessage";
import {useSelector} from "react-redux";
import {getMessages} from "../../actions";
import {useDispatch} from "react-redux";

const MessageList = () => {

const dispatch = useDispatch();
const messages = useSelector(state => state.messageList);

    useEffect(() => {
        dispatch(getMessages())
    }, [dispatch]);

    return (
        <ShowMessage
            message = { messages.map( (message, index) =>
                    <MessageItem key= {index} message= {message} />
                )
            }
        />
    );
};

export default MessageList;
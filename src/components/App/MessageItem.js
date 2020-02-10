import React from "react";
import Emoji from "react-emoji-render";
import PropTypes from "prop-types";

const MessageItem = (props) => {
    const date = (date) => {
        if (date instanceof Date  ) {
            return date.toDateString();
        } else {
            return date;
        }
    };

    return (
        <div>
            <span>
                <small>{date(props.message.sentAt)} </small>
                <small> {`@ ${props.message.username}`} </small>
                <Emoji text = {`¬ ${props.message.message}`} />
            </span>
        </div>
    );
};

MessageItem.propTypes = {
    message: PropTypes.object.isRequired
};
export default MessageItem;
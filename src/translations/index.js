import {messages_en} from "./en";
import {messages_fr} from "./fr";

const FR = "fr-FR";
const US = "en-US";

export const translate = (props) => {
    switch (props) {
        case FR :
            return messages_fr();

        case US :
            return messages_en();

        default :
            return messages_fr();
    }
};
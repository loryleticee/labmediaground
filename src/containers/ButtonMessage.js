import React from "react";
import styled from "styled-components";
const className = "alert-info";

//${propos => props.color}
const DivMsg  = styled.div`
    color   : pink;
    margin  : 10px;
`;

const ShowMessage = (props) => {
    return (
        <DivMsg className = {className}> {props.message} </DivMsg>
    )
};

export default ShowMessage;


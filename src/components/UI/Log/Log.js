import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import {logUser} from "../../../actions";
import './log.scss';

const Div  = styled.div`
`;

const Log = (props) => {

    return (
        <Div className={ "sound" }>
            <div> dcdcsdcscsdcsdcdscdscdscs </div>
        </Div>
    );
};

export default Log;
import React from "react";
import store from "store"
import Topic from "./Topic";
import styled from "styled-components";
import {producerTopicData } from "../data/topicData"

const PurpleDiv = styled.div`
    border: solid 4px rgb(128, 17, 128);
    padding: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`

function Producers() {

    return (
        <>
          
            <PurpleDiv>
            <h2>PRODUCERS</h2>
            {
                producerTopicData.map((topic) => {
                    return (
                        <>
                        <Topic isProducer = {true} topicData = {topic}/>
                        </>
                    )
                })
            }
            </PurpleDiv>
        </>
    )
}

export default Producers
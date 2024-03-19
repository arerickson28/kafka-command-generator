import React from "react";
import store from "store"
import Topic from "./Topic";
import styled from "styled-components";

const PurpleDiv = styled.div`
    border: solid 4px rgb(128, 17, 128);
    padding: 5px;
    margin: 10px;
    width: 500px;
`

function Producers({producerData, sslLocInfo}) {

    return (
        <>
            <PurpleDiv>
            <h2>PRODUCERS</h2>
            <hr></hr>
            {
                producerData.map((topic) => {
                    return (
                        <>
                        <Topic isProducer = {true} topicData = {topic} sslLocInfo={sslLocInfo}/>
                        </>
                    )
                })
            }
            </PurpleDiv>
        </>
    )
}

export default Producers
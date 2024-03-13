import React from "react";
import Topic from "./Topic";
import styled from "styled-components"
import { consumerTopicData } from "../data/topicData";


const OrangeBox = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
`

function Consumers() {
    return (
        <>  
            <OrangeBox>
            <h2>CONSUMERS</h2>
            <hr></hr>
            {
                consumerTopicData.map((topic) => {
                    return (
                        <>
                        <Topic isProducer = {false} topicData={topic}/>
                        </>
                    )
                })
            }
            </OrangeBox>
        </>
    )
}

export default Consumers
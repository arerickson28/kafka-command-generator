import React from "react";
import Topic from "./Topic";
import styled from "styled-components"


const OrangeBox = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    width: 500px;
`

function Consumers({consumerData, sslLocInfo}) {
    return (
        <>  
            <OrangeBox>
            <h2>CONSUMERS</h2>
            <hr></hr>
            {
                consumerData.map((topic) => {
                    return (
                        <>
                        <Topic isProducer = {false} topicData={topic} sslLocInfo={sslLocInfo}/>
                        </>
                    )
                })
            }
            </OrangeBox>
        </>
    )
}

export default Consumers
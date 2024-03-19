import {React, useState } from "react"
import store from "store"
import styled from "styled-components"
import Generate from "./Generate"
// import { OrangeBox } from "./StyledComponents"


const PurpleHoverDiv = styled.div`
    border: solid 4px rgb(128, 17, 128);
    padding: 5px;
    margin: 10px;
    &:hover {
        box-shadow: inset 0px 0px 8px 
        purple, 0 0 15px purple ;
    }
`

const OrangeHoverDiv = styled.div`
    border: solid 4px rgb(255, 123, 0);
    padding: 5px;
    margin: 10px;
    &:hover {
        box-shadow: inset 0px 0px 8px 
        purple, 0 0 15px orange ;
    }
`



function Topic({isProducer, topicData, sslLocInfo}) {


    const [isDisplayedState, setIsDisplayedState] = useState(false)
    const [brokerSelectionState, setBrokerSelectionState] = useState("<selectBroker>")

    let producerOrConsumer;
    if (isProducer) {
        producerOrConsumer = "P"
    } else {
        producerOrConsumer = "C"
    }

    const sslString = `-X security.protocol=ssl -X ssl.certificate.location=${sslLocInfo.ssl_certificate_location} -X ssl.key.location=${sslLocInfo.ssl_key_location} -X ssl.ca.location=${sslLocInfo.ssl_ca_location}`
    const kafkaCmd = `kcat -${producerOrConsumer} ${sslString} -b ${brokerSelectionState} -t ${topicData.topicName}`

    return (
        <>

        {isProducer ?
        
            <PurpleHoverDiv>
                <h2 onClick = {() => {setIsDisplayedState(true)}}>{topicData.topicName}</h2>
                {
                    isDisplayedState ?
                    <>
                    {/* <h3>StageServer: {topicData.stageServer}</h3>
                    <h3>ProdServert: {topicData.prodServer}</h3> */}
                    <div>
                    <input value = {topicData.prodServer} name="server" type="radio" onInput={(e) => setBrokerSelectionState(e.target.value)}/>
                    <label>Prod</label>
                    <input value = {topicData.stageServer} name="server" type="radio" onInput={(e) => setBrokerSelectionState(e.target.value)} />
                    <label>Stage</label>
                    </div>
                   
                    {/* <textarea></textarea> */}
                    <hr></hr>
                    <h3>{kafkaCmd}</h3>
                    <br></br>
                    {/* <button>Save For Later</button> */}
                    <button onClick = {() => {setIsDisplayedState(!isDisplayedState)} }>Collapse</button>
                    </>
                    
                    : <></> 
                 
                 }    
            </PurpleHoverDiv>
        :

            <OrangeHoverDiv>
                <h2 onClick = {() => {setIsDisplayedState(true)}}>{topicData.topicName}</h2>
                {
                    isDisplayedState ?
                    <>
                    {/* <h3>StageServer: {topicData.stageServer}</h3>
                    <h3>ProdServert: {topicData.prodServer}</h3> */}

                    <input value = {topicData.prodServer} name="server" type="radio" onInput={(e) => setBrokerSelectionState(e.target.value)}/>
                    <label>Prod</label>
                    <input value = {topicData.stageServer} name="server" type="radio" onInput={(e) => setBrokerSelectionState(e.target.value)}/>
                    <label>Stage</label>
                    {/* <textarea></textarea> */}
                    <hr></hr>
                    <h3>{kafkaCmd}</h3>
                    <br></br>
                    {/* <button>Save For Later</button> */}
                    <button onClick = {() => {setIsDisplayedState(false)}}>Collapse</button>
                    </>
                
                    : <></> 
                 }
            </OrangeHoverDiv>
        }
    
        </>
    )



    // if (isProducer) {
    //     return (
    //         <>
    //              <PurpleHoverDiv onClick = {() => {setIsDisplayedState(true)}}>
    //         <h2>{topicData.topicName}</h2>
            
    //         {isDisplayedState ? <Generate /> : <></> }
                   
    //         </PurpleHoverDiv>
    //         </>
    //     )
    // } else {
    //     return (
    //         <>
    //             <OrangeHoverDiv onClick = {() => {setIsDisplayedState(true)}}>
    //             <h2>{topicData.topicName}</h2>
    //             {isDisplayedState ? <Generate /> : <></> }
    //             </OrangeHoverDiv>
               
                 
              
    //         </>
    //     )
    // }

}

export default Topic

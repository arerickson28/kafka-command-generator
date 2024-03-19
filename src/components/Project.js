import React from "react";
import styled from 'styled-components';
import Producers from "./Producers";
import Consumers from "./Consumers";


const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

function Project({projectData, sslLocInfo}) {
    return (
        <>
        <h1>{projectData.name}</h1>
        <hr></hr>
        <BodyDiv>
             <Producers producerData={projectData.producers} sslLocInfo = {sslLocInfo}/>
             <Consumers consumerData={projectData.consumers} sslLocInfo = {sslLocInfo}/>
        </BodyDiv>
        </>
    )
}

export default Project
import React from "react";
import styled from 'styled-components';
import Producers from "./Producers";
import Consumers from "./Consumers";


const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

function Project({projectData}) {
    return (
        <>
        <h1>{projectData.name}</h1>
        <hr></hr>
        <BodyDiv>
             <Producers producerData={projectData.producers}/>
             <Consumers consumerData={projectData.consumers}/>
        </BodyDiv>
        </>
    )
}

export default Project
import {React, useState} from "react";
import store from "store"
import styled from "styled-components";

const TealBox = styled.div`
    border: solid 4px rgb(0,128,128);
    padding: 5px;
    margin: 10px;
    // display: flex;
    // justify-content: center;
`

const PartsDiv = styled.div`
    display: flex;
    justify-content: space-around;
`


function SslLoc() {

    const [isDisplayedState, setIsDisplayedState] = useState(false)

   const [locInfoState, setLocInfoState] = useState({
        "part1": "hey",
        "part2": "hi",
        "part3": "sup"
    })


    return (
        <>
        <TealBox>
        <h3>Your SSL Location</h3>
        <PartsDiv>
        <h3>Part1: {locInfoState.part1}</h3>
        <h3>Part2: {locInfoState.part2}</h3>
        <h3>Part3: {locInfoState.part3}</h3>
        </PartsDiv>
    
        <button onClick = {() => {setIsDisplayedState(true)}}>Update</button>
        {
                    isDisplayedState ?
                    <>
        
                    <div>
                    <label>Part1: </label>
                    <input type="text" />
                    <label>Part2: </label>
                    <input type="text" />
                    <label>Part3: </label>
                    <input type="text" />
                
                    </div>
                   
    
                    <button onClick = {() => {setIsDisplayedState(!isDisplayedState)} }>Save to local storage</button>
                    <button onClick = {() => {setIsDisplayedState(!isDisplayedState)} }>Cancel</button>
                    </>
                    
                    : <></> 
                 
                 }  
        </TealBox>
     
        </>
    )
}

export default SslLoc
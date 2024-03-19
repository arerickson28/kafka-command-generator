import './App.css';
import Producers from "./components/Producers"
import Consumers from './components/Consumers';
import Project from './components/Project';
import SslLoc from './components/SslLoc';
import styled from 'styled-components';
import { topicData } from "./data/topicData"
import store from "store"
import {React, useState} from 'react';

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

const MyButton = styled.button`
    margin: 15px;
`

function App() {

  const sslLoc = {
    "ssl_certificate_location": "<changeMe>",
    "ssl_key_location": "<changeMe>",
    "ssl_ca_location": "<changeMe>"
  }

  const sslLoc1 = {
    "stage":{
      "ssl_certificate_location": "<changeMe>",
      "ssl_key_location": "<changeMe>",
      "ssl_ca_location": "<changeMe>"
    },
    "prod": {
      "ssl_certificate_location": "<changeMe>",
      "ssl_key_location": "<changeMe>",
      "ssl_ca_location": "<changeMe>"
    }
  }
  
  function setLocalStorageIfNull(obj) {
      if (store.get("sslLoc") == null) {
        store.set("sslLoc", obj)
      }
  }
  
  setLocalStorageIfNull(sslLoc1)

  const [isDisplayedState, setIsDisplayedState] = useState(false)
  const [showUpdateBtnState, setShowUpdateBtnState] = useState(true)

//    const [locInfoState, setLocInfoState] = useState({
//         "ssl_certificate_location": "<changeMe>",
//         "ssl_key_location": "<changeMe>",
//         "ssl_ca_location": "<changeMe>"
//     })

  const [sslLocInfoState, setSslLocInfoState] = useState(store.get("sslLoc"))
  const [sslEnvState, setSslEnvState] = useState("stage")


  function saveToLocalStorage() {
      store.set("sslLoc", sslLocInfoState)
  }


  function toggleUpdateSSL() {
      setIsDisplayedState(!isDisplayedState)
      setShowUpdateBtnState(!showUpdateBtnState)
  }

  function handleInput(e, sslType) {
    if (sslEnvState == "stage") {

      let tempLocInfoState = sslLocInfoState
      tempLocInfoState.stage[sslType] = e.target.value

      setSslLocInfoState(tempLocInfoState)
    } else {
      let tempLocInfoState = sslLocInfoState
      tempLocInfoState.prod[sslType] = e.target.value

      setSslLocInfoState(tempLocInfoState)
    }

 
  }


  return (
    <div className="App">
      <h1>Kafka Command Generator</h1>
      <hr></hr>
      {/* <SslLoc /> */}
      <div>
        <TealBox>
        <h3>Your SSL Location</h3>
        <div>
                    <input value = "prod" name="env" type="radio" onInput={(e) => setSslEnvState(e.target.value)}/>
                    <label>Prod</label>
                    <input value = "stage" name="env" type="radio" defaultChecked onInput={(e) => setSslEnvState(e.target.value)} />
                    <label>Stage</label>
        </div>
        <PartsDiv>
        <h3>ssl.certificate.location = {sslLocInfoState[sslEnvState].ssl_certificate_location}</h3>
        <h3>ssl.key.location = {sslLocInfoState[sslEnvState].ssl_key_location}</h3>
        <h3>ssl.ca.location = {sslLocInfoState[sslEnvState].ssl_ca_location}</h3>
        </PartsDiv>
        <hr></hr>
        
        {showUpdateBtnState ?  <MyButton onClick = {() => {toggleUpdateSSL()}}>Update</MyButton> : <></>}
       
        {
                    isDisplayedState ?
                    <>
                    {/* <TealBox> */}
                    <PartsDiv>
                    {/* <div> */}
                    <div>
                    <label>ssl.certificate.location = </label>
                    {/* <input onInput={e => setSslLocInfoState({
                        ...sslLocInfoState,
                        "stage": {
                          ...sslLocInfoState.stage,
                          "ssl_certificate_location": e.target.value
                        }
                    })} type="text" /> */}
                      <input onInput={e => handleInput(e, "ssl_certificate_location")} type="text" />
                    </div>
                   
                    <div>
                    <label>ssl.key.location = </label>
                    <input onInput={e => setSslLocInfoState({
                        ...sslLocInfoState,
                        "stage": {
                          ...sslLocInfoState.stage,
                          "ssl_key_location": e.target.value
                        }
                        

                    })}type="text" />
                    </div>
                  
                    <div>
                    <label>ssl.ca.location = </label>
                    <input onInput={e => setSslLocInfoState({
                        ...sslLocInfoState,
                        "stage": {
                          ...sslLocInfoState.stage,
                          "ssl_ca_location": e.target.value
                        }
                    })}type="text" />
                    </div>
                
                    {/* </div> */}
                   </PartsDiv>
                   
    
                    <MyButton onClick = {() => {
                        toggleUpdateSSL()
                        saveToLocalStorage()
                        } }>Save to local storage</MyButton>
                    <br></br>
                    <MyButton onClick = {() => {toggleUpdateSSL()} }>Cancel</MyButton>
                    {/* </TealBox> */}
                    </>
                
                    
                    : <></> 
                 
                 }  
        </TealBox>
     
        </div>
      {
        topicData.map((project) => {
          return (
            <>
            <hr></hr>
              <Project projectData = {project} sslLocInfo = {sslLocInfoState}/>
              <hr></hr>
            </>
          )
        })
      }
    </div>
  );
}

export default App;

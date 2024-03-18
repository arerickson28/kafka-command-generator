import './App.css';
import Producers from "./components/Producers"
import Consumers from './components/Consumers';
import Project from './components/Project';
import SslLoc from './components/SslLoc';
import styled from 'styled-components';
import { topicData } from "./data/topicData"
import store from "store"



function App() {

  const sslLoc = {
    "ssl_certificate_location": "<changeMe>",
    "ssl_key_location": "<changeMe>",
    "ssl_ca_location": "<changeMe>"
  }
  
  function setLocalStorageIfNull(obj) {
      if (store.get("sslLoc") == null) {
        store.set("sslLoc", obj)
      }
  }
  
  setLocalStorageIfNull(sslLoc)

  return (
    <div className="App">
      <h1>Kafka Command Generator</h1>
      <hr></hr>
      <SslLoc />
      {
        topicData.map((project) => {
          return (
            <>
            <hr></hr>
              <Project projectData = {project} />
              <hr></hr>
            </>
          )
        })
      }
      {/* <hr></hr>
      <Project projectName = "5Z" />
      <hr></hr>
 
      <hr></hr>
      <Project projectName = "8Q" />
      <hr></hr>
      <BodyDiv>
      <Producers />
      <Consumers />
      </BodyDiv> */}
  
    </div>
  );
}

export default App;

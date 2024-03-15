import './App.css';
import Producers from "./components/Producers"
import Consumers from './components/Consumers';
import Project from './components/Project';
import SslLoc from './components/SslLoc';
import styled from 'styled-components';
import { topicData } from "./data/topicData"



function App() {
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

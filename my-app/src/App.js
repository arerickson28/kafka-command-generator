import './App.css';
import Producers from "./components/Producers"
import Consumers from './components/Consumers';
import SslLoc from './components/SslLoc';
import styled from 'styled-components';

const BodyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

function App() {
  return (
    <div className="App">
      <h1>Kafka Command Generator</h1>
      <hr></hr>
      <SslLoc />
      <hr></hr>
      <BodyDiv>
      <Producers />
      <Consumers />
      </BodyDiv>
  
    </div>
  );
}

export default App;

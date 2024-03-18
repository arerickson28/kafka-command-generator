import { React,  useContext, useState, useEffect } from "react";
import styled from "styled-components";

function Generate({displayState}) {

    // const useDisplayContext = useContext(DisplayContext)
    

    const [thisDisplayState, setThisDisplayState] = useState(displayState)

    return (
        <>
        {
            thisDisplayState ?
            <>
                <h1>This is the generate component</h1>
                <button>Save For Later</button>
                <button onClick = {() => {setThisDisplayState(false)}}>Collapse</button>
            </>
          
            :
            <></>
        
        }
          
        </>
    )
}

export default Generate
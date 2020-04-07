import React, {useState,useEffect} from 'react'
import {Draggable} from "react-beautiful-dnd"



function InitListItem(props)
{
    var randomColor = require('randomcolor'); // import the script
    const [color,setColor] = useState("")

    
    let Style ={
            borderLeft:`solid ${color} 10px`,
            padding:10,
            margin:10,
            borderTop:'solid black 1px',
            borderBottom:`solid ${color} 3px`,
            borderRight:'solid black 1px',
            background:"white"
    }
    
    useEffect(()=>{
            setColor(randomColor())
        },[])



    return(
        <Draggable draggableId={props.info.id} index={props.index}>
            {
                (provided)=>(
                    <div  {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        <div style={Style}>
                            <h6>{props.info.id}</h6>
                            <h6>{props.info.text}</h6>  
                        </div>                                  
                    </div>
                )
            }
            
        </Draggable>
    )
}

export default InitListItem
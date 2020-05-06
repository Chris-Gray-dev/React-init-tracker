import React, {useState,useEffect} from 'react'
import {Draggable} from "react-beautiful-dnd"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/Form'

// From post https://stackoverflow.com/a/13532993
function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length===1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length===1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length===1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

function InitListItem(props)
{
    var randomColor = require('randomcolor'); // import the script
    const [color,setColor] = useState("")
    const [darkColor,setDarkColor] = useState("")

    
    let Style ={
            borderLeft:`solid ${color} 10px`,
            padding:10,
            margin:10,
            borderTop:'solid black 1px',
            borderBottom:`solid ${darkColor} 3px`,
            borderRight:'solid black 1px',
            background:"white"
    }
    
    useEffect(()=>{
            var c = randomColor()
            var dc = shadeColor(c,-25);
            setColor(c)
            setDarkColor(dc)
        },[])



    return(
        <Draggable draggableId={props.info.id} index={props.index}>
            {
                (provided)=>(
                    <div  {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                        <div style={Style}>
                            <input type="text" placeholder="Init" maxLength="2"></input> 
                            <input type="text" placeholder="Name" maxLength="64"></input>
                           
                        </div>                                  
                    </div>
                )
            }
        </Draggable>
    )
}

export default InitListItem
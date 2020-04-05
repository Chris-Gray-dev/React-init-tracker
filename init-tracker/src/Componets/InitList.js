import React, {useState} from 'react'
import InitListItem from './InitListItem'
import {DragDropContext,Droppable} from "react-beautiful-dnd"

const data=[
    {id:"1",text:"Monster one"},
    {id:"2",text:"Monster two"},
    {id:"3",text:"Monster three"},
    {id:"4",text:"Player one"},
]





// Main component
function InitList()
{
    // helper functions
    function RenderInitItems(arr){
        let array = arr.map((item,index)=><InitListItem key={item.id} info={item} index={index}/>)
        return array
    }

    function onDragEnd(result){

    }

    const [list,setList] = useState(data);
    const id = '1';

    return(
        <DragDropContext>
            <Droppable droppableId={id}>
                {provided=>(
                    <div ref={provided.innerRef} {...provided.droppableProps} className = "Init-List">
                        {RenderInitItems(list)}
                        {provided.placeholder}
                    </div>
                )}
                
            </Droppable>           
        </DragDropContext> 
    )
}

export default InitList
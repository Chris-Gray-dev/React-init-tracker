import React, {useState} from 'react'
import InitListItem from './InitListItem'
import {DragDropContext,Droppable} from "react-beautiful-dnd"


// Main component
function InitList(props)
{
    // helper functions
    function RenderInitItems(arr){
        let array = arr.map((item,index)=><InitListItem key={item.id} info={item} index={index}/>)
        return array
    }

    function onDragEnd(result,a){
        console.log(result)
    }

    
    const id = '1';

    return(
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={id} >
                {provided=>(
                    <div ref={provided.innerRef} {...provided.droppableProps} className = "Init-List">
                        {RenderInitItems(props.list)}
                        {provided.placeholder}
                    </div>
                )}
                
            </Droppable>           
        </DragDropContext> 
    )
}

export default InitList
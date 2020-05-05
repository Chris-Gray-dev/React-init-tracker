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
        const{ destination, source, draggableId} = result
        if (!destination)
        {
            return
        }

        if(destination.droppableId === source.droppableId 
            && destination.index === source.index )
        {
                return
        }

        const col = [...props.list] // copy state

        const ele = col[source.index] // copy element that moved

        col.splice(source.index,1) // delete moved element
        col.splice(destination.index,0,ele) // add moved element

        props.setList(col)
    
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
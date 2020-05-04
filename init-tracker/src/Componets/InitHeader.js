import React from 'react'
import AddInit from "./AddInit"
import RollInit from "./RollInit"
import SortInit from "./SortInit"
import Card from 'react-bootstrap/Card'

function InitHeader(props)
{

    var title = "Simple Initiative"
    return(

        <div>
            <Card>
                <Card.Body>
                    <SortInit />
                    <RollInit />
                    <div className = "InlineBlock">
                        <AddInit addCreature={props.addCreature} className="InlineBlock" />
                    </div>

                    <div className = "InlineBlock spacing" >
                        <h1> {title}</h1>
                    </div>
                </Card.Body>
            </Card>            
        </div>
        
    )
}

export default InitHeader
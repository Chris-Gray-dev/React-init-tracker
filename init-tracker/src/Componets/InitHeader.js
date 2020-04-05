import React from 'react'
import AddInit from "./AddInit"
import RollInit from "./RollInit"
import Card from 'react-bootstrap/Card'

function InitHeader(props)
{


    return(

        <div>
            <Card>
                <Card.Body>
                    <RollInit />
                    <div className = "InlineBlock">
                        <AddInit addCreature={props.addCreature} className="InlineBlock" />
                    </div>

                    <div className = "InlineBlock">
                        <h1> ~~  TITLE HERE ~~</h1>
                    </div>
                </Card.Body>
            </Card>            
        </div>
        
    )
}

export default InitHeader
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
function AddInit()
{


    return(

        <Dropdown>
            <Dropdown.Toggle variant="info">
                Add
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item >Creature</Dropdown.Item>
                <Dropdown.Item >Lair</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default AddInit
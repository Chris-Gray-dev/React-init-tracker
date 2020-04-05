import React from 'react'

function InitListItem()
{
    var randomColor = require('randomcolor'); // import the script
    var color = randomColor(); // a hex code for an attractive color

    let Style ={
            borderLeft:`solid ${color} 10px`,
            padding:10,
            margin:10,
            borderTop:'solid black 1px',
            borderBottom:'solid black 1px',
            borderRight:'solid black 1px'
    }

    return(
        <div style={Style}>
            <h1>Line 1</h1>
            <h1>Line 2</h1>            
        </div>
    )
}

export default InitListItem
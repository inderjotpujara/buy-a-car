import React from 'react';

import './BackDrop.scss'
const backdrop = (props)  => {
    let backDrop = (
        <div className="Content">
            <h2>
                Welcome to the prototype of Buy-A-Car   
            </h2>
            <h4>
                Swipe Right to See the Description 
            </h4>
            <h4>
                Or, Swipe Left to Reject the current car and continue to next one !! 
            </h4>
            <h4>
                Swipe Right the description to Choose the car as your Fav !!! (feature yet to release !!)
            </h4>
            <h2>
                Happy Swiping !!!
            </h2>
            <span>
                (Click anywhere to continue)
            </span>
        </div>
    )
    return (
        props.show ? <div className='Backdrop' onClick={props.clicked}> {backDrop} </div> : null 
    );
}

export default backdrop;
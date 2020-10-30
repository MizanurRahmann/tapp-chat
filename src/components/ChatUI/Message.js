import React from 'react';
import '../../styles/css/Message.css';

function Message(props) {

    return (
        <>
            <h1><span><i className="fab fa-slack-hash"></i></span> CSE 3300</h1>
            <div className="messages">
                <p>{props.groupId}</p>
            </div>
        </>
    )
}

export default Message

import React from 'react';
import '../../styles/css/Message.css';

function Message({groupMessage, groupInfo}) {
    return (
        <>
            <h1><span><i class="fab fa-slack-hash"></i></span> {groupInfo.name}</h1>
            <div class="messages">

            </div>
        </>
    )
}

export default Message

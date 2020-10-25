import React from 'react'

function ChatUi(props) {
    return (
        <div>
            {props.currentUser.displayName}
        </div>
    )
}

export default ChatUi

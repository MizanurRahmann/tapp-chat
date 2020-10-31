import React from 'react';
import '../../styles/css/Message.css';

function Message({ groupMessage, groupInfo }) {
    return (
        <>
            <h1><span><i className="fab fa-slack-hash"></i></span> {groupInfo?.name}</h1>

            <div className="messages">
                {/* message  */}
                    { groupMessage.map(msg => (
                        <div class="message loggedInUserMessage">
                        <div class="message_author">
                            <img src={msg.user.avatar} alt="pp" class="user_image" />
                        </div>
                        <div class="message_content">
                            <p>{msg.message}</p>
                        </div>
                    </div>  
                    ))
                }
            </div>

            <div className="message_field">
                <div className="icon"><i className="far fa-image"></i></div>
                <div className="icon"><i className="fas fa-paperclip"></i></div>
                <div className="field">
                    <textarea name="message" placeholder="Type a message ...."></textarea>
                </div>
                <div className="icon"><i className="far fa-smile"></i></div>
                <div className="icon">
                    <div><i className="far fa-paper-plane"></i></div>
                </div>
            </div>
        </>
    )
}

export default Message

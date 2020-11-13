import React, { useState } from 'react';
import firebase from 'firebase';
import { fdb } from '../../firebase/util';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import '../../styles/css/Message.css';

function Message({ currentUser, groupMessage, groupInfo, groupId }) {
    const [message, setMessage] = useState('');
    const [emojiOpen, setEmojiOpen] = useState(false);
 
    //WRITE EMOJI TO TEXTAREA
    const onEmojiClick = (event, emojiObject) => {
        setMessage(message + emojiObject.emoji);
    };

    // SEND MESSAGE LOGIC
    const submitMessage = () => {
        if(message){
            fdb.collection('Groups')
            .doc(groupId)
            .collection('Messages')
            .add({
                message: message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: {
                    name: currentUser.displayName,
                    avatar: currentUser.photoURL
                }
            })
            setEmojiOpen(false);
            setMessage('');
        }
    }

    return (
        <>
            <h1><span><i className="fab fa-slack-hash"></i></span> {groupInfo?.name}</h1>

            <div className="messages">
                {/* fetch messages  */}
                    { groupMessage.map(msg => (
                        <div 
                            class={ 
                                msg.user.name === currentUser.displayName
                                ? `message loggedInUserMessage`
                                : `message`}
                        >
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

            {/* message input field */}
            <div className="message_field">
                <div className="icon"><i className="far fa-image"></i></div>
                <div className="icon"><i className="fas fa-paperclip"></i></div>
                <div className="field">
                    <textarea 
                        name="message"
                        placeholder="Type a message ...."
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onFocus={() => setEmojiOpen(false)}
                    >
                    </textarea>
                </div>
                <div className="icon" onClick={e => setEmojiOpen(!emojiOpen)}><i className="far fa-smile"></i></div>
                <div className="icon" onClick={submitMessage}>
                    <div><i className="far fa-paper-plane"></i></div>
                </div>
            </div>

            {/* emoji Picker field */}
            {
                emojiOpen
                ? <div className="emojiPickerr">
                    <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK} />
                  </div>
                : null
            }
        </>
    )
}

export default Message

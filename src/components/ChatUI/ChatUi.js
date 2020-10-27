import React from 'react';
import Header from '../Header/Header';
import '../../styles/css/ChatUi.css';
import Groups from './Groups';
import Message from './Message';
import Info from './Info';

function ChatUi(props) {
    return (
        <>
            <Header currentUser={props.currentUser}/>
            <div className="tappChat">
                <div className="leftside">
                    <Groups currentUser={props.currentUser}/>
                </div>
                <div className="chat"><Message /></div>
                <div className="rightside"><Info /></div>
            </div>
        </>
    )
}

export default ChatUi

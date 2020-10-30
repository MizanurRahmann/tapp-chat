import React from 'react';
import Header from '../Header/Header';
import '../../styles/css/ChatUi.css';
import Groups from './Groups';
import Message from './Message';
import Info from './Info';
import { useParams } from 'react-router-dom';

function ChatUi(props) {
    const groupId = useParams();
    console.log(groupId.groupId);

    return (
        <>
            <Header currentUser={props.currentUser}/>
            <div className="tappChat">
                <div className="leftside">
                    <Groups currentUser={props.currentUser}/>
                </div>
                <div className="chat"><Message groupId={groupId.groupId} /></div>
                <div className="rightside"><Info groupId={groupId.groupId} /></div>
            </div>
        </>
    )
}

export default ChatUi

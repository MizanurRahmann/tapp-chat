import React from 'react';
import Header from '../Header/Header';
import '../../styles/css/ChatUi.css';
import Groups from './Groups';
import Message from './Message';
import Info from './Info';
import { useParams } from 'react-router-dom';

import { fdb } from '../../firebase/util';
import { useState, useEffect } from 'react';


function ChatUi(props) {
    const groupId = useParams();
    const [groupInfo, setGroupInfo] = useState(null);
    const [groupMessage, setGrouMessage] = useState([]);
    
    useEffect(() => {
        if(groupId.groupId){
            //fetch current group info
            fdb.collection('Groups')
            .doc(groupId.groupId)
            .onSnapshot(snapshot => {
                setGroupInfo(snapshot.data());
            })

            //fetch current group messages
            fdb.collection('Groups')
            .doc(groupId.groupId)
            .collection('Messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => {
                setGrouMessage(snapshot.docs.map(doc => doc.data()));
            })
        }
    }, [groupId.groupId]);
    console.log(groupMessage && groupMessage);

    return (
        <>
            <Header currentUser={props.currentUser} clearUser={props.clearUser}/>
            <div className="tappChat">
                <div className="leftside">
                    <Groups currentUser={props.currentUser}/>
                </div>
                <div className="chat">
                    {
                        groupMessage.length > 0 
                        ? <Message groupMessage={groupMessage} groupInfo={groupInfo} />
                        : "Loading"
                    }
                    </div>
                <div className="rightside">
                    {
                        groupInfo
                        ? <Info groupInfo={groupInfo}/>
                        : "Loading"
                    }
                    
                </div>
            </div>
        </>
    )
}

export default ChatUi

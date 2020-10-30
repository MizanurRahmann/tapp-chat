import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fdb } from '../../firebase/util';
import '../../styles/css/Groups.css';

function Groups({currentUser}) {
    // DECLARE STATES
    const [groups, setGroups] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [modal, setModal] = useState(false);
    const [error, setError] = useState('');

    // FETCH ALL GROUPS FROM FIREBASE
    useEffect(() => {
        fdb.collection('Groups').onSnapshot(snapshot => {
            setGroups(snapshot.docs.map(doc => (
                { 
                    id: doc.id,
                    name: doc.data().name,
                    color: doc.data().color,
                    createdBy: doc.data().createdBy
                }
            )));
        })
    }, []);
    
    // ADD A NEW GROUP
    const createGroup = event => {
        event.preventDefault();

        if(groupName !== ''){
            fdb.collection('Groups').add({
                name: groupName,
                color: '#00BF7E',
                createdBy: {
                    name: currentUser.displayName,
                    avatar: currentUser.photoURL
                }
            });
            setModal(false);
            setGroupName('');
        } else{
            setError("Please enter a group name.");
        }
    }
    
    
    return (
        <>
            {/* ALL GROUPS */}
            <div className="groups">
                <h2>
                    Groups
                    <span onClick={() => setModal(true)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
                </h2>
                {groups.map(group => (
                    <Link to={`/group/${group.id}`} key={group.id} id={group.id}>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-hash"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg></span>
                        {group.name}
                    </Link>
                ))}
            </div>

            
            {/* ACTIVE MEMBERS */}
            <div className="members">
                <h2>Individuals</h2>
                <p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                    Mizanur Rahman
                </p>
                <p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></span>
                    Abdur Rakib
                </p>
            </div>
            
            
            {/* MODAL FOR CREATING NEW GROUP */}
            {modal ? (
                <div className="modalBox">
                    <div className="modal">
                        {/* modal heading with cross button */}
                        <div className="modalCloseButton">
                            <h1>Add Group</h1>
                            <span onClick={() => setModal(false)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></span>
                        </div>
                        {/* modal description */}
                        <div className="modalDescription">
                            <p>A individual group can help you keep track of important conversations.</p>
                            <p>TappChat supports Group Chats so you can talk with a group of friends, your sports team, clubs, or any other group of people. To start a group chat in TappChat, give a name for your group and click <strong>Create Group</strong> button.</p>
                        </div>
                        {/* form for taking group name */}
                        <form className="modalForm">
                            <input type="text" value={groupName} onChange={e => setGroupName(e.target.value)}/>
                            {/* error */}
                            <smal style={{color: "red", margin: "5px 0", fontFamily: "PT"}}>{error}</smal>
                            <input className="button" type="submit" onClick={createGroup} value="Create Group"/>
                        </form>
                        {/* for designing purpose */}
                        <div className="center-dark"></div>
                        <div className="center"></div>
                        <div className="center-light"></div>
                    </div>
                </div>)
                : null
            }
        </>
    )
}

export default Groups

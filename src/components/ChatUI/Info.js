import React from 'react';
import '../../styles/css/Info.css';

function Info({groupInfo}) {

    return (
        <>
            <div className="info_image"></div>
            <h2>{groupInfo.name}</h2>

            {/* EDIT OPTIONS */}
            <div className="info_edit">
                <div className="info_edit-item">
                    <div>Change group name</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                </div>
                <div className="info_edit-item">
                    <div>Chnage color</div>
                    <div style={{color: `${groupInfo.color}`}}>
                        <i 
                            style={{padding: "5px", border: `1px solid ${groupInfo.color}`, borderRadius: '5px'}}
                            className="fas fa-circle"
                        ></i>
                    </div>
                </div>
                <div className="info_edit-item">
                    <div>Chnage emoji</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div>
                </div>
            </div>

            <div className="info_photos">
                <h3>Shared photos</h3>
            </div>
        </>
    )
}

export default Info

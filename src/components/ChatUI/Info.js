import React from 'react';
import '../../styles/css/Info.css';

function Info() {
    return (
        <>
            <div className="info_image"></div>
            <h2>Developer Group</h2>

            {/* EDIT OPTIONS */}
            <div className="info_edit">
                <div className="info_edit-item">
                    <div>Change group name</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                </div>
                <div className="info_edit-item">
                    <div>Chnage color</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg></div>
                </div>
                <div className="info_edit-item">
                    <div>Chnage emoji</div>
                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></div>
                </div>
            </div>

            <div className="info_photos">
                <h3>Shared photos</h3>
            </div>
        </>
    )
}

export default Info

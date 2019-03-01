import React from 'react';
import Avatar from './Avatar'

function formatDate(date) {
    return date.toLocaleDateString();
}


function Comment(props) {
    return (
        <div className="card">
            <div className="content">
                <div className="comment">
                    <div className="userInfo">
                        <Avatar user={props} />
                        <div className="userInfo-name">
                            {props.name}
                            </div>
                    </div>
                    <div className="comment-text">{props.text}</div>
                    <div className="comment-date">
                        {formatDate(props.date)}
                        </div>

                </div>
            </div>
        </div>
    );
}



export default Comment;
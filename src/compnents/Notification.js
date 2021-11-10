import { faBell, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Notification.css';

const Notification = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="wrapper">
            <div className="notification_wrapper">
                <div className="notification_icon">
                    <FontAwesomeIcon icon={faBell} style={{cursor: 'pointer'}} onClick={() => setShow(prevState => !prevState)} />
                </div>
                <div className={`dropdown ${show ? 'active' : ''}`}>
                    <div className="cancel_icon">
                        <FontAwesomeIcon icon={faTimes} style={{cursor: 'pointer'}} onClick={() => setShow(prevState => !prevState)} />
                    </div>
                    <div className="notification_item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus turpis sit amet luctus pharetra.</p>
                    </div>
                    <div className="notification_item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus turpis sit amet luctus pharetra.</p>
                    </div>
                    <div className="notification_item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus turpis sit amet luctus pharetra.</p>
                    </div>
                    <div className="notification_item">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus turpis sit amet luctus pharetra.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
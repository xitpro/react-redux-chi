import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';

import '../../assets/css/profile.css';
import '../../assets/css/main.css';
import '../../assets/css/tooltip.css';

import React from 'react';
import ProfileList from './ProfileList';
import Tools from './Tools';

const LeftWindow = props => {
    return (
        <div className="thx-drawer flex">
            <div className="main-title">Profile List</div>
            <div id="profileWrapper" className="drawer-select flex">
                <ProfileList
                defaultProfiles ={props.defaultProfiles}
                setCurrentProfile={props.setCurrentProfile}
                showFormEdit={props.showFormEdit}
                selected={props.selected}
                handleInputChange={props.handleInputChange}
                nameSelected={props.nameSelected}
                handleFocus={props.handleFocus}
                keyPress={props.keyPress}
                renameProfile={props.renameProfile}
                />

                <Tools
                defaultProfiles={props.defaultProfiles}
                addProfile={props.addProfile}
                showEdit={props.showEdit}
                showDelete={props.showDelete}
                moveDown={props.moveDown}
                moveUp={props.moveUp}
                selected={props.selected}
                showDeleteCfm={props.showDeleteCfm}
                deleteProfile={props.deleteProfile} 
                />  
            </div>

        </div>
    );
};

export default LeftWindow;
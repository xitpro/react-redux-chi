import React from 'react';
import '../../assets/css/profile.css';

const Tools = props => {
  var isDefault = props.defaultProfiles[props.selected].isDefault;

  return (
    <div className="toolbar flex">
      <div className="toolbar flex">
        <div className="icon add" id="profileAdd" onClick={props.addProfile} />
        <div
          className={isDefault === true ? 'icon edit' : 'icon edit show'}
          id="profileEdit"
          onClick={props.showEdit}
        />
        <div
          className={isDefault === true ? 'icon delete' : 'icon delete show'}
          id="profileDelete"
          onClick={props.showDelete}
        />
        {props.defaultProfiles && props.defaultProfiles.length > 0 ? (
          <div
            id="profileDelCfm"
            className={
              props.showDeleteCfm
                ? 'profile-del alert flex show'
                : 'profile-del alert flex'
            }
          >
            <div className="title" id="deletediv">
              delete eq
            </div>
            <div className="body-text t-center" id="delName">
              {props.defaultProfiles[props.selected].name}
            </div>
            <div
              className="thx-btn"
              id="cfmDelete"
              onClick={props.deleteProfile}
            >
              delete
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          className={
            parseInt(props.selected) === props.defaultProfiles.length - 1
              ? 'icon down disabled'
              : 'icon down'
          }
          id="profileDown"
          onClick={props.moveDown}
        />
        <div
          className={
            parseInt(props.selected) === 0 ? 'icon up disabled' : 'icon up'
          }
          id="profileUp"
          onClick={props.moveUp}
        />
      </div>
    </div>
  );
};

export default Tools;
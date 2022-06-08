import React from 'react';
import classNames from 'classnames'
import './style.scss'

const Status = ({data, isActive, onClick}) => {
    const classes = classNames('Status', { active: isActive });
    return  <div className={classes} onClick={() => onClick(data)}>
                <span>{data.name}</span>
            </div>
};

export default React.memo(Status);
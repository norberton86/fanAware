import React, { useContext } from "react";
import { DeviceContext } from "../..";
import classNames from 'classnames';
import './style.scss'

const Card = ({data}) => {
    const setDeviceSelected = useContext(DeviceContext);
    const classCard = classNames({
        Card,
        running: data.status === 'RUNNING',
        stopped: data.status === 'STOPPED',
        malfunction: data.status === 'MALFUNCTIONING',
    });
    return  <div className={classCard} data-label={data.status} onClick={()=> setDeviceSelected(data)}>
               <span className='alias'>{data.asset.alias}</span>
               <span className='id'>ID: {data.id}</span>
               <span className='date'>Created On: {data.timestamp}</span>
            </div>
};

export default React.memo(Card);
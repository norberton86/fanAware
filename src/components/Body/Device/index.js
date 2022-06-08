import React, {useEffect, useRef } from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import './style.scss'


const Device = ({device:{asset: {alias}, status, id, timestamp, operatingParams: {rotorSpeed, slack, rootThreshold}}, onClickOutside}) => {

    const ref = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside();
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [ onClickOutside ]);

    const classCard = classNames({
        status,
        running: status === 'RUNNING',
        stopped: status === 'STOPPED',
        malfunction: status === 'MALFUNCTIONING',
    });

    return  <div className="Device d-flex flex-column justify-content-between" ref={ref}>
                <div>
                  <div className="alias-container d-flex justify-content-between align-items-center">
                      <span className="alias">{alias}</span>
                      <FontAwesomeIcon icon={faGear} />
                  </div>
                  <span className={classCard}>
                      {status}
                  </span>

                  <div className="coreInfo">
                      <h6>ID: {id}</h6>
                      <h6>Created On: {timestamp}</h6>
                  </div>

                  <div className="operatingParams">
                      <h5>Rotor Speed</h5>
                      <h4>{rotorSpeed} m/s</h4>
                  </div>
                  <div className="operatingParams">
                      <h5>Slack</h5>
                      <h4>{slack}</h4>
                  </div>
                  <div className="operatingParams">
                      <h5>Threshold</h5>
                      <h4>{rootThreshold}</h4>
                  </div>

                  <div className="divider"/>
                </div>

                <button>Delete Device</button>
            </div>
};
export default React.memo(Device);
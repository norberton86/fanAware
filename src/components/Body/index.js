import { useEffect, useState, createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {statuses, API_URL, formatDate} from '../../util'
import Status from './Status';
import Cards from './Cards';
import Pager from './Pager';
import Portal from '../Portal';
import Device from './Device';
import './style.scss'

export const DeviceContext = createContext() ;

const Body = () => {
    const [status, setStatus] = useState(statuses[0]);
    const [devices, setDevices] = useState({data:{}, loading: false, error: false});
    const [deviceSelected, setDeviceSelected] = useState(null);

    useEffect(()=> {

        const requestDevices = async () => {
            try {
                setDevices({...devices, loading: true});
                const pageParam = `?page=${status.page}`;
                const statusParam = status.id !== 'All' ? `&status=${status.id}` : '';
                const response = await fetch(`${API_URL}${pageParam}${statusParam}`);
                const data = await response.json();
                setDevices({...devices, loading: false, data: formatDate(data)});
            } catch  (e){
                setDevices({...devices, loading: false, error: true});
            }
        };

        requestDevices();

    }, [status])

    const setPage = (page) => {
        setStatus({...status, page});
    }


    const contentRender = () => {
        if (devices.loading) {
            return <h1 className='info'>Loading...</h1>
        } else if (devices.error) {
            return <h1 className='info'>An error occurred</h1>
        } else if (devices?.data?.data?.length > 0) {
            return  <>
                        <Cards info={devices.data}/>
                        <Pager info={devices.data} setPage={setPage}/>
                    </>
        }
    }

    return <DeviceContext.Provider value={setDeviceSelected}>
                    <div className="Body" >
                        <div className='search d-flex align-items-center'>
                            <span className='Title'>Devices</span>
                            <div className='SearchBox d-flex align-items-center'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    <input placeholder='Search all devices'></input>
                            </div>   
                        </div>
                        <div className='StatusBar d-flex'>
                            {statuses.map(st=>(<Status key={st.id} data={st} isActive={st.id === status.id} onClick={setStatus}/>))}
                        </div>
                        {contentRender()}
                        {deviceSelected && <Portal>
                                             <Device device={deviceSelected} onClickOutside={() => {setDeviceSelected(null)}}/>
                                          </Portal>}
                    </div>
                </DeviceContext.Provider>
    
};

export default Body;
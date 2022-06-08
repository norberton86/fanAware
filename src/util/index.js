import moment from 'moment';
 
export const statuses = [   {id: 'All', name: 'All', page: 1},
                            {id: 'MALFUNCTIONING', name: 'Malfunction', page: 1},
                            {id: 'STOPPED', name: 'Stopped', page: 1},
                            {id: 'RUNNING', name: 'Running', page: 1}
                        ];
export const API_URL = 'https://jsonmock.hackerrank.com/api/iot_devices/search';

export const formatDate = (response) =>  {
 return {...response, data: response.data.map(d=> ({...d, timestamp: moment(d.timestamp).format("MMMM DD, YYYY [at] HH:mm")}))}
}

export  const avg= (data, param) => data.reduce(
    (previousValue, currentValue, index, arr) => {
        const sum = previousValue + currentValue.operatingParams[param]
        if (index === arr.length -1) {
            return (sum / arr.length).toFixed(2) 
        }
        return sum;
    },
    0
)
import React from 'react';
import {avg} from '../../../util'
import Card from './Card'
import './style.scss'

const Cards = ({info: { total, page, per_page, data}}) => {

    const initial = (page - 1) * per_page + 1;
    const end = (page - 1) * per_page + data.length;

    return  <div className='Cards'>
                <div className='info d-flex'>
                    <form className='d-flex align-items-end'>
                        <label htmlFor="statusesSelect">Sort by:</label>
                        <select name="statusesSelect" id="statusesSelect">
                            <option value="Status">Status</option>
                        </select>
                    </form>

                    <div className='AVG d-flex'>
                        <span>AVG Rotor Speed: <span className='avg'>{avg(data, 'rotorSpeed')}</span> </span>
                        <span>AVG Root Threshold: <span className='avg'>{avg(data, 'rootThreshold')}</span> </span>
                    </div>

                    <span>{initial}-{end} of {total}</span>
                </div>
                <div className='row'>
                    {
                        data.map((card, index)=> {
                                                return  <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4' key={index}>
                                                            <Card  key={card.id} data={card} />
                                                        </div>
                                                })
                    }
                </div>
            </div>
};

export default React.memo(Cards);
import React, { useContext } from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight,faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import './style.scss'


const Page = ({page, isActive, setPage}) => {
    
    const classPages = classNames({
        page,
        isActive
    });
    return <span className={classPages} onClick={()=>setPage(page)}>{page}</span>
};

const Pager = ({info: {page, total_pages}, setPage}) => {
    const pages = Array.from(Array(total_pages).keys(), n => n + 1)

    const next  = () => {
        if (page !== total_pages) {
            setPage(page+1);
        }
    }

    const previous  = () => {
        if (page !== 1) {
            setPage(page-1);
        }
    }

    return  <div className="Pager d-flex align-items-center" >
                 <FontAwesomeIcon icon={faChevronCircleLeft} onClick={()=>previous()}/>
                  {pages.map(p=> <Page key={p} page={p} isActive={p === page} setPage={setPage}/>)}
                 <FontAwesomeIcon icon={faChevronCircleRight} onClick={()=>next()}/>
                  <form className='d-flex align-items-end'>
                        <label htmlFor="rows">Show:</label>
                        <select name="rows" id="rows">
                            <option value="4">4 rows</option>
                        </select>
                  </form>
            </div>
};
export default React.memo(Pager);
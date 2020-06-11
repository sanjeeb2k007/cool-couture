import React from   'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title , imageUrl , size, linkUrl, match, history}) => ( 
    <div className={`${size} menu-item`}  // eslint-disable-next-line no-restricted-globals
    onClick={() => history.push(`${match.url}${linkUrl}`)}> 
        <div className= "background-image" style = {{backgroundImage: `url(${imageUrl})`}} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>shop now</span>
        </div>
    </div>

);

export default withRouter(MenuItem);
import React, {Fragment} from 'react';
import spinner from './octocat-spinner-smil.min.svg';

const Spinner = () => 
        <Fragment>
            <img src={spinner} alt='Loading...' style={{width: '400px', margin: 'auto', display: 'block'}} />
        </Fragment>
  


export default Spinner;



import React from 'react';
import Loader from '../../assets/images/loading.svg';

const Loading = () => {
    return (
        <>
            <div className="text-center">
                <img src={Loader} alt="loading icon"/>
            </div>
        </>
    )
}

export default Loading

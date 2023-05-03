import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Viewdetails = () => {
    const loadData=useLoaderData();
    console.log(loadData)

    return (
        <div>
            <h2>this is view:{loadData.length}</h2>
        </div>
    );
};

export default Viewdetails;
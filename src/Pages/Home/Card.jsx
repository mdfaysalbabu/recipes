import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Homecard from './Homecard';

const Card = () => {
    
    console.log(allData)
    return (
        <div>
            {
                allData.map(chef=><Homecard chef={chef}></Homecard>)
            }
        </div>
    );
};

export default Card;
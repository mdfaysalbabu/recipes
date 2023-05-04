import React from "react";

import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {
  
    const { error, status } = useRouteError()
  
  return (
    <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div className='text-center'>
                    <img src="https://cdn.pixabay.com/photo/2015/06/09/16/12/error-803716__340.png" className='w-50 h-50' alt="" />
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                        <span className='sr-only text-danger'>Error</span> {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl mb-8 text-danger'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
  );
};

export default Errorpage;

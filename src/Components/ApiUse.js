//Api Used Is Just To Get Users List Cause Other Than That Is Asking For Several Authentications
//Use /apiuse in url to run this code
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ApiUse = () => {
    const [info, setInfo] = useState([]);

    async function getInfo() {
        const result = await fetch("https://api.github.com/users");
        const data = await result.json()
        console.log(data);
        setInfo(data)
    }

    useEffect(() => {
        getInfo()
    }, [])
    return (
        <>
            <div className='apiuse'>
                <h1 className='txt-white'>Api Fetching</h1>
                <div className='row'>

                    {info.map((userInfo) => {
                        return (
                            <div className='col-4'>
                                <div className='card p-2'>
                                    <div className='image'><img src={userInfo.avatar_url} className='rounded' width="155px" alt='Image Not Found'></img>
                                    </div>
                                    <div className='ml-3 w-100'>
                                        <h2>{userInfo.login}</h2> <span className='textLeft'>Web Developer</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </>
    )
}

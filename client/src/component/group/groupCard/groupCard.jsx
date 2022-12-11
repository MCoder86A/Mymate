import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { apiGroupRouter, apiProfileRouter } from '../../../util/api/router';
import './groupCard.css'

const GroupCard=(groupProps)=>{

    const admin = groupProps["groupProps"]["admin"]
    const reqSent = groupProps['groupProps']['reqSent']
    const name = groupProps["groupProps"]["name"]
    const memberCount = groupProps["groupProps"]["memberCount"]
    const _id = groupProps['groupProps']['_id']
    const amIPresent = groupProps['groupProps']['amIPresent']
    const description = groupProps['groupProps']['description']

    const [myProfile, setMyProfile] = useState({})
    const [groupReqSent, setGroupReqSent] = useState(false)

    const addme = async()=>{
        const response = await apiGroupRouter().addme(_id)
           
        let data = await response.text();
        console.log(data)
        if(data==="request sent"){
            setGroupReqSent(true)
        }
           
    }
    const getMyProfile = async()=>{
        const data = await apiProfileRouter().myprofile()
        const result = await data.json()
        setMyProfile(result)
    }
    
    useEffect(()=>{
        getMyProfile()
        if(reqSent==="yes"){
            setGroupReqSent(true)
        }
        // eslint-disable-next-line
    },[])

    return(
        <>
            <div className="groupCard">
                <div className="info">
                    Member count: {memberCount}
                </div>
                <div className="name">
                    {name}
                </div>
                <div className="decription">
                    {description}
                </div>
                <div className='button'>
                    {
                        groupReqSent===true && <div id="reqSent">Request sent</div>
                    }
                    {
                        (admin===myProfile["_id"]?
                        (<div id="admin">admin</div>):
                        (groupReqSent===false && amIPresent==="no" &&
                            <div id="addRequest"
                            onClick={addme}>Add</div>)
                        )
                    }
                    <Link to={`/group/g_id/${_id}`}>
                        <div id="visit">More</div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default GroupCard
import { useState } from 'react';
import { useEffect } from 'react';
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
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/x-www-form-urlencoded"
           }
           
           let bodyContent = new URLSearchParams()
           bodyContent.append('groupID', _id)
           
           let response = await fetch(
            "http://127.0.0.1:3001/group/addme", { 
                method: "POST",
                body: bodyContent,
                headers: headersList
           });
           
           let data = await response.text();
           console.log(data)
           if(data==="request sent"){
               setGroupReqSent(true)
           }
           
    }
    const getMyProfile = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("x-access-token",
            localStorage.getItem('x-access-token'));
        
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
        };
        
        const data = await fetch(
            "http://127.0.0.1:3001/profile/myprofile",
            requestOptions)
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
                    <div id="visit">More</div>
                </div>
            </div>
        </>
    )
}

export default GroupCard
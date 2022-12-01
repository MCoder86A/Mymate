import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import './groupinfopage.css'

const GroupInfoPage = ()=>{
    const urlParam = useParams() //{ g_id: '...' }
    const [groupData, setGroupData] = useState({})
    const [userData, setUserData] = useState([])

    const api_group_details = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "groupID": urlParam['g_id'],
             "option": "large"
           });
           
           let response = await fetch(
               "http://127.0.0.1:3001/group/groupinfo", { 
               method: "POST",
               body: bodyContent,
               headers: headersList
           });
           
           let data = await response.json();
           setGroupData(data)
           
    }
    const api_userinfo_fetch = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/json"
           }
           
           let bodyContent = JSON.stringify({
             "option": "large",
             "userID": [...groupData.member]
           });
           
           let response = await fetch(
               "http://127.0.0.1:3001/profile/userinfo", { 
               method: "POST",
               body: bodyContent,
               headers: headersList
           });
           
           let data = await response.json();
           setUserData(data)
           
    }

    useEffect(()=>{
        api_group_details()
        // eslint-disable-next-line
    },[])
    useEffect(()=>{
        if(groupData.member){
            api_userinfo_fetch(groupData.member)
        }
        // eslint-disable-next-line
    },[groupData])


    return(
        <>
            <div className="groupinfopage">
                <div className="name">{groupData['name']}</div>
                <div className="description">{groupData['description']}</div>
                <div className="members">
                    <div className="header">Members</div>
                    <div className="items">
                        {
                            userData.map((user)=>
                                <div key={user['_id']}>{user['name']} @{user['username']}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        
        </>
    )

}

export default GroupInfoPage
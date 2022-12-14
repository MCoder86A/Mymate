import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { apiGroupRouter, apiProfileRouter } from "../../../util/api/router"

import './groupinfopage.css'

const GroupInfoPage = ()=>{
    const urlParam = useParams() //{ g_id: '...' }
    const [groupData, setGroupData] = useState({})
    const [userData, setUserData] = useState([])

    const api_group_details = async()=>{
        const response = await apiGroupRouter()
        .groupInfo(urlParam['g_id'],'large')

        let data = await response.json();

           setGroupData(data)
           
    }
    const api_userinfo_fetch = async()=>{
        const response = await apiProfileRouter().userinfo([...groupData.member],'large')
           
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
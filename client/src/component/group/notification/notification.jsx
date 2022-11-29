import { useEffect } from "react"
import { useState } from "react"
import { Outlet, Route, Routes } from "react-router"
import {Link} from 'react-router-dom'
import JoinCard from "./joinCard"

import './notification.css'

const Notification = ()=>{
    const [reqestInfo, setReqInfo] = useState([])

    const api_fetch_add_request = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token')
        }
        
        let response = await fetch(
            "http://127.0.0.1:3001/group/showreq", { 
            method: "POST",
            headers: headersList
        });
        
        let data = await response.json();
        console.log(data);
        let result = []
        data.request.forEach((group)=>{
            group.member_list.forEach((member)=>{
                result.push({
                    groupID:group['groupID'],
                    memberID:member
                })
            })
        })
        setReqInfo(result)

    }
    
    useEffect(()=>{
        api_fetch_add_request()
    },[])


    return(
        <>
            <div className="notification">
                <div className="nav">
                    <div className="box1">
                        <Link to={"./request"} >
                            <div className="item">Join request</div>
                        </Link>
                    </div>
                    <div className="box1">
                        <Link to={"./general"} >
                            <div className="item">General</div>
                        </Link>
                    </div>
                </div>
                <div className="group_request">
                    <Routes>
                        <Route path="request" element={
                            reqestInfo.map((request)=>{
                                return <JoinCard
                                    key={request['memberID']}
                                    joinCardProps={request}/>
                            })
                        } />
                    </Routes>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Notification
import React, { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import {Routes, Route, Outlet, useLocation} from 'react-router'
import {Link} from 'react-router-dom'

import GroupCard from '../component/group/groupCard/groupCard'
import GroupCreate from '../component/group/groupCreate/groupCreate'
import GroupInfoPage from '../component/group/groupInfoPage/groupInfoPage'
import Notification from '../component/group/notification/notification'
import Navbar from '../component/navbar/navbar'
import {apiGroupRouter} from '../util/api/router'
import './group.css'

const Group=()=>{
    const url = useLocation()
    const [mount, setMount] = useState(false)
    const isMount = useMemo(()=>mount,[mount])
    const [myGroup, setMyGroup] = useState([])
    const [myExplore, setMyExplore] = useState([])

    const api_group_fetch = async()=>{
        const data = await apiGroupRouter().fetch()
        const result = await data.json()
        console.log("Fetched_api_group_fetch")
        
        setMyGroup(result)
        
    }
    const api_getGroup = async()=>{

        const data = await apiGroupRouter("getGroup").getGroup()
        const result = await data.json()
        setMyExplore(result)
    }

    useEffect(()=>{
        if(!isMount){
            setMount(true)
            return
        }
        let pathname=url.pathname

        switch (pathname) {
            case "/group/mygroup":
                api_group_fetch()
                break;
            case "/explore":
                api_getGroup()
                break
            default:
                break;
        }


    },[url,isMount])

    return(
        <>
            <Navbar />
            <div className="groupBody">
                <div className="left">
                    <div className="GroupMenu">
                        <Link to={'/group/create'}>
                            <div className='item' id="createGroup">Create</div>
                        </Link>
                        <Link to={'/group/mygroup'}>
                            <div className='item' id="myGroup">My group</div>
                        </Link>
                        <Link to={'/group/notification'}>
                            <div className='item' id="myGroup">Notification</div>
                        </Link>
                    </div>
                </div>
                <div className="mid">
                    <Routes>
                        <Route path='' element={
                            myExplore.map(group=><GroupCard
                                groupProps={group}
                                key={group['_id']}/>)
                        } />
                        <Route path='create' element={<GroupCreate />} />
                        
                        <Route path='mygroup' element={
                            myGroup.map(group=><GroupCard
                                groupProps={group}
                                key={group['_id']}/>)
                        }/>
                        
                        <Route path='notification/*' element={
                                <Notification />
                            } />

                        <Route path=':g_id' element={
                            <GroupInfoPage />
                        } />
                    </Routes>
                </div>
                <div className="right"></div>
            </div>
            <Outlet/>
        </>
    )
}

export default Group
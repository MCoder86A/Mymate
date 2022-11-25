import React from 'react'
import {Routes, Route, Outlet} from 'react-router'
import { Link } from 'react-router-dom'

import GroupCard from '../component/group/groupCard/groupCard'
import GroupCreate from '../component/group/groupCreate/groupCreate'
import Navbar from '../component/navbar/navbar'
import './group.css'

const Group=()=>{
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
                    </div>
                </div>
                <div className="mid">
                    <Routes>
                        <Route path='' element={<GroupCard />}/>
                        <Route path='create' element={<GroupCreate />} />
                        <Route path='mygroup' element={<GroupCard/>} />
                    </Routes>
                </div>
                <div className="right"></div>
            </div>
            <Outlet/>
        </>
    )
}
export default Group
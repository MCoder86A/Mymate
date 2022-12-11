import { useEffect, useState } from "react"
import { apiGroupRouter, apiProfileRouter } from "../../../util/api/router"


const JoinCard = (joinCardProps)=>{
    let props = joinCardProps["joinCardProps"]
    
    const [reqAccepted, setReqAccepted] = useState(false)
    const [group_info, setGroup_info] = useState({})
    const [user_info, setUser_info] = useState({})
    
    const groupID = props['groupID']
    const memberID = props['memberID']

    const api_accept = async()=>{
        const response = await apiGroupRouter().acceptreq(groupID,memberID)

        let data = await response.text();
        console.log(data);

        if(data==="Accepted"){
            setReqAccepted(true)
        }

    }
    const api_user_info = async()=>{
        const response = await apiProfileRouter().userinfo(memberID,'small')
           
        let data = await response.json();
        setUser_info(data)
           
    }
    const api_group_info = async()=>{
        const response = await apiGroupRouter().groupInfo(groupID,"small")
           let data = await response.json();
           setGroup_info(data)
    }

    useEffect(()=>{
        api_user_info()
        api_group_info()
        // eslint-disable-next-line
    },[])

    return(
        <>
            <div className="join_card">
                <div className="info">
                    <div>{user_info['name']} @{user_info['username']}</div>
                    <div><b>{group_info['name']}</b></div>
                    <div>{group_info['description']}</div>
                </div>
                <div className="action">
                    {reqAccepted===false && <div onClick={api_accept} className="item">
                        <div>Accept</div>
                    </div>}
                    {reqAccepted && <div className="item" id="accepted">
                        <div>Accepted</div>
                    </div>}
                    <div className="item">
                        <div>Delete</div>
                    </div>
                    {/* {<div className="item" id="deleted">
                        <div>Deleted</div>
                    </div>} */}
                </div>
            </div>
        </>
    )

}

export default JoinCard
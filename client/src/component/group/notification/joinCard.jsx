import { useEffect, useState } from "react"


const JoinCard = (joinCardProps)=>{
    let props = joinCardProps["joinCardProps"]
    
    const [reqAccepted, setReqAccepted] = useState(false)
    const [group_info, setGroup_info] = useState({})
    const [user_info, setUser_info] = useState({})
    
    const groupID = props['groupID']
    const memberID = props['memberID']

    const api_accept = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/x-www-form-urlencoded"
        }

        let bodyContent = new URLSearchParams()
        bodyContent.append('groupID', groupID)
        bodyContent.append('userID', memberID)

        let response = await fetch(
            "http://127.0.0.1:3001/group/acceptreq", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);

        if(data==="Accepted"){
            setReqAccepted(true)
        }

    }
    const api_user_info = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/x-www-form-urlencoded"
           }
           
           let bodyContent = new URLSearchParams()
           bodyContent.append('userID', memberID)
           
           let response = await fetch(
                "http://127.0.0.1:3001/profile/userinfo", { 
                method: "POST",
                body: bodyContent,
                headers: headersList
           });
           
           let data = await response.json();
           setUser_info(data)
           
    }
    const api_group_info = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/x-www-form-urlencoded"
           }
           
           let bodyContent = new URLSearchParams()
           bodyContent.append('groupID', groupID)
           
           let response = await fetch(
                "http://127.0.0.1:3001/group/groupinfo", { 
                method: "POST",
                body: bodyContent,
                headers: headersList
           });
           
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
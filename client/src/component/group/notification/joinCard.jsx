import { useState } from "react"


const JoinCard = (joinCardProps)=>{
    let props = joinCardProps["joinCardProps"]
    
    const [reqAccepted, setReqAccepted] = useState(false)
    
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
    return(
        <>
            <div className="join_card">
                <div className="info">
                    <div>NAME: {"SENDER NAME"}</div>
                    <div>Group name: {"GROUP NAME"}</div>
                    <div>Group description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis delectus voluptatibus numquam totam incidunt saepe dolor</div>
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
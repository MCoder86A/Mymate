import { Button, Chip, Paper, Stack, Typography } from "@mui/material"
import { Box } from "@mui/system"
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
            <Box sx={{pt:2}} >
                <Paper elevation={3}
                        sx={{p:2}} >
                    <Typography>
                        {user_info['name']} @{user_info['username']}
                    </Typography>
                    <Typography>
                        <b>{group_info['name']}</b>
                    </Typography>
                    <Typography>
                        {group_info['description']}
                    </Typography>

                    <Stack direction={'row'}
                            spacing={2} sx={{mt:2}}>
                        {reqAccepted===false &&
                                <Button onClick={api_accept} variant="contained"
                                        size='small' >
                                    Accept
                                </Button>
                        }
                        {reqAccepted && 
                            <Chip label='Accepted' color="success" />
                        }
                        <Button variant="contained" color="error">
                            Remove
                        </Button>
                        {/* <Chip label='Removed' color="default" /> */}
                    </Stack>
                </Paper>
            </Box>
        </>
    )

}

export default JoinCard
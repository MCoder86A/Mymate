import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
    Box,
    Divider,
    Paper,
    Typography
} from '@mui/material'
import { apiGroupRouter, apiProfileRouter } from "../../../util/api/router"

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
    },[])

    useEffect(()=>{
        if(groupData.member){
            api_userinfo_fetch(groupData.member)
        }
    },[groupData])


    return(
        <>
            <Box sx={{mt:1}}>
                <Paper
                        elevation={2}
                        sx={{
                            p:2, pt:0.5
                        }} >
                    <Typography variant="caption">
                        {groupData['name']}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" mt={1}>
                        {groupData['description']}
                    </Typography>
                    <Divider sx={{mt:4}}/>
                    
                    <Typography variant="caption" mt={1}>
                        <b>Members</b>
                    </Typography>
                    {
                        userData.map((user)=>
                            <Typography key={user['_id']}
                                    variant='body2' >
                                {user['name']}@{user['username']}
                            </Typography>
                        )
                    }
                </Paper>

            </Box>
        
        </>
    )

}

export default GroupInfoPage
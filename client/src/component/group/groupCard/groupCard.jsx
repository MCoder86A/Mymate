import { useState } from 'react';
import { useEffect } from 'react';
import {Button,
    Chip,
    Paper,
    Stack,
    Typography
} from '@mui/material'
import { apiGroupRouter, apiProfileRouter } from '../../../util/api/router';
import { Box } from '@mui/system';

const GroupCard=({groupProps})=>{

    const admin = groupProps["admin"]
    const reqSent = groupProps['reqSent']
    const name = groupProps["name"]
    const memberCount = groupProps["memberCount"]
    const _id = groupProps['_id']
    const amIPresent = groupProps['amIPresent']
    const description = groupProps['description']

    const [myProfile, setMyProfile] = useState({})
    const [groupReqSent, setGroupReqSent] = useState(false)

    const addme = async()=>{
        const response = await apiGroupRouter().addme(_id)
           
        let data = await response.text();
        console.log(data)
        if(data==="request sent"){
            setGroupReqSent(true)
        }
           
    }
    const getMyProfile = async()=>{
        const data = await apiProfileRouter().myprofile()
        const result = await data.json()
        setMyProfile(result)
    }
    
    useEffect(()=>{
        getMyProfile()
        if(reqSent==="yes"){
            setGroupReqSent(true)
        }
        // eslint-disable-next-line
    },[])

    return(
        <Box sx={{p:1}}>
            <Paper elevation={3} sx={{p:1, pt:3, pb:3}}>
                <Typography >Member: {memberCount}</Typography>
                <Typography >{name}</Typography>
                <Typography sx={{wordBreak:'break-all'}}>
                    {description}
                </Typography>
                <Stack
                    direction={'row'}
                    spacing={1}
                    sx={{mt:4}}
                >
                    {
                        groupReqSent===true &&
                            <Chip color='success' label='Request sent' />
                    }
                    {
                        (admin===myProfile["_id"]?
                        (<Chip color='info' label='Admin' />):
                        (groupReqSent===false && amIPresent==="no" &&
                            <Button onClick={addme}
                                    variant='contained'>
                                Addme
                            </Button>)
                        )
                    }
                    <Button variant='contained'
                            size='small'
                            href={`/group/${_id}`}>
                        More
                    </Button>
                </Stack>

            </Paper>
        </Box>
    )
}

export default GroupCard
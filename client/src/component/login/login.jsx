import { useState } from 'react';
import { apiAuthRouter } from '../../util/api/router';
import {
    Box,
    Container,
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material'

import toast from 'react-hot-toast'



const Login = ()=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async()=>{
        const result = await apiAuthRouter().login(username,password)
        
        const jsonData = await result.json()
        const x_access_token = jsonData["x-access-token"]
        if(!x_access_token){
            console.log(jsonData)
        }

        localStorage.setItem('x-access-token', x_access_token)

        return jsonData
    }
    
    return(
        <>
            <Container maxWidth='sm' >
                <Box sx={{p:1}}>
                    <Paper elevation={6} sx={{p:2, mt:5}}>
                        <Box sx={{pb:2}} >
                            <FormControl fullWidth
                                    variant="outlined" >
                                <InputLabel >
                                    Email ID
                                </InputLabel>
                                <OutlinedInput
                                    type='text'
                                    label="Email ID"
                                    onChange={(ev)=>{setUsername(ev.target.value)}}
                                />
                            </FormControl>
                        </Box>
                        <Box sx={{pb:2}} >
                            <FormControl fullWidth
                                    variant="outlined" >
                                <InputLabel >
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    type='password'
                                    label="Password"
                                    onChange={(ev)=>{setPassword(ev.target.value)}}
                                />
                            </FormControl>
                        </Box>
                        <Box>
                            <Button fullWidth
                                   variant='contained'
                                   onClick={()=>{
                                    toast.promise(new Promise(async(res,rej)=>{
                                        const result = await login()
                                        result.status==='200'?
                                        res():rej()
                                    }),
                                    {
                                        loading: 'loading',
                                        success: `Successfully login`,
                                        error: `Unable to login`
                                    })
                                   }} >
                                Login
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </>
    )
    
}


export default Login
import { useEffect } from "react"
import { useState } from "react"
import { Outlet, Route, Routes } from "react-router"
import JoinCard from "./joinCard"

import { apiGroupRouter } from "../../../util/api/router"
import { Box, Tab, Tabs, Typography
} from "@mui/material"

const Notification = () => {
    const [reqestInfo, setReqInfo] = useState([])
    const [tabValue, setTabValue] = useState(0)

    const api_fetch_add_request = async () => {
        const response = await apiGroupRouter().showreq()
        let data = await response.json();
        console.log(data);
        let result = []
        data.request.forEach((group) => {
            group.member_list.forEach((member) => {
                result.push({
                    groupID: group['groupID'],
                    memberID: member
                })
            })
        })
        setReqInfo(result)

    }

    useEffect(() => {
        api_fetch_add_request()
    }, [])
    
    const tabHandler = (ev, value)=>{
        setTabValue(value)
    }

    return (
        <>
            <Box sx={{mt:1}}>
                <Tabs value={tabValue} onChange={tabHandler} >
                    <Tab label="New request" />
                    <Tab label="General" />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    {
                        reqestInfo.length!==0? reqestInfo.map((request)=>{
                            return <JoinCard
                                key={request['memberID']}
                                joinCardProps={request}/>
                        }):
                        <div>{'No new request'}</div>
                    }
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    Coming soon...
                </TabPanel>
            </Box>
        </>
    )
}

export default Notification

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div hidden={value !== index}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
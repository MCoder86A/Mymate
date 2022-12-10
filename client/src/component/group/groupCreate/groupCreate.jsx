import { useState } from 'react'
import { API_BASE_URL } from '../../../config/env'
import './groupCreate.css'

const GroupCreate=()=>{
    const [message, setMessage] = useState('')

    const api_GroupCreate = async()=>{
        let headersList = {
            "x-access-token": localStorage.getItem('x-access-token'),
            "Content-Type": "application/x-www-form-urlencoded"
           }
           
           const form = document.getElementById('groupCreate')
           const name = form[0].value
           const desc = form[1].value

           const bodyContent = new URLSearchParams()
           bodyContent.append('name', name)
           bodyContent.append('desc', desc)
           
           let response = await fetch(
               `${API_BASE_URL}/group/create`, { 
               method: "POST",
               body: bodyContent,
               headers: headersList
           });
           
           let data = await response.text();
           setMessage(data)
           
    }

    return(
        <>
            <div className="box">
                <form id='groupCreate'>
                    <div className="input">
                        <input type={'text'} name="name" placeholder='Name'/>
                    </div>
                    <div className="input">
                        <textarea name="description" placeholder='Description'/>
                    </div>
                    <div className="input">
                        <div value={"Create"} onClick={api_GroupCreate} >Create</div>
                    </div>
                </form>
                <div className="input">
                    <div value={"Create"} onClick={api_GroupCreate} >{message}</div>
                </div>
            </div>
        </>
    )

}

export default GroupCreate
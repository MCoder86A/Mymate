import { useState } from 'react'
import { apiGroupRouter } from '../../../util/api/router'
import './groupCreate.css'

const GroupCreate=()=>{
    const [message, setMessage] = useState('')

    const api_GroupCreate = async()=>{
        const form = document.getElementById('groupCreate')
        const name = form[0].value
        const desc = form[1].value
        
        const response = await apiGroupRouter().create(name, desc)
           
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
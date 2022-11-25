import './groupCreate.css'

const GroupCreate=()=>{
    return(
        <>
            <form id='groupCreate'>
                <div className="input">
                    <input type={'text'} name="name" placeholder='Name'/>
                </div>
                <div className="input">
                    <input type={'text'} name="description" placeholder='Description'/>
                </div>
                <div className="input">
                    <input type={'submit'} value={"Create"}/>
                </div>
            </form>
        </>
    )

}

export default GroupCreate
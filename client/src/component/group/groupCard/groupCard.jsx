import './groupCard.css'

const GroupCard=()=>{
    return(
        <>
            <div className="groupCard">
                <div className="info">Member count:</div>
                <div className="name">Group name</div>
                <div className="decription">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt hic, vel, reprehenderit similique magnam consequatur quos sapiente expedita, atque eaque temporibus omnis ipsum! Ea, illo quae esse quia qua</div>
                <div className='button'>
                    {/* <div id="reqSent">Request sent</div> */}
                    <div id="addRequest">Add</div>
                    <div id="visit">More</div>
                </div>
            </div>
        </>
    )
}

export default GroupCard
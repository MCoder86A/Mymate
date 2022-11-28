import {Routes, Route, Outlet} from 'react-router-dom'

import Navbar from '../component/navbar/navbar'
import Login from '../component/login/login'

const Home=()=>{
    return(
        <>
            <Routes>
                <Route path='' element={<Navbar />}/>
                <Route path='login' element={<Login />} />

            </Routes>
            {/* TODO: Home feed */}

            <Outlet/>
        </>
    )
}

export default Home
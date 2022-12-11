import {groupRouter} from './schema/groupRouter'
import { profileRouter } from './schema/profileRouter'
import { userAuthRouter } from './schema/userAuthRouter'

const _groupRouter = new groupRouter({
    route:'group'
})
const _profileRouter = new profileRouter({
    route: 'profile'
})
const _authRouter = new userAuthRouter({
    route: 'login'
})

const apiGroupRouter = ()=>{
    return _groupRouter.mode
}

const apiProfileRouter = ()=>{
    return _profileRouter.mode
}

const apiAuthRouter = ()=>{
    return _authRouter.mode
}

export {apiGroupRouter, apiProfileRouter, apiAuthRouter}
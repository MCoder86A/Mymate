import {groupRouter} from './schema/groupRouter'

const _groupRouter = new groupRouter({
    route:'group'
})

/**
 * 
 * @param {"getGroup"|
 *         "groupInfo"} mode 
 * 
 */
const apiGroupRouter = (mode)=>{
    return _groupRouter.getSchema(mode)
}

export {apiGroupRouter}
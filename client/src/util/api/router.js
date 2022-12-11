import {groupRouter} from './schema/groupRouter'

const _groupRouter = new groupRouter()

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
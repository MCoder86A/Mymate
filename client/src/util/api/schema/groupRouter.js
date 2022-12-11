import {fetcher} from '../fetcher'

export class groupRouter {
    constructor(){
        this.mode = {
            
            /**
             * 
             * @param {string} groupID 
             * @param {"large"|"small"} option
             * @returns 
             */
            groupInfo: async(groupID,option)=>{
                const data = JSON.stringify({
                    groupID: groupID,
                    option: option
                })
        
                return new fetcher().postData('group',
                    true, data, "json", 'getgroup')
        
            }
        }
    }
    
    /**
     * 
     * @param {"getGroup"|
     *         "groupInfo"} mode 
     */
    getSchema = (mode)=>{
        switch (mode) {
            case "getGroup":
                return this.mode
            case "groupInfo":
                return this.mode
            default:
                break;
        }
    }
}





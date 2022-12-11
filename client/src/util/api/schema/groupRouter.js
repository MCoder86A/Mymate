import {fetcher} from '../fetcher'

export class groupRouter extends fetcher{
    /**
     * 
     * @param {{route: string}} options 
     */
    constructor(options){
        super()
        
        this.route = options.route

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
        
                return this.postData('group',
                    true, data, "json", 'getgroup')
        
            },

            getGroup: async()=>{
                return this.post(this.route,true,'getgroup')
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





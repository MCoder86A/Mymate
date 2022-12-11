import { builder } from '../../builder/formbodybuilder'
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
             * @returns json
             * @description Can be used with data.json()
             */
            groupInfo: async(groupID,option)=>{
                const data = builder.buildJson({
                        groupID: groupID,
                        option: option
                    })

                return this.postData('group',
                true, data, "json", 'groupinfo')
        
            },

            /**
             * 
             * @returns object
             * @description Can be used with data.json()
             * 
             */
            getGroup: async()=>{
                return this.post(this.route,true,'getgroup')
            },

            /**
             * 
             * @param {string} groupID 
             * @returns plain text
             * @description Can be used with data.text()
             */
            addme: async(groupID)=>{
                const data = builder.buildUrlEncoded({
                    groupID: groupID
                })

                return this.postData(this.route,true,data,"urlEncoded",'addme')
            },
            
            /**
             * 
             * @param {string} group_name 
             * @param {string} description 
             * @returns plain text
             * @description Can be used with data.text()
             */
            create: async(group_name,description)=>{
                const data = builder.buildUrlEncoded({
                    name: group_name,
                    desc: description
                })

                return this.postData(this.route,true,data,"urlEncoded",'create')
            },
            
            /**
             * 
             * @param {string} groupID 
             * @param {string} userID 
             * @returns plain text
             * @description Can be used with data.text()
             */
            acceptreq: async(groupID, userID)=>{
                const data = builder.buildUrlEncoded({
                    groupID: groupID,
                    userID: userID
                })

                return this.postData(this.route,true,data,"urlEncoded",'acceptreq')
            },
            
            /**
             * @returns json
             * @description Can be used with data.json()
             */
            showreq: async()=>{
                return this.post(this.route,true,'showreq')
            },

            /**
             * @returns object
             * @description Can be used with data.json()
             */
            fetch: async()=>{
                return this.post(this.route,true,'fetch')
            }

        }
    }
}





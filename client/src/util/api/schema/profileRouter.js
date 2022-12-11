import { builder } from "../../builder/formbodybuilder";
import { fetcher } from "../fetcher";

export class profileRouter extends fetcher{
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
             * @returns json
             * @description Can be used with data.json()
             */
            myprofile: async()=>{
                return this.post(
                    this.route,
                    true,
                    'myprofile')
            },

            /**
             * @param {string|string[]} userID 
             * @param {'large'|'small'} option 
             * @returns json
             * @description Can be used with data.json()
             */
            userinfo: async(userID, option)=>{
                const data = builder.buildJson({
                    userID: userID,
                    option: option
                })

                return this.postData(
                    this.route,
                    true,
                    data,
                    "json",
                    'userinfo')

            },


        }
    }
}
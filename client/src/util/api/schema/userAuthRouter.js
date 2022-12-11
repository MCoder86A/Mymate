import { fetcher } from "../fetcher";
import {builder} from '../../builder/formbodybuilder'

export class userAuthRouter extends fetcher{
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
             * @param {string} username 
             * @param {string} password 
             * @resturn json
             * @decription Can be used with data.json()
             */
            login: async(username,password)=>{
                const data = builder.buildUrlEncoded({
                    username: username,
                    password: password
                })
                
                return this.postData(
                    this.route,
                    false,
                    data,
                    "urlEncoded"
                )
            }
        }
    }

}
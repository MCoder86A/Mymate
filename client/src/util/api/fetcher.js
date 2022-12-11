import {API_BASE_URL} from '../../config/env'

export class fetcher {
    /**
     * 
     * @param {string} route 
     * @param {boolean} requireAuth 
     * @param {string|undefined} mode
     * @returns 
     */
    post = async(
        route,
        requireAuth = false,
        mode
    )=>{

        let myHeaders = new Headers();
        
        if(requireAuth===true){
            myHeaders.append(
                "x-access-token",
                localStorage.getItem('x-access-token'));
        }

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
        };
        
        let endpoint = mode===undefined?
        `${API_BASE_URL}/${route}`:
        `${API_BASE_URL}/${route}/${mode}`

        return await fetch(
            endpoint,
            requestOptions)
    }

    /**
     * 
     * @param {string} route 
     * @param {boolean} requireAuth 
     * @param {any} data 
     * @param {"json"|"urlEncoded"} contentType 
     * @param {string|undefined} mode 
     */
    postData = async(
        route,
        requireAuth = false,
        data,
        contentType,
        mode
    )=>{

        let myHeaders = new Headers();
        
        contentType==='json'?
            myHeaders.append(
                'Content-Type',
                'application/json'
            ):
            myHeaders.append(
                'Content-Type',
                'application/x-www-form-urlencoded'
            )
        if(requireAuth===true){
            myHeaders.append(
                "x-access-token",
                localStorage.getItem('x-access-token'));
        }

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data
        };
        
        let endpoint = mode===undefined?
        `${API_BASE_URL}/${route}`:
        `${API_BASE_URL}/${route}/${mode}`

        return await fetch(
            endpoint,
            requestOptions)
    
    }

}
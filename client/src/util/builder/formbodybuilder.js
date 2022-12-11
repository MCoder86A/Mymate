export const builder = {
    /**
     * @private
     */
    buildJson : (data)=>{
        return JSON.stringify(data)
    },

    /**
     * @private 
     */
    buildUrlEncoded : (data)=>{
        const urlEncoded = new URLSearchParams()

        Object.entries(data).forEach((val)=>{
            urlEncoded.append(val[0],val[1])
        })
        
        return urlEncoded
    }
}
import axios from "axios"
import md5 from "md5";
import { removeDuplicateOfIds } from "../../utils/utils";

const apiObj = {
    url: "https://api.valantis.store:41000/",
    password: "Valantis",
    timestamp: new Date().toISOString().split('T')[0].replace(/-/g, ''),
}

const authPass = md5(`${apiObj.password}_${apiObj.timestamp}`);
const headers = {
    'X-Auth': authPass
};

export const request = async (requestBody) => {
    return await axios.post(apiObj.url, requestBody, { headers })
} 

// // // // // // // // // // // // // // // // // // // // // // // // // // // 

export const numberOfProducts = async () => {
    return await request({action: "get_ids"})
        .then(res => {
            const idsWithoutDuplcates = removeDuplicateOfIds(res.data.result)
            return idsWithoutDuplcates.length
        })

}
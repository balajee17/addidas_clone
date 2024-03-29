import axios from "axios";

class ProductRoutesApi {

    async getProduct({ id, }) {
        try {
            const response = await axios.get(`${process.env.REACT_APP_HOST}/userapp/product/get/${id}`);
            // console.log(response);

            if (response.data.status === "SUCCESS") {
                return response.data;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            return false;
        }
    }

    async postProduct(page=1, limit=9, filter) {
        try {
            let payload = {
                "query":{
                    $and: [filter],
                  },
                "options": {
                    "collation": "",
                    "sort": {"name":1},
                    "populate": "",
                    "projection": "",
                    "lean": false,
                    "leanWithId": true,
                    "page": page,
                    "limit": limit,
                    "pagination": true,
                    "useEstimatedCount": false,
                    "useCustomCountFn": false,
                    "forceCountFn": false,
                    "read": {},
                    "options": {}
                    

                },
                "isCountOnly": false
            };
            const response = await axios.post(`${process.env.REACT_APP_HOST}/product/list`, payload);
            // console.log(response);
            if (response.data.status === "SUCCESS") {
                return response.data;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Error posting product:", error);
            return false;
        }



    }



}

export const productRoutesApi = new ProductRoutesApi();

import axios from "axios";


class OrderApi {

  
  async getOrder(id) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/order/get/${id}`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === "SUCCESS") return response.data;
      else return false;
    } catch (error) {}
  }

  async createOrder(data) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/order/create`,
        data,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === "SUCCESS") return response.data;
      else return false;
    } catch (error) {}
  }

  async postOrder(data) {
    try {
      let payload = {
        query: {},
        options: {
                "collation": "",
          "sort": {},
          "populate": "products.productId",
          "projection": "",
          "lean": false,
          "leanWithId": true,
          "page": 1,
          "limit": 10,
          "pagination": true,
          "useEstimatedCount": false,
          "useCustomCountFn": false,
          "forceCountFn": false,
          "read": {},
          "options": {}
        },
        isCountOnly: false,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/order/list`,payload,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === "SUCCESS") {
        return response.data;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error posting order:", error);
      return false;
    }
  }
}

export const orderApi = new OrderApi();

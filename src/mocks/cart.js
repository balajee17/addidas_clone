import axios from "axios";

class CartApi {
  async getCart() {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/cart/list`,
        {
          method: "get",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === "SUCCESS") return response.data;
      else return false;
    } catch (error) {
      
    }
  }

  async createCart(data) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/cart/create`,
        data,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      console.log(response);
      if (response.data.status === "SUCCESS") return response.data;
      else return false;
    } catch (error) {
      
    }
  }

  async postCart(data) {
    try {
      let payload = {
        query: data.query,
        options: {
          collation: "",
          sort: data.sort,
          populate: "products.productId",
          projection: "",
          lean: false,
          leanWithId: true,
          page: data.page,
          limit: data.limit,
          pagination: true,
          useEstimatedCount: false,
          useCustomCountFn: false,
          forceCountFn: false,
          read: {},
          options: {},
        },
        isCountOnly: false,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/cart/list`,
        payload,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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
      console.error("Error posting cart:", error);
      return false;
    }
  }

  async updateCart(data,id) {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_HOST}/cart/update/${id}`,
        data,
        {
          method: "put",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.data.status === "SUCCESS") return response.data;
      else return false;
    } catch (error) {
      
    }
  }

  async deleteCart(id) {
    
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_HOST}/cart/soft-delete/${id}`,
        {
          method: "delete",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.data.status === "SUCCESS") return response.data;
      else return false;
    } catch (error) {
      
    }
  }

}

export const cartApi = new CartApi();

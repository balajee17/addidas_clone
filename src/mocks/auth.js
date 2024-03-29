import axios from "axios";

class AuthApi {

  async getUser() {
    const response = await axios.get(`${process.env.REACT_APP_HOST}/user/me`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      
    });
    console.log(response)
    if (response.data.status === "SUCCESS") return response.data;
    else return false;
  }

  async resetPasswordOtp(email) {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_HOST}/auth/reset-password-otp`,
        email
      );
      console.log(response);
      if (Response) {
        return response.data;
      }
    } catch (error) {
      console.error("Reset password failed", error);
      throw error;
    }
  }

  async resetPassword(data) {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_HOST}/auth/reset-password`,
        data,
      );
      console.log(response);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.error("Reset password failed", error.message);
      throw error;
    }
  }

  async updateUser(data, id) {
    const response = await axios.put(
      `${process.env.REACT_APP_HOST}/user/update/${id}`,
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
  }

  async deleteUser(id) {
    const response = await axios.delete(
      `${process.env.REACT_APP_HOST}/user/delete/${id}`,
      {
        method: "delete",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.status === "SUCCESS") return response.data;
    else return false;
  }

  async register(data) {
    const response = await axios.post(
      `${process.env.REACT_APP_HOST}/auth/register`,
      data
    );
    console.log(response);
    if (response.data.status === "SUCCESS") {
      return response?.data;
    } else {
      return response?.data;
    }
  }

  async login(data) {
    const response = await axios.post(
      `${process.env.REACT_APP_HOST}/auth/login`,
      data
    );
    if (response.data.status === "SUCCESS") {
      console.log("response.data",response.data.data.token)
      localStorage.setItem("authToken",response.data.data.token)
      return response.data;
    }
    else return false;
  }

  async logout(data) {
    const response = await axios.post(
      `${process.env.REACT_APP_HOST}/auth/logout`,
      data
    );
    if (response.data.status === "SUCCESS") return response.data;
    else return false;
  }
}

export const authApi = new AuthApi();

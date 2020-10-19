import axios from "axios";

export default {
    //Generator routes
    makeMayorNess: function () {
        return axios.get("/api/utils/mayor/ness")
    },
    makeMayorBiz: function () {
        return axios.get("/api/utils/mayor/biz")
    },
    makeMayorJazz: function () {
        return axios.get("/api/utils/mayor/jazz")
    },
    makeMayorFourth: function () {
        return axios.get("/api/utils/mayor/fourth")
    },
    makeCity: function () {
        return axios.get("/api/utils/city")
    },
    //User routes
    userLogin: function (userData) {
        console.log(userData)
        return axios.post("/api/auth/login", userData)
    },
    userRegister: function (userData) {
        console.log(userData)
        return axios.post("/api/auth/register", userData)
    },
    loadUser: function () {
        return axios.get("/api/auth/user")
    },
    logoutUser: function () {
        return axios.get("/api/auth/logout")
    }

}
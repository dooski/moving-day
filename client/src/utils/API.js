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
    makeUserLogin: function (userData) {
        return axios.post("/api/auth/register_login", userData)
    }

}
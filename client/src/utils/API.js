import axios from "axios";

export default {
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
    }
}
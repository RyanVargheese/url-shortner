import axios from "axios"
import axiosInstance from "../util/axiosInstance.js";
const createShortUrl=async (url)=>{
    const {data}=await axiosInstance.post("/api/create",{url});
    return data.shortUrl;
}

export default createShortUrl;
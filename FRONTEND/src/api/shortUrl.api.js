import axiosInstance from "../util/axiosInstance.js";
const createShortUrl=async (url,slug)=>{
    const {data}=await axiosInstance.post("/api/create",{url,slug});
    return data.shortUrl;
}

export default createShortUrl;
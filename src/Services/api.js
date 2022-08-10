import axios from "axios";

const getCities = async (url) => {
    const response = await axios.get(url)
    return response.data;
    
}

export default getCities
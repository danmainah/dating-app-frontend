import axios from 'axios'
const instance = axios.create({
baseURL: "https://dating-app-backend-y4qj.onrender.com/"
})
export default instance
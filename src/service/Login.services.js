import axios from "axios"

const Login = async (data) => {
    console.log("Login", data)
try{
    return await axios.post("http://localhost:3000/login", data);

}catch(error){
console.log(error);

}

}
const Detail = () => {

}
export default {Login, Detail}
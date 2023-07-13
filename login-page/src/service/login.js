import axios from "./axios";

export const loginUser = async (user) => {
   try {
    const data = await axios.post('/login', user);
    console.log(data);
   } catch (err) {
    console.log(err);
   }
}
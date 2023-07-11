import axios from "./axios";

export const loginUser = async (user) => {
   try {
    await axios.post('/login', user);
   } catch (err) {
    console.log(err);
   }
}
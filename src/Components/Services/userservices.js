 import axios from "axios";

export const signin = async (userinput) => {
    let response = await axios.post(
        "https://bookstore.incubation.bridgelabz.com/bookstore_user/login",
        userinput
    ) 
    return response
}
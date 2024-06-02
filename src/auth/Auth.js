import axios from "axios"

export const getUserData = async ()=>{
    const token = localStorage.getItem("token")
    const id = localStorage.getItem("id")
    if(token) {
        try {
            const response = await axios.get(`https://reqres.in/api/users/${id}`,
            {
                headers:{
                    Authorization: `Bearer ${token}`,
                },
              }  
            );
            const userName = response.data.data.first_name
            return userName
        } catch (error) {
    console.log(error);        
        }
    }


}


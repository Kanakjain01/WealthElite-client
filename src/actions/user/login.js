import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import { useNavigate } from "react-router-dom"
import { createToast } from "../toast"
export const loginUser = (data) => {
    return (dispatch) => {
        loginUserHelper({ data, dispatch })
    }
}

export const loginUserHelper = async ({ data, dispatch }) => {
    const { email, password } = data
    const headers = {
        "Content-type": "application/json"
    }
    const body = JSON.stringify({
        email: email,
        password: password
    })
    const config = {
        headers,
        method: "POST",
        body
    }
    const url = base_url + "/user/loginuser"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 200) {
            localStorage.setItem("token", response_json.token)
            createToast("Successfully Loggedin", "success")
            setTimeout(() => {
                window.location.href = "/"
            }, 2000);
        }
        else{
            createToast("Invalid credentials", "error")
            
        }
        // fetch(url,config).then(response=>response.json()).then(responseJson=>{
        //     console.log(responseJson)
        //     if(responseJson){
        //         dispatch({
        //             type:CHANGE_VARIABLE,
        //             payload:{
        //                 key:"products_array",
        //                 value:responseJson.data
        //             }
        //         })
        //     }



        // })


    }
    catch (err) {
        console.log(err)
    }
}

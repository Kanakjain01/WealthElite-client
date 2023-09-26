import { base_url } from "../variables"
import { CHANGE_VARIABLE } from "../type"
import {createToast} from "../toast/index"
export const signupUser = (data) => {
    return (dispatch) => {
        signupUserHelper({ data, dispatch })
    }
}

export const signupUserHelper = async ({ data, dispatch }) => {
    const {name,email,password,phone}=data
    const headers = {
        "Content-type": "application/json"
    }
    const body = JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        password:password
    })
    const config = {
        headers,
        method: "POST",
        body
    }
    const url = base_url + "/user/createuser"
    try {
        const response = await fetch(url, config)
        const response_json = await response.json()
        if (response_json.status === 201) {
            createToast("Successfully Registered","success")
            
        }
        else{
            createToast("Unable to Register","success")
          
            
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

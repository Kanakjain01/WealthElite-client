import {CHANGE_VARIABLE} from "./type"
// export const base_url = (process.env.NEXT_PUBLIC_ENDPOINT)

// export const base_url = "https://dolphin-app-dxdkw.ondigitalocean.app"
export const base_url = "https://wealthlife-api.onrender.com/api"
export const changeVariable = (key, value) => {

    return ({

      type: CHANGE_VARIABLE,
      payload: {

          key,
          value

      }

    })
    
}

export const initialState = {
    auth: {
        user_id: localStorage.getItem("user_id") || null,
        is_loggedin: JSON.parse(localStorage.getItem("is_loggedin")) || false,
        token: localStorage.getItem("token") || ""
    }
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "AUTH":
            localStorage.setItem("token", action.userdata.token);
            localStorage.setItem("user_id", action.userdata.user._id)
            localStorage.setItem("is_loggedin", true)
            return {
                auth: {
                    user_id: action.userdata.user._id,
                    is_loggedin: true,
                    token: action.userdata.token
                }
            }
        default:
            return state
    }
}

export default reducer
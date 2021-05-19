const updateID = (id) =>{
    return {
        type: "USER_ID",
        payload: id
    }
}

const updateToken = (token) =>{
    return {
        type: "USER_TOKEN",
        payload: token
    }
}

const updateUsername = (username) =>{
    return{
        type: "USER_NAME",
        payload: username
    }
}

export {updateID, updateToken, updateUsername};

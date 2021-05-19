const updateID = (id) =>{
    return {
        type: "USER_ID",
        payload: id
    }
}

const updateUsername = (username) =>{
    return{
        type: "USER_NAME",
        payload: username
    }
}

export {updateID, updateUsername};

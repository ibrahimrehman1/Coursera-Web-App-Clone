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

const updateImageURI = (imageURI) =>{
    return{
        type: "IMAGE_URI",
        payload: imageURI
    }
}



export {updateID, updateUsername, updateImageURI};

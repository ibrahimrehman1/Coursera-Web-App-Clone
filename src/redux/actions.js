const updateID = (id) =>{
    return {
        type: "USER_ID",
        payload: id
    }
}

const setUserData = (username, imageURI) =>{
    return{
        type: "SET_USER_DATA",
        payload: {username, imageURI}
    }
}


export {updateID, setUserData};

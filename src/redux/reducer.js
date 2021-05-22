const initialState = {
    userID: "",
    username: "",
    imageURI: ""
}

export const UserDataReducer = (state = initialState, action) =>{
    switch (action.type){
        case "USER_ID":
            return {...state, userID: action.payload};
            break;

        case "USER_NAME":
            return {...state, username: action.payload}
            break;

        case "IMAGE_URI":
            return {...state, imageURI: action.payload}
            break;

        default:
            return state;
    }
}
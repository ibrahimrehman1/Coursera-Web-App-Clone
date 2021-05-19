const initialState = {
    userID: "",
    token: "",
    username: ""
}

export const UserDataReducer = (state = initialState, action) =>{
    switch (action.type){
        case "USER_ID":
            return {...state, userID: action.payload};
            break;

        case "USER_TOKEN":
            return {...state, token: action.payload};
            break;

        case "USER_NAME":
            return {...state, username: action.payload}
            break;

        default:
            return state;
    }
}
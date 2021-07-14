let initialState = {
    user: ""
}

export const userReducer = (state = null, action) =>{
    switch(action.type){
        case "REGISTRATION":
            return {
                ...state,
                user: action.payload
                
            } 
        case "LOGGED_IN_USER":
            return  {
                ...state,
                user: action.payload
                
            } 
        case "LOGOUT":
            return  {
                ...state,
                user: action.payload
                
            } 
        default:
            return  {
                ...state,
                user: action.payload
                
            } 
    }
};


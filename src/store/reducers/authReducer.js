import update from 'immutability-helper';
const defaultState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    user:{
        email:"goutam420.giri@gmail.com",
        password:"Asd!23"
    }
}
const authReducer = (state = defaultState, action) => {
    //return state
    switch(action.type){

        case 'AUTH_START':
            
            return {
                ...state,
                error: null,
                loading: true
            }

        case 'AUTH_PROCESS':
            
            if(action.email == state.user.email && action.password == state.user.password){
                return {
                    ...state,
                    token: 'Asdf!2345asdfe234',
                    userId:1,
                    error:null,
                    loading: false
                  }
            }else{
                return {
                    ...state,
                    error:'Wrong Credentials',
                    loading: false
                  }
            }

        case 'AUTH_LOGOUT':
    
            return {
                ...state,
                token: null,
                 userId: null
            }
        default:
            return state;
    }

}


export default authReducer
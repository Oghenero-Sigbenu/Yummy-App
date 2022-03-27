import {
    SIGNUP_START,
    SIGNUP_SUCCESSFUL,
    SIGNUP_FAILED,
    LOGIN_START,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED
}  from "../actions/types";


const initialState = {
    loading: false,
    userData: {},
    error: ""
   
  }
  
  export const user = (state = initialState, action) => {
    switch (action.type) {
   
      case LOGIN_START: {
        return { 
          ...state, 
          loading: true
         }
      }
      case LOGIN_SUCCESSFUL: {
        return { 
          ...state, 
          loading: false,
          userData: action.payload
         }
      }
      case LOGIN_FAILED: {
        return { 
          ...state, 
          loading: false,
          error: action.payload  
         }
      } 
      case SIGNUP_START: {
        return { 
          ...state, 
          loading: true
         }
      }
      case SIGNUP_SUCCESSFUL: {
        return { 
          ...state, 
          loading: false,
          userData: action.payload
         }
      }
      case SIGNUP_FAILED: {
        return { 
          ...state, 
          loading: false,
          error: action.payload  
         }
      } 
      default: {
        return state
      }
    }
  }
  
  export default user;
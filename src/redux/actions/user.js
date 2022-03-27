import {
    SIGNUP_START,
    SIGNUP_SUCCESSFUL,
    SIGNUP_FAILED,
    LOGIN_START,
    LOGIN_SUCCESSFUL,
    LOGIN_FAILED
}  from "./types";
import {http} from "../../utility/";

export const start = () => ({
  type:  LOGIN_START
});

export const loginSuccess = (data) => ({ 
    type: LOGIN_SUCCESSFUL,
    payload: data
});

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload:error
});

export const registerStart = () => ({
    type:  SIGNUP_START
  });

export const registerSuccess = (data) => ({ 
    type: SIGNUP_SUCCESSFUL,
    payload: data
});

export const registerFailed = error => ({
  type:SIGNUP_FAILED,
  payload:error
});

export const signIn = (data) => async (dispatch) => {
    const {user, history} = data;
   try {
       dispatch(start())
       const response = await http({
         method: "post",
         url: `/auth/login/`,
         data: user
       })
       const { data } = response;
       sessionStorage.setItem('isLogin', true);
       sessionStorage.setItem('token', data.token);
       sessionStorage.setItem('userData', JSON.stringify(data.user));
         history.push("/home")
       return dispatch(loginSuccess(response.data))
     } catch (error) {
       return dispatch(loginFailed(error.response))
     }
   }

   export const signUp = (data) => async (dispatch) => {
     const {user, history} = data;
   try {
       dispatch(registerStart())
       const response = await http({
         method: "post",
         url: `/auth/create/`,
         data: user
       })
       const { data } = response;
       sessionStorage.setItem('isLogin', true);
       sessionStorage.setItem('token', data.token);
       sessionStorage.setItem('userData', JSON.stringify(data.user));
       history.push("/home");
       return dispatch(registerSuccess(response.data))
     } catch (error) {
      //  return dispatch(registerFailed(error.response))
     }
   }
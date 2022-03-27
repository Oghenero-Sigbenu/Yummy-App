import {
   GET_RECIPE_START,
   GET_RECIPE_SUCCESSFUL,
   GET_RECIPE_FAILED,
   GET_RECIPES_START,
   GET_RECIPES_FAILED,
   GET_RECIPES_SUCCESSFUL,
   CREATE_RECIPE_START,
   CREATE_RECIPE_SUCCESSFUL,
   CREATE_RECIPE_FAILED
}  from "./types";
import {http} from "../../utility/";

export const getRecipeStarted = () => ({
  type: GET_RECIPES_START
});

export const getRecipeSuccess = (data) => ({ 
    type: LOGIN_SUCCESSFUL,
    payload: data
});

export const getRecipeFailed = error => ({
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
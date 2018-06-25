import {FETCH_WEATHER} from "../actions/index";


export default function(state= [], action){
   switch (action.type){
     case FETCH_WEATHER:
       //return state.concat([action.payload.data]); old format
       return [action.payload.data, ...state ];//ES16 format
   }
  return state;
}

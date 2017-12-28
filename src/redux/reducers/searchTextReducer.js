import * as types from '../constants'

export default function reducer(state={
    position: [],
    fetching: false,
    fetched: false,
    error: null
  }, action){
    switch(action.type){
      case types.SEARCHTEXT.REQUEST:default:{
        return {...state, fetching: true}
      }
      case types.SEARCHTEXT.FAILURE:{
        return {...state, fetching: false, error: action.payload} 
      }
      case types.SEARCHTEXT.SUCCESS:{
        return {
          ...state,
          fetching: false,
          fetched: true,
          position: action.payload
        }
      }
  }
}
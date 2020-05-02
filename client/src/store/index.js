import {createStore, combineReducers} from 'redux'
const initialState = {
  companies: [{ name: "a", address: "b", revenue: "c", offices: [], phone: "(d e)" }],
}

function companiesReducer(state = initialState, action){
  switch(action.type){
    case "addCompany":
      console.log(action.payload)
      return {...state,companies: [...state.companies,action.payload]}
    case "addOffice":
      return {...state,company: []}
    case "deleteCompany":
      return {...state,company: []}
    case "deleteOffice":
      return {...state,company: []}
    default:
      return state
  }
}

const reducers = combineReducers({
  companiesReducer
})

const store = createStore(reducers)

export default store
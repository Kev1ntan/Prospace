import {createStore, combineReducers} from 'redux'
import axios from 'axios'

const initialState = {
  companies: [],
  currentCompany:{}
}

function companiesReducer(state = initialState, action){
  switch(action.type){
    case "getData":
      return {...state,companies: action.payload}
    case "addCompany":
      console.log('add<<<<<<<<<<',action.payload)
      return {...state,companies: action.payload}
    case "setCompany":
      let setCompany = state.companies.filter(company => company.id == action.id)
      console.log(action.id,setCompany,state.companies)
      return {...state,currentCompany: setCompany[0]}
    case "addOffice":
      return {...state,companies: action.payload}
    case "deleteCompany":
      // let newCompanies = state.companies.filter(company => company.id !== action.companyId)
      return {...state,companies: action.payload}
    case "deleteOffice":
      // let filteredCompanies = state.companies.filter(company => company.id != action.companyId)
      // let foundCompany= state.companies.filter(company => company.id == action.companyId)
      // let filterOffice = foundCompany[0].offices.filter(office => office.id != action.officeId)
      // let updateCompany = {...foundCompany[0],offices: filterOffice}
      // let mergeCompanies = [...filteredCompanies,updateCompany]
      // let sortedCompanies = mergeCompanies.sort(function(a,b){return a.id-b.id})
      // console.log(action.companyId,action.officeId)
      return {...state,companies: action.payload}
    default:
      return state
  }
}

const reducers = combineReducers({
  companiesReducer
})

const store = createStore(reducers)

export default store
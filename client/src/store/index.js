import {createStore, combineReducers} from 'redux'
const initialState = {
  companies: [{ id: 1, name: "sa", address: "sa", revenue: "32", offices: [], phone: "(3) 3" },{ id: 2, name: "sa", address: "sa", revenue: "32", offices: [], phone: "(3) 3" }],
}

function companiesReducer(state = initialState, action){
  switch(action.type){
    case "addCompany":
      console.log(action.payload)
      return {...state,companies: [...state.companies,action.payload]}
    case "addOffice":
      let filterCompanies = state.companies.filter(company => company.id != action.id)
      let findCompany= state.companies.filter(company => company.id == action.id)
      let updatedCompany = {...findCompany[0],offices: [...findCompany[0].offices,action.payload]}
      let mergedCompanies = [...filterCompanies,updatedCompany]
      let sortCompanies = mergedCompanies.sort(function(a,b){return a.id-b.id})
      console.log(filterCompanies,findCompany,updatedCompany,sortCompanies,action.id)
      return {...state,companies: sortCompanies}
    case "deleteCompany":
      let newCompanies = state.companies.filter(company => company.id !== action.id)
      return {...state,companies: newCompanies}
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
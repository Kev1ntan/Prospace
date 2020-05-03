import {createStore, combineReducers} from 'redux'
const initialState = {
  companies: [{ id: 1, name: "sa", address: "sa", revenue: "32", offices: [], phone: "(3) 3" },{ id: 2, name: "sa", address: "sa", revenue: "32", offices: [], phone: "(3) 3" }],
  currentCompany:{}
}

function companiesReducer(state = initialState, action){
  switch(action.type){
    case "addCompany":
      console.log(action.payload)
      return {...state,companies: [...state.companies,action.payload]}
    case "setCompany":
      console.log(action.payload)
      let setCompany = state.companies.filter(company => company.id == action.id)
      return {...state,currentCompany: setCompany[0]}
    case "addOffice":
      let filterCompanies = state.companies.filter(company => company.id != action.id)
      let findCompany= state.companies.filter(company => company.id == action.id)
      let updatedCompany = {...findCompany[0],offices: [...findCompany[0].offices,action.payload]}
      let mergedCompanies = [...filterCompanies,updatedCompany]
      let sortCompanies = mergedCompanies.sort(function(a,b){return a.id-b.id})
      console.log(filterCompanies,findCompany,updatedCompany,sortCompanies,action.id)
      return {...state,companies: sortCompanies}
    case "deleteCompany":
      let newCompanies = state.companies.filter(company => company.id !== action.companyId)
      return {...state,companies: newCompanies}
    case "deleteOffice":
      let filteredCompanies = state.companies.filter(company => company.id != action.companyId)
      let foundCompany= state.companies.filter(company => company.id == action.companyId)
      let filterOffice = foundCompany[0].offices.filter(office => office.id != action.officeId)
      let updateCompany = {...foundCompany[0],offices: filterOffice}
      let mergeCompanies = [...filteredCompanies,updateCompany]
      let sortedCompanies = mergeCompanies.sort(function(a,b){return a.id-b.id})
      console.log(action.companyId,action.officeId)
      return {...state,companies: sortedCompanies}
    default:
      return state
  }
}

const reducers = combineReducers({
  companiesReducer
})

const store = createStore(reducers)

export default store
import React from "react";
import {useStore} from "react-redux"
import {
  Form
} from '../components'

export default function OverviewPage() {
  let store = useStore()
  function checkCompanies() {
    if(store.getState().companiesReducer.companies.length === 0) {
      return (<h4>there is no companies created yet.</h4>)
    }
  }
  return (
    <div>
      <div style={{display: 'flex'}}>
        <Form formName='company'/>
        <Form formName='office'/>
      </div>
      <h3>Companies</h3>
      {checkCompanies()}
    </div>
  )
}
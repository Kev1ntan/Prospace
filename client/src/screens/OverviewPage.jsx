import React from "react";
import {useStore, useSelector} from "react-redux"
import {
  Form,
  Card
} from '../components'

export default function OverviewPage() {
  let store = useStore()
  useSelector(state=>state)
  function checkCompanies() {
    if(store.getState().companiesReducer.companies.length === 0) {
      return (<h4>there is no companies created yet.</h4>)
    }else{
      return (
        <Card cardName='company'/>
      )
    }
  }
  console.log('ref')
  return (
    <div style={{textAlign: 'left', maxWidth: '750px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}>
        <Form formName='company'/>
        <div style={{borderLeft: '1px solid #ced4da'}}></div>
        <Form formName='office'/>
      </div>
      <div style={{borderTop: '1px solid #ced4da', margin: '5px'}}>
        <div style={{margin: '5px'}}>
          <h3 style={{margin: '10px 0px'}}>Companies</h3>
          {checkCompanies()}
        </div>
      </div>
    </div>
  )
}
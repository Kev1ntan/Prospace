import React from "react";
import {useStore, useSelector} from "react-redux"
import {
  Form,
  Card
} from '../components'

let styles = {
  container: {
    minHeight: '1000px',
    maxWidth: '750px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    margin: 'auto',
    marginTop:'5px'
  },
}


export default function OverviewPage() {
  let store = useStore()
  useSelector(state=>state.companiesReducer.companies)
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
    <div style={styles.container}>
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
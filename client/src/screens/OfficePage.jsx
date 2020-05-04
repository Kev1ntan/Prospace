import React, { useEffect } from "react";
import {useStore, useDispatch, useSelector} from "react-redux"
import {
  useHistory,
  useParams
} from 'react-router-dom'
import {
  Card,
} from '../components'
import {
  Button,
} from 'react-bootstrap';
import axios from 'axios'
const baseUrl = 'http://localhost:3001/'
let styles = {
  container: {
    minHeight: '800px',
    maxWidth: '750px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    margin: 'auto',
    marginTop:'5px'
  },
  label: {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  button: {
    marginBottom: '10px',
    border: 'none',
    color: 'black',
    width: '200px',
    backgroundColor: '#ced4da',
  },
}

export default function OfficePage() {
  let history = useHistory()
  let dispatch = useDispatch()
  let store = useStore()
  let {id,name} = useParams()

  useSelector(state=>state.companiesReducer.companies)
  function checkCompany() {
    let company = store.getState().companiesReducer.currentCompany
    console.log(company)
    return (
      <div style={{textAlign: 'left', margin: '10px'}}>
        <h1 style={{borderBottom: '1px solid #ced4da'}}>{name}</h1>
        <div style={{borderBottom: '1px solid #ced4da', padding: '5px'}}>
          <div style={styles.label}>
            Address:
          </div>
          <div>
            {company.address}
          </div>
          <div style={styles.label}>
            Revenue:
          </div>
          <div>
            {company.revenue}
          </div>
          <div style={styles.label}>
            Phone No:
          </div>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {company.phone}
            <Button style={styles.button} onClick={() => history.push('/')} variant="secondary">Back to Overview</Button>
          </div>
        </div>
        <div style={{margin: '5px'}}>
          <h3 style={{margin: '10px 0px', fontWeight: 'normal'}}>Offices</h3>
          {checkOffice()}
        </div>
      </div>
    )
    function checkOffice() {
      let company = store.getState().companiesReducer.currentCompany
      if(company.Offices.length === 0) {
        return (
          <h4>There is no office created yet.</h4>
        )
      }else {
        return (
          <Card cardName='office'/>
        )
      }
    }
  }
  return (
    <div style={styles.container}>
      {checkCompany()}
    </div>
  )
}
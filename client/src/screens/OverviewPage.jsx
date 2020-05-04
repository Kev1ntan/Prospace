import React,{useEffect} from "react";
import {useStore, useSelector, useDispatch} from "react-redux"
import {
  Form,
  Card
} from '../components'
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
}


export default function OverviewPage() {
  let store = useStore()
  let dispatch = useDispatch()
  useSelector(state=>state.companiesReducer.companies)
  useEffect(()=>{
    axios({
      url: `${baseUrl}companies`,
      method: 'GET',
    })
      .then(resp=>{
        console.log(resp)
        dispatch({type:'getData',payload: resp.data})
      })
  },[])
  function checkCompanies() {
    if(store.getState().companiesReducer.companies.length === 0) {
      return (<h4>there is no companies created yet.</h4>)
    }else{
      return (
        <Card cardName='company'/>
      )
    }
  }
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
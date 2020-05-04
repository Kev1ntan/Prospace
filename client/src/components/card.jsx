import React, { useEffect } from "react"
import Swal from 'sweetalert2'
import {useStore, useDispatch, useSelector} from "react-redux"
import {
  useHistory,
  useParams
} from 'react-router-dom'
import {
  Card
} from 'react-bootstrap';
import axios from 'axios'
const baseUrl = 'http://localhost:3001/'

let styles = {
  subtitle: {
    marginTop: '0px'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  companyCard: {
    borderRadius: '5px',
    border: '1px solid #ced4da',
    minWidth: '350px',
    textAlign: 'left',
    paddingLeft: '5px',
    paddingRight: '5px',
    height: '250px',
    marginBottom: '25px',
  },
  officeCard: {
    borderRadius: '5px',
    border: '1px solid #ced4da',
    minWidth: '350px',
    textAlign: 'left',
    paddingLeft: '5px',
    paddingRight: '5px',
    height: '200px',
    marginBottom: '25px',
  }
}

export default function CardComponent(props) {
  let store = useStore()
  let history = useHistory()
  let dispatch = useDispatch()
  let {id} = useParams()
  const company = useSelector(state => state.companiesReducer.currentCompany)
  function deleteCompany(companyId,name) {
    Swal.fire({
      title: `are you sure want to delete ${name} company?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        axios({
          url: `${baseUrl}deleteCompany/${companyId}`,
          method: 'DELETE',
        })
          .then(resp=>{
            console.log(resp)
            dispatch({type: 'deleteCompany', payload: resp.data})
            Swal.fire({
              toast: true,
              position: 'top',
              text: `${name} company has been deleted.`,
              timerProgressBar:true,
              showConfirmButton: false,
              width: 150,
              timer: 2000
            })
          })
      }
    })
  }
  
  function deleteOffice(officeId,name) {
    Swal.fire({
      title: `are you sure want to delete ${name} office?`,
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        axios({
          url: `${baseUrl}deleteOffice/${officeId}`,
          method: 'DELETE',
        })
          .then(resp=>{
            console.log(resp)
            dispatch({type: 'deleteOffice', payload: resp.data})
            dispatch({type:'setCompany', id})
            Swal.fire({
              toast: true,
              position: 'top',
              text: `${name} office has been deleted.`,
              timerProgressBar:true,
              showConfirmButton: false,
              width: 150,
              timer: 2000
            })
          })
      }
    })
  }

  function officePage(id,name) {
    console.log(id,name)
    dispatch({type:'setCompany', id})
    history.push(`/companyDetail/${id}/${name}`)
  }

  function renderCard() {
    if(props.cardName === 'company') {
      return (
        <div style={styles.container}>
          {
            store.getState().companiesReducer.companies.map(company=>{
              return (
                <Card style={styles.companyCard}>
                  <Card.Body style={{paddingTop: '0.5rem'}}>
                    <div 
                      style={{borderBottom: '1px solid #ced4da',
                      justifyContent: 'space-between',
                      display: 'flex',
                      marginBottom: '1rem'}}>
                      <h3>{company.name}</h3>
                      <div style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => deleteCompany(company.id,company.name)}>&#x26CC;</div>
                    </div>
                    <div style={{cursor: 'pointer'}} onClick={() => officePage(company.id,company.name)}>
                      <Card.Subtitle style={styles.subtitle}>Address:</Card.Subtitle>
                      <Card.Text className="mb-2 text-muted">
                        {company.address}
                      </Card.Text>
                      <Card.Subtitle>Revenue:</Card.Subtitle>
                      <Card.Text className="mb-2 text-muted">
                        {company.revenue}
                      </Card.Text>
                      <Card.Subtitle>Phone No:</Card.Subtitle>
                      <Card.Text className="mb-2 text-muted">
                        {company.phone}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
      )
    }else if(props.cardName === 'office') {
      return (
        <div style={styles.container}>
          {
            company.Offices.map(office=>{
              return (
                <Card style={styles.officeCard}>
                  <Card.Body style={{paddingTop: '0.5rem'}}>
                    <div 
                      style={{borderBottom: '1px solid #ced4da',
                      justifyContent: 'space-between',
                      display: 'flex',
                      marginBottom: '1rem'}}>
                      <h3>{office.name}</h3>
                      <div style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => deleteOffice(office.id,office.name)}>&#x26CC;</div>
                    </div>
                    <Card.Subtitle style={styles.subtitle}>Location:</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">
                      Lat - {office.latitude}
                    </Card.Text>
                    <Card.Text className="mb-2 text-muted" style={{marginTop: '-10px', marginBottom: '5px'}}>
                      Log - {office.longitude}
                    </Card.Text>
                    <Card.Subtitle>Office Start Date:</Card.Subtitle>
                    <Card.Text className="mb-2 text-muted">
                      {office.start_date.substring(0,10)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
      )
    }
  }
  return(
    <div>
      {renderCard()}
    </div>
  )
}
import React, { useEffect } from "react";
import Swal from 'sweetalert2'
import {useStore, useDispatch, useSelector} from "react-redux"
import {
  Card
} from 'react-bootstrap';

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
  card: {
    borderRadius: '5px',
    border: '1px solid #ced4da',
    minWidth: '350px',
    textAlign: 'left',
    paddingLeft: '5px',
    paddingRight: '5px',
    height: '250px',
    marginBottom: '25px'
  }
}

export default function CardComponent(props) {
  let store = useStore()
  let dispatch = useDispatch()
  function deleteCompany(id,name) {
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
        dispatch({type: 'deleteCompany', id})
        Swal.fire({
          toast: true,
          position: 'top',
          text: `${name} company has been deleted.`,
          timerProgressBar:true,
          showConfirmButton: false,
          width: 150,
          timer: 2000
        })
      }
    })
  }

  function officePage(id) {
    
  }

  function renderCard() {
    if(props.cardName === 'company') {
      return (
        <div style={styles.container}>
          {
            store.getState().companiesReducer.companies.map(company=>{
              return (
                <Card style={styles.card} onClick={() => officePage(company.id)}>
                  <Card.Body style={{paddingTop: '0.5rem'}}>
                    <div 
                      style={{borderBottom: '1px solid #ced4da',
                      justifyContent: 'space-between',
                      display: 'flex',
                      marginBottom: '1rem'}}>
                      <h3>{company.name}</h3>
                      <div style={{fontSize: '20px', cursor: 'pointer'}} onClick={() => deleteCompany(company.id,company.name)}>&#x26CC;</div>
                    </div>
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
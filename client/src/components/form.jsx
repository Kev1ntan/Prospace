import React, {useRef} from "react";
import {useStore, useDispatch, useSelector} from "react-redux"
import Swal from 'sweetalert2'
import axios from 'axios'
import PhoneCode from 'react-phone-code'
import {
  Button,
  Form,
  Overlay,
  Tooltip,
} from 'react-bootstrap';

const baseUrl = 'http://localhost:3001/'

const styles = {
  title: {
    'fontSize': '22px',
  },
  label: {
    'fontSize': '14px',
    'fontWeight': 'bold'
  },
  input: {
    width: '350px',
  },
  number: {
    width: '230px'
  },
  code: {
    marginRight: '5px',
    width: '65px'
  },
  location: {
    width: '170px'
  },
  select: {
    height: '38px',
    borderRadius: '5px',
    border: '1px solid #ced4da',
    backgroundColor: 'transparent',
    width: '350px'
  },
  button: {
    marginTop: '15px',
    marginBottom: '25px',
    border: 'none',
    color: 'black',
    width: '350px',
    backgroundColor: '#ced4da',
  },
}

export default function FormComponent(props) {
  let store = useStore()
  let dispatch = useDispatch()
  const [companyName, setCompanyName] = React.useState('')
  const [companyAddress, setCompanyAddress] = React.useState('')
  const [companyRevenue, setCompanyRevenue] = React.useState('')
  const [companyPhoneCode, setCompanyPhoneCode] = React.useState('')
  const [companyPhoneNum, setCompanyPhoneNum] = React.useState('')
  const [officeName, setOfficeName] = React.useState('')
  const [officeLongitude, setOfficeLongitude] = React.useState('')
  const [officeLatitude, setOfficeLatitude] = React.useState('')
  const [officeStartDate, setOfficeStartDate] = React.useState('')
  const [companyId, setCompanyId] = React.useState('')
  const [defaultCode, setDefaultCode] = React.useState('select country')


  const dropdown = useSelector(state=>state.companiesReducer.companies)
  const [showCompanyNameToolTipMessage, setShowCompanyNameToolTipMessage] = React.useState(false)
  const [showCompanyAddressToolTipMessage, setShowCompanyAddressToolTipMessage] = React.useState(false)
  const [showCompanyRevenueToolTipMessage, setShowCompanyRevenueToolTipMessage] = React.useState(false)
  const [showCompanyPhoneCodeToolTipMessage, setShowCompanyPhoneCodeToolTipMessage] = React.useState(false)
  const [showCompanyPhoneNumToolTipMessage, setShowCompanyPhoneNumToolTipMessage] = React.useState(false)

  const [showOfficeNameToolTipMessage, setShowOfficeNameToolTipMessage] = React.useState(false)
  const [showOfficeLatitudeToolTipMessage, setShowOfficeLatitudeToolTipMessage] = React.useState(false)
  const [showOfficeLongitudeToolTipMessage, setShowOfficeLongitudeToolTipMessage] = React.useState(false)
  const [showOfficeStartDateToolTipMessage, setShowOfficeStartDateToolTipMessage] = React.useState(false)
  const [showOfficeCompanyNameToolTipMessage, setShowOfficeCompanyNameToolTipMessage] = React.useState(false)

  const [companyNameToolTipMessage,setCompanyNameToolTipMessage] = React.useState('')
  const [companyAddressToolTipMessage,setCompanyAddressToolTipMessage] = React.useState('')
  const [companyRevenueToolTipMessage,setCompanyRevenueToolTipMessage] = React.useState('')
  const [companyPhoneCodeToolTipMessage,setCompanyPhoneCodeToolTipMessage] = React.useState('')
  const [companyPhoneNumToolTipMessage,setCompanyPhoneNumToolTipMessage] = React.useState('')

  const [officeNameToolTipMessage,setOfficeNameToolTipMessage] = React.useState('')
  const [officeLatitudeToolTipMessage,setOfficeLatitudeToolTipMessage] = React.useState('')
  const [officeLongitudeToolTipMessage,setOfficeLongitudeToolTipMessage] = React.useState('')
  const [officeStartDateToolTipMessage,setOfficeStartDateToolTipMessage] = React.useState('')
  const [officeCompanyNameToolTipMessage,setOfficeCompanyNameToolTipMessage] = React.useState('')

  const companyNameTarget = useRef(null)
  const companyAddressTarget = useRef(null)
  const companyRevenueTarget = useRef(null)
  const companyPhoneCodeTarget = useRef(null)
  const companyPhoneNumTarget = useRef(null)

  const officeNameTarget = useRef(null)
  const officeLongitudeTarget = useRef(null)
  const officeLatitudeTarget = useRef(null)
  const officeStartDateTarget = useRef(null)
  const officeCompanyNameTarget = useRef(null)

  function validate(type) {
    let revenue = Math.floor(Number(companyRevenue))
    let phoneNum = Math.floor(Number(companyPhoneNum))
    let latitude = Number(officeLatitude)
    let longitude = Number(officeLongitude)

    let valid = true
    if(type === 'company') {
      if(companyName.trim() === '') {
        setCompanyNameToolTipMessage('Please fill the name.')
        setShowCompanyNameToolTipMessage(true)
        valid = false
      }
      if(companyAddress.trim() === '') {
        setCompanyAddressToolTipMessage('Please fill the address.')
        setShowCompanyAddressToolTipMessage(true)
        valid = false
      }
      if(companyRevenue.trim() === '') {
        setCompanyRevenueToolTipMessage('Please fill the revenue.')
        setShowCompanyRevenueToolTipMessage(true)
        valid = false
      }else if(revenue === Infinity || String(revenue) !== companyRevenue || revenue < 0){
        setCompanyRevenueToolTipMessage('Revenue must be positive integer.')
        setShowCompanyRevenueToolTipMessage(true)
        valid = false
      }
      if(companyPhoneCode.trim() === '') {
        setCompanyPhoneCodeToolTipMessage('Please select the phone code.')
        setShowCompanyPhoneCodeToolTipMessage(true)
        valid = false
      }else if(companyPhoneNum.trim() === '') {
        setCompanyPhoneNumToolTipMessage('Please fill the phone number.')
        setShowCompanyPhoneNumToolTipMessage(true)
        valid = false
      }else if(phoneNum === Infinity || String(phoneNum) !== companyPhoneNum || phoneNum < 0){
        setCompanyPhoneNumToolTipMessage('Phone number must be positive integer.')
        setShowCompanyPhoneNumToolTipMessage(true)
        valid = false
      }
      console.log(companyName,companyAddress,companyPhoneCode,companyPhoneNum,companyRevenue)
    }else if(type === 'office') {
      console.log(String(officeLatitude),latitude === Infinity , String(officeLatitude).indexOf('.') === -1 , latitude < 0)
      if(officeName.trim() === '') {
        setOfficeNameToolTipMessage('Please fill the name.')
        setShowOfficeNameToolTipMessage(true)
        valid = false
      }
      if(officeLatitude.trim() === '') {
        setOfficeLatitudeToolTipMessage('Please fill the latitude.')
        setShowOfficeLatitudeToolTipMessage(true)
        valid = false
      }else if(latitude === Infinity || String(latitude).indexOf('.') === -1 || latitude < 0){
        setOfficeLatitudeToolTipMessage('Location latitude must be positive float integer.')
        setShowOfficeLatitudeToolTipMessage(true)
        valid = false
      }else if(officeLongitude.trim() === '') {
        setOfficeLongitudeToolTipMessage('Please fill the longitude.')
        setShowOfficeLongitudeToolTipMessage(true)
        valid = false
      }else if(longitude === Infinity || String(longitude).indexOf('.') === -1 || longitude < 0){
        setOfficeLongitudeToolTipMessage('Location longitude must be positive float integer.')
        setShowOfficeLongitudeToolTipMessage(true)
        valid = false
      }
      if(officeStartDate.trim() === '') {
        setOfficeStartDateToolTipMessage('Please fill the start date.')
        setShowOfficeStartDateToolTipMessage(true)
        valid = false
      }
      if(companyId === '') {
        setOfficeCompanyNameToolTipMessage('Please select the company.')
        setShowOfficeCompanyNameToolTipMessage(true)
        valid = false
      }
    }
    if(valid) {
      return {status: true}
    }else {
      return {status: false}
    }
  }

  function submitCompanyForm(e) {
    e.preventDefault()
    console.log(store.getState().companiesReducer.companies)
    let companies = [...store.getState().companiesReducer.companies]
    if(validate('company').status){
      let data = {
        // id: companies[companies.length-1].id + 1,
        name: companyName,
        address: companyAddress,
        revenue: companyRevenue,
        // offices: [],
        phone: `(${companyPhoneCode}) ${companyPhoneNum}`
      }
      resetForm()
      axios({
        url: `${baseUrl}addCompany`,
        method: 'POST',
        data
      })
        .then(resp=>{
          console.log("added")
          console.log(resp)
          dispatch({type: 'addCompany', payload: resp.data})
          Swal.fire({
            toast: true,
            position: 'top',
            text: `${companyName} company has been created.`,
            timerProgressBar:true,
            showConfirmButton: false,
            width: 150,
            timer: 2000
          })
        })
        .catch(error=>{
          console.log("error")
          console.log(error.response)
        })
        console.log(companies,store.getState().companiesReducer.companies)
      }
  }
    
  function resetForm() {
    setCompanyName('')
    setCompanyAddress('')
    setCompanyRevenue('')
    setCompanyPhoneCode('')
    setCompanyPhoneNum('')
    setOfficeName('')
    setOfficeLongitude('')
    setOfficeLatitude('')
    setOfficeStartDate('')
    setDefaultCode('select country')
  }
    
  function submitOfficeForm(e) {
    e.preventDefault()
    console.log(officeStartDate)
    // let companies = [...store.getState().companiesReducer.companies]
    // let findCompany = companies.filter(company => company.id == companyId)
    // console.log(officeName,officeLatitude,officeLongitude,companyId,officeStartDate,findCompany,companies,companyId)
    // let officeId
    // if(findCompany[0].offices.length === 0){
    //   officeId = 0
    // }else{
    //   officeId = findCompany[0].offices[findCompany[0].offices.length-1].id + 1
    // }
    if(validate('office').status){
      let officeData = {
        // id: officeId,
        name: officeName,
        latitude: officeLatitude,
        longitude: officeLongitude,
        start_date: officeStartDate,
        CompanyId: companyId
      }
      // dispatch({type: 'addOffice', payload: officeData, id: companyId})
      resetForm()
      axios({
        url: `${baseUrl}addOffice`,
        method: 'POST',
        data: officeData
      })
        .then(resp=>{
          console.log("added")
          Swal.fire({
            toast: true,
            position: 'top',
            text: `${officeName} office has been created.`,
            timerProgressBar:true,
            showConfirmButton: false,
            width: 150,
            timer: 2000
          })
          console.log(resp)
          dispatch({type: 'addOffice', payload: resp.data})
        })
        .catch(error=>{
          console.log("error")
          console.log(error.response)
        })
    }
  }
  function renderForm() {
    if(props.formName === 'company'){
      return (
      <Form onSubmit={submitCompanyForm}>
        <Form.Label style={styles.title}>Create Company</Form.Label><br></br>
        <Form.Label style={styles.label}>Name:</Form.Label>
        <Form.Control
          ref={companyNameTarget}
          onClick={() => setShowCompanyNameToolTipMessage(false)}
          onChange={(e) => setCompanyName(e.target.value)}
          style={styles.input}
          value={companyName}
          type="text"
          placeholder="name"
        />
        <Overlay target={companyNameTarget.current} show={showCompanyNameToolTipMessage} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {companyNameToolTipMessage}
            </Tooltip>
          )}
        </Overlay>
        <Form.Label style={styles.label}>Address:</Form.Label>
        <Form.Control
          ref={companyAddressTarget}
          onClick={() => setShowCompanyAddressToolTipMessage(false)}
          onChange={(e) => setCompanyAddress(e.target.value)}
          value={companyAddress}
          style={styles.input}
          type="text"
          placeholder="address"
        />
         <Overlay target={companyAddressTarget.current} show={showCompanyAddressToolTipMessage} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {companyAddressToolTipMessage}
            </Tooltip>
          )}
        </Overlay>
        <Form.Label style={styles.label}>Revenue:</Form.Label>
        <Form.Control
          ref={companyRevenueTarget}
          onClick={() => setShowCompanyRevenueToolTipMessage(false)}
          onChange={(e) => setCompanyRevenue(e.target.value)}
          value={companyRevenue}
          style={styles.input}
          type="text"
          placeholder="revenue"
        />
        <Overlay target={companyRevenueTarget.current} show={showCompanyRevenueToolTipMessage} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {companyRevenueToolTipMessage}
            </Tooltip>
          )}
        </Overlay>
        <Form.Label style={styles.label}>Phone No:</Form.Label>
        <div style={{display: 'flex'}}>
          <div ref={companyPhoneCodeTarget} onClick={() => setShowCompanyPhoneCodeToolTipMessage(false)}>
            <PhoneCode
              onSelect={code => setCompanyPhoneCode(code)}
              defaultValue={defaultCode}
              id='phoneCode'
            />
          </div>
          <div>
            <Form.Control
              value={companyPhoneCode}
              style={styles.code}
              type="text"
              placeholder="code"
              disabled
            />
            <Overlay target={companyPhoneCodeTarget.current} show={showCompanyPhoneCodeToolTipMessage} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  {companyPhoneCodeToolTipMessage}
                </Tooltip>
              )}
            </Overlay>
          </div>
          <div>
            <Form.Control
              ref={companyPhoneNumTarget}
              onClick={() => setShowCompanyPhoneNumToolTipMessage(false)}
              onChange={(e) => setCompanyPhoneNum(e.target.value)}
              value={companyPhoneNum}
              style={styles.number}
              type="text"
              placeholder="number"
            />
            <Overlay target={companyPhoneNumTarget.current} show={showCompanyPhoneNumToolTipMessage} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  {companyPhoneNumToolTipMessage}
                </Tooltip>
              )}
            </Overlay>
          </div>
        </div>
        <Button style={styles.button} type='submit' variant="secondary">Create</Button>
      </Form>)
    }else if(props.formName === 'office') {
      return (
      <Form onSubmit={submitOfficeForm}>
        <Form.Label style={styles.title}>Create Office</Form.Label><br></br>
        <Form.Label style={styles.label}>Name:</Form.Label>
        <Form.Control
          ref={officeNameTarget}
          onClick={() => setShowOfficeNameToolTipMessage(false)}
          onChange={(e) => setOfficeName(e.target.value)}
          value={officeName}
          style={styles.input}
          type="text"
          placeholder="name"
        />
        <Overlay target={officeNameTarget.current} show={showOfficeNameToolTipMessage} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {officeNameToolTipMessage}
            </Tooltip>
          )}
        </Overlay>
        <Form.Label style={styles.label}>Location:</Form.Label>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '10px'}}>
            <Form.Control
              ref={officeLatitudeTarget}
              onClick={() => setShowOfficeLatitudeToolTipMessage(false)}
              onChange={(e) => setOfficeLatitude(e.target.value)}
              value={officeLatitude}
              style={styles.location}
              type="text"
              placeholder="latitude"
            />
            <Overlay target={officeLatitudeTarget.current} show={showOfficeLatitudeToolTipMessage} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  {officeLatitudeToolTipMessage}
                </Tooltip>
              )}
            </Overlay>
          </div>
          <div>
            <Form.Control
              ref={officeLongitudeTarget}
              onClick={() => setShowOfficeLongitudeToolTipMessage(false)}
              onChange={(e) => setOfficeLongitude(e.target.value)}
              value={officeLongitude}
              style={styles.location}
              type="text"
              placeholder="longitude"
            />
            <Overlay target={officeLongitudeTarget.current} show={showOfficeLongitudeToolTipMessage} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  {officeLongitudeToolTipMessage}
                </Tooltip>
              )}
            </Overlay>
          </div>
        </div>
        <Form.Label style={styles.label}>Office Start Date:</Form.Label>
        <Form.Control
          ref={officeStartDateTarget}
          onClick={() => setShowOfficeStartDateToolTipMessage(false)}
          onChange={(e) => setOfficeStartDate(e.target.value)}
          value={officeStartDate}
          style={styles.input}
          type="date"
          placeholder="date"
        />
        <Overlay target={officeStartDateTarget.current} show={showOfficeStartDateToolTipMessage} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {officeStartDateToolTipMessage}
            </Tooltip>
          )}
        </Overlay>
        <Form.Label style={styles.label}>Company:</Form.Label>
        <div style={styles.dropdown}>
          <select
            style={styles.select}
            ref={officeCompanyNameTarget}
            onChange={e => setCompanyId(e.target.value)}
          >
            <option selected disabled>
              select company
            </option>
            {
              dropdown.map(mappedCompany=>{
                return (
                  <option value={mappedCompany.id}>
                    {mappedCompany.name}
                  </option>
                  )
              })
            }
          </select>
          <Overlay target={officeCompanyNameTarget.current} show={showOfficeCompanyNameToolTipMessage} placement="bottom">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                {officeCompanyNameToolTipMessage}
              </Tooltip>
            )}
          </Overlay>
        </div>
        <Button style={styles.button} type='submit' variant="secondary">Create</Button>
      </Form>)
    }
  }
  return(
    <div>
      {renderForm()}
    </div>
  )
}
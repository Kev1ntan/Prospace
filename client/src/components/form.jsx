import React, {useRef} from "react";
import {useStore, useDispatch, useSelector} from "react-redux"
import {
  Button,
  Form,
  Overlay,
  Tooltip,
} from 'react-bootstrap';

const style = {
  title: {
    'fontSize': '20px',
  },
  label: {
    'fontSize': '14px',
    'fontWeight': 'bold'
  },
  input: {
    width: '400px',
  },
  number: {
    width: '325px'
  },
  code: {
    marginRight: '5px',
    width: '70px'
  },
  location: {
    width: '195px'
  }
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
  const [company, setCompany] = React.useState('')

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

  console.log('a',props.formName)
  function validate(type) {
    let message
    let revenue = Math.floor(Number(companyRevenue))
    let phoneCode = Math.floor(Number(companyPhoneCode))
    let phoneNum = Math.floor(Number(companyPhoneNum))

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
        setCompanyPhoneCodeToolTipMessage('Please fill the phone code.')
        setShowCompanyPhoneCodeToolTipMessage(true)
        valid = false
      }else if(phoneCode === Infinity || String(phoneCode) !== companyPhoneCode || phoneCode < 0){
        setCompanyPhoneCodeToolTipMessage('Phone code must be positive integer.')
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
      if(officeName.trim() === '') {
        setOfficeNameToolTipMessage('Please fill the name.')
        setShowOfficeNameToolTipMessage(true)
        valid = false
      }
      if(officeLatitude.trim() === '') {
        setOfficeLatitudeToolTipMessage('Please fill the address.')
        setShowOfficeLatitudeToolTipMessage(true)
        valid = false
      }else if(officeLongitude.trim() === '') {
        setOfficeLongitudeToolTipMessage('Please fill the revenue.')
        setShowOfficeLongitudeToolTipMessage(true)
        valid = false
      }
      if(officeStartDate.trim() === '') {
        setOfficeStartDateToolTipMessage('Please fill the phone code.')
        setShowOfficeStartDateToolTipMessage(true)
        valid = false
      }
      if(company === 'select company') {
        setOfficeCompanyNameToolTipMessage('Please fill the phone number.')
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
    if(validate('company').status){
      let data = {
        name: companyName,
        address: companyAddress,
        revenue: companyRevenue,
        offices: [],
        phone: `(${companyPhoneCode}) ${companyPhoneNum}`
      }
      dispatch({type: 'addCompany', payload: data})
      resetForm()
      console.log(store.getState().companiesReducer.companies)
    }else{
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
  }
  
  function submitOfficeForm(e) {
    e.preventDefault()
    console.log(officeName,officeLatitude,officeLongitude,company,)
  }
  function renderForm() {
    if(props.formName === 'company'){
      return (
      <Form onSubmit={submitCompanyForm}>
        <Form.Label style={style.title}>Create Company</Form.Label>
        <Form.Label style={style.label}>Name:</Form.Label>
        <Form.Control
          ref={companyNameTarget}
          onClick={() => setShowCompanyNameToolTipMessage(false)}
          onChange={(e) => setCompanyName(e.target.value)}
          style={style.input}
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
        <Form.Label style={style.label}>Address:</Form.Label>
        <Form.Control
          ref={companyAddressTarget}
          onClick={() => setShowCompanyAddressToolTipMessage(false)}
          onChange={(e) => setCompanyAddress(e.target.value)}
          value={companyAddress}
          style={style.input}
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
        <Form.Label style={style.label}>Revenue:</Form.Label>
        <Form.Control
          ref={companyRevenueTarget}
          onClick={() => setShowCompanyRevenueToolTipMessage(false)}
          onChange={(e) => setCompanyRevenue(e.target.value)}
          value={companyRevenue}
          style={style.input}
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
        <Form.Label style={style.label}>Phone No:</Form.Label>
        <div style={{display: 'flex'}}>
          <div>
            <Form.Control
              ref={companyPhoneCodeTarget}
              onClick={() => setShowCompanyPhoneCodeToolTipMessage(false)}
              onChange={(e) => setCompanyPhoneCode(e.target.value)}
              value={companyPhoneCode}
              style={style.code}
              type="text"
              placeholder="code"
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
              style={style.number}
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
        <Button type='submit' variant="secondary">Create</Button>
      </Form>)
    }else if(props.formName === 'office') {
      return (
      <Form onSubmit={submitOfficeForm}>
        <Form.Label style={style.title}>Create Office</Form.Label>
        <Form.Label style={style.label}>Name:</Form.Label>
        <Form.Control
          ref={officeNameTarget}
          onClick={() => setShowOfficeNameToolTipMessage(false)}
          onChange={(e) => setOfficeName(e.target.value)}
          value={officeName}
          style={style.input}
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
        <Form.Label style={style.label}>Location:</Form.Label>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '10px'}}>
            <Form.Control
              ref={officeLatitudeTarget}
              onClick={() => setShowOfficeLatitudeToolTipMessage(false)}
              onChange={(e) => setOfficeLatitude(e.target.value)}
              value={officeLatitude}
              style={style.location}
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
              style={style.location}
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
        <Form.Label style={style.label}>Office Start Date:</Form.Label>
        <Form.Control
          ref={officeStartDateTarget}
          onClick={() => setShowOfficeStartDateToolTipMessage(false)}
          onChange={(e) => setOfficeStartDate(e.target.value)}
          value={officeStartDate}
          style={style.input}
          type="text"
          placeholder="date"
        />
        <Overlay target={officeStartDateTarget.current} show={showOfficeStartDateToolTipMessage} placement="bottom">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              {officeStartDateToolTipMessage}
            </Tooltip>
          )}
        </Overlay>
        <Form.Label style={style.label}>Company:</Form.Label>
        <select
          ref={officeCompanyNameTarget}
          onChange={e => setCompany(e.target.value)}
          placeholder="select company"
          required
        >
          {
          console.log(store.getState().companiesReducer.companies,"<")
          }
          {
            store.getState().companiesReducer.companies.map(mappedCompany=>{
              console.log(mappedCompany)
              return (
                <option value={mappedCompany.name}>
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
        <Button type='submit' variant="secondary">Create</Button>
      </Form>)
    }
  }
  return(
    <div>
      {renderForm()}
    </div>
  )
}
const route = require('express').Router()
const controller = require('../controllers/companyController')
route.get('/companies',controller.getCompanies)
route.get('/offices',controller.getOffices)
route.post('/addCompany',controller.addCompany)
route.post('/addOffice',controller.addOffice)
route.delete('/deleteCompany/:id',controller.deleteCompany)
route.delete('/deleteOffice/:id',controller.deleteOffice)



module.exports = route
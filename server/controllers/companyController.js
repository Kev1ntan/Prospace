const {Company, Office} = require('../models')
class companyController {
  static getCompanies(req,res,next) {
    Company.findAll({
      include:[Office]
    })
      .then(resp=>{
        console.log(resp,"<<<")
        res.status(200).json(resp)
      })
      .catch(error=>{
        next(error)
      })
  }
  static getOffices(req,res,next) {
    Company.findAll()
      .then(resp=>{
        console.log(resp)
      })
      .catch(error=>{
        next(error)
      })
  }
  static addCompany(req,res,next) {
    Company.create(req.body)
      .then(resp=>{
        return Company.findAll({
          include:[Office]
        })
      })
      .then(companies=>{
        console.log(companies,"<<<")
        res.status(201).json(companies)
      })
      .catch(error=>{
        console.log(error)
      })
    console.log(req.body)
  }
  static deleteCompany(req,res,next) {
    Company.destroy({
      where:{
        id: req.params.id
      }
    })
    .then(resp=>{
      return Company.findAll({
        include:[Office]
      })
    })
    .then(companies=>{
      console.log(companies,"<<<")
      res.status(200).json(companies)
    })
    .catch(error=>{
      console.log(error)
    })
    console.log(req.body)
  }
  static addOffice(req,res,next) {
    Office.create(req.body)
      .then(resp=>{
        return Company.findAll({
          include:[Office]
        })
      })
      .then(companies=>{
        console.log(companies,"<<<")
        res.status(201).json(companies)
      })
      .catch(error=>{
        console.log(error)
      })
    console.log(req.body)
  }
  static deleteOffice(req,res,next) {
    console.log(req.params)
    Office.destroy({
      where:{
        id: req.params.id
      }
    })
    .then(resp=>{
      return Company.findAll({
        include:[Office]
      })
    })
    .then(companies=>{
      console.log(companies,"<<<")
      res.status(200).json(companies)
    })
    .catch(error=>{
      console.log(error)
    })
  }
}

module.exports = companyController
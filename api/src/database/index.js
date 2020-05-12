import Sequelize from "sequelize"
import User from '../app/models/user'
import ProductsServices from '../app/models/productsServices'
import databaseConfig from '../config/database'

const models = [User, ProductsServices]

class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => {
      model.init(this.connection)
    })
  }
}

export default new Database()

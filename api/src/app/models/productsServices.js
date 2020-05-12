import Sequelize, {Model} from "sequelize"

class ProductsServices extends Model {
  static init (sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        detailing: Sequelize.STRING,
        type: Sequelize.STRING,
        value: Sequelize.DOUBLE,
        status: Sequelize.STRING,
        userId: Sequelize.INTEGER
      },
      {
        sequelize,
        tableName : 'products_services'
      }

    )
    return this
  }
}

export default ProductsServices
import ProductsServices from '../models/productsServices'

class ProductsServicesController {
  async store(req, res) {
    const productService = await ProductsServices.create(
      {
        description: req.body.description,
        detailing: req.body.detailing,
        type: req.body.type,
        value : req.body.value,
        userId: req.UserId
      }
      )

    return res.json(productService)
  }

  async update(req, res) {
    const productService = await ProductsServices.findOne({where :{id: req.body.id}})
    
    if (!productService)
      return req.json(res.status(400).json({error: 'Produto ou serviço não existe.'}))
    productService.description = req.body.description
    productService.detailing = req.body.detailing
    productService.type = req.body.type
    productService.status = req.body.status
    productService.value = req.body.value

    await productService.save()
    return res.json(productService)
  }

  async find(req, res) {
    const productsServices = await ProductsServices.findAll({where :{description: {
      [Op.iLike]: '%' + req.body.description + '%'
    }, type: {[Op.iLike]: '%' + req.body.type + '%'}}})
    
    if (!productsServices)
      productsServices = []
    
    return res.json(productsServices)
  }
  

  /*async delete(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.params.id}})
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    await agenda.destroy()
    return res.json(res.status(200).json({sucess: 'Agenda deltata com sucesso.'}))
  }

  
  async findOne(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.params.id}})
    
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    
    return res.json(agenda)
  }

  async find(req, res) {
    const agenda = await Agenda.findAll({where :{nome: {
      [Op.iLike]: '%' + req.body.nome + '%'
    }}})
    
    if (!agenda)
      agenda = []
    
    return res.json(agenda)
  }*/
}

export default new ProductsServicesController(); 
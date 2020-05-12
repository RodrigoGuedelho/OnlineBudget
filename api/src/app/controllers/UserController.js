import User from '../models/user'

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({where :{email: req.body.email}})
    
    if (userExist) 
      return req.json(res.status(400).json({error: 'Usuário com esse email já existe.'}))
    const user = await User.create(req.body)

    return res.json(user)
  }

  async update(req, res) {
    const user = await User.findOne({where :{id: req.body.id}})
    
    if (!user)
      return req.json(res.status(400).json({error: 'Usuário não existe.'}))
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    await user.save()
    return res.json(user)
  }
  

  /*async delete(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.params.id}})
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    await agenda.destroy()
    return res.json(res.status(200).json({sucess: 'Agenda deltata com sucesso.'}))
  }

  async update(req, res) {
    const agenda = await Agenda.findOne({where :{id: req.body.id}})
    
    if (!agenda)
      return req.json(res.status(400).json({error: 'Agenda número ' + req.params.id + ' não existe.'}))
    agenda.nome = req.body.nome
    agenda.email = req.body.email
    agenda.telefone = req.body.telefone
    agenda.github = req.body.github
    await agenda.save()
    return res.json(agenda)
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

export default new UserController(); 
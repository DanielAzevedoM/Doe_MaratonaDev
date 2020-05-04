import * as Yup from 'yup';

import User from '../models/User';

import donors from '../models/array';


class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string()
            .required(),
      email:  Yup.string()
              .email()
              .required(),
      blood:  Yup.string() 
              .required()
              .max(3) 
              
      });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Erro de validação. Verifique os seus dados e tente novamente.' });
    } 
    
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ message: 'O doador já existe!' });
    }

   donors.push({
     
      name: req.body.name,
      email: req.body.email,
      blood: req.body.blood
    }) 

    const { id, name, email, blood } = await User.create(req.body);
      return res.json({
      id,
      name,
      email,
      blood,
    });  
  }
}

export default new UserController();
import * as Yup from 'yup';

import User from '../models/User';

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
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

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
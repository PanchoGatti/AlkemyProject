import { User } from "../models/user.js";
// import{} from "jsonwebtoken"
// import{ hashSync } from 'bcrypt'

export const regUsuario = async (req, res) => {
  try {
    const { id, email, pass } = req.body;

    //let password = pass.hashSync(pass, 10)
    //console.log(password)

    User.create({
      id,
      email,
      pass,
      // }).then((user) => {
      //   let token = token.sing({ user: user }, "asdasd", {
      //     expiresIn: "7d",
      //   });

      //   res.json({
      //     user: user,
      //     token: token,
      //   });
      // });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.json("ok");
};

export const logUsuario = async (req, res) => {
  try {
    const { id, email, pass } = req.body;

    const usuario = await  User.findByPk(id)
    res.json(usuario)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

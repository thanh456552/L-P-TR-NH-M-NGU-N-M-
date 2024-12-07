import User from "../models/user.mjs";
class UserController {
  static async index(req, res) {
    let q = req.query.q;
    q = `.*${q}.*`;
    var re = new RegExp(q);
    let users = await User.find();
    console.log(users);
    res.render("user", { title: "User Management", users });
  }
  static async new(req, res)  {
    res.render('/new', { title: 'Them user', users});
  };

  static async delete(req, res){
    let userdelete = await User.deleteOne({_id: req.params.id});
    res.redirect("/users");
  };

  static async create(req, res){
    let {email, name, role} = req.body;
    let user = await User.create({email, name, role});
    if(user) {
      res.redirect("/users");
    } else {
      res.render('formnew', {title: 'Create User',})
    }
  } 

  
  // static async create(req, res)  {
  //   res.render('/create', { title: 'Add users', users});
  // }
}

export default UserController;

/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async function (req, res) {
    users = await User.find()
    return res.view('pages/user/list',{
      title:"User List",
      active:"user",
      users: users
    })
  },
  show: async function(req, res) {
    user = await User.findOne({id:req.params.id})
    return res.view('pages/user/view',{
      title:"View User",
      active:"user",
      user:user
    })
  },
  create: function(req, res) {
    return res.view('pages/user/add',{
      title:"Add User",
      active:"user"
    })
  },
  store: async function(req, res) {
    user = await User.create(req.body)
    res.redirect('/user');
  },

  edit: async function(req, res) {
    user = await User.findOne({id:req.params.id})
    return res.view('pages/user/edit',{
      title:"Edit User",
      active:"user",
      user:user
    })
  },
  update: async function(req, res) {
    var user = await User.updateOne({id:req.params.id}).set(req.body);
    res.redirect('/user');
  },
  destroy: async function(req, res) {
    user = await User.destroy({id:req.params.id})
    res.redirect('/user');
  }
};


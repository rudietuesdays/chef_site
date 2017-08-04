var mongoose = require('mongoose');
var User = mongoose.model('User');

console.log('loading users controller...');

module.exports = {
  index: function(req, res) {
    console.log("in user index fx");
    User.find({})
    .exec(function(err, users){
      if(err){console.log(err);}
      res.json({users});
    });
  },

  create: function(req, res){
    console.log("in user create fx");
    var user = new User(req.body);
    user.save(
      function(err, user){
        if (err){
          console.log(err);
          res.json(err);
        } else {res.json(user)}
      }
    )
  },

  login: function(req, res){
    console.log('in user login function');
    User.findOne({email: req.body.email}, function(err, user){
      if(!req.body.password){
        res.json({
          errors: {
            login: {
              message: 'invalid email or password',
              kind: 'what did not work',
              path: 'user login',
              value: 'password error'
            }
          }
        });
      } else if (user && user.validPassword(req.body.password)) {
        console.log('user found in db: ', user);
        res.json({_id: user._id});
      } else {
        console.log('error:', user);
        res.json({
          errors: {
            login: {
              message: 'invalid email or password',
              kind: 'what did not work',
              path: 'user login',
              value: 'password error'
            }
          }
        });
      }
    })
  },

  show: function(req, res){
    console.log('in user show function');
    User.findOne({_id: req.params.id},
    function(err, user){
      if(err){console.log(err);}
      res.json(user);
    })
  },
}

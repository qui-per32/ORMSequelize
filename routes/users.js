var express = require('express');
var router = express.Router();
const UsersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getallusers',(req,res,next)=>{
let usersController = new UsersController(req,res,next);
usersController.findAllUsers();
})

router.get('/getalluserssql', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findAllUserSQL();
})

router.get('/getuserbyid/:id', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findUserById();
})

router.get('/getuserbyname/:name', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findUserByName();
})

router.get('/getuserbyop', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.finsUserWithOp();
})

router.get('/createuser', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findOrCreateUser();
})


router.get('/findandcount', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findAndCountUsers();
})

router.get('/findoffset', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findOffset();
})

router.get('/findmax', (req, res, next) => {
  let usersController = new UsersController(req, res, next);
  usersController.findMax();
})


module.exports = router;

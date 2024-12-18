const express = require('express');
const userController=require('../controllers/userController');
const authmiddleware=require('../middleware/authmiddleware')

const router=express.Router();

router.post('/Registration',userController.Registration)
router.post("/login",userController.login)
router.get("/profileread/:id",authmiddleware,userController.profileread)
router.get("/profilereads",authmiddleware,userController.profilereads)
router.post("/profileupdate/:id",authmiddleware,userController.profileupdate)
router.post("/Delete/:id",authmiddleware,userController.Delete)

module.exports = router;
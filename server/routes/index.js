module.exports = app => {
    const auth_controller = require("../controllers/auth_controller");
  
    var router = require("express").Router();
  
    // register new user
    router.post("/register", auth_controller.register);

    router.post("/login", auth_controller.login);
  
    // Retrieve all Tutorials
    // router.get("/", tutorials.findAll);
  
    app.use('/', router);
  };
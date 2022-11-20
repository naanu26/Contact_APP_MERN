const Router = require("express");
const router = Router();

/** Controllers */
const controller = require("../controller/controller");

router.get("/", controller.getUserData);
router.post("/register", controller.registerUser);
router.get("/user/:id", controller.getParticualrUser)
router.patch("/user/:id", controller.updateUserData)
router.delete("/user/:id", controller.deleteUSer)

module.exports = router;

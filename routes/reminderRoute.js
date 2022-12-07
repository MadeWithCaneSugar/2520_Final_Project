const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../middleware/checkAuth")
const remindersController = require("../controllers/reminder_controller")

// Case 2: User goes to localhost:3001 -> Show a list of the user's reminders
router.get("/", ensureAuthenticated, remindersController.list);

// Case 3: User gios to localhost:3001/new -> show a create reminder page
router.get("/new", ensureAuthenticated, remindersController.new);

// Case 4: user creates a new reminder in the above location
router.post("/", ensureAuthenticated, remindersController.create);

// Case 5: user goes to localhost:3001id -> show the reminder that the user clicked on
router.get("/:id", ensureAuthenticated, remindersController.listOne);

// Case 5: user goes to localhost:3001/editid -> show a reminder edit screen
router.get("/:id/edit", ensureAuthenticated, remindersController.edit);

// Case 7: user clicks the update button from case 6 and reminder is updated
router.post("/update/:id", ensureAuthenticated, remindersController.print);

// Case 8: User clicks the delte button and the reminder is deleted
router.post("/delete/:id", ensureAuthenticated, remindersController.delete);

module.exports = router;
// MITCHEL DON'T FORGET THAT THIS ENTIRE FILE IS A DICTIONARY
// IT'S ONE BIG DICT CALLED remindersController THAT HAS
//MULTIPLE FUNCTIONS IN IT THAT ARE CALLED BY index.js

const { userModel } = require("../models/userModel");

// const Database = require("../models/database");

// Key = function name, value = function
// syntax for calling is remindersController.function

var myid = 1

// this is important. This function returns the reminder list for the user
// that is currently logged in
const findReminders = (req, res) => {
    return req.user.reminders
}

let remindersController = {

    list: (req, res) => {
        console.log(findReminders(req, res))
        console.log(findReminders(req, res)[0])
        res.render("reminder/", { reminders: findReminders(req, res) });
    },

    new: (req, res) => {
        res.render("reminder/create");
    },

    create: (req, res) => {
        let reminder = {
            id: myid++,
            title: req.body.title,
            description: req.body.description,
            completed: false
        }
        findReminders(req, res).push(reminder);
        res.redirect("reminders")
    },

    listOne: (req, res) => {
        let reminderToFind = req.params.id;
        let searchResult = findReminders(req, res).find((reminder) => {
            return reminder.id == reminderToFind;
        });
        if(searchResult != undefined) {
            // res.send("test")
            res.render("reminder/single-reminder", {reminderItem: searchResult})
        }
        else {
            res.redirect("reminders")
        }
    },

    edit: (req, res) => {
        let reminderToFind = req.params.id;
        let searchResult = findReminders(req, res).find((reminder) => {
            return reminder.id == reminderToFind;
        });
        if(searchResult != undefined) {
            res.render("reminder/edit", {reminderItem: searchResult})
        }
        else {
            res.redirect("reminders")
        }
    },

    // update: (req, res) => {
    //     let reminderToFind = req.params.id;
    //     let reminder = {
    //       id: Number(reminderToFind),
    //       title: req.body.title,
    //       description: req.body.description,
    //       completed: Boolean(req.body.completed),
    //     };
    //     let counter = 0
    //     for (item of database.cindy.reminders){
    //       if (item.id == reminderToFind) {
    //         database.cindy.reminders[counter] = reminder
    //         counter ++
    //       }
    //     }
    //     res.redirect("../index");
    //   },
    
    //   delete: (req, res) => {
    //     let reminderToFind = req.params.id;
    //     let counter = 0
    //     for (item of database.cindy.reminders){
    //       if (item.id == reminderToFind) {
    //         database.cindy.reminders.splice(counter, 1)
    //         counter ++
    //       }
    //     }
    //     res.redirect("../index");
    //   }

    update: (req, res) => {
        console.log("THIS IS THE MORE IPORTANT THING")
        let reminderToFind = req.params.id;
        console.log("THIS IS THE THING" + reminderToFind)
        let searchResult = findReminders(req, res).find((reminder) => {
            return reminder.id == reminderToFind;
        });
        let newReminder = {
            id: searchResult.id,
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        }
        let index = findReminders(req, res).indexOf(newReminder);
        findReminders(req, res).splice(index, 1, newReminder)
        res.render("reminder/single-reminder", {reminderItem: newReminder})
    },

    delete: (req, res) => {
        let reminderToFind = req.params.id;
        let searchResult = findReminders(req, res).find((reminder) => {
            return reminder.id == reminderToFind;
        });
        let index = findReminders(req, res).indexOf(searchResult);
        findReminders(req, res).splice(index, 1)
        res.render("reminder/", {reminders: searchResult});
    },

    print: (req, res) => {
        console.log("THIS IS BEING Printed", req)
    }
};

module.exports = remindersController
const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy123!",
    reminders: [{id: 1, title: "abc", description: "abcabc", completed: false}]
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
    reminders: [{id: 2, title: "def", description: "abcabc", completed: false}]
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
    reminders: [{id: 3, title: "ghi", description: "abcabc", completed: false}]
  },
  {
    id: 4,
    name: "Easy login",
    email: "abc@gmail.com",
    password: "abc",
    reminders: [{id: 4, title: "jkl", description: "abcabc", completed: false},
    {id: 5, title: "mno", description: "abcabc", completed: false},
    {id: 6, title: "pqr", description: "abcabc", completed: false}]
  },
];

const userModel = {
  findOne: (email) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  findById: (id) => {
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with id: ${id}`);
  },
};

module.exports = { database, userModel };

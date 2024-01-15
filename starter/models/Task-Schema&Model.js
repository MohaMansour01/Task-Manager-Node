const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You need to have a name'],
    trim: true,
    maxlength: [20, 'You can not have more than 20 characters name.'],
    minlength: [3, 'You can not have less than 3 characters name.'],
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    activityName: { type: String },
    accessability: { type: Number },
    description: { type: String},
    type: { type: String },
});

const Activity = mongoose.model("Activity", ActivitySchema);


module.exports = Activity;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectID = require('mongodb').ObjectID;

const SurveySchema = new Schema({
    _id: {type: ObjectID},
    title: {type: String},
    description: {type: String},
    questions: {type: Array}
});

mongoose.model('survey', SurveySchema, 'survey');



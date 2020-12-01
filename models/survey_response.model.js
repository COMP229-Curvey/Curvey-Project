const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectID = require('mongodb').ObjectID;

const SurveyResponseSchema = new Schema({
    survey_id: ObjectID,
    survey_response: {
        type: Array,
        required: true
    }
});

mongoose.model('SurveyResponse', SurveyResponseSchema);



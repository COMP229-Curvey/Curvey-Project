const SurveyResponse = require('mongoose').model('SurveyResponse');
var ObjectID = require('mongodb').ObjectID;
exports.create = async function(req, res, next) {
    const survey_response = new SurveyResponse(req.body);

    try {
        survey_response.save((err) => {
            if (err) {
                return next(err);
            } else {
                res.status(201).json({_id : survey_response._id});
            }
        });
    } catch (err) {
        return next(err);
    }

};

exports.edit = (req, res, next) =>{
    try {
        SurveyResponse.findOneAndUpdate({_id: ObjectID(req.params._id)},req.body,(err, survey_response) => {
            if (err){
                return next(err);
            }
            res.status(204).send(survey_response);
        });
    } catch (err) {
        return next(err);
    }
};

exports.list = function(req, res, next) {
    SurveyResponse.find({survey_id: ObjectID(req.params.survey_id)}, (err, survey_responses) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(survey_responses);
        }
    });
};

exports.delete = function(req, res, next) {
    SurveyResponse.deleteOne({_id: ObjectID(req.params._id)}, (err, result) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(result);
        }
    });
};

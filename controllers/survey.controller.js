const Survey = require('mongoose').model('survey');
var ObjectID = require('mongodb').ObjectID;
var sanitize = require('mongo-sanitize');
var mongo = require('mongoose');
var Schema = mongo.Schema;
exports.create = async function(req, res, next) {
    var NewSchema = new Schema({
        title: {type: String},
        description: {type: String},
        questions: {type: Array}
    }, {versionKey:false});
    var newModel = mongo.model(req.body.title, NewSchema, 'survey');
    var newSurvey = new newModel(req.body);
    newSurvey.save(function(err, data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    });

};

exports.edit = (req, res, next) =>{
    try {
        req.body = sanitize(req.body);
        let id = req.body._id;
        delete req.body._id;
        Survey.findByIdAndUpdate(id, req.body, function(err, survey){
            if (err){
                return next(err);
            }
            res.status(200).send(survey);
        });
    } catch (err) {
        return next(err);
    }
};

exports.list = function(req, res, next) {
    Survey.find({}, function(err, data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    });
};

exports.delete = function(req, res, next) {
    var survey = new Survey(req.body);
    survey.remove({_id: req.body.id}, function(err){
        if(err){
            res.send(err)
        }else{
            res.send({data:"Deleted succesfuly"})
        }
    });
};

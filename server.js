var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongo = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

var db = mongo.connect('mongodb+srv://curvey:curveyrocks@cluster0.zh6u2.mongodb.net/CurveyDatabase?retryWrites=true&w=majority', function(err, response){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to database'+ db, ' + ', response);
    }
});


var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var SurveySchema = new Schema({
    _id: {type: ObjectID},
    title: {type: String},
    description: {type: String},
    questions: {type: Array}
}, {versionKey:false});

var model = mongo.model('survey', SurveySchema, 'survey');

app.post("/survey/create", function(req,res){
    var NewSchema = new Schema({
        title: {type: String},
        description: {type: String},
        questions: {type: Array}
    }, {versionKey:false});
    var newModel = mongo.model('newSurvey', NewSchema, 'survey');
    var newSurvey = new newModel(req.body);
    newSurvey.save(function(err, data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    });
});

app.post("/survey/update", function(req,res){
    let updatedSurvey = req.body;
    var survey = new model({'_id':updatedSurvey._id});
    delete updatedSurvey._id;
    survey.update( updatedSurvey, function(err, data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    });
});

app.post("/survey/delete", function(req,res){
    var survey = new model(req.body);
    survey.remove({_id: req.body.id}, function(err){
        if(err){
            res.send(err)
        }else{
            res.send({data:"Deleted succesfuly"})
        }
    });
});

app.get("/survey", function(req,res){
    model.find({}, function(err, data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    });
});

app.use(express.static(__dirname + '/dist/<curvey-project>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<curvey-project>/index.html'));
});

app.listen(process.env.PORT || 8080);
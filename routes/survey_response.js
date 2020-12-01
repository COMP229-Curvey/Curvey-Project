var express = require('express');
var router = express.Router();
var survey_response = require('../controllers/survey_response.controller');

router.route("/list/:survey_id")
    .post(async (req, res, next) => {
        survey_response.list(req,res,next);
    });

router.route('/')
    .post(survey_response.create);

router.route('/:_id')
  .put(async (req, res, next) => {
      survey_response.edit(req,res,next);
  });

router.route("/delete")
    .post(survey_response.delete);

module.exports = router;
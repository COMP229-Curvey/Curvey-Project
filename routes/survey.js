var express = require('express');
var router = express.Router();
var survey = require('../controllers/survey.controller');

router.route("/")
    .get(survey.list);

router.route('/create')
    .post(survey.create);

router.route('/update')
    .post(survey.edit);

router.route("/delete")
    .post(survey.delete);

module.exports = router;
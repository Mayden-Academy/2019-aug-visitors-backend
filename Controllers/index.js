const validator = require('../Services/ValidationService');
const visitorsService = require('../Services/VisitorsService');
const html_specialchars = require('html-specialchars');

function signInVisitor(req, res) {

    if (validator.validateVisitorSignIn(req.body) === true) {
        html_specialchars.escape(visitorInput);
       //call visitor service
    } else {
        //error message to user
    }

    let forename = req.body.forename;
    let surname = req.body.surname;
    let company = req.body.company;

    let responseData = {
        'success': false,
        'data': '',
        'msg': 'visitor sign in failed'
    };

    //once stored correctly:
    responseData.success = true;
    responseData.msg = 'visitor sign in successful';

    res.json(responseData);
}

module.exports.signInVisitor = signInVisitor;

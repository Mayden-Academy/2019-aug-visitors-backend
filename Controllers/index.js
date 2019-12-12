const validator = require('../Services/ValidationService');
const visitorsService = require('../Services/VisitorsService');
const html_specialchars = require('html-specialchars');

async function signInVisitor(req, res) {
    let responseData = {
        'success': false,
        'data': '',
        'msg': 'visitor sign in failed'
    };

    req.body.forename = req.body.forename.trim();
    req.body.surname = req.body.surname.trim();
    req.body.company = req.body.company.trim();

    if (validator.validateVisitorSignIn(req.body) === true) {
        try {
            let visitorObject = {
                'forename': html_specialchars.escape(req.body.forename),
                'surname': html_specialchars.escape(req.body.surname),
                'company': html_specialchars.escape(req.body.company)
            }
            responseData.success = await visitorsService.storeVisitorInfo(visitorObject);
            if (responseData.success) {
                responseData.msg = 'visitor sign in successful';
            }
        } catch(e) {
            responseData.msg = 'unexpected error';
        }
    }
    res.json(responseData);
}

module.exports.signInVisitor = signInVisitor;

let validateVisitorSignIn = (visitorInput) => {

    checkInputProvided(visitorInput);
    checkLength(visitorInput.forename.length);
    checkLength(visitorInput.surname.length);
    //if it's optional then it doesn't need a length though...
    checkLength(visitorInput.company.length);
};

let checkInputProvided = (visitorInput) => {

    return (typeof visitorInput.forename == 'string' && typeof visitorInput.surname == 'string')

};

let checkLength = (data) => {

    return (data.length >= 1 && data.length <= 50);

};



module.exports.validateVisitorSignIn = validateVisitorSignIn;
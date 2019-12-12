let validateVisitorSignIn = (visitorInput) => {

    return (checkInputProvided(visitorInput)
        && checkLength(visitorInput.forename)
        && checkLength(visitorInput.surname)
        && checkMaxLength(visitorInput.company)
    );
};

let checkInputProvided = (visitorInput) => {

    return (typeof visitorInput.forename == 'string' && typeof visitorInput.surname == 'string')
};

let checkLength = (data) => {

    return (data.length >= 1 && data.length <= 50);
};

let checkMaxLength = (data) => {

    return (data.length <= 50);
};

module.exports.validateVisitorSignIn = validateVisitorSignIn;

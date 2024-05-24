const boom = require('@hapi/boom');
const { error } = require('./response');

exports.errors = function (err, req, res, next){
    const message = err.message;
    const errors = [
        "Error trying to get",
        "Error trying to add",
        "Error trying to update",
        "Error trying to delete",
        "not found"
    ];

    if(errors.some(err => message.includes(err))){
        next(boom.conflict(err.message));
    }else{
        next(boom.internal(err.message));
    }
}

exports.response = function (err, req, res, next){
    error(req, res, err, err.output.statusCode);
}
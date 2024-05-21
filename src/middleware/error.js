const boom = require('@hapi/boom');
const { error } = require('./response');

exports.errors = function (err, req, res, next){
    const message = err.message;

    if(message.includes("Error trying to get")){
        next(boom.conflict(err.message));
    }else{
        next(boom.internal(err.message));
    }
}

exports.response = function (err, req, res, next){
    error(req, res, err, err.output.statusCode);
}
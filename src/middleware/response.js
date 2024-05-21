exports.success = function (req, res, message = '', status = 200){
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
}

exports.error = function (req, res, message = 'Intern Error', status){
    res.status(status).send({
        error: true,
        body: message
    });
}
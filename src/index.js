const app = require("./app");

app.listen(app.get('port'), () => {
    console.log('The server is running on port:', app.get('port'));
});
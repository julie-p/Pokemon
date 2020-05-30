var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

mongoose.connect('mongodb+srv://admin:wWIyZjyPFgEpkjvj@cluster0-4cqjr.mongodb.net/test?retryWrites=true&w=majority',
    options,
    function(err) {
        console.log(err)
    }
);

module.exports = mongoose; 
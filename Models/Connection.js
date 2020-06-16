var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true, 
    useUnifiedTopology: true
};

mongoose.connect('mongodb+srv://admin:Qopqe5J2ale5mAzo@cluster0-nxhjj.mongodb.net/pokemon-retry?retryWrites=true&w=majority',
    options,
    function(err) {
        console.log(err)
    }
);

module.exports = mongoose; 
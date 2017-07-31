// call the packages we need
var express    = require('express');        // call express
var app        = express();
var cors       = require('cors');                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
var initial_state = {
    items: [
        {
            time: "9",
            displayName: "9:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "10",
            displayName: "10:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "11",
            displayName: "11:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "12",
            displayName: "12:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "1",
            displayName: "1:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "2",
            displayName: "2:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "3",
            displayName: "3:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "4",
            displayName: "4:00",
            scheduled: "false",
            name: "",
            phone: ""
        },
        {
            time: "5",
            displayName: "5:00",
            scheduled: "false",
            name: "",
            phone: ""
        }
    ],
    showModal: false,
    selectedItem: {}
};
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ initial_state });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Node listening on port: ' + port);

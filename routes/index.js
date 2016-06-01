var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


var nodemailer = require('nodemailer');
router.post('/', handleSayHello); // handle the route at yourdomain.com/sayHello

function handleSayHello(req, res) {
	debugger;
    // Not the movie transporter!
    var email_from = req.body.text3;
    var pass = req.body.text4;
    var to = req.body.text2;
    var subject = req.body.text1;

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: email_from, // Your email id
            pass:  pass// Your password
        }
    });
	var text = req.body.textarea1;

	var mailOptions = {
	    from: email_from, // sender address
	    to: to, // list of receivers
	    subject: subject, // Subject line
	    text: text //, // plaintext body
	    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
	};

	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        console.log(error);
	        res.json({yo: 'error'});
	    }else{
	        console.log('Message sent: ' + info.response);
	        res.render('index', { title: 'Express' });
	    };
	});
}


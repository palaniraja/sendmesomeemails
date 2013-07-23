
var conf = require("./config")
var nodemailer = require("nodemailer");


var readabilityArticles = require('./'+conf.articlesjson);


var no_of_emails_to_send = (process.argv.length>2)?process.argv[2]:5;
var send_email_to = conf.mail.to;

console.log("Sending " + no_of_emails_to_send + " random emails to "+ send_email_to);


readabilityArticles = shuffle(readabilityArticles);

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: conf.mail.service,
    auth: {
        user: conf.mail.username,
        pass: conf.mail.password
    }
});

var mailOptions = {
    from: conf.mail.from, 
    to: send_email_to, 
    cc: "",
    bcc: "",
    subject: "", 
    html: "", 
    attachments: []
}


var articles = getRandomArticles(no_of_emails_to_send);

for (var i = 0; i < articles.length; i++) {
    
    from = shuffle(conf.senders)[0];
    subject = articles[i].article__title;
    body = articles[i].article__excerpt;
    url = articles[i].article__url;
    // shouldAttach = shouldI();
    // shouldGetFullContent = 0;//shouldI();
    var email = mailOptions;
    email.from = from;
    email.subject = shuffle(conf.mail.labels)[0] + ' ' + subject;
    email.html = body ;//+ url;
    // if(shouldAttach)
    //     email.attachments = conf.mail.attachments;
    sendEmail(email);
}

function sendEmail(emailOptions){
    smtpTransport.sendMail(email, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }
        smtpTransport.close(); 
    });

}

function getRandomArticles(no_of_articles){
    var randArticles = [];
    var maxarticles = readabilityArticles.length;
    for (var i = 0; i < no_of_articles; i++) {
        randno = Math.floor(Math.random(1, maxarticles)*100);
        randArticles.push(readabilityArticles[i]);
    };
    return randArticles;
}


function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


function shouldI(){
    var shouldIProceed = [0, 1];
    return shuffle(shouldIProceed)[0];
}


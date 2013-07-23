var config = {}

config.mail = {};
config.readability = {};
config.senders = [];

config.articlesjson = 'readability.json';   //your exported json from readability read later list.

config.mail.service = 'Gmail';              //Service provider. Ref. nodemailer doc for more info
config.mail.username = 'username@gmail.com';    //FILLTHIS Gmail credential to be used to send the email
config.mail.password = 'password';           //FILLTHIS yes, you guessed it right.

config.mail.to = 'username <username@gmail.com>';   //FILLTHIS, mailbox to fill :-)
config.mail.labels = ['[WORK]', '[Random]', '[Projects]' ,''];  //I have a rule to assign-label/move-to-folder

config.mail.attachments = [
		{
            fileName: 'test.txt',
            filePath: __dirname+"/test.txt",
            cid: 'text@node' 
        },
        {
            fileName: 'test.png',
            filePath: __dirname+"/test.png",
            cid: 'image@node' 
        },
        {
            fileName: 'test.pdf',
            filePath: __dirname+"/test.pdf",
            cid: 'pdf@node' 
        }
];
    
config.senders = [
'my gmail <spoofed-sender1@gmail.com',
'my hotmail <spoofed-sender2@hotmail.com>'
];

module.exports = config;
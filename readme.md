###Send me some Emails

#####What does it to?
It will send random emails to the specified email id. 

#####Why?
I am currently developing email client application (lightwight outlook/mail.app). In order to test the functionality, i keep myself forwarding emails regularly from different mailboxes. I would like to automate it so i could clean the inbox and send some random emails to test the app.

#####How to use?
Type **`node app.js`** or **`node app.js 10`** in you terminal the first will send 5 random emails to the id specified in **`config.js`** the second option will send 10 emails.

#####Prerequisite 
- It is a **`node.js`** app, so you need **`node`** to run the app
- Clone this repo and install the dependencies by running **`npm install`**
- Configure the required parameters in **`config.js`**
- Then you can either run **`node app.js`** or **`node app.js <#number>`**
- You could replace **`readability.json`** with your read it later list _(optional)_


#####Todo
- Randomly attach files
- I have a buggy version which downloads the full article using **`node-readability`** 
//Importing Express Nodemailer and Its Components
const express = require("express");
const bodyParser = require('body-parser');
const mailer = require("nodemailer");

//Creating instance of the express modules as app
const app = express();

//Initializing app for sending API request
app.use( bodyParser.json() );  
//Encoding the URL for API request     
app.use(bodyParser.urlencoded({    
  extended: true
})); 

//Creating transporter for sending mail
//Transporter is the Gateway for sending API request for sending mail
const transporter = mailer.createTransport({
	//Taking gmail host for sending mail
	host: "smtp.gmail.com",
	//Using port 587 which is TSL port for sending mail
	port: 587,
	secure: false,
	auth: {
		user: "tempmail.ysc@gmail.com",
		pass: "yscrecast",
	},
});

//Creating a page for getting post request and Sending mail.
app.post('/contact', async (req, res) => {
	//Getting all the key values from the form in the contact page
	let name = req.body.name;
	let email = req.body.email;
	let phonenumber = req.body.phone;
	let message = req.body.message;
	//Sending the mail from the transporter
	const sendmail = await transporter.sendMail({
		//Sending mail from the mail.
		from: "tempmail.ysc@gmail.com",
		//This is sending the mail to apurba4790@gmail.com
		to: "apurba4790@gmail.com", //Change this
		subject: `Contact Us | ${name}`,
		//Making it send mail in HTML format
		html: `<h2>${name}</h2> <h3>${email}</h3><h3>${phonenumber}</h3><h3>${message}</h3>`
	})
	//Redirecting to the previous contact.html page
	res.redirect("/contact.html");
})

//Loading all HTML, CSS and Javascript from the static folder
app.use(express.static("static"));

//Running the website in port 3000 and printing Site is running when the site starts running
app.listen(4000, () => {
	console.log("Site is running at port 3000");
})


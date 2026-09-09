# Assignment 06 - Node.js HTTP Server

A beginner-friendly Node.js HTTP Server project built using the built-in `http` module. This project demonstrates how to create a basic web server, handle multiple routes, send HTML responses, create navigation links, and return a 404 Page Not Found response for invalid routes.

## 📌 Project Overview

This project was created as part of a **Node.js assignment** and covers fundamental concepts of creating an HTTP server and handling requests and responses.

The server runs on **Port 5000** and provides four main routes:

- Home Page
- Blog Page
- Contact Page
- About Page

Each page contains HTML content with a heading, description, and navigation links.

The project also includes a **404 - Page Not Found** response for any invalid route.

## 🚀 Routes Included

### Route 1: Home Page

**URL:**

```text
/

Displays the Home Page with:

Home heading
Page description
Navigation links
Route 2: Blog Page

URL:

/blog

Displays the Blog Page with:

Blog heading
Blog description
Navigation links
Route 3: Contact Page

URL:

/contact

Displays the Contact Page with:

Contact heading
Contact description
Navigation links
Route 4: About Page

URL:

/about

Displays the About Page with:

About heading
About description
Navigation links
Invalid Route: 404 Page

Any route that is not defined will display:

404 - Page Not Found

For example:

/test
/services
/xyz

These routes return a 404 HTTP status code.

🛠️ Technologies Used
Node.js
JavaScript
HTTP Module
HTML5
📁 Project Structure
assignment-06-nodejs/
│
├── 📄 .gitattributes
├── 📄 package.json
├── 📄 server.js
└── 📄 README.md
⚙️ Server Configuration

The HTTP server is created using Node.js's built-in http module.

The server runs on:

Port: 5000

Server URL:

http://localhost:5000
▶️ How to Run
1. Clone the Repository
git clone https://github.com/zamanrm/assignment-06-nodejs.git
2. Navigate to the Project
cd assignment-06-nodejs
3. Start the Server

Using npm:

npm start

Or directly using Node.js:

node server.js
4. Open the Server

Open the following URL in your web browser:

http://localhost:5000
🌐 Available Routes
Home
http://localhost:5000/
Blog
http://localhost:5000/blog
Contact
http://localhost:5000/contact
About
http://localhost:5000/about
404 Page

Test an invalid route:

http://localhost:5000/test

Expected result:

404 - Page Not Found
🔗 Navigation

Each valid page contains navigation links to:

Home
Blog
Contact
About

This allows users to move between the different pages without manually entering the URLs.

📦 Package Configuration

The project includes a package.json file for Node.js project configuration.

The start script allows the server to be started using:

npm start

No external npm packages are required because the project uses Node.js's built-in http module.

🎯 Learning Objectives

This project is designed to help beginners understand the fundamentals of Node.js HTTP servers.

By completing this assignment, you can practice:

Creating an HTTP server using Node.js
Using the built-in http module
Understanding HTTP requests and responses
Working with req.url
Creating multiple routes
Sending HTML responses
Setting HTTP response headers
Using HTTP status codes
Creating navigation links
Handling invalid routes
Returning a 404 response
Running a Node.js server on a specific port
Using package.json and npm scripts
📝 Assignment Requirements

The project fulfils the following requirements:

1. Create HTTP Server
Uses the Node.js http module
Runs on Port 5000
2. Create Routes

The following routes are implemented:

/
 /blog
 /contact
 /about
3. HTML Response

Each route provides:

HTML heading
Description
Navigation links
4. Invalid Route

Any undefined route returns:

404 - Page Not Found
🔄 Git Commit History

The project was developed using meaningful Git commits:

Initialize Node Project
Create HTTP Server
Add Home Route
Add Blog About and Contact Routes
Add 404 Page Not Found
Add package.json
Add README
🔗 GitHub Repository

Repository:

https://github.com/zamanrm/assignment-06-nodejs

👨‍💻 Author

Rahat Zaman

GitHub:

https://github.com/zamanrm

⭐ If you find this project useful for learning Node.js, feel free to star the repository!
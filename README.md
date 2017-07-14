# CD_MEAN_1955API
Troy Center troycenter1@gmail.com    July 13 2017
Coding Dojo MEAN stack, 1955 API assignment

<h3>Assignment: 1955 API</h3>
For this assignment, we want you to build a simple API server and communicate with it directly over URL requests. The purpose of this API server is to hold on to a list of people born in the year 1955. In order to allow our API server full functionality over URL, we'll need to make sure all our incoming requests come in as <strong>GETs</strong>, so don't worry about making your routes RESTful!

<ul>
<li><strong>GET '/'</strong> will serve up the full collection of people born in 1955</li>
<li><strong>GET '/new/:name/'</strong> will add a name into the database which can be used for blank spaces. So adding Steve Jobs to our database, you'd type in the URL <strong>'localhost:8000/new/Steve Jobs'</strong></li>
<li><strong>GET '/remove/:name/'</strong> will delete a name from the database.</li>
<li><strong>GET '/:name'</strong> will bring up the document of that particular person.</li>
</ul>

You won't need EJS or to render views for this assignment. When your server responds, make sure it responds with JSON. To do this, you'll have to write all your responses as <strong>res.json()</strong> and pass it the data you want to send. Additionally, you'll need to configure body-parser to correctly read JSON, which can be done by adding the following line to your server.js:

<h5>app.use(bodyParser.json());</h5>

When navigating to <strong>'localhost:8000/'</strong> you should immediately get a page that looks similar to the below example.

<img src="http://s3.amazonaws.com/General_V88/boomyeah/company_209/chapter_2793/handouts/chapter2793_3911_1955API-1.png" alt="Coding Dojo Assignment Image">

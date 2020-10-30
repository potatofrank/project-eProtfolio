# project Hanan Davila e-Portfolio system

## Background
<br />
This is an e-Portfolio system built for our clients who are doing masters in Melbourne university.<br />
The main purpose of this app is to show visitors of this webisite the personal information, achievements<br />
skills, projects and music sheets of our clients and allow our clients to add or delete links/music sheets <br />
according to their own preferences.

## Key Algorithms
**Mongoose**
<br />
An ODM that provides a straightforward and schema-based solution to model your application data on top of MongoDB's native drivers.
<br />
<br />
**flash**
<br />
Message display after corresponding actions acted on any buttons/forms.
<br />
<br />
**Grid**
<br />
As known as "Grid-FS", it is used for creating an uploading method for media files, and save them directly into the database as binary form of data.
<br />
<br />
**Multer**
<br />
A Node.js middleware for handling multipart/form-data.
<br />
<br />
**passport**
<br />
Authentication system, mainly used for user log in information matching i.e. passowrd and username. <br />
It is also used for marking the log on/off status of a user.
<br />
<br />
**bcrypt**
<br />
User information encryption, mainly used for user password hashing when they sign up an account.
<br />
<br />
**Crypto**
<br />
<br />
Encryption method for media data, randomnize binary data of the media files.
<br />
<br />
**String slicing Javascript**
<br />
An efficient self-made string slicing algorithm for cutting unnecessary strings from the embedding code of the youtube/soundCloud links entered by user.
<br />
<br />
**embed**
<br />
A function used in front-end for inserting youtube/soundCloud links into the web page as frames with a given size.
<br />
<br />
**RESTful API** 
<br />
An architectural style for an application program interface (API) that uses HTTP requests to access and use data.
<br />
<br />
**Music importing**
<br />
The client will be instructed to copy the code for embedding their desired music from yotube/soundCloud page, and our string slicing algorithm will extract the link required for embeding from the code string, then we'll use "embed" to embed the extracted link and display them onto the "project" page.
<br />
<br />
**Data importing from MongoDB** 
<br />
Using "files.find()" and "files.findOne()" functions, we're able to locate our desired files/records from mongoDB, and once we find them, we pass them to front-end using "render".
<br />
<br />
## Key Classes and Layers
**app.js** 
<br />
the main file of the application, all APIs would be called out from here and all routes would be integrated here. Due to the special set up of our media uploading system, app.js also contains a lot of get and post functions relating to file uploading.
<br />
<br />
**Routes**
<br />
It contains all routes files of the application. Routes files are used for coordinating get and post files. They're essential and crutial for each web page we have used.
<br />
<br />
**passport.js**
<br />
This file is implemented for the authentication system, any information regarding with log in would be related to this file.
<br />
<br />
**auth.js** 
<br />
User status marker, used for log in and out.
<br />
<br />
**www.js**
<br />
A terminal established for port listening and local application testing.
<br />
<br />
**Controllers** 
<br />
Different controllers manipulates different kinds of data. Uploaded link is managed by linkController and message sent by visitors are
are managed by messageController. Authentication system also has a unique controller binding to it.
<br />
<br />
**Models**
<br />
Contains all database models, and are constructed in the form of mongoose shema.
<br />
<br />
**public/stylesheets** 
<br />
Contains all css files corresponding to each pug file, they're used for front-end form decoration. 
<br />
<br />
**Views** 
<br />
Contains all pug files
<br />
## Description of the Database Structure
Detailed of database model can be found in this repository located at docs/Documents

## Deployment guidelines
**Source Code deployment** 
<br /> 1. To get our code to work, first step is going to our [Github Repository](https://github.com/potatofrank/project-eProtfolio/tree/master),
then you would see a green button says "code", click on it and you'll be able to download our latest patch of master branch, which will be the latest version of the application.
You would need [WebStorm](https://www.jetbrains.com/webstorm/) ready. 
<br /> 2. Download the latest version of it and you can freely access it by signing up using your university account 
or equivalent education account. 
<br /> 3. Unzip the file you've just downloaded from our repository. Drag the whole file into WebStorm. To the bottom left, you would see a terminal option, click on it. Then the 
command line will pop up. Type in "npm install" to finish loading all the dependencies that are required for the application to run. 
<br /> 4. On the top of the file directory, you can see a "bin" folder, expand this folder and choose the "www.js" file, this is the file we use to open a terminal for local host. 
Inside "www", right click anywhere in the script and select "run". If everything goes fine, you will see "connected to mongoose" in the terminal, that means you will now be able to 
test the application locally.
<br /> 5. Now you have made sure that the code will work locally, then create your own GitHub repository and push all the code of our application to your own repository, and it will normally
be pushed to master branch. 
<br /> 6. Sign up a heroku account, it will be free for you. After your heroku account is ready, go to the "deploy" section, connect your github account with heroku, then choose the "master"
branch or the branch you put the source code in, then click on "deploy", the application should be ready to use on the heroku server if nothing goes wrong, if you come into a crash, you 
can use the heroku command line to debug your issues. 
Source Code deployment:  
<br />
<br />
**Database** 
<br />
You would be using our database that is already set up, you don't have to do anything to the uri that is already included inside the application. 
You can connect to the database once you successfully start the application or deploy the application.
<br />
**Administrator credentials** 
<br />
You do need administrator account to access the administrator functions. If you only want to test the app as a visitor, simply sign up a new account. 
<br /> One of the admin details is:<br />
username: admin@iCloud.com<br />
password: Yyc741108<br />
If you want to grant a visitor account the admin privilege, you can go to the database to do this. This will require my university email to access the database, <br />
you can email me at "yichaoy1@student.unimelb.edu.au" for the log in details of our database, given that you specify your identity, that I can confirm you're one of
our client.

## Contributors

-Yichao Yao <yichaoy1@student.unimelb.edu.au> <br />
-Siyu Ji <sji2@student.unimelb.edu.au> <br />
-Yannan Li <yannan1@student.unimelb.edu.au> <br />
-Xuelun Wang <xuelunw@student.unimelb.edu.au> <br />
-Ken lin <kenlin@student.unimelb.edu.au> <br />

## App Url
[https://eportfolioteam3.herokuapp.com/]

## License & copyright
© Team Rigidbody, University of Melbourne
# **CS50 project: Yum**

Hello! My name is Georgiy Shvab. I am from Ukraine.<br/>
I studied web development for about 1 year<br/>
This is readmy file for my CS50 final project.<br/>
My final project is a website for creating and taking this surveys by link.<br/>
<br/>
Firstly I need to say that my english if not perfect, so readme file and some code or text of project proubably contain typos(typos in words, that do not affect code).<br/>
Also, firstly I did this website in Ukrainian, so some words i code can be not translated.<br/>
<br/>

## **Why I choose to do survey project**

I choose survey project because I wanted to do something that can be usefull.<br/>
Project like this can be easily used in school or university by me as a university student or by my father who is a teacher in school.<br/>

<br/>

## **About project**

### **Project languages and libraries**

For my project I used NodeJs with Express on backend. I didn't used python cause I know JS better than python.<br/>
As a database I used mongoDb instead of some of SQL database<br/>
For frontend I used some javascript and of course HTML, CSS and SCSS.<br/>
Instead of Jinja I used Handlebars engine and syntacys<br/>
Except Express I used some libraries like jsonwebtoken, cookei-parser, mongoose etc.<br/>

### **Project structure**

Root of my project has main files like config.json, package.json, index.js, router.js, etc.<br/>
Also, there are 8 folders in root.<br/>
Controllers folder contains controllers for http requests cathcing and main logic.<br/>
Dao folder contains files with data access operations, like queries to database.<br/>
Middlewares folder contains only one middleware for login checking.<br/>
I am not shoore if you will see node_modules folder, cause it ignored by git, there are libraries for backend that i used.<br/>
Public folder contains files, that will be requested from client's browser like css files, JS files, etc.<br/>
Schemas folder contains models or schemas for database.<br/>
SCSS folder contains scss code that was compiled in simple CSS to public/styles folder<br/>
Views folder contains Handlebars templates<br/>

### **Pages of website**

Website has this pages:<br/>

-   Home: /
-   Docs: /documentation
-   Sign In: /login
-   Sign Up: /registration
-   Account: /account
-   New survey: /new-test (new-test because in ukrainian test and survey have almost the same meaning)
-   Test results: /{testId}/results (instead of {testId} id of survey)
-   Test: /{testId} (instead of {testId} id of survey)

<br/>

## **How to use website**

### **How to run server**

**You must have NodeJs installed on your computer to run server**<br/>
**Also, you need to instal modules(libraries) first by using command npm install, server will not run without modules**<br/>
**More over, I used remote mongoDb database, so you need to have an internet connection**<br/>

I have two commands for runnign server.<br/>

-   npm run dev - for development mode
-   npm run start - simple run

## How to use website

Better read docs page on website before using it<br/>

### **How to Sign Up**

Firstly, you need to create account by clicking on Sign Up button at the top.<br/>

### **How to create new survey**

Than you can create new survey by clicking on New Survay button, fill field for name. Than you can fill question fields and add new questions by clicking on button with plus at the bottom.<br/>
After creating new survey you will get survey link.<br/>

### **How to see answers for specific survey**

You can see answers for you survey on results page. To open it you should click on account button and then on specific survey. There are all answers for survey.<br/>

### **How to open survey for answering**

To do this you need to copy link from survey results page or page that opens after creating survey. Than you shoul past it in your browers search field<br/>

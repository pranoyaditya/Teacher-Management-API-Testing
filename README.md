# Teachers API Testing – Student Management System

![Postman](https://img.shields.io/badge/Postman-API%20Testing-orange)
![Newman](https://img.shields.io/badge/Newman-Test%20Runner-blue)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-green)
![GitHub](https://img.shields.io/badge/GitHub-Repository-black)

---

# Project Overview

This project demonstrates **API testing of the Teachers module** from the Student Management System.

The goal of the project is to verify that the Teachers APIs work correctly by testing:

* Authentication flow
* CRUD operations
* Response validation
* Schema validation
* Negative scenarios
* Automated test execution using Newman
* HTML report generation

All API tests were implemented using **Postman** and executed both through **Postman Collection Runner** and **Newman CLI**.

---

# Tools & Technologies

* Postman – API testing
* Newman – Postman command line runner
* Node.js – runtime environment
* newman-reporter-htmlextra – HTML reporting
* GitHub – version control

---

# API Module Tested

Teachers API from the Student Management System.

Base URL

http://54.255.195.111:5171

---

# Test Coverage

## Authentication

* Login with valid credentials
* Token generation validation
* Token saved dynamically in environment

## Teachers CRUD APIs

* Create Teacher
* Get All Teachers
* Filter Teachers
* Get Teacher by ID
* Update Teacher
* Delete Teacher
* Verify deletion

## Negative Tests

* Login with wrong credentials
* Access teachers without token
* Get teacher with invalid ID
* Create teacher with missing required field

---

# Running the Tests

## Run Using Postman

1. Import the Postman collection
2. Import the environment file
3. Select the environment
4. Run the collection using **Collection Runner**

---

## Run Using Newman

### Install Node.js

```bash
node -v
npm -v
```

### Install Newman

```bash
npm install -g newman
```

### Install HTML Reporter

```bash
npm install -g newman-reporter-htmlextra
```

### Run the Collection

```bash
node report_generator.js
```

---

# Test Report

After running the collection using Newman, an HTML report is generated.

Report Location

```
Reports/report.html
```

The report includes:

* Total requests executed
* Passed and failed tests
* Execution time
* Detailed logs

---

# Project Structure

```
project-root
│
├── test_collection
│   ├── teacher_management_apis.json
│   └── environment.json
│
├── README.md
├── report_generator.js
│
├── Reports
│   └── report.html
│
└── Screenshots
    └── (all screenshot images go here)
```

---

# Demonstration Resources

The following resources are available in the Drive folder:

* Screenshot showing the token saved in the environment
* Teacher creation and teacherId storage
* Update verification
* Delete verification
* 404 verification after delete
* Negative test results
* Newman HTML report screenshot
* Full video demonstration

---

# Drive Folder

Add your Google Drive folder link here

```
PASTE DRIVE LINK
```

---

# Video Demonstration

A full walkthrough video of the project execution is available in the Drive folder.

The video demonstrates:

* Authentication flow
* Teachers CRUD API testing
* Negative test scenarios
* Running collection using Newman
* HTML report generation

---

# Author

Preetom Aditya Pranoy

# ClickUp Tasks API Course Project

## Overview

This project contains automated API tests for the **ClickUp Tasks API** using **Postman** and **JavaScript**.

The project covers the complete task lifecycle (CRUD), includes positive and negative test scenarios, supports execution with **Newman**, CI configuration with **CircleCI**, and performance testing using **Apache JMeter**.

---

## Technologies

- Postman
- JavaScript (Postman Tests)
- Newman
- CircleCI
- Apache JMeter

---

## Project Structure

```text
clickup-tasks-api-course-project
│
├── .circleci
│   └── config.yml
│
├── postman
│   ├── ClickUp Tasks API Course Project.postman_collection.json
│   └── ClickUp_Tasks_Env.postman_environment.json
│
├── newman
│   └── newman-report.json
│
├── jmeter
│   ├── ClickUp_Performance_Test.jmx
│   ├── results.jtl
│   └── dashboard
│
├── README.md
└── .gitignore
```

---

## Test Scenarios

### Positive Scenarios

- Create Task
- Get Task
- Update Task
- Delete Task

### Negative Scenario

- Get Task with Invalid ID (401 Unauthorized)

---

## Running Tests

Run the Postman collection using Newman:

```bash
newman run "postman/ClickUp Tasks API Course Project.postman_collection.json" \
-e "postman/ClickUp_Tasks_Env.postman_environment.json" \
--env-var "token=YOUR_CLICKUP_TOKEN"
```

---

## Generate Newman Report

```bash
newman run "postman/ClickUp Tasks API Course Project.postman_collection.json" \
-e "postman/ClickUp_Tasks_Env.postman_environment.json" \
--env-var "token=YOUR_CLICKUP_TOKEN" \
--reporters "cli,json" \
--reporter-json-export "newman/newman-report.json"
```

---

## Performance Testing

Performance testing was implemented using **Apache JMeter**.

Configuration:

- Threads (Users): 10
- Ramp-Up Period: 10 seconds
- Loop Count: 10

Results:

- 100 requests executed
- 0 errors

---

## CI

The project includes a basic **CircleCI** configuration for automated execution of the Postman collection using Newman.

# ClickUp Tasks API Course Project

API automation project for ClickUp Tasks functionality.

## Tools

- Postman
- JavaScript tests in Postman
- Newman
- CircleCI
- JMeter

## Run Postman collection locally

```bash
newman run "postman/ClickUp Tasks API Course Project.postman_collection.json" -e "postman/ClickUp_Tasks_Env.postman_environment.json" --env-var "token=YOUR_CLICKUP_TOKEN"
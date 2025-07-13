# AWS CDK Pipeline Project – PROG8850

**Student:** Rishikumar Patel
**Student ID:** 8972657

---

## 📌 Project Overview

This project demonstrates a complete CI/CD pipeline using the **AWS Cloud Development Kit (CDK)** and **AWS CodePipeline**. It showcases the provisioning and deployment of AWS resources using infrastructure-as-code (IaC) principles.

---

## 🛠️ Technologies Used

- **AWS CDK (TypeScript)**
- **AWS CodePipeline**
- **AWS CodeBuild**
- **Amazon S3**
- **AWS Lambda**
- **Amazon DynamoDB**
- **GitHub (Source Control)**

---

## 🧱 AWS Resources Created via CDK

| Resource  | Description                                        |
| --------- | -------------------------------------------------- |
| S3 Bucket | Versioned bucket for storing static files          |
| Lambda    | A basic function returning "Hello from Lambda"     |
| DynamoDB  | Table with `id` as the partition key for CRUD data |

All resources fall under the **AWS Free Tier**.

---

## 🔁 CI/CD Pipeline Workflow

1. **Source Stage:**

   - GitHub repository triggers pipeline on push to `main` branch.

2. **Build Stage:**

   - CodeBuild runs `cdk synth` and `cdk deploy` using `buildspec.yml`.

3. **Deployment Stage:**
   - Deployment is handled within the Build stage via CDK.

---

## 🧪 Testing & Validation

- ✅ Bucket, Lambda, and Table visible in AWS Console
- ✅ Lambda tested with sample input/output
- ✅ CodePipeline verified with successful execution on code change

---

## 📁 Project Structure

```
├── lib/
│   └── prog8850-cdk-pipeline-8972657-stack.ts  # Main CDK stack
├── bin/
│   └── prog8850-cdk-pipeline-8972657.ts        # App entry point
├── buildspec.yml                                # CodeBuild instructions
├── README.md
```

---

## 🚀 Deployment Instructions

```bash
cdk bootstrap
cdk deploy
```

To destroy the stack and clean up resources:

```bash
cdk destroy
```

---

## 🧠 Notes

- Stack name: `Prog8850CdkPipeline8972657Stack`
- CodePipeline name: `cdk-pipeline-8972657`
- IAM permissions were configured to support:
  - `iam:PassRole`
  - `ssm:GetParameter`
  - `cloudformation:DescribeStacks`
  - `s3:PutObject`, `s3:GetObject`, `s3:ListBucket`

---

## 📷 Screenshots

### GitHub Repository Pushed ✅

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/2b744c3a-ae26-4fa0-b652-b9f9cf2483c8" />

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/1fb55969-bc96-4541-824e-feff479144be" />

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/a4902b67-f23c-4b66-aa6a-2a6d9a083e2d" />

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/ef792237-2d16-4cd7-8cd7-705d66c02ca6" />

### AWS Resources Deployed ✅

- **Amazon S3**

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/09187624-f8d6-41b1-9b15-9bd1187aacf5" />

- **AWS Lambda**

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/257148f7-73af-461e-a63e-9f51f3836d41" />

- **Amazon DynamoDB**

<img width="2560" height="1600" alt="image" src="https://github.com/user-attachments/assets/1810594e-5ae6-4217-9bcd-2b13ab40ba49" />

> **Developed by:** Rishikumar Patel (8972657)
> PROG8850, Conestoga College

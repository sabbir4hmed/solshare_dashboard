# 🧪 Emobility — Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Allure](https://img.shields.io/badge/Allure_Report-FF6347?style=for-the-badge&logo=testcafe&logoColor=white)
![POM](https://img.shields.io/badge/Design_Pattern-POM-blueviolet?style=for-the-badge)

> A production-ready **End-to-End (E2E) Test Automation Framework** for the **Emobility** 
> web platform — built with **Playwright** & **TypeScript**, structured using the 
> **Page Object Model (POM)** design pattern for clean, scalable, and maintainable test code.

---

## 📌 Table of Contents

- [Prerequisites](#-prerequisites)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Credentials Configuration](#-credentials-configuration)
- [Playwright Configuration](#-playwright-configuration)
- [Running Tests](#-running-tests)
- [Test Reporting (Allure)](#-test-reporting-allure)
- [Test Cases](#-test-cases)
- [Architecture — Page Object Model](#-architecture--page-object-model)
- [Helper Utilities](#-helper-utilities)
- [gitignore Setup](#-gitignore-setup)
- [Author](#-author)

---

## ✅ Prerequisites

Ensure the following tools are installed before setting up the project:

| Tool | Minimum Version | Download Link |
|------|----------------|---------------|
| Node.js | >= 18.x | [nodejs.org](https://nodejs.org) |
| npm | >= 9.x | Comes with Node.js |
| Git | Latest | [git-scm.com](https://git-scm.com) |
| VS Code *(Recommended IDE)* | Latest | [code.visualstudio.com](https://code.visualstudio.com) |
| Allure Commandline | Latest | [allurereport.org](https://allurereport.org) |

---

## 🛠 Tech Stack

| Technology | Role in Framework |
|------------|------------------|
| **Playwright** | Core browser automation engine |
| **TypeScript** | Strongly typed test scripting |
| **Allure Reporter** | Rich HTML test reporting |
| **Page Object Model** | Maintainable test architecture pattern |
| **Node.js** | JavaScript runtime environment |

---


---

## ⚙️ Installation & Setup

### Step 1 — Clone the Repository

### Step 2 — Install Node Dependencies <br>
npm install

### Step 3 — Install Playwright Browsers <br>
npx playwright install

ℹ️ This will download Chromium, Firefox, and WebKit browser binaries locally.

### Step 4 — Verify Playwright Installation <br> 
npx playwright --version


### ▶️ Running Tests <br>
Run All Tests <br>
npx playwright test


### 📄 LicenseThis project is developed for internal QA purposes only and is not intended for public distribution. <br>
Built by Sabbir — QA Engineer





# FitTrack 

FitTrack is a full-stack health & fitness tracking application that allows users to log and view their workouts, meals, and sleep. It demonstrates polyglot persistence using PostgreSQL for structured data and MongoDB for unstructured data (sleep logs).

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Java Spring Boot
- **Databases**:
  - PostgreSQL (Workouts, Meals, Users)
  - MongoDB (Sleep Logs)
- **Other Tools**: MongoDB Compass, IntelliJ, VS Code

---

## Functional Requirements

- Users can log **Workouts** (type, duration, calories burned)
- Users can log **Meals** (type, calories, protein, carbs, fat)
- Users can log **Sleep Logs** (hours, quality, notes, date)
- Users can **edit** and **delete** all logs
- Users can **view logs** related to them
- Each log is linked to a user
- Admin (optional) can see all data

---

## Non-Functional Requirements

- Runs on `localhost`
- Reproducible with MongoDB running locally
- Clean modular folder structure
- Fully testable via browser 
- Real-time updates on creation and deletion of data
- Uses RESTful APIs

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- Java 17
- PostgreSQL (running locally)
- MongoDB (installed and running via Homebrew on macOS)
- Maven

---

## Running the Project

### Start MongoDB (macOS)
```bash
brew services start mongodb/brew/mongodb-community@7.0
```

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

---

## Project Structure

```
FitTrack/
backend/ # (Java Spring Boot App)
frontend/ (React App)

---

## Screenshots

> You can include example screenshots of the UI here (Users table, Meals, Workouts, SleepLogs etc.)

---

## Database

### PostgreSQL

Stores:
- Users
- Workouts
- Meals

Use pgAdmin to inspect.

### MongoDB

Stores:
- Sleep Logs

Use MongoDB Compass or CLI to inspect:
```bash
mongo
use fittrack
db.sleep_logs.find()
```

---

## Exam Requirements Checklist

- [x] Functional + Non-functional requirements defined
- [x] Multiple CRUD entities
- [x] Two types of databases used (PostgreSQL + MongoDB)
- [x] Complete working frontend and backend
- [x] GitHub repo: [https://github.com/VivekNagra/fittrack-app](https://github.com/VivekNagra/fittrack-app)

---

## Author

**Vivek Singh Nagra**  
Databaser Exam Project – Softwareudvikling, CphBusiness  
Summer 2025


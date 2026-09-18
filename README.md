# NodeJS-Middleware-Assignment6

A beginner-friendly Node.js Express assignment created to understand **router-level middleware, request logger middleware, and response time middleware**.

## Tasks

1. **Router-Level Middleware**
2. **Request Logger Middleware**
3. **Response Time Middleware**

## Project Structure

```text
├── Task-1
│   ├── Screenshots
│   ├── router
│   │   └── apiRouter.js
│   └── server.js
│
├── Task-2
│   ├── Screenshots
│   └── server.js
│
├── Task-3
│   ├── Screenshots
│   └── server.js
│
├── README.md
└── package.json
```

## Concepts Used

- Node.js
- Express.js
- Express Router
- Router-Level Middleware
- Global Middleware
- `router.use()`
- `app.use()`
- `req.method`
- `req.url`
- `req.originalUrl`
- `next()`
- `Date.now()`

## Tasks Performed

### Task 1 - Router-Level Middleware

Created a custom router-level middleware named `routerLogger` to log the HTTP method, request URL, and current date and time for every request received by the router.

Routes:

```text
GET /api/students
GET /api/courses
GET /api/faculty
```

The responses are:

```text
Students List
Courses List
Faculty List
```

### Task 2 - Request Logger Middleware

Created a custom middleware named `logger` to log every incoming request before the route executes.

Routes:

```text
GET /
GET /about
GET /contact
```

The responses are:

```text
Welcome to Home Page
About Us
Contact Information
```

### Task 3 - Response Time Middleware

Created a custom middleware named `responseTimeLogger` to measure the time taken to process each request in milliseconds.

Routes:

```text
GET /
GET /products
GET /users
```

The responses are:

```text
Home Page
Product List
User List
```

## How to Run

Navigate to the assignment folder:

```bash
cd Assignment-6
```

Install the required dependency:

```bash
npm install
```

Run Task-1:

```bash
node Task-1/server.js
```

Run Task-2:

```bash
node Task-2/server.js
```

Run Task-3:

```bash
node Task-3/server.js
```

## Routes

| Task | Method | Route | Expected Output |
|------|--------|-------|-----------------|
| Task 1 | GET | `/api/students` | Students List |
| Task 1 | GET | `/api/courses` | Courses List |
| Task 1 | GET | `/api/faculty` | Faculty List |
| Task 2 | GET | `/` | Welcome to Home Page |
| Task 2 | GET | `/about` | About Us |
| Task 2 | GET | `/contact` | Contact Information |
| Task 3 | GET | `/` | Home Page |
| Task 3 | GET | `/products` | Product List |
| Task 3 | GET | `/users` | User List |

## Expected Output

### Task 1

```text
Server running on port 3000

GET /api/students
GET /api/courses
GET /api/faculty
```

### Task 2

```text
Server running on port 3001

GET /
GET /about
GET /contact
```

### Task 3

```text
Server running on port 3400

GET / - 5 ms
GET /products - 2 ms
GET /users - 1 ms
```

The response time may vary depending on the system.

## Author

**Sanika Kangane 👩🏻‍💻**

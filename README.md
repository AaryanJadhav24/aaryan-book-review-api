
#  Book Review API – Node.js

Created by **Aaryan Jadhav**  

A RESTful API built with Node.js and Express for managing books and their reviews. It includes JWT-based user authentication and a clean, modular API design.

---

##  Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/aaryanjadhav24/aaryan-book-review-api.git
cd book-review-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the help of `.env.example`

### 4. Start the Server

```bash
npm start
```

---

## 💻 How to Run Locally

### Prerequisites

- Node.js and npm installed
- MongoDB running locally or use a MongoDB Atlas URI

### Steps

1. Run MongoDB locally or use a remote URI.
2. Set up the `.env` file as shown above.
3. Use Postman or `curl` to test the API.

---

##  Example API Requests

###  Auth

#### Signup

```http
POST /api/signup
Content-Type: application/json

Body:
{
  "username": "aaryan",
  "email": "aaryan@example.com",
  "password": "mypassword"
}
```

#### Login

```http
POST /api/login

Body:
{
  "email": "aaryan@example.com",
  "password": "mypassword"
}
```

---

###  Book

#### Add Book (Authenticated)

```http
POST /api/books
Headers:
Authorization: Bearer <your_token>

Body:
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "genre": "Self-help",
  "description": "Powerful guide on building better habits."
}
```

#### Get All Books

```http
GET /api/books?page=1&limit=10&author=James Clear&genre=Self-help
```

#### Get Book by ID

```http
GET /api/books/<book_id>
```

---

###  Reviews

#### Submit Review

```http
POST /api/books/<book_id>/reviews
Headers:
Authorization: Bearer <your_token>

Body:
{
  "rating": 4,
  "comment": "Great insights!"
}
```

#### Update Review

```http
PUT /api/reviews/<review_id>

Body:
{
  "rating": 5,
  "comment": "Changed my mind – brilliant!"
}
```

#### Delete Review

```http
DELETE /api/reviews/<review_id>
```

---

###  Search

```http
GET /api/search?q=atomic
```

---

##  Design Decisions & Assumptions

- **Modular structure**: Routes, controllers, and models are split for maintainability.
- **Pagination**: Books and reviews support pagination via `page` and `limit` query parameters.
- **Single review per user**: A user can review each book only once.
- **Mongoose validations**: Enforced at model level for data consistency.
- **JWT expiration**: Tokens are valid for 1 day to enhance security.



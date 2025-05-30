# Database Schema Design

### 1. **User**

| Field      | Type     | Description                   |
|------------|----------|-------------------------------|
| `_id`      | ObjectId | Primary key                   |
| `username` | String   | Required username             |
| `email`    | String   | Required, unique email address|
| `password` | String   | Hashed password               |

### 2. **Book**

| Field      | Type     | Description           |
|------------|----------|-----------------------|
| `_id`      | ObjectId | Primary key           |
| `title`    | String   | Title of the book     |
| `author`   | String   | Author of the book    |
| `genre`    | String   | Genre or category     |

### 3. **Review**

| Field    | Type     | Description                          |
|----------|----------|--------------------------------------|
| `_id`    | ObjectId | Primary key                          |
| `book`   | ObjectId | Reference to the reviewed Book       |
| `user`   | ObjectId | Reference to the User who reviewed   |
| `rating` | Number   | Rating (typically 1–5)               |
| `comment`| String   | User’s review comment                |

---

### 🔗 Relationships

- A **User** can write **multiple Reviews**.
- A **Book** can have **multiple Reviews**.
- Each **Review** is tied to **one Book** and **one User**.

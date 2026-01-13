# Full Stack Open - Part 4

This repository contains my solutions for Part 4 (Testing the backend, User administration, Token authentication) of the Helsinki University Full Stack Open course.

## Course Information

Part 4 focuses on:

- Structure of backend application
- Introduction to testing
- Testing the backend
- User administration
- Token authentication

Course website: [Full Stack Open - Part 4](https://fullstackopen.com/en/part4)

## Project: Blog List Application

This part builds a blog list backend application with testing and authentication features.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Configure MongoDB connection:

   - For local MongoDB: The default connection string in `.env` is `mongodb://localhost/bloglist`
   - For MongoDB Atlas: Update the `MONGODB_URI` in `.env` with your Atlas connection string:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bloglist?retryWrites=true&w=majority
     ```

3. Run in development mode (with auto-reload):

```bash
npm run dev
```

4. Run in production mode:

```bash
npm start
```

## API Endpoints

- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create a new blog

### Testing with Postman or VS Code REST Client

**Get all blogs:**
```
GET http://localhost:3003/api/blogs
```

**Create a new blog:**
```
POST http://localhost:3003/api/blogs
Content-Type: application/json

{
  "title": "Example Blog Post",
  "author": "John Doe",
  "url": "https://example.com/blog-post",
  "likes": 0
}
```

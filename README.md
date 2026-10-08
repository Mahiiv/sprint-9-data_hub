# Sprint 9 - The Data Hub (Track B)

A small REST API server made with Node.js and Express. It handles blog posts and keeps them in an array in memory (no database yet).

## How to run

1. npm install
2. node server.js
3. Server runs on http://localhost:5000

## Routes

| Method | Route | What it does |
|--------|-------|--------------|
| GET | /posts | gives all posts |
| GET | /posts/:id | placeholder, says "Route active" |
| POST | /posts | adds a new post (send title and content as JSON) |
| PUT | /posts/:id | placeholder, says "Route active" |
| DELETE | /posts/:id | removes the post with that id |

## Tested with

Thunder Client in VS Code.

## Notes

Posts are lost when the server restarts, because they only live in an array.

# Prompts.md - Sprint 9 (Track B)

I used Claude only for explaining things and debugging. I typed all the code in myself and tested it.

## Prompts I used

1. I pasted the sprint 9 instructions and asked Claude to explain the sprint in simple language.
   - Result: I understood the two tracks and picked Track B (Express).

2. I asked how to start the project from scratch, which folder to make and what commands to run.
   - Result: I made the data_hub folder, ran npm init -y and npm install express.

3. I asked for help with Phase 1 (server on port 5000 and 5 routes).
   - Result: all 5 routes worked and returned "Route active".

4. I asked for help with Phase 2 (array as database, POST, GET, DELETE).
   - Result: posts get added to the array and deleted by id.

## Problems I got

1. GET /posts kept showing "Route active" after I changed the code.
   - Reason: an old server was still running in another terminal.
   - Fix: closed all node processes with taskkill and started the server again.

2. POST gave "Cannot read properties of undefined (reading 'title')".
   - Reason: Thunder Client was not sending the body as JSON.
   - Fix: used the Body tab, picked JSON and pasted the data there.

## What I learned

- app.use(express.json()) has to be above the routes, or req.body is undefined.
- I have to restart the server after every code change.
- Data in the array is lost when the server restarts.

# Welcome to the Signafire Internship Interview Challenge!

_We're using this assignment as a way to assess your knowledge, ability to learn, and software architecture inclinations._

## Background

We are taking on two interns this summer and they could be more frontend, full-stack, or backend (we call it API here). There is also an open internship position on the data pipeline team. If you're more interested in that please [talk to Gurgen about their take home test]().

Thus - if you're more interested in frontend please do the frontend track described below. After completing MVP portion of the track, focus on making the frontend work thoroughly and doing the extra features for frontend.

If you're more interested in backend please focus on making the APIs work well and doing the extra features for API.

If you're full-stack please build out both tracks.

## Challenge

This test must be completed in javascript. Submissions in other languages will not be assessed.

- For the frontend any major frameworks such as React, Angular 2+, or Vue are acceptable.
- For the backend please use Node and Express. Feel free to choose any major framework for displaying the data from the list above. Vanilla JS (ES6/Typescript) or templating are also acceptable.

When submitting your work, follow the instructions given in the email. Make sure to include instructions to run your application/server in your `README.md`.

### Frontend

#### MVP

Reference the wireframe included in this repo under `assets/` folder. Match styling of the page as close to it as possible. The wireframe was not designed to have fully fleshed out UX, so use your best judgement to make your app more user friendly. Also, you will be graded on how you build your components (hint: should not only have one javascript file), your folder structure, and code readability since we highly value quality of our code.

- Display all the messages and its contents
- Display length of messages stared
- Able to toggle starring messages
  - Since API is not provided, for the frontend track, any user input modification to the provided JSON is not expected to persist over multiple sessions.

#### Additional Features

- Add trash button
  - Place the button on the right side of "Star Message!"/"Starred!" button
  - Button font color: `#ffffff`
  - Button background color: `#ff4007`
  - Click the button to trash a message
  - Trashed message should no longer be visible in the view
- Add view toggle button
  - Place the button below the length of starred message information text ("Starred: 12" in the wireframe)
  - Display "Show Trashed Messages" by default
  - Clicking the button should toggle the view to display only trashed messages
    - Button should change to display "Show Untrashed Messages"
  - Clicking the button again should toggle the view to display only untrashed messages
- Text highlight
  - Place an input box right side of "Show Trashed Messages"
  - Input box should have a "Submit" button to its right
  - User is able to type in any text and click "Submit" button
  - If any of the texts in the message content matches the input query, highlight the text with a background color of your choice
    - Highlight should be applied to all untrashed messages
  - (i.e. user input = "foo", content = "foo bar", highlighted content = "[foo] bar")

### Backend

#### MVP

- SQLite
- Display all the messages and its contents
- Display length of messages stared
- Able to toggle starring messages

### Additional Features

- Sort
- Text highlight (similar to ontology)

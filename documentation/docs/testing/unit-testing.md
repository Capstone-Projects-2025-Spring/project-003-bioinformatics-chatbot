---
sidebar_position: 1
---
# Unit tests

## Backend
### Library
Pytest was chosen for backend testing due to its ability to easily integrate with
Flask. For coverage we are using Coverage.py for its ability to monitor pytest. Each
function and route will consist be tested via pytest on the backend. To run tests
`python -m pytest -vv`

## Frontend
### Library
We are using vitetest for frontend testing in React. Viteest was chosen due to
its ability to easily inegrate compenent testing in a React-Vite project. Each component
will have tests associated with it. To run tests `cd frontend && npm run test`.



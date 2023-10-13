## Iress code test

- aws hosting link: http://iresstest.s3-website-ap-southeast-2.amazonaws.com/
- aws server link: https://77xmk0xq36.execute-api.ap-southeast-2.amazonaws.com/dev/api/movies

## UI - frontend

### How to run the app:

- go to ui folder
- run yarn install
- run yarn dev
- go to http://localhost:5020/ in the broswer

### How to test the app:

- go to ui folder
- run yarn install
- run yarn test

### How to build the app:

- go to ui folder
- run yarn install
- run yarn build

### How to search the movies:

- go to http://localhost:5020/ or http://iresstest.s3-website-ap-southeast-2.amazonaws.com/
- enter the keywords in input field
- hit search
  - key word - in - with multi results
  - key word - Joker (2019) - with one result
  - key word - test - with no results

## Server - to serve node express api

### How to run the server:

- go to server folder
- run yarn install
- run yarn dev
- go to http://localhost:8080/api/movies in the broswer

## Note:

- the server has been deployed to aws, if you want to test locally, simply replace the aws url with localhost url

- running environment - node v18.18.0

## Todo:

- to move all components into npm
- to add more unit test to each component
- to deploy it to s3 hosting env
- to create search api
- to create movie details api
- etc...

### Tech stacks

#### ui

- react, react-query, style-component, axios

#### server

- node, express

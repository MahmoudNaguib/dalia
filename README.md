## Node-Express-Kness-Blog


## Description

## Installation

```bash
$ git clone https://github.com/MahmoudNaguib/dalia
$ cd dalia
$ cp .env.example .env  // then update the database configuation 
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# Run database migration
$ knex migrate:latest

# Run database seeders
$ knex seed:run
```

## Default user
```bash
Email: user1@dalia.com
Password: dalia@12345
```

## POSTMAN API
```bash
https://documenter.getpostman.com/view/375068/UyxjF5z8
or you can use the exported posman file in project root path : Dalia.postman_collection.json
- create environment with variables
  - url: localhost:8000
  - email:user1@dalia.com
  - password: dalia@12345
```
## Modules Created
```bash
- Authentication: Login/Register
- Profile : View profile, Edit profile
- Token based Authentication: when user logged, it will get all user info with token field will be sent in the header
eg: Header: Authorization value "Bearer {{token}}"
- Contacts module: List, Create, Edit, View, Delete
- Certificates module: List, Create, Edit, View, Delete
- Experiences module: List, Create, Edit, View, Delete
- Skills module: List, Create, Edit, View, Delete
```
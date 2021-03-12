# dev-builder
Welcome to dev-builder, a platform for software developers to manage, share, and create dialogue around their personal projects, as well as get inspiration from and support other creators' ideas and work.

*Click on the below image to see a demo.*

[![IMAGE ALT TEXT HERE](https://github.com/sarabastian/dev-builder/blob/main/frontend/public/Screen%20Shot%202021-02-21%20at%203.20.42%20PM.png)](https://www.youtube.com/watch?v=H8_LGSDINUk)

## Setup and Installation
To get started, clone this repository onto your local machine.

Open up your terminal, and clone down the repository.

```
git clone git@github.com:sarabastian/dev-builder.git
```

In your terminal, navigate to the project directory.

```
cd dev-builder
```

Next, navigate to the backend directory.
```
cd backend
```
Install the dependencies and seed the database:
```
bundle install
```
```
rails db:migrate && rails db:seed
```
Start the Rails server.
```
rails s -p 3001
```
Open up another terminal, and navigate to the front-end directory.
```
cd frontend
```

Install the inlcuded packages and start the front-end server.
```
npm install && npm start
```

Once the local server has opened, you are ready to start using the app. Enjoy!

### About

dev-builder was built on a Ruby on Rails API and a React front-end as a capstone project for Flatiron School.

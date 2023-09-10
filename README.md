# Project: HNG Internship Stage 2 Backend Task

## [![Build Status](https://raw.githubusercontent.com/Chosen2730/hng-stage-two/main/UML/uml.jpg)](https://raw.githubusercontent.com/Chosen2730/hng-stage-two/main/UML/uml.jpg)

# A. Documentation

---

## 1. Get All Persons

#### Description

- This endpoint gets all persons in the database.

### Method: GET

> ```
> https://hng-backend-stage-two.vercel.app/api/
> ```

### Example Response (**raw**)

```json
[
  {
    "_id": "64fe03a53dc03d4b348fd49a",
    "name": "Simon Robinson",
    "__v": 0
  },
  {
    "_id": "64fe03bb3dc03d4b348fd49e",
    "name": "Ruth Justice",
    "__v": 0
  }
]
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 2.Create Person

#### Description

- This endpoint create a new person and save to the database
- Example below shows that a person name "Adepitan Ademola" has been created and added to the database
- Inputs must be passed through the request body.
- Only name of type string is allowed in the body.
- Name must be unique, if a duplicate name is entered, the request will spit error

### Method: POST

> ```
> https://hng-backend-stage-two.vercel.app/api/
> ```

### Example Body (**raw**)

```json
{
  "name": "Adepitan Ademola"
}
```

### Example Response (**raw**)

```json
{
  "name": "Adepitan Ademola",
  "_id": "64fe0cf53795160772b6e6a1",
  "__v": 0
}
```

### Example Duplicate Error Response (**raw**)

```json
{
  "msg": "This name already exist, enter a new unique name"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 3. Get Single Person

### Method: GET

> ```
> https://hng-backend-stage-two.vercel.app/api/{user_id}
> ```

- Supposing user_id is "64fe03bb3dc03d4b348fd49e";

### Example Response (**raw**)

```json
{
  "_id": "64fe0a0928e2ada1b9c5f800",
  "name": "Adepitan Ademola",
  "__v": 0
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 4. Update Person

### Method: PATCH

> ```
> https://hng-backend-stage-two.vercel.app/api/{user_id}
> ```

- Supposing user_id is "64fe03bb3dc03d4b348fd49e";

### Example Body (**raw**)

```json
{
  "name": "Ruth Justina"
}
```

### Example Response (**raw**)

```json
{
  "msg": "User with ID 64fe03bb3dc03d4b348fd49e has been Updated successfully",
  "person": {
    "_id": "64fe03bb3dc03d4b348fd49e",
    "name": "Ruth Justina",
    "__v": 0
  }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## 5. Delete Person

### Method: DELETE

> ```
> https://hng-backend-stage-two.vercel.app/api/{user_id}
> ```

- Supposing user_id is "64fe03bb3dc03d4b348fd49e";

### Example Response (**raw**)

```json
{
  "msg": "User with ID 64fe03bb3dc03d4b348fd49e has been deleted successfully"
}
```

---

# B. Installation

---

To use this repository in your local machine. You must have installed [Node.js](https://nodejs.org/) and also have [Git](https://git-scm.com/) configured on your machine.

Follow the steps below.

### Step 1: Clone the repository

In your prefered directory on your machine run this command

```
  git clone https://github.com/Chosen2730/hng-stage-two.git
```

Then change directory into the file.

```
 cd hng-stage-two
```

### Step 2: Install the dependencies

The clone repository contains package.json file. Run the following command to install the packages

```
  npm install
```

### Step 3: Create an environment variable

Create a .env file, and paste the code below, replace <your-mongo-url-connection-string> with your mongoDB collection connection string. This means you must have created a collection on MongoDB atlas already.

```
  MONGO_URI=<your-mongo-url-connection-string>
```

### Step 4: Run your app

Run the app on your machine by running the command below

```
 npm start
```

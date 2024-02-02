# SyncPro

# 📄 Get started here

This template contains a boilerplate for documentation that you can quickly customize and reuse.

## 🔖 How to use this template

- Replace the content given brackets (()) with your API's details.
- Tips are formatted in `codespan` - feel free to read and remove them.

The SyncPro web app provides many API products, tools, and resources that enable you to manage your team, projects and deadlilnes

`You can also list the APIs you offer, link to the relevant pages, or do both in this section.`

## **Getting started guide**

`Get the api link from the production environment to start testing`

To start using the SyncPro ApI, you need to -

`The points given below are from The Postman API's documentation. You can reference it to write your own getting started guide.`

- You must use a valid API Key to send requests to the API endpoints. You can get your API key from Postman's [integrations dashboard](https://go.postman.co/settings/me/api-keys).
- The API has [rate and usage limits](https://postman.postman.co/workspace/Collection-Templates~6311738d-2e70-441f-ae12-78caf078c5b7/collection/22517504-e9c28f47-1253-44af-a2f3-20dce4da1f18?ctx=documentation#rate-and-usage-limits).
- The API only responds to HTTPS-secured communications. Any requests sent via HTTP return an HTTP 301 redirect to the corresponding HTTPS resources.
- The API returns request responses in JSON format. When an API request returns an error, it is sent in the JSON response as an error key.

## Authentication

`We require cookies to authenticate your request.`

The SyncPro API uses cookies for authentication.

`The details given below are from the Postman API's documentation. You can reference it to w`

### Authentication error response

If an API key is missing, malformed, or invalid, you will receive an HTTP 401 Unauthorized response code

### 503 response

An HTTP `503` response from our servers indicates there is an unexpected spike in API access traffic. The server is usually operational within the next five minutes. If the outage persists or you receive any other form of an HTTP `5XX` error, [contact support](https://support.postman.com/hc/en-us/requests/new/)

# 📁 Folder: user

## End-point: get user

Gets information about the authenticated user.

### Method: GET
>
>
```
>/users
>```
>
### Body (**raw**)

```json

```

### Response: 200

```json
{
    "status": "success",
    "message": "Current user fetched successfully",
    "data": {
        "_id": "65bbc3d5dc47e2df74a13f98",
        "username": "Celestine00",
        "email": "ejioforcelestine77@gmail.com",
        "password": "$2b$10$YC.//8/vNouVgHpOVoPCf.dHxRWZcrrVbXWmWiNJE.9kZZ1f7DeAe",
        "teams": [],
        "isTermsAccepted": true,
        "lastLogin": "2024-02-01T16:58:32.517Z",
        "isDeleted": false,
        "createdAt": "2024-02-01T16:16:21.715Z",
        "updatedAt": "2024-02-01T17:14:03.331Z",
        "__v": 0,
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmJjM2Q1ZGM0N2UyZGY3NGExM2Y5OCIsImlhdCI6MTcwNjgwNjcxMiwiZXhwIjoxNzA2ODkzMTEyfQ.cZLZow9pVz-DzaQH8WjH3qv3f2_kM4RjW2WXZ-qwu0s"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete user

Gets information about the authenticated user.

### Method: DELETE
>
>```
>/users
>```
>
### Body (**raw**)

```json

```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user

### Method: PATCH
>
>```
>/users
>```
>
### Body (**raw**)

```json
{
    "username": "Celestine00"
}
```

### Response: 200

```json
{
    "status": "success",
    "message": "User updated successfully",
    "data": {
        "_id": "65bbc3d5dc47e2df74a13f98",
        "username": "Celestine00",
        "email": "ejioforcelestine77@gmail.com",
        "password": "$2b$10$YC.//8/vNouVgHpOVoPCf.dHxRWZcrrVbXWmWiNJE.9kZZ1f7DeAe",
        "teams": [],
        "isTermsAccepted": true,
        "lastLogin": "2024-02-01T16:58:32.517Z",
        "isDeleted": false,
        "createdAt": "2024-02-01T16:16:21.715Z",
        "updatedAt": "2024-02-01T17:14:03.331Z",
        "__v": 0,
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmJjM2Q1ZGM0N2UyZGY3NGExM2Y5OCIsImlhdCI6MTcwNjgwNjcxMiwiZXhwIjoxNzA2ODkzMTEyfQ.cZLZow9pVz-DzaQH8WjH3qv3f2_kM4RjW2WXZ-qwu0s"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: member

## End-point: get member by teamId

### Method: GET
>
>```
>/members/:teamId
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update member role

### Method: PATCH
>
>```
>/members/role/update?memberId=65bc19d9962800549101a0c4&role=member
>```
>
### Query Params

|Param|value|
|---|---|
|memberId|65bc19d9962800549101a0c4|
|role|member|

### Response: 200

```json
{
    "status": "success",
    "message": "Member updated successfully",
    "data": {
        "_id": "65bc19d9962800549101a0c4",
        "user": "65bbc3d5dc47e2df74a13f98",
        "role": "member",
        "team": "65bc1956962800549101a0bf",
        "tasks": [],
        "createdAt": "2024-02-01T22:23:21.483Z",
        "updatedAt": "2024-02-02T00:08:00.033Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: add member to team

### Method: POST
>
>```
>/members/add/:teamCode
>```
>
### Response: 201

```json
{
    "status": "success",
    "message": "User added successfully",
    "data": {
        "user": "65bbc3d5dc47e2df74a13f98",
        "role": "member",
        "team": {
            "_id": "65bc0815b19871faee582fa6",
            "name": "Fresterea",
            "owner": "65bbc3d5dc47e2df74a13f98",
            "teamCode": "G18U2Y1",
            "projects": [],
            "members": [
                "65bc09f2b20ce67410f9dedf"
            ],
            "createdAt": "2024-02-01T21:07:33.363Z",
            "updatedAt": "2024-02-01T21:15:30.486Z",
            "__v": 1
        },
        "tasks": [],
        "_id": "65bc09f2b20ce67410f9dedf",
        "createdAt": "2024-02-01T21:15:30.234Z",
        "updatedAt": "2024-02-01T21:15:30.234Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: team

## End-point: get user teams

Gets information about the authenticated user.

### Method: GET
>
>```
>/teams/
>```
>
### Body (**raw**)

```json

```

### Response: 200

```json
{
    "status": "success",
    "message": "Teams fetched successfully",
    "data": [
        {
            "_id": "65bbf3f61cedf8b1462edb1b",
            "name": "Fresterea",
            "owner": "65bbc3d5dc47e2df74a13f98",
            "projects": [],
            "members": [],
            "createdAt": "2024-02-01T19:41:42.055Z",
            "updatedAt": "2024-02-01T19:41:42.055Z",
            "__v": 0
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get team by id

Gets information about the authenticated user.

### Method: GET
>
>```
>/teams/:teamId
>```
>
### Body (**raw**)

```json

```

### Response: 200

```json
{
    "status": "success",
    "message": "Team fetched successfully",
    "data": {
        "_id": "65bbf2114b1324105bc7176e",
        "name": "Fresterea",
        "owner": "65bbc3d5dc47e2df74a13f98",
        "projects": [],
        "members": [],
        "createdAt": "2024-02-01T19:33:37.213Z",
        "updatedAt": "2024-02-01T19:33:37.213Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create team

Gets information about the authenticated user.

### Method: POST
>
>```
>/teams
>```
>
### Body (**raw**)

```json
 {
    "name": "Fresterea",
    "description": "We are building a chat app"
}
```

### Response: 201

```json
{
    "status": "success",
    "message": "Team created successfully",
    "data": {
        "name": "Fresterea",
        "owner": "65bbc3d5dc47e2df74a13f98",
        "projects": [],
        "members": [],
        "_id": "65bbf2114b1324105bc7176e",
        "createdAt": "2024-02-01T19:33:37.213Z",
        "updatedAt": "2024-02-01T19:33:37.213Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete team by id

Gets information about the authenticated user.

### Method: DELETE
>
>```
>/teams/:teamId
>```
>
### Body (**raw**)

```json

```

### Response: 200

```json
{
    "status": "success",
    "message": "Team deleted successfully",
    "data": null
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update user

### Method: PATCH
>
>```
>/user
>```
>
### Body (**raw**)

```json
{
    "username": "Celestine00"
}
```

### Response: 200

```json
{
    "status": "success",
    "message": "User updated successfully",
    "data": {
        "_id": "65bbc3d5dc47e2df74a13f98",
        "username": "Celestine00",
        "email": "ejioforcelestine77@gmail.com",
        "password": "$2b$10$YC.//8/vNouVgHpOVoPCf.dHxRWZcrrVbXWmWiNJE.9kZZ1f7DeAe",
        "teams": [],
        "isTermsAccepted": true,
        "lastLogin": "2024-02-01T16:58:32.517Z",
        "isDeleted": false,
        "createdAt": "2024-02-01T16:16:21.715Z",
        "updatedAt": "2024-02-01T17:14:03.331Z",
        "__v": 0,
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmJjM2Q1ZGM0N2UyZGY3NGExM2Y5OCIsImlhdCI6MTcwNjgwNjcxMiwiZXhwIjoxNzA2ODkzMTEyfQ.cZLZow9pVz-DzaQH8WjH3qv3f2_kM4RjW2WXZ-qwu0s"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: auth

## End-point: login

### Method: POST
>
>```
>/auth/login
>```
>
### Body (**raw**)

```json
{
    "email":"ejioforcelestine77@gmail.com",
    "password": "Chinaza@1.0"
}
```

### Response: 200

```json
{
    "status": "success",
    "message": "Login successful",
    "data": {
        "_id": "65bbc3d5dc47e2df74a13f98",
        "username": "Ejiofor Celestine",
        "email": "ejioforcelestine77@gmail.com",
        "password": "$2b$10$YC.//8/vNouVgHpOVoPCf.dHxRWZcrrVbXWmWiNJE.9kZZ1f7DeAe",
        "teams": [],
        "isTermsAccepted": true,
        "lastLogin": "2024-02-01T16:58:32.517Z",
        "isDeleted": false,
        "createdAt": "2024-02-01T16:16:21.715Z",
        "updatedAt": "2024-02-01T16:58:32.521Z",
        "__v": 0,
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmJjM2Q1ZGM0N2UyZGY3NGExM2Y5OCIsImlhdCI6MTcwNjgwNjcxMiwiZXhwIjoxNzA2ODkzMTEyfQ.cZLZow9pVz-DzaQH8WjH3qv3f2_kM4RjW2WXZ-qwu0s"
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: signup

### Method: POST
>
>```
>/auth/signup
>```
>
### Body (**raw**)

```json
{
    "username": "Ejiofor Celestine",
    "email":"pythongod00@gmail.comd",
    "password": "Chinaza@1.0",
    "isTermsAccepted":true
}
```

### Response: 201

```json
{
    "status": "success",
    "message": "Signup successful",
    "data": {
        "username": "Ejiofor Celestine",
        "email": "pythongod00@gmail.com",
        "password": "$2b$10$hV0e.u2GUTfZLbEA4rWmLeuF8vGA7lmAjlo.1/pbeIlhkVEgr1ZiC",
        "teams": [],
        "isTermsAccepted": true,
        "lastLogin": "2024-02-01T17:17:13.865Z",
        "isDeleted": false,
        "_id": "65bbd2192ae25acca851f5af",
        "createdAt": "2024-02-01T17:17:13.877Z",
        "updatedAt": "2024-02-01T17:17:13.877Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: project

## End-point: get project by id

### Method: GET
>
>```
>/projects/:projectId
>```
>
### Response: 200

```json
{
    "status": "success",
    "message": "Project fetched successfully",
    "data": {
        "_id": "65bc487d363a1708209c5d5d",
        "title": "SyncPro",
        "description": "This is a project management app that can be used to manage team members, clients and deadline",
        "owner": "65bbc3d5dc47e2df74a13f98",
        "team": "65bc1956962800549101a0bf",
        "tasks": [],
        "members": [],
        "deadline": "2023-02-04T23:00:00.000Z",
        "progress": 0,
        "createdAt": "2024-02-02T01:42:21.806Z",
        "updatedAt": "2024-02-02T01:45:55.976Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete project by id

### Method: DELETE
>
>```
>/projects/:projectId
>```
>
### Response: 200

```json
{
    "status": "success",
    "message": "Project fetched successfully",
    "data": {
        "_id": "65bc487d363a1708209c5d5d",
        "title": "SyncPro",
        "description": "This is a project management app that can be used to manage team members, clients and deadline",
        "owner": "65bbc3d5dc47e2df74a13f98",
        "team": "65bc1956962800549101a0bf",
        "tasks": [],
        "members": [],
        "deadline": "2023-02-04T23:00:00.000Z",
        "progress": 0,
        "createdAt": "2024-02-02T01:42:21.806Z",
        "updatedAt": "2024-02-02T01:45:55.976Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get team projects

### Method: GET
>
>```
>/projects/team/:teamId
>```
>
### Response: 200

```json
{
    "status": "success",
    "message": "Team Projects fetched successfully",
    "data": [
        {
            "_id": "65bc487d363a1708209c5d5d",
            "title": "SyncPro",
            "description": "This is a project management app that can be used to manage team members, clients and deadline",
            "owner": "65bbc3d5dc47e2df74a13f98",
            "team": "65bc1956962800549101a0bf",
            "tasks": [],
            "members": [],
            "deadline": "2023-02-04T23:00:00.000Z",
            "progress": 0,
            "createdAt": "2024-02-02T01:42:21.806Z",
            "updatedAt": "2024-02-02T01:45:55.976Z",
            "__v": 0
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: create new project

### Method: POST
>
>```
>/projects/:teamId
>```
>
### Body (**raw**)

```json
{ "title": "SyncPro", 
"description": "This is a project management app that can be used to manage team members, clients and deadline", 
"deadline": "Feburary 5, 2023" 
}
```

### Response: 201

```json
{
    "status": "success",
    "message": "Project created successfully",
    "data": {
        "title": "SyncPro",
        "description": "This is a project management app that can be used to manage team members, clients and deadline",
        "owner": "65bbc3d5dc47e2df74a13f98",
        "team": {
            "projects": [
                "65bc487d363a1708209c5d5d"
            ],
            "_id": "65bc1956962800549101a0bf",
            "name": "Fresterea",
            "owner": "65bbc3d5dc47e2df74a13f98",
            "teamCode": "LNCNRF5",
            "members": [
                "65bc19d9962800549101a0c4"
            ],
            "createdAt": "2024-02-01T22:21:10.246Z",
            "updatedAt": "2024-02-02T01:42:22.020Z",
            "__v": 7
        },
        "tasks": [],
        "members": [],
        "deadline": "2023-02-04T23:00:00.000Z",
        "progress": 0,
        "_id": "65bc487d363a1708209c5d5d",
        "createdAt": "2024-02-02T01:42:21.806Z",
        "updatedAt": "2024-02-02T01:42:21.806Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update project

### Method: PATCH
>
>```
>/projects/:projectId
>```
>
### Body (**raw**)

```json
{ "title": "SyncPro", 
"description": "This is a project management app that can be used to manage team members, clients and deadline", 
"deadline": "Feburary 5, 2023" 
}
```

### Response: 200

```json
{
    "status": "success",
    "message": "Project updated successfully",
    "data": {
        "_id": "65bc46df363a1708209c5d52",
        "title": "SyncPros",
        "description": "This is a project management app that can be used to manage team members, clients and deadline",
        "owner": "65bbc3d5dc47e2df74a13f98",
        "team": "65bc1956962800549101a0bf",
        "tasks": [],
        "members": [],
        "deadline": "2023-02-04T23:00:00.000Z",
        "progress": 0,
        "createdAt": "2024-02-02T01:35:27.669Z",
        "updatedAt": "2024-02-02T01:40:45.474Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# 📁 Folder: task

## End-point: create a task

### Method: POST
>
>```
>/tasks/:projectId
>```
>
### Body (**raw**)

```json
{
    "title": "Login",
    "description": "create the login endpoint for the authentication",
    "deadline": "February 6 2024",
    "priority": "high"
}
```

### Response: 201

```json
{
    "status": "success",
    "message": "Task created successfully",
    "data": {
        "title": "Login",
        "description": "create the login endpoint for the authentication",
        "project": "65bc487d363a1708209c5d5d",
        "priority": "high",
        "progress": "started",
        "deadline": "2024-02-05T23:00:00.000Z",
        "_id": "65bc4f8913514215696843e5",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: delete a task

### Method: POST
>
>```
>/tasks/:projectId
>```
>
### Body (**raw**)

```json
{
    "title": "Login",
    "description": "create the login endpoint for the authentication",
    "deadline": "February 6 2024",
    "priority": "high"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: update task

### Method: PATCH
>
>```
>/tasks/:taskId
>```
>
### Body (**raw**)

```json
{
    "priority": "low"
}
```

### Response: 200

```
json

{
    "status": "success",
    "message": "Task updated successfully",
    "data": {
        "_id": "65bc4f8913514215696843e5",
        "title": "Login",
        "description": "create the login endpoint for the authentication",
        "project": "65bc487d363a1708209c5d5d",
        "priority": "low",
        "progress": "started",
        "deadline": "2024-02-05T23:00:00.000Z",
        "__v": 0
    }
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get tasks by projectId

### Method: GET
>
>```
>/tasks/?projectId=65bc487d363a1708209c5d5d
>```
>
### Query Params

|Param|value|
|---|---|
|projectId|65bc487d363a1708209c5d5d|

### Response: 200

```json
{
    "status": "success",
    "message": "Project Tasks fetched successfully",
    "data": [
        {
            "_id": "65bc4f8913514215696843e5",
            "title": "Login",
            "description": "create the login endpoint for the authentication",
            "project": "65bc487d363a1708209c5d5d",
            "priority": "high",
            "progress": "started",
            "deadline": "2024-02-05T23:00:00.000Z",
            "__v": 0
        },
        {
            "_id": "65bc4f8913514215696843e5",
            "title": "Login",
            "description": "create the login endpoint for the authentication",
            "project": "65bc487d363a1708209c5d5d",
            "priority": "high",
            "progress": "started",
            "deadline": "2024-02-05T23:00:00.000Z",
            "__v": 0
        }
    ]
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get tasks by id

### Method: GET

>
```
>/tasks/:taskId
>```

### Response: 200

```json

{
    "status": "success",
    "message": "Task fetched successfully",
    "data": {
        "_id": "65bc4f8913514215696843e5",
        "title": "Login",
        "description": "create the login endpoint for the authentication",
        "project": "65bc487d363a1708209c5d5d",
        "priority": "high",
        "progress": "started",
        "deadline": "2024-02-05T23:00:00.000Z",
        "__v": 0
    }
}

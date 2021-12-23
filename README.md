### MongoDB 101

Go to https://mongodb.com and sign up/login. Then follow the steps below

1. Create username and password
2. Get the connection string. A connection string looks like this `mongodb+srv://<username>:<password>@cluster0.wkanp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
3. Replace `<username>` and `<password>` with the ones you created in Step 1.
4. Replace `CONNECTION_STRING_HERE` in `.js` files with your connection string.
5. Finally install dependencies using `npm install`

**To create collections**

```
node createCollections.js
```

**To delete collections**

```
node deleteCollections.js
```

**Start the server**

```
node index.js
```

The server should run on port 5000.

These collections with following fields will be created in your MongoDB database.  
1. `users`  
    **Fields**  
    ```
    name: String,
    age: Number,
    email: String,
    password: String,
    ```
2. `todos`  
    **Fields**  
    ```
    title: String,
    description: Number,
    isCompleted: Boolean,
    userId: String,
    ```

These routes are currently available to test.  

**`POST`** (To insert a user to `users` collection)

```
http://localhost:5000/users/create
```

### Routes Todo  
**`GET`** (To get from users from `users` collection)

```
http://localhost:5000/users
```
**`PUT`** (To update a user from `users` collection)

```
http://localhost:5000/users/:id
```
**`DELETE`** (To delete a user from `users` collection)

```
http://localhost:5000/users/:id
```
**`POST`** (To insert a todo to `todos` collection)

```
http://localhost:5000/todos/create
```
**`GET`** (To get from todos from `todos` collection)

```
http://localhost:5000/todos
```
**`PUT`** (To update a todo from `todos` collection)

```
http://localhost:5000/todos/:id
```
**`DELETE`** (To delete a todo from `todos` collection)

```
http://localhost:5000/todos/:id
```

### **Resources**

MongoDB Node Docs - https://docs.mongodb.com/drivers/node/current/  
Docs Manual - https://docs.mongodb.com/manual/

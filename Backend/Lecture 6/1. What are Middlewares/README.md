# Middlewares

## What are Middlewares

Middleware are software tools that act as intermediaries between different applications, systems, or services, facilitating their communication and interaction. 

They ensure that data and requests can be exchanged smoothly and efficiently, even if the systems involved are built using different technologies. Middleware handle various tasks such as data translation, message queuing, authentication, and connectivity, making it easier to integrate and manage complex software environments. 

The middleware serves as the link between users, data, and applications. Examples include database middleware, web server middleware, and message-oriented middleware, Cloud Services of all kinds, enterprise application integration, and application runtimes.

Middleware typically handles authentication, communications, data management, application services, and application programming interface (API) management.

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240628115821/Middleware.png">

## Purpose of Middleware

- There are several uses for middleware. It first controls access to different back-end resources. A connection pool could be established by a middleware component to enable quick and easy access to a well-liked back-end database.
- It is also capable of establishing links to topics and message queues. Moreover, middleware software may control access to cloud-based services such as Amazon Simple Storage Service.
- Middleware software is capable of executing logic according to the client's request.
- In load balancing, transaction management, and concurrent processing, middleware is crucial. Typically, middleware software can grow both vertically and horizontally to assist in distributing incoming client requests over several servers, virtual machines, or cloud availability zones.
- Securing access to back-end resources is mostly dependent on middleware
- The capacity of middleware software to challenge clients is contingent upon two requirements: a secure connection, established through technologies such as SSL, and authentication, accomplished through the use of a digital certificate or a username and password combination.

## Common Middleware Functions

- methodOverride 
- bodyParse 
- express.static 
- express.urlencoded 

`app.use(methodOverride("_method"));` 

`app.set("view engine", "ejs");`

`app.use(express.static(path.join(__dirname, "/public")));`

`app.use(express.urlencoded( { extended: true } ));`


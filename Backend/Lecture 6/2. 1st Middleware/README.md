# 1st Middleware

## What do middlewares do?

Middleware functions can performs the following tasks:
- Execute any code
- Make changes to the request and the response object
- End the request-response cycle
- Call the next middleware function in the stack

---

## 1st Middleware

app.use( middleware )
```js
app.use(() => {
  console.log('Hi, I am a middleware');
});
```
<br>

using request & response object in middleware
```js
app.use((req, res) => {
  console.log('Hi, I am a middleware');
  res.send('bye');
});
```

---

## Express API Reference

Express.js **->** [`app.use([path,] callback [, callback...])`](https://expressjs.com/en/5x/api.html#app.use)
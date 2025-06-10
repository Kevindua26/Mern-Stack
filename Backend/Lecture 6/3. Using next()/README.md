# Using next()

The next middleware function is commonly denoted by a variable named **next**.

```js
app.use((req, res, next) => {
  console.log('time: ', Date.now());
  next();
});
```

<br>

If the current middleware function doesn't end the request-response cycle, it must call next() to pass control to the middleware function.
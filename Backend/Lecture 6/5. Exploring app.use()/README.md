# Exploring app.use()

[Express API Reference](https://expressjs.com/en/5x/api.html#app.use)

---

If, we didn't define any path on the middleware, the request by default get on the **'/'** path.
```js 
app.use((req, res, next) => {
  req.Time = new Date(Date.now()).toString();
  console.log([req.method, req.hostname, req.path, req.Time]);
  return next();
});
```

---

<br>

If the middleware has a defined path for the request, then the middleware send the response on all the path on that defined path.
```js
app.use('/:id' ,(req, res, next) => {
  res.render('login.ejs');
  return next();
})
```

---

<br>

If the request is on undefined path, add middleware in the end of the REST API's or the defined paths.
```js
app.use((req, res) => {
  console.log("Undefined Path");
  res.render('NotFound.ejs');
});
```
-kind a error handling middleware
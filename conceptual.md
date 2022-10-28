### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
- You could manage asynchronous code by wrapping the code in a promise. Then you can use asyc/await to wait for that promise to be fullfilled. You can also use setTimeout to have code run later, or setInterval to have it run in an interval. There are many ways that you can allow for asynchronous code.

- What is a Promise?
- A promise is basically like an IOU. It returns a promise object that has the ability to be rejected, or accepted. When writing the code, you can then use that promise to execute other operations pending on the outcome of the promise.  

- What are the differences between an async function and a regular function?
- An async function will wait for anything inside of it that has the "await" keyword in front of it. 

- What is the difference between Node.js and Express.js?
- Express is a library for Node.js while Node.js is a server runtime for javascript. 

- What is the error-first callback pattern?
- This ensures that any errors will be handled first so that all errors are gracefully handled. 

- What is middleware?
- Middleware is a piece of code that will run inbetween each rout thats called. 

- What does the `next` function do?
- This ensures that express calls the next operation after the middleware is called. If you don't call this then express will stop in the middleware and never finish execution of the rest of the code. Also if you have an error, then you can pass it to next(err) and it will immediately execute the error handling.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
- If you wanted to extract certain data, you could use destructuring. and then just return all the destructured elements in an array. 

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

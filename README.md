# forPredicate

Small JavaScript Async helper that lets you await for the completion of a given predicate.

### Usage

```js
await forPredicate(predicate, timeoutInSeconds = 10, checkIntervalInSeconds = 0.5);
```

### Parameters

- `predicate` is a function that is executed repeately until it returns a [`truthy`](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value or the call times out. 

- `timeoutInSeconds` specifies the maximum duration, in seconds, within which the helper will try to execute the `predicate` before aborting the process, with a maximum value of 180 seconds and a minimum value of 0.1 seconds (100 milliseconds). 

- `checkIntervalInSeconds` the interval, in seconds, between each attempt to evaluate the `predicate` function, with a maximum value of 10 seconds and a minimum value of 0.1 seconds (100 milliseconds).

### Example

```js
let flag = false;
const predicate = () => flag;

// Simulating the completion of an async operation after 3s
setTimeout(() => flag = true, 3000);

// For environments that do not support top-level `await`
async function simpleTest() {
  // awaiting for the predicate to be completed
  const result = await forPredicate(predicate);

  console.log(`Operation completed with result: ${result}`);
}

simpleTest();
```

Hit me on [Twitter](https://twitter.com/LeonardoBraga) if you find this useful. 😉

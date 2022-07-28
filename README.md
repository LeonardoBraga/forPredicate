# forPredicate

Small JavaScript Async helper that lets you await for the completion of a given predicate.

### Usage

```js
await forPredicate(predicate, timeoutInSeconds, checkIntervalInSeconds);
```

### Parameters

- `predicate` is a function that is executed repeatedly until it returns a [`truthy`](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value or the call times out. 

- `timeoutInSeconds` specifies the maximum duration, in seconds, within which the helper will try to execute the `predicate` before aborting the process, with a maximum value of 180 seconds and a minimum value of 0.1 seconds (100 milliseconds). Optional parameter with the default value of 10.

- `checkIntervalInSeconds` the interval, in seconds, between each attempt to evaluate the `predicate` function, with a maximum value of 10 seconds and a minimum value of 0.1 seconds (100 milliseconds). Optional parameter with the default value of 0.5.

### Example

```js
let flag = false;
const predicate = () => flag;

// Simulating the completion of an async operation after 3s
setTimeout(() => flag = true, 3000);

// For environments that do not support top-level `await`
async function simpleTest() {
  // Awaiting for the predicate to be completed.
  // In this example, we're not changing the default values for timeout or check intervals.
  const result = await forPredicate(predicate);
  console.log(`Operation completed with result: ${result}`);
}

simpleTest();
```

Hit me on [Twitter](https://twitter.com/LeonardoBraga) if you find this useful. 😉

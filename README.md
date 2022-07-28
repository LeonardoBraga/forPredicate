# forPredicate

Small JavaScript Async helper that lets you await for the completion of a given predicate.

## Usage:

```
await forPredicate(predicate, timeoutInSeconds = 10, checkIntervalInSeconds = 0.5);
```

## Parameters

`predicate` is a function that is executed repeately until it returns a (https://developer.mozilla.org/en-US/docs/Glossary/Truthy)[`truthy`] value or the call times out. 

`timeoutInSeconds` specifies the maximum duration, in seconds, within which the helper will try to execute the `predicate` before aborting the process, with a maximum value of 180 seconds and a minimum value of 0.1 seconds (100 milliseconds). 

`checkIntervalInSeconds` the interval, in seconds, between each attempt to evaluate the `predicate` function, with a maximum value of 10 seconds and a minimum value of 0.1 seconds (100 milliseconds).

I hope it helps!

Cheers,
Leonardo Braga
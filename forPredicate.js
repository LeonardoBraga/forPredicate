async function forPredicate(predicate, timeoutInSeconds = 10, checkIntervalInSeconds = 0.5) {
  return new Promise((resolve, reject) => {
    const timeoutInMilliseconds = Math.min(180, Math.max(0.1, timeoutInSeconds)) * 1000;
    const checkIntervalMilliseconds = Math.min(10, Math.max(0.1, checkIntervalInSeconds)) * 1000;
    const startTime = Date.now();

    function checkPredicate() {
      const predicateResult = predicate();
      if (!predicateResult) {
        if (startTime + timeoutInMilliseconds > Date.now()) {
          setTimeout(checkPredicate, checkIntervalMilliseconds);
        } else {
          reject(new Error('Timeout'));
        }
      } else {
        resolve(predicateResult);
      }
    }

    checkPredicate();
  });
}

let flag = false;
const predicate = () => flag;

// Completing the predicate asynchronously after 3s
setTimeout(() => flag = true, 3000);

async function simpleTest() {
  // awaiting for the predicate to be completed
  const result = await forPredicate(predicate);

  console.log(`Operation completed with result: ${result}`);
}

simpleTest();

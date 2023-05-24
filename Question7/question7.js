// In this example, the delay function returns a new promise. If the provided delay time (ms) is non-negative, the promise is resolved after the specified delay with a success message. Otherwise, the promise is rejected with an error message.

// The delayedOperation promise is then used to handle the result or error using the then and catch methods respectively. If the promise is fulfilled, the success message is logged to the console. If the promise is rejected, the error message is logged instead.

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms >= 0) {
        resolve(`Operation completed after ${ms} milliseconds.`);
      } else {
        reject("Invalid delay time.");
      }
    }, ms);
  });
}

// Using the delay function to create a promise
const delayedOperation = delay(2000);

// Handling the fulfillment and rejection of the promise
delayedOperation
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

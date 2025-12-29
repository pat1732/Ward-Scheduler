import * as functions from "firebase-functions";

// Example HTTP function
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


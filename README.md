React Development
===================

First install a 8.x version of Node

Make sure you can use the `npm` command in a command prompt.

Navigate to this folder and execute `npm install`.

Use `npm start` to start a development version of the front-end using a node server

Use `npm run dev` to start a development version of the front-end using a node server listening to a mockserver,
the mockserver can be extended by adding files to the `/mockserver/data/` folder.

When configuring which backend server to use, configure `package.json` which has a line with `proxy` 
that allows npm to pass calls toward the current domain, to the configured proxy.


What is React?
---------------------
A Javascript Library that's made with the explicit purpose of building user interfaces by composing together smaller (isolated) elements
 called *components*. Unlike larger frameworks like **Angular**, which provides you with a huge set of libraries to cover most possible thinkable cases,
  **React** focuses on providing you with a pleasant experience of building component, and leaves it up to you to choose what you want to use for your more specific needs like
  *Routing*, *Model Management*, *Data Fetching* and *Testing*.

 What am I using here?
 ------------------------
* **Create-react-app** Basically to bootstrap the whole startup process for a new react project. Saves me the time to learn to configure babel/webpack/eslint. 
* **Native fetch API**, along with polyfills to support IE11.
* **Formik** for simpler form validation.
* **React router**, should try Reach router.
* **Emotion** for styling components. Generating css based on javascript.
* **Mockserver** To be able to start a mock rest backend to serve JSON to the front end, for testing without the backend if needed.
* **Yup** For generating validation schemas for Formik
*  **Material-UI** To get some basic form/page graphical components, to save some time.
* **Typescript** To save time, get some basic typings for Javascript (which helps when multiple people work on this in the future as well).

 Package-tips for react was found here: [State of the React Ecosystem](https://www.youtube.com/watch?v=yOWzQOZIANU)
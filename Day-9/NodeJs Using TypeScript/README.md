# Assignment Day-9

1. **What is NodeJS?**
   - Node.js is an open-source JavaScript runtime environment that lets you run JavaScript outside of your browser.
   - It is a server environment that is free and runs on various platforms such as Windows, Linux, Unix, Mac OS X, etc.
   - Node.js uses JavaScript on the server.

2. **What is V8 Engine?**
   - V8 is the name of the JavaScript engine that powers Google Chrome.
   - It is responsible for parsing and executing JavaScript code while browsing with Chrome.
   - V8 enables fast and efficient execution of JavaScript.

3. **What is Event Loop in NodeJS?**
   - The event loop allows Node.js to perform non-blocking I/O operations despite being single-threaded.
   - It waits for tasks, executes them, and then sleeps until it receives more tasks.
   - The event loop executes tasks from the event queue only when the call stack is empty.

4. **What is the use of tsconfig.json file?**
   - The tsconfig.json file is a configuration file for TypeScript projects.
   - It contains options that control how the TypeScript compiler behaves when transpiling TypeScript code to JavaScript.
   - Specifies root files and compiler options required to compile the project.

5. **What are the methods provided by `fs` module to manipulate files?**
   - **Reading Files:**
     - `fs.readFile()`: Asynchronously reads the entire contents of a file.
     - `fs.readFileSync()`: Synchronously reads the entire contents of a file.
   - **Writing Files:**
     - `fs.writeFile()`: Asynchronously writes data to a file, replacing the file if it already exists.
     - `fs.writeFileSync()`: Synchronously writes data to a file, replacing the file if it already exists.
     - `fs.appendFile()`: Asynchronously appends data to a file, creating the file if it does not exist.
   - **File Information:**
     - `fs.stat()`: Asynchronously gets file status.
     - `fs.existsSync()`: Synchronously tests whether a file or directory exists.
   - **Deleting Files:**
     - `fs.unlink()`: Asynchronously deletes a file.
     - `fs.unlinkSync()`: Synchronously deletes a file.

6. **What is API?**
   - API stands for Application Programming Interface.
   - APIs are mechanisms that enable two software components to communicate using a set of definitions and protocols.

7. **What is JSON format?**
   - JSON stands for JavaScript Object Notation.
   - It is a lightweight format for storing and transporting data.
   - JSON is often used for sending data from a server to a web page.
   - The JSON format is syntactically identical to JavaScript object syntax.

8. **Why we use JSON format for API?**
   - JSON is easy for humans to read and write, resembling JavaScript object syntax.
   - It is lightweight and concise, minimizing data transmission overhead.
   - JSON parsing is supported by most programming languages.

9. **What is a Framework?**
  A framework is a structure that you can build software on. It serves as a foundation, so you’re not starting entirely from scratch. Frameworks are typically associated with a specific programming language and are suited to different types of tasks.
  Example : React Js is popular framework for building user interfaces.

10. **How an HTTP Communication works**
- HTTP is a protocol that allows clients and servers to communicate with each other.
- HTTP is a stateless protocol, which means that the server does not remember any information about the client.
- Through the HTTP protocol, resources are exchanged between client devices and servers over the internet. Client devices send requests to servers for the resources needed to load a web page; the servers send responses back to the client to fulfill the requests.

11. **What is Middleware in ExpressJS**
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="mb-5 row container ">
      <div className="col col-md-6 col-12 mx-auto mt-5">
        <Card
          className="mx-auto border shadow-xl bd-body-tertiary rounded"
          style={{ width: "28rem" }}
        >
          <Card.Body>
            <h5 className="text-success">i.Tell us the differences between uncontrolled and controlled components.</h5>
            <Card.Title className="text-center">
              <p className="text-start">
                 <span className="fw-bold fs-5">Controlled Component: </span>
                 A component in react is referred to as controlled when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers like setState.
              </p>
              <p className="text-start">
                 <span className="fw-bold fs-5">Uncontrolled Component: </span>
                 After studying the controlled components, it must be clear that the uncontrolled component react does not use state. Thus uncontrolled components do not depend on any state of input elements.component are very useful.

              </p>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col col-md-6 col-12 mx-auto mt-5">
        <Card
          className="mx-auto border shadow-xl bd-body-tertiary rounded"
          style={{ width: "28rem" }}
        >
          <Card.Body>
            <h5 className="text-success">ii.How to validate React props using PropTypes.</h5>
            <Card.Title className="text-center">
              <p className="text-start">
                 <span className="fw-bold fs-5"> validate React props: </span>
                 Props are an important mechanism for passing the read-only attributes to React components.it is required to use props validation in improving react components.React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.After specifying the validation patterns, you will set defaultProps.
              </p>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col col-md-6 col-12 mx-auto mt-5">
        <Card
          className="mx-auto border shadow-xl bd-body-tertiary rounded"
          style={{ width: "28rem" }}
        >
          <Card.Body>
            <h5 className="text-success">iii.Tell us the difference between nodejs and express js.</h5>
            <Card.Title className="text-center">
              <p className="text-start">
                 <span className="fw-bold fs-5"> nodejs: </span>
                 Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and it’s not a programming language.  
              </p>
              <p className="text-start">
                 <span className="fw-bold fs-5"> express js: </span>
                 Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middle ware and routing. 

              </p>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="col col-md-6 col-12 mx-auto mt-5">
        <Card
          className="mx-auto border shadow-xl bd-body-tertiary rounded"
          style={{ width: "28rem" }}
        >
          <Card.Body>
            <h5 className="text-success">iiii.What is a custom hook, and why will you create a custom hook?</h5>
            <Card.Title className="text-center">
              <p className="text-start">
                 <span className="fw-bold fs-5">Custom Hooks: </span>
                 custom hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.You create the hook same way as you create any JS function. Look at it as a refactoring of code into another function to make it reusable. It will speed up your productivity and save your time.When we want to share the logic between other components, we can extract it to a separate function.its custom hook. 
              </p>
            </Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Blog;

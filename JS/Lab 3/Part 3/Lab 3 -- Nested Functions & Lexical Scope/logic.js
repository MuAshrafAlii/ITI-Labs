// Muhammad Ashraf Ali - OS - Lab 3 - Part 3 - Task 3
// Nested Functions - Closure - Lexical Scope

/*
    Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.
*/

const myFunction1 = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  childFunction();
};

myFunction1();

/* 
    In this example, childFunction has access to the variable myValue which is defined in the parent scope of myFunction.

    The lexical scope of childFunction allows access to the parent scope.
*/

/* 
    A closure is a function having access to the parent scope, even after the parent function has closed.
*/

const myFunction2 = () => {
  let myValue = 2;
  console.log(myValue);

  const childFunction = () => {
    console.log((myValue += 1));
  };

  return childFunction;
};

const result = myFunction2();
console.log(result);
result();
result();
result();

/* 
    myFunction returns childFunction instead of calling it.

    Therefore, when result is set equal to myFunction(), the console statement inside myFunction is logged, but not the statement inside childFunction.

    childFunction is not called into action.

    Instead, it is returned and held in result.

    In addition, we need to realize that myFunction has closed after it was called.

    The line with console.log(result) should show in the console that result now holds the anonymous function value that was childFunction.

    Now, when we call result(), we are calling the anonymous function that was assigned to childFunction.

    As a child of myFunction, this anonymous function has access to the myValue variable inside myFunction even after it has closed!

    The closure we created now allows us to continue to increase the value of the myValue variable every time we call result().
*/

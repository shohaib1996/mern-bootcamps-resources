function outerFunc() {
  //variable initialization
  const outerVariable = "Outer Variable";

  //new function declaration inside the outerFunc
  function innerFunc() {
    console.log(outerVariable);
  }

  //return the function body
  return innerFunc;
}

//calling the outerFunc and storing in closureFunc variable
const closureFunc = outerFunc();

//calling the closureFunc
closureFunc();

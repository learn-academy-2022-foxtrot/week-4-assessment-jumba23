// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ===================================== CHALLENGE #1 ===================================================================

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shiftAndShuffle", () => {
  it("a function that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ];
    expect(shiftAndShuffle(colors1)).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(shiftAndShuffle(colors2)).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});

//ReferenceError: shiftAndShuffle is not defined

// b) Create the function that makes the test pass.

// =============================== <<<<< PSEUDO CODE >>>>> ===========================================
// our function will take an array as a parameter
// first step is removing element at index[0]. For this we can use .shift method
// then we are going to use a loop do shuffle our array
// we are going to need few helper variables to iterate over the array and swap the values (or in our case, shuffle the entire array)
// we can use more than one for loop here but we are also going to need Math method to generate random numbers we need in order to shuffle indexes in our case
//by shuffling indexes we are going to shuffle values as well
// im leaning toward while loop since I haven't used it in a while.

const shiftAndShuffle = (arr) => {
  arr.shift();
  let i = arr.length,
    j,
    helper;
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    helper = arr[i];
    arr[i] = arr[j];
    arr[j] = helper;
  }
  return arr;
};

// test passed

// ===================================== CHALLENGE #2 =================================================

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe("voteSum", () => {
  it("a function that takes in an object that contains up votes and down votes and returns the net total of votes", () => {
    const votes1 = { upVotes: 13, downVotes: 2 };
    // Expected output: 11
    const votes2 = { upVotes: 2, downVotes: 33 };
    // Expected output: -31
    const votes3 = { upVotes: 41, downVotes: 0 };
    // Expected output: 41
    const votes4 = { upVotes: 0 };
    // Expected output: "No key named downVotes"
    const votes5 = { upVotes: 0, downVotes: 21 };
    // Expected output: -21
    const votes6 = { downVotes: 17 };
    // Expected output: "No key named upVotes"
    expect(voteSum(votes1)).toEqual(11);
    expect(voteSum(votes2)).toEqual(-31);
    expect(voteSum(votes3)).toEqual(41);
    expect(voteSum(votes4)).toEqual("No key named downVotes");
    expect(voteSum(votes5)).toEqual(-21);
    expect(voteSum(votes6)).toEqual("No key named upVotes");
  });
});

//ReferenceError: voteSum is not defined

// b) Create the function that makes the test pass.

// =============================== <<<<< PSEUDO CODE >>>>> ===========================================
// an object parameter will contain two key-value pairs.
// downVote will always be subtracted from upVote, this makes our needed formula very easy to assemble
// we can add few extra check points in the case some data is missing or for cases where a value is zero

const voteSum = (obj) => {
  return typeof obj.upVotes === "undefined"
    ? "No key named upVotes"
    : typeof obj.downVotes === "undefined"
    ? "No key named downVotes"
    : obj.upVotes - obj.downVotes;
};

// test passed

// ===================================== CHALLENGE #3 =================================================

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// b) Create the function that makes the test pass.

describe("removeDuplicates", () => {
  it("a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
    // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
    expect(removeDuplicates(dataArray1, dataArray2)).toEqual(
      expect.arrayContaining([
        "array",
        "object",
        "number",
        "string",
        "Boolean",
        "null",
        "undefined",
      ])
    );
  });
});

////ReferenceError: removeDuplicates is not defined

// =============================== <<<<< PSEUDO CODE >>>>> ===========================================
//two arguments (arrays) will be passed into this function
//first step of merging will be done with help of spread operator
//second step will filter out duplicates. We can use .filter method with help of .indexOf or maybe new Set collection
//return will only provide unique values, only once. We are going to use spread operator here before creating new Set collection

const removeDuplicates = (arr1, arr2) => {
  const newArray = [...arr1, ...arr2];
  return [...newArray, new Set(newArray)];
};

// test passed

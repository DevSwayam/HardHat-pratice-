// import testing libraries: https://www.chaijs.com/guide/styles/
const { expect, assert } = require("chai");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestModifyVariable", function () {
  /*The it() function is defined by the jasmine testing framework, it is not part of angular per se. 
  You'll see it in angular's documentation because they are encouraging you (for good reason) 
  to get in the habit of writing tests for your code, and demonstrating how the code will work in a test.
  The it() function defines a jasmine test. It is so named because its name makes reading tests almost like reading English. 
  The second argument to the it() function is itself a function, that when executed will probably run some number of expect() functions.
 expect() functions are used to actually test the things you "expect" to be true. */
  // we made a async function so that we can wait for wait for reply
  it("should change x to 1337", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable"); // creates a instance of our modifyVariable contract

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10); // deploy our contract and we can interact with the methods in this contract with help of [contract]

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet(); // accessing function with help of contract instance this function sets x equals to 1337
    // getter for state variable x
    const newX = await contract.x(); // getting default global state variable data 
    assert.equal(newX.toNumber(), 1337);  // assert.qual check whethers the the 1st value and 2nd value is equal or not

    
  });
  it("string value should be swayam hey kya?", async function () {

    // my own test for hardhat

    const ModifyVariable = await ethers.getContractFactory("ModifyVariable"); // creates a instance of our modifyVariable contract

    const contract1 = await ModifyVariable.deploy(10); // deploy our contract and we can interact with the methods in this contract with help of [contract]

    // wait for contract to be deployed and validated!
    await contract1.deployed();

    await contract1.changeStringValue();
    const str = await contract1.str();
    assert.equal(str,"swayam hey kya?");
  });
});

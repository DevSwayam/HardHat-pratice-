//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  string public str = "";

  constructor(uint _x) {
    x = _x;
  }

  function modifyToLeet() public {
    x = 1337;
  }
  function changeStringValue() public{
    str = "swayam hey kya?";
  }

}
pragma solidity ^0.4.19;

contract HelloWorld {
    
   string message;

   function setMessage(string _message) public {
       message = _message;
   }
   
   function getMessage() public constant returns (string) {
       return (message);
   }
    
}

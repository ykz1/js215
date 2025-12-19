/*

==== REQUIREMENTS ====
Build a stack-and-register language:
- Register contains 'current value'
- Stack stores and 'pops out' values in a LIFO format

Include the following capabilities:
- n: place value n into register
- PUSH: push register value into stack, leave value in register
- ADD: pop a value from the stack and add it to the register value, storing result in register
- SUB: pop a value from the stack and add it to
- MULT: pop value from stack, multipy by register
- DIV: pop value from stack and divide into register
- REMINDER
- POP: pop topmost item and place into register
- PRINT: print register value

Algorithm:
  - initiate stack as an array
  - read instruction into array of text
  - parse instruction word-by-word
  - 
*/

function minilang(str) {
  let stack = [];
  let register = 0;
  let instructions = str.split(/\s+/);

  for (let i = 0; i < instructions.length; i++) {
    const instruction = instructions[i];
    switch (instruction) {
      case 'PRINT':
        console.log(register);
        break;
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      default:
        register = Number(instruction);
    }
    // console.log(`Instruction: ${instruction}\nRegister: ${register}\nStack:${stack}\n`);
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6  

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

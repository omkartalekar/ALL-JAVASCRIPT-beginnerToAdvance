// break keywork
// he break statement breaks out of a switch or a loop. In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch. In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).

for(let i=1;i<=10;i++){
    if(i==4){
        break;
    }
    console.log(i);
}

// 1
// 2
// 3


// continue keyword

// The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop. The difference between continue and the break statement, is instead of "jumping out" of a loop, the continue statement "jumps over" one iteration in the loop.

for(let i=1;i<=10;i++){
    if(i==4){
        continue;
    }
    console.log(i);
}

// 1
// 2
// 3
// 5
// 6
// 7
// 8
// 9
// 10
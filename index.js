function fn() {
  console.log("Javascript");

  for (var i = 1; i < 6; i++) {
    function inner(x) {
      setTimeout(() => {
        console.log(x);
      }, i * 1000);
    }
    inner(i);
  }

  console.log("Hello World!");
}

//5 times loop, 5 setTimeouts are sitting in cb queue

fn();

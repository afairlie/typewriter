const sentence = "hello there from lighthouse labs\n";

let miliSecs = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, miliSecs += 50)
}

// pair programmed with Wares
const sentence = "hello there from lighthouse labs\n";

let miliSecs = 0;

for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, miliSecs += 50) // <= 1s delay to make it noticeable. Can dial it down later.
}

// pair programmed with git @afairlie (Wares)
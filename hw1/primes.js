#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";

//using sieve of Eratosthenes, http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
var sieve = [], primes = [], i, j, total = 0, max = 10000;
for (i = 2; primes.length < 100; i++) {
  if(!sieve[i]) {
    primes.push(i);
    for (j = i * 2; j <= max; j += i) {
      sieve[j] = true;
    }
  }
}

var out = primes.join();
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
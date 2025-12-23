//It is an in built Object

/*🔹 Set vs Array (Quick Comparison)

Feature	               Array	  Set
Allows duplicates	   ✅ Yes	❌ No
Fast lookup	           ❌ Slow	✅ Fast
Order preserved	       ✅ Yes	✅ Yes
Best for uniqueness	   ❌ No	    ✅ Yes   */

let seen = new Set();

seen.add("kirten");
seen.add("bob");
seen.add("kirten");//it will not accept duplicate

console.log(seen.has("kirten")); // true
console.log(seen.has("anu")); // false

console.log(seen)//output : Set(2) { 'kirten', 'bob' }
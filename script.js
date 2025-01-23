// Source for Confetti library
// https://confettijs.org/confetti.min.js
// ✅ Connect Confetti source code to `<head>` of `index.html`
//⚠️ What is loaded first? Confetti or your scripts?

// Create variables, instantiate `new` instance of `Confetti`
// Where to confetti? Target `id` of element
// Understand context of uses of "confetti"
let confetti = new Confetti("confetti");

// Optionally modify given parameters
confetti.setCount(100);
confetti.setSize(10);
confetti.setPower(100);
confetti.destroyTarget(false);

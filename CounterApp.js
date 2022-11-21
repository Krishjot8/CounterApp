let countEl = document.getElementById("count-el");
let Entries = document.getElementById("entries");
let count = 0;

function increment() {
  count += 1;

  countEl.textContent = count;
}

function decrement() {
  count += -1;

  countEl.textContent = count;
}

function save() {
  let CountStr = "| " + count + " -";

  Entries.textContent += CountStr;
}

function reset() {
  Entries.textContent = "Previous Entries:";
  countEl.textContent = 0;
  count = 0
}

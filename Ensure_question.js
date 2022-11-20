#Solution #1
function ensureQuestion(s) {
  s=[...s]
  s[s.length-1]==="?"?
  s.join(""):
  s.push("?");
  return  s.join("")
}


#Solution #2
const ensureQuestion = s => s.endsWith('?') ? s : s+'?';

#Solution #3
const ensureQuestion = s => s.includes('?') ? s : `${s}?`;
}
ensureQuestion(""); // "?"
ensureQuestion("Yes"); // "Yes?"
ensureQuestion("No?"); // "No?"

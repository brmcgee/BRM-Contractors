const fs=require('fs');
const text=fs.readFileSync('assets/styles.css','utf8');
let depth=0;let line=0;for(const l of text.split('\n')){line++;for(const ch of l){if(ch==='{')depth++;if(ch==='}')depth--;}
 if(depth<0)console.log('extra } at',line);}
console.log('final depth',depth);
const msg = `
<h1>
  hello world
</h1>
<h2>
  demo
</h2>
`;

let reg = /<(h[1-6])>([\s\S]*)<\/\1>/gi;

console.log(msg.match(reg));

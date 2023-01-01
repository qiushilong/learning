let msg = `
<h1>h1 msg</h1>
<h2>h2 msg</h2>
<h1>dmo</h1>
`;

const reg = /<(h[1-6])>(?<con>.*?)<\/\1>/gi;
console.log(msg.replace(reg, "<h4>$<con></h4>"));

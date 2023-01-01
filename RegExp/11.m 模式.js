const msg = `
  #1 js,200元 #
  #2 php,300元 #
  #9 demo # 测试
  #3 node.js,180元 #
`;

const lessons = msg.match(/^\s*#\d+\s*.+\s*#$/gm).map((v) => {
  v = v.replace(/\s*#\d+\s*/, "").replace(/\s*#/, "");
  const [name, price] = v.split(",");
  return { name, price };
});
console.log(lessons);
console.log(JSON.stringify(lessons, null, 2));

const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");


function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile("./为学.md", (err, data) => {
            if (err) rejects(err);
            resolve(data)
        })
    })
}

async function main() {
    let weixue = await readWeiXue();
    console.log(weixue.toString());
}

main();

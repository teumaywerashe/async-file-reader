const fs = require("fs/promises");

async function readFiles() {
    try {
        const [aContent, bContent, cContent] = await Promise.all([
            fs.readFile("a.txt", "utf-8"),
            fs.readFile("b.txt", "utf-8"),
            fs.readFile("c.txt", "utf-8")
        ]);

        console.log("Content of file a:\n", aContent);
        console.log("Content of file b:\n", bContent);
        console.log("Content of file c:\n", cContent);

        const totalSize = aContent.length + bContent.length + cContent.length;

        console.log("\nTotal number of characters in all files:", totalSize + '\n');

    } catch (err) {
        console.error("Error reading files:", err);
    }
}


const fs = require("fs/promise");

async function readFiles() {
    try {
        const [aContent, bContent, cContent] = await Promise.all([
            fs.readFile("a.txt", "utf-8"),
            fs.readFile("b.txt", "utf-8"),
            fs.readFile("c.txt", "utf-8")
        ]);


        console.log("\nContent of file a:", aContent);
        console.log("\nContent of file b:", bContent);
        console.log("\nContent of file c:", cContent);

        const totalSize = aContent.length + bContent.length + cContent.length;

        console.log("\nTotal number of characters in all files:", totalSize + '\n');
    } catch (err) {
        console.error('something happenned', err)
    }

}


const fs = require("fs/promises");

async function readFiles() {
    try {
        const [aContent, bContent, cContent] = await Promise.all([
            fs.readFile("a.txt", "utf-8"),
            fs.readFile("b.txt", "utf-8"),
            fs.readFile("c.txt", "utf-8")
        ]);

        console.log("Content of file a:\n", aContent);
        console.log("Content of file b:\n", bContent);
        console.log("Content of file c:\n", cContent);

        const totalSize = aContent.length + bContent.length + cContent.length;

        console.log("\nTotal number of characters in all files:", totalSize + '\n');

    } catch (err) {
        console.error("Error reading files:", err);
    }
}
readFiles();


const { readFileSync, writeFileSync } = require('fs')
const fileContent = readFileSync("a.txt", "utf-8")
writeFileSync("d.txt", "what's up this is the text content of file d")
const newFile = readFileSync("d.txt", "utf-8")
console.log(fileContent)
console.log(newFile)


const { readFile, writeFile } = require('fs');
readFile('a.txt', 'utf-8', (err, aContent) => {
    if (err) {
        console.error('error', err);
        return
    }
    console.log(aContent);
})



console.log('start');
readFile('a.txt', 'utf-8', (err, result) => {
    if (err) {
        console.error(err)
        return;
    }
    const a = result;
    readFile('b.txt', 'utf-8', (err, result) => {
        if (err) {
            console.error(err)
            return;
        }
        const b = result;
        readFile('c.txt', 'utf-8', (err, result) => {
            if (err) {
                console.error(err)
                return;
            }
            const c = result;
            readFile('d.txt', 'utf-8', (err, result) => {
                if (err) {
                    console.error(err)
                    return;
                }
                const d = result;
                writeFile('e.txt', `${a} ,${b},${c},${d}`, (err, result) => {
                    if (err) {
                        console.error(err)
                        return;
                    }
                    console.log('writting done!')
                    readFile('e.txt', 'utf-8', (err, result) => {
                        console.log(result)
                    })
                })
            })
        })
    })



})


const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req);
    res.write('welcome to our home page')
    res.end();
})
server.listen(2000);

console.log("started");
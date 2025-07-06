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
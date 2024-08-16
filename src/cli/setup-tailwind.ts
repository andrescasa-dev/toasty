import { writeFile } from "fs/promises";

async function writeToFile() {
  const data = "Hello, world!";
  const filePath = "./example.txt";

  try {
    await writeFile(filePath, data, "utf8");
    console.log("File written successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

writeToFile();

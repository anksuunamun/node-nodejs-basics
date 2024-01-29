import { access, appendFile, constants } from "node:fs/promises";

const create = async () => {
  try {
    await access("src/fs/files/fresh.txt", constants.F_OK);
    throw new Error("FS operation failed");
  } catch (e) {
    if (e.code === "ENOENT") {
      return await appendFile("src/fs/files/fresh.txt", "I am fresh and young");
    }

    throw new Error("FS operation failed");
  }
};

await create();
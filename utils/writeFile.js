import fs from "fs/promises";
import { outputPath } from "./filePath.js";

export const writeData = async (data) => {
  await fs.writeFile(outputPath, JSON.stringify(data, null, 2));
};
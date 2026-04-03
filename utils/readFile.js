import fs from "fs/promises";
import { outputPath } from "./filePath.js";

export const readData = async () => {
  try {
    const file = await fs.readFile(outputPath, "utf-8");

    if (!file.trim()) {
      return { lastTaskId: 0, tasksById: {} };
    }

    return JSON.parse(file);
  } catch {
    return { lastTaskId: 0, tasksById: {} };
  }
};
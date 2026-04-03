import { readData } from "../utils/readFile.js";
import { writeData } from "../utils/writeFile.js";

/* 
Create New Task
*/

export const creatTask = async (taskId, action, task) => {
  try {
    const data = await readData();

    if (taskId < 0 || taskId > 100) {
      console.error("Storage full");
      return;
    }

    const newTaskId = `${taskId}`;

    data.lastTaskId = taskId;
    data.tasksById[newTaskId] = {
      action,
      task
    };

    console.log("Creating Task ...... 🕛");
    await writeData(data);
    console.log("Task Created ....✅");

  } catch (error) {
    console.error(error);
  }
};

/* 
Update Existing Task
*/
export const updateTask = async (action, updateId, newTask) => {
  const data = await readData();

  if (!data.tasksById[updateId]) {
    console.log("Task not found");
    return;
  }

  data.tasksById[updateId] = {
    ...data.tasksById[updateId],
    task: newTask
  };

  await writeData(data);

  console.log("Task Updated ✅");
};


/* 
Update Existing Task
*/
export const deleteTask = async (deleteId) => {
  try {
    const data = await readData();

    if (!data.tasksById[deleteId]) {
      console.log("Task not found");
      return;
    }

    console.log("Deleting Task ...... 🕛");

    delete data.tasksById[deleteId];

    if (Number(deleteId) === data.lastTaskId) {
      const remainingIds = Object.keys(data.tasksById).map(Number);
      data.lastTaskId = remainingIds.length
        ? Math.max(...remainingIds)
        : 0;
    }

    await writeData(data);

    console.log("Task Deleted ");

  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
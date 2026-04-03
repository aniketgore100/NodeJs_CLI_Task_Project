import { creatTask, deleteTask, updateTask } from "../middleware/jsonProcessor.js";
import { readData } from "../utils/readFile.js";

export const input = async () => {
  try {
    const args = process.argv.slice(2);

    if (args.length === 0) {
      console.log("No input provided");
      process.exit(1);
    }


    /* 
    Add Task 
    */
    const data = await readData();
    if (args[0] === "add") {
      const task = args[1];

      if (!task) {
        console.log("Please provide task");
        process.exit(1);
      }
      const taskId = data.lastTaskId + 1;
      await creatTask(taskId, "add", task);
      return;
    }



    /* 
   Update Task 
   */
    if (args[0] === "update") {
      const updateId = args[1];
      const task = args[2];

      if (!updateId || !task) {
        console.log("Please provide id and updated task");
        process.exit(1);
      }

      await updateTask("update", updateId, task);
      return;
    }


    /* 
       Delete Task 
       */
    if (args.length === 1 && !isNaN(args[0])) {
      const deleteId = args[0];

      await deleteTask(deleteId);
      return;
    }
    console.log("Invalid input format");

    
  } catch (err) {
    console.log("Error processing task:", err);
  }

};
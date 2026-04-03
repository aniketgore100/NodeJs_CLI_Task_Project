# 🧾 Node.js CLI Task Manager

A lightweight **Command Line Interface (CLI) task management tool** built using Node.js. This project demonstrates core backend engineering concepts such as modular architecture, file-based persistence, command parsing, and clean separation of concerns.

---

## 🚀 Features

- ✅ Add new tasks  
- ✏️ Update existing tasks  
- 🗑️ Delete tasks using task ID  
- 📦 Persistent storage using JSON file  
- ⚡ Fast CLI-based interaction  
- 🧠 Input validation & error handling  

---

## 🛠️ Tech Stack

| Category      | Technology |
|--------------|-----------|
| Runtime      | Node.js   |
| Language     | JavaScript (ES Modules) |
| Storage      | File System (JSON-based DB) |
| Architecture | Modular (Controller + Service + Utils) |

---

## 📂 Project Structure

```
.
├── server.js                     # Entry point (initializes CLI execution)
├── src/
│   └── CommandInput.js          # Handles CLI input parsing and routing
├── middleware/
│   └── jsonProcessor.js         # Core business logic (CRUD operations)
├── utils/
│   ├── filePath.js              # Manages file path resolution
│   ├── readFile.js              # Reads data from storage
│   └── writeFile.js             # Writes data to storage
├── output/
│   └── output.json              # Persistent storage (task data)
├── package.json                 # Project configuration & dependencies
└── README.md                    # Project documentation
```

---

## ⚙️ How It Works

### 🔹 CLI Input Parsing

Uses `process.argv` to dynamically interpret commands:

```
node server.js add "Learn Node.js"
node server.js update 2 "Master Backend"
node server.js 2
```

---

### 🔹 Data Storage Model

```json
{
  "lastTaskId": 3,
  "tasksById": {
    "1": { "action": "add", "task": "Learn Node.js" },
    "2": { "action": "add", "task": "Build CLI Tool" }
  }
}
```

- Uses a **hash map structure** (`tasksById`)
- Enables **O(1) access** for update/delete operations

---

## 🧠 Core Concepts Demonstrated

### 1. Modular Architecture
- CLI handling → `server.js`  
- Business logic → `jsonProcessor.js`  
- File operations → `utils/`  

---

### 2. Efficient Data Handling
- Direct object access:
```
tasksById[id]
```
- No unnecessary iteration → optimized performance  

---

### 3. Asynchronous File Operations
- Uses `async/await` for non-blocking I/O  
- Ensures smooth CLI execution  

---

### 4. Dynamic Command Parsing
Supports flexible CLI inputs:
- `add "task"`
- `update id "task"`
- `id` → delete  

---

### 5. Error Handling & Validation
- Handles missing arguments  
- Validates task existence  
- Prevents invalid operations  

---

## 📌 Example Usage

### ➕ Add Task
```
node server.js add "Build REST API"
```

### ✏️ Update Task
```
node server.js update 1 "Build scalable REST API"
```

### 🗑️ Delete Task
```
node server.js 1
```

---

## ⚡ Key Highlights

- Clean and readable codebase  
- Strong separation of concerns  
- Demonstrates backend fundamentals without frameworks  
- Optimized data structure for fast operations  

---


## 👨‍💻 Author

**Aniket Gore**

---

## 📄 License

This project is open-source and available for learning and experimentation.

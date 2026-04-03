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

.
├── server.js                  # CLI entry point (command parsing & routing)
├── middleware/
│   └── jsonProcessor.js       # Business logic layer (create, update, delete tasks)
├── utils/
│   ├── readFile.js            # Reads data from JSON storage
│   └── writeFile.js           # Writes data to JSON storage
├── data/
│   └── data.json              # Persistent storage (acts as lightweight DB)
└── package.json               # Project configuration

---

### 🧩 Architecture Breakdown

- **Entry Layer (CLI Interface)**  
  Handles command parsing using `process.argv` and routes actions.

- **Business Logic Layer**  
  Contains core CRUD operations and task manipulation logic.

- **Utility Layer (I/O Abstraction)**  
  Abstracts file system operations for clean and reusable code.

- **Data Layer**  
  JSON-based storage using key-value structure for efficient access.

---

## ⚙️ How It Works

### 🔹 CLI Input Parsing

node server.js add "Learn Node.js"  
node server.js update 2 "Master Backend"  
node server.js 2  

---

### 🔹 Data Storage Model

{
  "lastTaskId": 3,
  "tasksById": {
    "1": { "action": "add", "task": "Learn Node.js" },
    "2": { "action": "add", "task": "Build CLI Tool" }
  }
}

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
- Direct object access: `tasksById[id]`  
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

➕ Add Task  
node server.js add "Build REST API"

✏️ Update Task  
node server.js update 1 "Build scalable REST API"

🗑️ Delete Task  
node server.js 1

---

## ⚡ Key Highlights

- Clean and readable codebase  
- Strong separation of concerns  
- Demonstrates backend fundamentals without frameworks  
- Optimized data structure for fast operations  

---

## 🚧 Future Improvements

- [ ] Add `list` command to view all tasks  
- [ ] Add task status (`pending`, `completed`)  
- [ ] Replace JSON with database (MongoDB / SQLite)  
- [ ] Convert into installable CLI tool (`npm link`)  
- [ ] Add CLI flags using `commander` or `yargs`  

---

## 👨‍💻 Author

**Aniket Gore**

---

## 📄 License

This project is open-source and available for learning and experimentation.

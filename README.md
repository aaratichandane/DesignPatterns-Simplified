# 📦 Node.js Design Patterns – With Code Examples

This repository contains essential design patterns in Node.js explained with practical examples.

---

## 📘 Table of Contents

- [Singleton Pattern](#-singleton-pattern)
- [Factory Pattern](#-factory-pattern)
- [Observer Pattern (EventEmitter)](#-observer-pattern-eventemitter)
- [Middleware Pattern](#-middleware-pattern)
- [Module Pattern](#-module-pattern)
- [Strategy Pattern](#-strategy-pattern)
- [Summary Table](#-summary-table)

---

## 🔁 Singleton Pattern

### ✅ Use Case
Ensures a class has only **one instance** (like a DB connection) and provides a global access point.


## 🏭 Factory Pattern

### ✅ Use Case
Provides a way to create objects **without exposing the instantiation logic**.


## 📢 Observer Pattern (EventEmitter)

### ✅ Use Case
Implements **publish/subscribe** logic — multiple listeners react to an event.

## 🧱 Middleware Pattern

### ✅ Use Case
Processes requests in a **pipeline**, mostly used in Express.js.

## 📦 Module Pattern

### ✅ Use Case
Encapsulate variables and methods using CommonJS or ESM modules.

## 🧠 Strategy Pattern

### ✅ Use Case
Defines a family of interchangeable algorithms and makes them easily swappable.

## 📊 Summary Table

| Pattern         | Use Case                                | Node.js Area Used     |
|----------------|------------------------------------------|------------------------|
| Singleton       | One-time config like DB connection       | Config, DB             |
| Factory         | Object creation without exposing logic   | Services, Models       |
| Observer        | Event-driven communication               | `EventEmitter`         |
| Middleware      | Request/response pipeline                | Express.js             |
| Module          | Encapsulation and modularity             | Node Modules           |
| Strategy        | Swappable runtime logic (e.g. payments)  | Auth, Payment systems  |

---

## 📌 How to Run

```bash
# Clone repo or copy files into a folder
node app.js
```

---


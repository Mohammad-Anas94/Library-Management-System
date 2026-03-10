# 📚 Library Management System

## 📖 Project Overview
The **Library Management System** is a web-based application designed to simplify library operations such as adding books, managing book lists, issuing books, returning books, and scanning book ISBN barcodes.

This system provides a simple dashboard interface where librarians can manage books efficiently and track their availability status.

The system also highlights issued books by turning the book row red in the book list.

---

## 🚀 Features

- 🔐 Admin login system
- ➕ Add new books with title, author, and shelf location
- 📚 View all books in a structured table
- 📦 Issue books to users
- 🔁 Return issued books
- 📍 Track book location
- 📷 Scan ISBN barcode to automatically fetch book details
- 🔴 Book row turns **red when issued**
- 🟢 Returns to normal when book is returned
- 📱 Responsive design

---

## 🛠 Technologies Used

- HTML
- CSS
- JavaScript
- Open Library API (for ISBN book data)
- Barcode Scanner Integration

---

## 📂 Project Structure
Library-Management-System
│
├── index.html # Main application interface
├── librarmg.css # Styling and UI design
├── script.js # Application logic
│
├── logo.png # Project logo
├── scan-barcode.svg # Barcode scanner icon
├── library_books.png # Books icon
├── library_add.png # Add book icon
│
└── background.jpg # Library background image



---

## ⚙️ How the System Works

### Login
The system starts with a login page.

Default credentials:
Username: admin
Password: 1234


After login, the user is redirected to the **dashboard**.

---

### Dashboard
The dashboard contains four main options:

- Add Book
- List Books
- Barcode Scanner
- Issue / Return Book

---

### Add Book
Users can manually add a book by entering:

- Book Title
- Author Name
- Shelf Location

The book is then stored in the system.

---

### List Books
Displays all books in a table showing:

- Book ID
- Title
- Author
- Status
- Location

If a book is issued, the table row turns red.

---

### Issue / Return
Books can be issued or returned by entering the **Book ID**.

---

### Barcode Scanner
Users can scan a book's ISBN barcode.

The system uses the **Open Library API** to fetch:

- Book Title
- Author

Then the user can add the book to the library with a shelf location.

---

## 📸 Screenshots

### Library Interface
(Add your screenshot here)

---

## 🎯 Future Improvements

- Student login system
- Database integration (MySQL / MongoDB)
- Book search functionality
- Due date tracking
- Email notifications
- Book reservation system

---

## 👨‍💻 Author

**Mohammad Anas**

---


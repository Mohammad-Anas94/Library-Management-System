let books = JSON.parse(localStorage.getItem("books")) || []

function login(){

let u=document.getElementById("username").value
let p=document.getElementById("password").value

if(u==="admin" && p==="1234"){

document.getElementById("loginPage").style.display="none"
document.getElementById("dashboard").style.display="block"

}else{

alert("Wrong credentials")

}

}


function showPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.style.display="none"
})

document.getElementById(page).style.display="block"

if(page==="listPage") loadBooks()

}


function addBook(){

let book={
id:Date.now(),
title:document.getElementById("title").value,
author:document.getElementById("author").value,
location:document.getElementById("location").value,
status:"Available"
}

books.push(book)
localStorage.setItem("books", JSON.stringify(books))

alert("Book Added")

}


function loadBooks(){

let table=document.getElementById("bookTable")

table.innerHTML=""
books.forEach(b=>{

table.innerHTML+=`

<tr class="${b.status === "Issued" ? "issued-row" : ""}">

<td>${b.id}</td>
<td>${b.title}</td>
<td>${b.author}</td>

<td>
${b.status}
${b.rollNo ? `<br>Roll: ${b.rollNo}` : ""}
</td>

<td>${b.location}</td>

<td>${b.dueDate || "-"}</td>

</tr>

`
})
}


function issueBook(){

let id=document.getElementById("bookId").value
let roll=document.getElementById("rollNo").value
let due=document.getElementById("dueDate").value

if(!roll || !due){
alert("Enter Roll No and Due Date")
return
}

books.forEach(b=>{
if(b.id==id){

b.status="Issued"
b.rollNo=roll
b.dueDate=due   // STORE DUE DATE

}
})

localStorage.setItem("books", JSON.stringify(books))

loadBooks()

}


function returnBook(){

let id=document.getElementById("bookId").value
let roll=document.getElementById("rollNo").value

let today = new Date()

books.forEach(b=>{

if(b.id==id){

if(b.rollNo !== roll){
alert("Wrong Roll Number ❌")
return
}

if(b.status==="Issued"){

let due = new Date(b.dueDate)

let fine = 0

if(today > due){

let diff = Math.ceil((today - due)/(1000*60*60*24))
fine = diff * 5   // ₹5 per day

alert("Late Return! Fine = ₹" + fine)

}else{

alert("Returned on time ✅")

}

b.status="Available"
b.rollNo=""
b.dueDate=""

}

}

})

localStorage.setItem("books", JSON.stringify(books))

loadBooks()

}




async function fetchBook(){

let isbn=document.getElementById("barcodeInput").value

let url="https://openlibrary.org/api/books?bibkeys=ISBN:"+isbn+"&format=json&jscmd=data"

let response=await fetch(url)

let data=await response.json()

let book=data["ISBN:"+isbn]

if(!book){
alert("Book not found in database")
return
}

document.getElementById("scanTitle").innerText=book.title || "Unknown"

document.getElementById("scanAuthor").innerText=
book.authors ? book.authors[0].name : "Unknown"

}


function addScannedBook(){

let book={

id:Date.now(),

title:document.getElementById("scanTitle").innerText,

author:document.getElementById("scanAuthor").innerText,

location:document.getElementById("scanLocation").value,

status:"Available"

}

books.push(book)
localStorage.setItem("books", JSON.stringify(books))
alert("Scanned book added")

}

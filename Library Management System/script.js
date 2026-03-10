let books=[]

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

alert("Book Added")

}


function loadBooks(){

let table=document.getElementById("bookTable")

table.innerHTML=""

books.forEach(b=>{

let rowClass = b.status === "Issued" ? "issued-row" : ""

table.innerHTML+=`

<tr class="${rowClass}">
<td>${b.id}</td>
<td>${b.title}</td>
<td>${b.author}</td>
<td>${b.status}</td>
<td>${b.location}</td>
</tr>

`

})

}


function issueBook(){

let id=document.getElementById("bookId").value

books.forEach(b=>{
if(b.id==id){
b.status="Issued"
}
})

}


function returnBook(){

let id=document.getElementById("bookId").value

books.forEach(b=>{
if(b.id==id){
b.status="Available"
}
})

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

alert("Scanned book added")

}
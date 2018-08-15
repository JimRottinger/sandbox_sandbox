/* ******************************************************** */
/*  Uncomment different parts of this script to view        */
/*  different-origin iframe permissions issues.             */
/* ******************************************************** */

/* ************* Popups and Modal Dialogs ****************** */

/*
 Demonstrating an infinite pop-up exploit.
 */

// (function unescapablePrompt() {
//   if (window.confirm("Do you want to win $1000?!?!")) {
//     unescapablePrompt()
//   } else {
//     unescapablePrompt()
//   }
// }());

/* ************* Redirection and Clickjacking ****************** */

/*
  Demonstrating how a user-initiated action can redirect the page.
  This is the basis behind clickjacking
 */

// function clickNav () {
//   window.top.location = 'http://localhost:8001'
// }
// window.top.location = 'http://localhost:8001'

/*
  Demonstrating how a user-initiated action can open a new page
 */

// function clickNav () {
//   window.open('http://localhost:8001')
// }
// window.open('http://localhost:8001')

/* ************* Cookies and Browser Requests ****************** */

/*
  Demonstrating that a cross-origin fetch request will be block
  and that it cannot access the cookies
 */

// console.log(document.cookie) // ""
// var myRequest = new Request('http://localhost:8000');

// fetch(myRequest, {
//   method: 'GET',
//   credentials: "include"
// }).then(function(response) {
//   return response;
// }).then(function(response) {
//   console.log(response)
// });

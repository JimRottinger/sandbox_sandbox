/* ******************************************************** */
/*  Uncomment different parts of this script to view        */
/*  different same-origin iframe permissions issues.        */
/* ******************************************************** */

/* ************* Redirection and Clickjacking ****************** */

/*
  Demonstrating that a same origin iframe can redirect the page
 */
// window.top.location = 'http://localhost:8001'

/*
  Demonstrating that a same origin iframe cannot open a new window
 */
// window.open('http://localhost:8001')


/* ************* Cookies and Browser Requests ****************** */

/*
  Demonstrating that a same-origin fetch request will go through
  and that is has access to the cookies
 */

// console.log(document.cookie) // "session_id=A38XJISDASDW120"

// var myRequest = new Request('http://localhost:8000');
// fetch(myRequest, {
//   method: 'GET',
//   credentials: "include"
// }).then(function(response) {
//   console.log(response)
// });

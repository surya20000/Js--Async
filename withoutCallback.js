const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


function getCookies( ) {
  setTimeout(( ) => {
    let output = '';
    cookies.forEach((cookie) => {
      output += `<li>${cookie.name}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}

  // Progression 2: using setTimeout() 

//Progression 3: Create a function to creat cookies

function createCookie(newCookie) {
  setTimeout(( ) => {
    cookies.push(newCookie);
  }, 2000 )
}

// Progression 5: calling function
createCookie(newCookie);
getCookies();
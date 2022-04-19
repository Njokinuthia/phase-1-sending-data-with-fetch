let userName = "steve"
let userEmail = "steve@gmail.com"

function submitData(userName, userEmail) {
  return fetch(" http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:JSON.stringify({
      userName,
      userEmail
    })
  })
  .then(resp=>resp.json())
  .then(obj=>document.body.innerHTML = obj[ "id" ])
  .catch(error=>document.body.innerHTML = error.message);
};

submitData(userName,userEmail);



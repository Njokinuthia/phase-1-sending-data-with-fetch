//let userName = "joy"
//let userEmail = "steve@gmail.com"

const submitData = (name, email)=> {
  return fetch(" http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body:JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(resp=>resp.json())
  .then(obj=>document.body.innerHTML = obj[ "id" ])
  .catch(error=>document.body.innerHTML = error.message);
};

submitData("wewewewew","jhsd44444bns");



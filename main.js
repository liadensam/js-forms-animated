function animatedForm(){
  const hands = document.querySelectorAll(".fa-hand-point-down");

  hands.forEach(hand =>{
    hand.addEventListener('click', () =>{
        const input = hand.previousElementSibling;
        const parent = hand.parentElement;
        const nextForm = parent.nextElementSibling;


          if(input.type === "text" && validateUser(input)){
              nextSlide(parent, nextForm);
          }else if(input.type === "email" && validateEmail(input)){
              nextSlide(parent, nextForm);
          }else if(input.type === "password" && validateUser(input)){
              nextSlide(parent, nextForm);
          }else {
              parent.style.animation = "shake 0.5s ease";
          }

          parent.addEventListener("animationend", () =>{
            parent.style.animation = "";
          })

    });
  });
}

function validateUser(user){
  if(user.value.length < 6){
    console.log("not enough characters");
    error("rgb(187,87,87)");
  }else {
      error("rgb(87, 189, 130)");
      return true;
  }
}

function validateEmail(email){
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(validation.test(email.value)){
    error("rgb(87, 189, 130)");
    return true;
  }else {
    error("rgb(187,87,87)");
  }
}


function error(color){
  document.body.style.backgroundColor = color;
}


function nextSlide(parent, nextForm){
  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextForm.classList.add("active");
}



animatedForm();
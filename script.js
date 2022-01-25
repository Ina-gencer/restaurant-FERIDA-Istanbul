
        function openNav() {
            document.querySelector("#myNav").style.width = "100%";
        }
        function closeNav() {
            document.querySelector("#myNav").style.width = "0%";
        }

        function myFunction() {
          let x = document.querySelector("#myLinks");
          if (x.style.display === "block") {
          x.style.display = "none";
          }
          else {
          x.style.display = "block";
          }
        }
        function myFunctionMobile() {
          let xx = document.querySelector("#myLinks");
          if (xx.style.display === "block" && window.innerWidth <= 800) {
          xx.style.display = "none";
          }
          else {
          xx.style.display = "block";
          }
        }

    let newColor = ["#000000"]
    gsap.from(".tbhead", {opacity:0, duration: 8, delay:0.5, color: newColor})
    gsap.from(".cuisine", { opacity:0, duration: 10, delay:3})
    gsap.from("#myNav", {y:-50, opacity:0, duration: 3, delay:2})
    

  let price = document.querySelector(".price");
    let platOne = document.querySelector("#platOne");
    let platTwo = document.querySelector("#platTwo");
    let platThree = document.querySelector("#platThree");
    
    price.addEventListener("mouseover", bigger);
  price.addEventListener("mouseout", smaler);

    platOne.addEventListener("mouseover", biggerOne);
    platOne.addEventListener("mouseout", smalerOne);

    platTwo.addEventListener("mouseover", biggerTwo);
    platTwo.addEventListener("mouseout", smalerTwo);
    

    platThree.addEventListener("mouseover", biggerThree);
    platThree.addEventListener("mouseout", smalerThree);
    
    
    

     function bigger() {
         gsap.to(".price", {scale: 1.04, duration: 2})
     }
     function smaler() {
        gsap.to(".price", {scale: 1.01, duration: 2})
    }
    function biggerOne() {
        gsap.to("#platOne", {scale: 1.08, duration: 2})
    }
    function smalerOne() {
        gsap.to("#platOne", {scale: 1.01, duration: 2})
    }
    function biggerTwo() {
        gsap.to("#platTwo", {scale: 1.08, duration: 2})
    }
    function smalerTwo() {
        gsap.to("#platTwo", {scale: 1.01, duration: 2})
    }
    function biggerThree() {
        gsap.to("#platThree", {scale: 1.08, duration: 2})
    }
    function smalerThree() {
        gsap.to("#platThree", {scale: 1.01, duration: 2})
    }



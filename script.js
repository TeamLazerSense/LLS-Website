window.addEventListener('scroll', () => {
    const container = document.getElementById("container");
    const text1 = document.getElementById("introText");
    const text2 = document.getElementById("missionText");


    const imageOne = document.getElementById("step-1-full");
    const imageTwo = document.getElementById("step-2-full");
    const imageThree = document.getElementById("step-3-full");
    const imageFour = document.getElementById("step-4-full");
    const imageFive = document.getElementById("step-5-full");



    container.style.position = "relative";
    container.style.top = window.scrollY / 6 + "px";
    if (window.scrollY > 0 && window.scrollY < 258)
    {
        text1.style.marginLeft = window.scrollY / 6 + "px";
        text1.style.marginRight = - window.scrollY / 6 + "px";
    }

    if (window.scrollY > 379 && window.scrollY < 720)
    {
        text2.style.marginLeft = (window.scrollY - 379) / 10+ "px";
        text2.style.marginRight = - (window.scrollY + 379) / 10+ "px";
    }

    var aniation_finction = "cubic-bezier(.56,-0.13,0,1.16)";

    if (window.scrollY > 1140)
  {
    imageOne.style.animation= "slide-in 2.5s " + aniation_finction+" forwards";
    imageTwo.style.animation= "slide-in 2.2s " + aniation_finction+" forwards";
    imageThree.style.animation= "slide-in 1.9s " + aniation_finction+" forwards";
    imageFour.style.animation= "slide-in 1.6s " + aniation_finction+" forwards";
    imageFive.style.animation= "slide-in 1.4s " + aniation_finction+" forwards";

  }

    if (window.scrollY === 0)
    {
      imageOne.style.animation= "slide-out 0s " + aniation_finction+" forwards";
      imageTwo.style.animation= "slide-out 0s " + aniation_finction+" forwards";
      imageThree.style.animation= "slide-out 0s " + aniation_finction+" forwards";
      imageFour.style.animation= "slide-out 0s " + aniation_finction+" forwards";
      imageFive.style.animation= "slide-out 0s " + aniation_finction+" forwards";
      text2.style.marginLeft = 0 + "px";
      text1.style.marginLeft = 0 + "px";

    }
    
   
});


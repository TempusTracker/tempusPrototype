export default function animationPetals() {
  window.onload = () => {
    const paralax = document.querySelector(".App");
    if (paralax) {
      const petal1 = document.querySelector(".petal1");
      const petal2 = document.querySelector(".petal2");
      const petal3 = document.querySelector(".petal3");
      const petal4 = document.querySelector(".petal4");
      const petal5 = document.querySelector(".petal5");
      const petal6 = document.querySelector(".petal6");
      const petal7 = document.querySelector(".petal7");
      const forPetal1 = 20;
      const forPetal2 = 30;
      const forPetal3 = 40;
      const forPetal4 = 20;
      const forPetal5 = 30;
      const forPetal6 = 40;
      const forPetal7 = 15;
      const speed = 0.05;
      let positionX = 0,
        positionY = 0;
      let coordXprocent = 0,
        coordYprocent = 0;

      function setMouseParalaxStyle() {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + distX * speed;
        positionY = positionY + distY * speed;

        petal1.style.transform =
          "translate(" +
          positionX / forPetal1 +
          "%," +
          positionY / forPetal1 +
          "%)";
        petal2.style.transform =
          "translate(" +
          positionX / forPetal2 +
          "%," +
          positionY / forPetal2 +
          "%)";
        petal3.style.transform =
          "translate(" +
          positionX / forPetal3 +
          "%," +
          positionY / forPetal3 +
          "%)";
        petal4.style.transform =
          "translate(" +
          positionX / forPetal4 +
          "%," +
          positionY / forPetal4 +
          "%)";
        petal5.style.transform =
          "translate(" +
          positionX / forPetal5 +
          "%," +
          positionY / forPetal5 +
          "%)";
        petal6.style.transform =
          "translate(" +
          positionX / forPetal6 +
          "%," +
          positionY / forPetal6 +
          "%)";
        petal7.style.transform =
          "translate(" +
          positionX / forPetal7 +
          "%," +
          positionY / forPetal7 +
          "%)";

        requestAnimationFrame(setMouseParalaxStyle);
      }
      setMouseParalaxStyle();

      paralax.addEventListener("mousemove", (e) => {
        const parallaxW = paralax.offsetWidth;
        const parallaxH = paralax.offsetHeight;

        const coordX = e.pageX - parallaxW / 2;
        const coordY = e.pageY - parallaxH / 2;

        coordXprocent = (coordX / parallaxW) * 100;
        coordYprocent = (coordY / parallaxH) * 100;
      });
    }
  };
}

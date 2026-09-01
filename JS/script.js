document.addEventListener("DOMContentLoaded", () => {
  //печатная машинка названия кейса

  const typewriter = document.querySelector(".typewriter");
  const cells = document.querySelectorAll(".cell.filled");

  let typingInterval;

  function typeText(text) {
    clearInterval(typingInterval);
    typewriter.textContent = "";
    let i = 0;

    typingInterval = setInterval(() => {
      typewriter.textContent += text[i];
      i++;
      if (i >= text.length) clearInterval(typingInterval);
    }, 50); // скорость печати
  }

  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", () => {
      const title = cell.dataset.title;
      if (!title) return;

      typewriter.style.opacity = 1;
      typeText(title);
    });

    cell.addEventListener("mouseleave", () => {
      clearInterval(typingInterval);
      typewriter.style.opacity = 0;
      typewriter.textContent = "";
    });
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      /* Переключение между добавлением и удалением класса "active",
    чтобы выделить кнопку, управляющую панелью */
      this.classList.toggle("active");

      /* Переключение между скрытием и отображением активной панели */
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  //
  //
  // name animation
  const words = ["dia.net", "dian.et", "diane.t", "dian.et"];
  let index = 0;

  function changeText() {
    const currentWord = words[index];
    document.getElementById("changer").textContent = currentWord;
    index = (index + 1) % words.length; // Цикличность
  }

  // Запускаем смену через 1 секунды
  setTimeout(changeText, 1000);
  setInterval(changeText, 1000); // Повторяем каждые 1 секунды
});

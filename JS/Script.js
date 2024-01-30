window.addEventListener("load", function () {
  // Переменные для кнопок и темплейтов
  let openButton = document.getElementById("testStartButton");
  let testPage = document.getElementById("testPage");
  let openFirstPage = document.getElementById("openFirstPage");
  let articleOne = document.getElementById("articleOne");
  let articleTwo = document.getElementById("articleTwo");
  let answer = document.getElementById("answer");
  let articleThree = document.getElementById("articleThree");
  let submitButton = document.getElementById("submitButton");
  let navBtn = document.getElementById("mobile-nav-btn");
  let mobileNav = document.getElementById("mobile-nav");

  let closeButton = document.getElementById("closeButton");
  let closeButtonTemplate = document.getElementById("closeButtonTemplate");
  let closeButtonTemplate2 = document.getElementById("closeButtonTemplate2");

  let closeNav = document.getElementById("closeNavigation");

  // Обработчик событий для ОТКР. КНОПОК
  // 1
  openButton.addEventListener("click", function () {
    testPage.style.display = "flex";
    header.style.display = "none";
    articleOne.style.display = "block";
    articleTwo.style.display = "none";
    articleThree.style.display = "none";
  });
  // 2
  openFirstPage.addEventListener("click", function () {
    testPage.style.display = "flex";
    header.style.display = "none";
    articleTwo.style.display = "none";
    articleOne.style.display = "none";
    articleThree.style.display = "flex";
  });
  // 3
  submitButton.addEventListener("click", function () {
    testPage.style.display = "flex";
    header.style.display = "none";
    articleTwo.style.display = "flex";
    articleThree.style.display = "none";
    // КОНЕЦ

   

    // ИЗМЕНЯЕМ ТЕКСТ В КАРТОЧКЕ В ЗАВИСИМОСТИ ОТ ТОГО ЧТО ОТВЕТИТ В ИНПУТЕ ПОЛЬЗОВАТЕЛЬ
    var selectedChoice = document.querySelector('input[name="choice"]:checked');
    var articleTwoHeader = document.getElementById("change-title");

    if (selectedChoice) {
      if (selectedChoice.value === "yes") {
        articleTwoHeader.innerText =
          "Правильно! С логикой у вас все отлично =)";
      } else if (selectedChoice.value === "no") {
        articleTwoHeader.innerText = "Нет, вы не правы =(";
      } else if (selectedChoice.value === "i dont know") {
        articleTwoHeader.innerText = "Ну чтож, вот верный ответ =/";
      }
    } else {
      // Обработка случая, когда ни один вариант не выбран
      articleTwoHeader.innerText = "Выберите ответ";
    }
  });
  // КОНЕЦ

  // МЕНЮ БУРГЕР МОБИЛЬНОЙ ВЕРСИИ ЗАКРЫВАЕТСЯ ПРИ РАСШИРЕНИИ ЭКРАНА !!!
  navBtn.addEventListener("click", function () {
    mobileNav.style.display = "flex";
  });

  function toggleDisplay() {
    var maxWidth = 1000; // Максимальная ширина, при которой элемент будет скрыт
    if (window.innerWidth <= maxWidth) {
      mobileNav.style.display = "none"; // Скрываем элемент при узком экране
    } if (closeNav) {
      closeNav.addEventListener("click", function () {
        mobileNav.style.display = "none";
      })
    } else {
      mobileNav.style.display = ""; // Восстанавливаем стандартное значение display
    }
  }

   // Обработчик события для ЗАКР. КНОПОК
    // 1
    closeButton.addEventListener("click", function () {
      console.log('Close button clicked');
      testPage.style.display = "none";
      header.style.display = "flex";
    });
    // 2
    closeButtonTemplate.addEventListener("click", function () {
      testPage.style.display = "none";
      header.style.display = "flex";
    });
    // 3
    closeButtonTemplate2.addEventListener("click", function () {
      testPage.style.display = "none";
      header.style.display = "flex";
    });
    // 4
    closeNav.addEventListener("click", function () {
      mobileNav.style.display = "none";
      header.style.display = "flex";
    });
    // КОНЕЦ

  // Вызываем функцию при загрузке страницы и при изменении размера окна
  window.addEventListener("load", toggleDisplay);
  window.addEventListener("resize", toggleDisplay);
  // КОНЕЦ
});

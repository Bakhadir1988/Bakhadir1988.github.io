// Мобильный блок вакансий
const headerMobileBtn = document.querySelector(".header__menu--btn");

headerMobileBtn.addEventListener("click", () => {
  headerMobileBtn.classList.toggle("active");
});

// Показываем карту в мобильной версий
const mapContainer = document.querySelector(".branches__list-map");
const mobileBtnOpenMap = document.querySelector(".branches__list-bnt");

mobileBtnOpenMap.addEventListener("click", () => {
  mapContainer.classList.toggle("active");
});

// Плавный скролл
const smoothLinks = document.querySelectorAll('a[href^="#"]');

for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Аккордион
const accHeaders = document.querySelectorAll(".vacancies__list-button");

accHeaders.forEach(function (header) {
  header.addEventListener("click", function () {
    this.innerHTML = this.innerHTML === "Подробнее" ? "Свернуть" : "Подробнее";
    this.classList.toggle("active");

    const panel = this.nextElementSibling;

    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Кастомный селектор
const selectHeader = document.querySelectorAll(".select__header");
const selectItem = document.querySelectorAll(".select__body--item");

selectHeader.forEach((item) => {
  item.addEventListener("click", selectToggle);
});

selectItem.forEach((item) => {
  item.addEventListener("click", selectChange);
});

function selectToggle() {
  this.parentElement.classList.toggle("is-active");
}

function selectChange() {
  let text = this.innerHTML,
    select = this.closest(".select"),
    currentText = select.querySelector(".select__header--current");
  currentText.innerHTML = text;
  select.classList.remove("is-active");
}

// Яндекс карта
ymaps.ready(init);
function init() {
  // Создание карты.
  let map = new ymaps.Map("map", {
    center: [55.58422718162347, 37.385439],
    zoom: 19,
  });

  let coords = [
    [55.748002, 37.955572],
    [55.443036, 37.777392],
    [55.906189, 37.790974],
  ];

  for (let i = 0; i < coords.length; i++) {
    console.log("first", i);
    let placemark = new ymaps.Placemark(
      coords[i],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: `./assets/img/map-${i + 1}.png`,
        iconImageSize: [69, 85],
        iconImageOffset: [-19, -44],
      }
    );

    map.geoObjects.add(placemark);
  }
  map.setBounds(map.geoObjects.getBounds());

  // Удаление контролов
  map.controls.remove("geolocationControl");
  map.controls.remove("searchControl");
  map.controls.remove("trafficControl");
  map.controls.remove("typeSelector");
  map.controls.remove("fullscreenControl");
  map.controls.remove("zoomControl");
  map.controls.remove("rulerControl");
}

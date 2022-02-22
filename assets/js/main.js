

function fillDataset(menuItems, sections, time) {
  for (item of menuItems) {
      $(item).click(function () {
          const sectionName = $(this).attr("data-filter");
          for (item of menuItems) {
              if ($(item).attr("data-filter") != sectionName) {
                  $(item).removeClass("active");
              } else {
                  $(item).addClass("active");
              }
          }
          for (section of sections) {
              if ($(section).hasClass(sectionName)) {
                  $(section).fadeIn(time);
              } else {
                  $(section).fadeOut(0);
              }
          }
      });
  }
}

let sections = $(".section");

for (section of sections) {
  if ($(section).hasClass("home")) {
  } else {
      $(section).fadeOut(0);
  }
}

let menuItems = $(".menu-list__item");

for (item of menuItems) {
  if ($(item).attr("data-filter") === "home") {
      $(item).addClass("active");
  }
}

fillDataset(menuItems, sections, 250);





let mouseX = 0,
  mouseY = 0;




let btnLearnmore = $(".learn-more");
let descriptionModal = $(".description-modal");
let descriptionModalClose = $(".description-modal__close");

$(descriptionModal).fadeOut(0);

$(descriptionModalClose).click(function () {
  $(descriptionModal).fadeOut(250);
});

$(btnLearnmore).click(function () {
  $(descriptionModal).fadeIn(250);
});

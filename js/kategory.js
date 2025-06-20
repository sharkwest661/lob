const showOthers = document.getElementById("showOthers");
const mainContent = document.getElementById("mainContent");
const hiddenContent = document.getElementById("hiddenContent");
const hideOthers = document.getElementById("hideOthers");

if (document.body.clientWidth > 767) {
  showOthers.addEventListener("click", (e) => {
    hiddenContent.classList.remove("dnone");
    mainContent.classList.add("dnone");
  });
  hideOthers.addEventListener("click", (e) => {
    hiddenContent.classList.add("dnone");
    mainContent.classList.remove("dnone");
  });
}

document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const citiesArr = [
    "Ağcabədi",
    "Ağdam",
    "Ağdaş",
    "Ağstafa",
    "Ağsu",
    "Astara",
    "Babək",
    "Bakı",
    "Balakən",
    "Beyləqan",
    "Bərdə",
    "Biləsuvar",
    "Cəbrayıl",
    "Cəlilabad",
    "Culfa",
    "Daşkəsən",
    "Dəliməmmədli",
    "Füzuli",
    "Gədəbəy",
    "Gəncə",
    "Goranboy",
    "Göyçay",
    "Göygöl",
    "Göytəpə",
    "Hacıqabul",
    "Horadiz",
    "İmişli",
    "İsmayıllı",
    "Kürdəmir",
    "Laçın",
    "Lerik",
    "Lənkəran",
    "Liman",
    "Masallı",
    "Mingəçevir",
    "Naftalan",
    "Naxçıvan",
    "Neftçala",
    "Oğuz",
    "Ordubad",
    "Qax",
    "Qazax",
    "Qəbələ",
    "Qobustan",
    "Quba",
    "Qusar",
    "Saatlı",
    "Sabirabad",
    "Şabran",
    "Şahbuz",
    "Salyan",
    "Şamaxı",
    "Samux",
    "Şəki",
    "Şəmkir",
    "Şərur",
    "Şirvan",
    "Siyəzən",
    "Sumqayıt",
    "Şuşa",
    "Tərtər",
    "Tovuz",
    "Ucar",
    "Xaçmaz",
    "Xırdalan",
    "Xızı",
    "Xudat",
    "Yardımlı",
    "Yevlax",
    "Zaqatala",
    "Zərdab",
  ];
  const typesArr = ["nibnhubh", "bfdbdf", "bdfbd", "fsdt", "tsdhtht", "htjuju"];
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const type = dropDownBtn.dataset.value;
  if (type == "city") {
    const dropDownListHero = dropDownWrapper.querySelector(
      ".dropdown__list_hero"
    );
    const dropDownList = document.createElement("ul");
    dropDownList.classList.add("dropdown__list");
    const input = document.createElement("input");
    input.classList.add("universal_search_input");
    input.setAttribute("type", "text");
    dropDownListHero.append(input);
    input.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.classList.add("search-fix");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListHero.append(p);
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropArrow = dropDownWrapper.querySelector("i");
    dropDownListHero.append(dropDownList);

    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    // Клик по кнопке. Открыть/Закрыть select
    let dropOpen = false;
    dropDownBtn.addEventListener("click", function (e) {
      if (dropOpen) {
        dropDownListHero.style.display = "none";
        dropOpen = false;
      } else {
        dropDownListHero.style.display = "block";
        dropDownList.innerText = "";
        citiesArr.map((a) => {
          const li = document.createElement("li");
          li.classList.add("dropdown__list-item");
          li.setAttribute("data-value", a);
          li.textContent = a;
          dropDownList.append(li);
        });
        input.value = "";
        dropOpen = true;
      }
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          e.target.classList.toggle("added_city");
          let ifCheck = [];
          dropDownListItems.forEach((a) => {
            let gfgf = a.classList.value;
            let b = gfgf.split(" ");
            if (a.classList.value.split(" ").includes("added_city")) {
              ifCheck.push(a);
            } else {
              ifCheck.filter((n) => n != a);
            }
          });
          let name = [];
          if (ifCheck.length) {
            for (let i = 0; i < ifCheck.length; i++) {
              name.push(ifCheck[i].innerText);
            }
          }
          dropDownBtn.innerText = name.length ? name.join(", ") : "Şəhər";
          if (dropDownBtn.innerText.length > 20) {
            dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
          }
          document
            .querySelector(".filter_reset_btn")
            .addEventListener("click", () => {
              dropDownBtn.innerText = "Şəhər";
              name = [];
              ifCheck = [];
            });
          dropDownBtn.focus();
          dropDownInput.value = dropDownInput.value.length
            ? dropDownInput.value + this.dataset.value
            : dropDownInput.value;
        });
      });
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_city");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_city")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length ? name.join(", ") : "Şəhər";
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        document
          .querySelector(".filter_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Şəhər";
            name = [];
            ifCheck = [];
          });
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
      });
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Şəhər";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_city");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      });
    });

    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const newList = [];
      dropDownList.innerText = "";
      dropDownListItems.forEach(function (listItem) {
        const newItem = listItem.textContent.toLowerCase();
        if (newItem.startsWith(value.toLowerCase())) {
          newList.push(listItem);
        }
      });
      const h4 = document.createElement("h4");
      h4.classList.add("none_text");
      h4.textContent = "Nəticə tapılmadi";
      dropDownList.append(h4);
      if (newList.length) {
        newList.map((a) => {
          dropDownList.append(a);
        });
        h4.classList.remove("none_text_visible");
      } else {
        h4.classList.add("none_text_visible");
      }
    });

    // document
    //   .querySelector(".filter_reset_btn")
    //   .addEventListener("click", () => {
    //     dropDownListItems.forEach(function (listItem) {
    //       listItem.classList.remove("added_city");
    //     });
    //   });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropArrow.classList.remove("rotate");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });
  }
  if (type == "type") {
    const dropDownListHero = dropDownWrapper.querySelector(
      ".dropdown__list_hero"
    );
    const dropDownList = document.createElement("ul");
    dropDownList.classList.add("dropdown__list");
    const input = document.createElement("input");
    input.classList.add("universal_search_input");
    input.setAttribute("type", "text");
    dropDownListHero.append(input);
    input.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListHero.append(p);
    typesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a);
      li.textContent = a;
      dropDownList.append(li);
    });
    const dropArrow = dropDownWrapper.querySelector("i");
    dropDownListHero.append(dropDownList);

    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    // Клик по кнопке. Открыть/Закрыть select
    let dropOpen = false;
    dropDownBtn.addEventListener("click", function (e) {
      if (dropOpen) {
        dropDownListHero.style.display = "none";
        dropOpen = false;
      } else {
        dropDownListHero.style.display = "block";
        dropDownList.innerText = "";
        typesArr.map((a) => {
          const li = document.createElement("li");
          li.classList.add("dropdown__list-item");
          li.setAttribute("data-value", a);
          li.textContent = a;
          dropDownList.append(li);
        });
        input.value = "";
        dropOpen = true;
      }
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          e.target.classList.toggle("added_city");
          let ifCheck = [];
          dropDownListItems.forEach((a) => {
            let gfgf = a.classList.value;
            let b = gfgf.split(" ");
            if (a.classList.value.split(" ").includes("added_city")) {
              ifCheck.push(a);
            } else {
              ifCheck.filter((n) => n != a);
            }
          });
          let name = [];
          if (ifCheck.length) {
            for (let i = 0; i < ifCheck.length; i++) {
              name.push(ifCheck[i].innerText);
            }
          }
          dropDownBtn.innerText = name.length ? name.join(", ") : "Malın tipi";
          if (dropDownBtn.innerText.length > 20) {
            dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
          }
          document
            .querySelector(".filter_reset_btn")
            .addEventListener("click", () => {
              dropDownBtn.innerText = "Malın tipi";
              name = [];
              ifCheck = [];
            });
          dropDownBtn.focus();
          dropDownInput.value = dropDownInput.value.length
            ? dropDownInput.value + this.dataset.value
            : dropDownInput.value;
        });
      });
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_city");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_city")) {
            ifCheck.push(a);
          } else {
            ifCheck.filter((n) => n != a);
          }
        });
        let name = [];
        if (ifCheck.length) {
          for (let i = 0; i < ifCheck.length; i++) {
            name.push(ifCheck[i].innerText);
          }
        }
        dropDownBtn.innerText = name.length ? name.join(", ") : "Şəhər";
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        document
          .querySelector(".filter_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Şəhər";
            name = [];
            ifCheck = [];
          });
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
      });
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Malın tipi";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_city");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      });
    });

    input.addEventListener("input", (e) => {
      const value = e.target.value;
      const newList = [];
      dropDownList.innerText = "";
      dropDownListItems.forEach(function (listItem) {
        const newItem = listItem.textContent.toLowerCase();
        if (newItem.startsWith(value.toLowerCase())) {
          newList.push(listItem);
        }
      });
      const h4 = document.createElement("h4");
      h4.classList.add("none_text");
      h4.textContent = "Nəticə tapılmadi";
      dropDownList.append(h4);
      if (newList.length) {
        newList.map((a) => {
          dropDownList.append(a);
        });
        h4.classList.remove("none_text_visible");
      } else {
        h4.classList.add("none_text_visible");
      }
    });

    // document
    //   .querySelector(".filter_reset_btn")
    //   .addEventListener("click", () => {
    //     dropDownListItems.forEach(function (listItem) {
    //       listItem.classList.remove("added_city");
    //     });
    //   });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropArrow.classList.remove("rotate");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });
  }
});
document
  .querySelectorAll(".unersal_inputs")
  .forEach(function (universalInputs) {
    const labels = universalInputs.querySelectorAll("label");
    labels.forEach((label) => {
      const type = label.dataset.value;
      const input = label.querySelector("input");
      const p = label.querySelector("p");
      input.addEventListener("focus", () => {
        p.classList.add("active_p");
      });
      document.addEventListener("click", function (e) {
        if (e.target !== input && input.value == "") {
          p.classList.remove("active_p");
        }
        document
          .querySelector(".filter_reset_btn")
          .addEventListener("click", () => {
            p.classList.remove("active_p");
            input.value = "";
          });
      });
    });
  });

function disableScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

function enableScroll() {
  window.onscroll = null;
}
document.querySelector(".kat_btn_767").addEventListener("click", () => {
  document.querySelector(".kat_burger").classList.add("kat_burger_visible");
  disableScroll();
});
document.getElementById("kat_return_btn").addEventListener("click", () => {
  document.querySelector(".kat_burger").classList.remove("kat_burger_visible");
  enableScroll();
});

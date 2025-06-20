document.querySelectorAll("#emlakRoom").forEach(function (room) {
  const emlakRoomDropdown = room.querySelector(".emlak_room_dropdown");
  const checkedEmlakRoom = room.querySelector("#checkedEmlakRoom");
  const emlakRoomArrow = room.querySelector("#emlakRoomArrow");
  const otherRoom = room.querySelector("#otherRoom");
  const roomCheckboxes = room.querySelectorAll(
    '.emlak_room_dropdown input[type="checkbox"]'
  );
  const roomCheckboxes2 = room.querySelectorAll(
    '.mobile_emlak_room input[type="checkbox"]'
  );
  const checkedEmlakRoom2 = document.querySelector("#checkedEmlakRoom2");

  let roomArr = [];

  document.addEventListener("click", function (e) {
    if (
      !room.contains(e.target) &&
      e.target !== emlakRoomDropdown &&
      e.target !== emlakRoomArrow &&
      e.target !== checkedEmlakRoom
    ) {
      emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");
      emlakRoomOpen = false;
      emlakRoomArrow.style.transform = "rotate(0)";
    }
  });

  room.addEventListener("click", (e) => {
    emlakRoomDropdown.classList.toggle("emlak_room_dropdown_visible");
    emlakRoomArrow.style.transform = emlakRoomDropdown.classList.contains(
      "emlak_room_dropdown_visible"
    )
      ? "rotate(180deg)"
      : "rotate(0)";
  });

  emlakRoomDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  otherRoom.addEventListener("click", () => {
    roomArr = [];
    roomCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.style.backgroundColor = "";
      checkbox.style.color = "";
      checkbox.parentNode.classList.remove("checked");
    });
    roomCheckboxes2.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.style.backgroundColor = "";
      checkbox.style.color = "";
      checkbox.parentNode.classList.remove("checked");
    });
    emlakRoomDropdown.classList.remove("emlak_room_dropdown_visible");
    emlakRoomArrow.style.transform = "rotate(0)";
    checkedEmlakRoom.textContent = "Otaq sayı";
    checkedEmlakRoom2.textContent = "Otaq sayı";
  });

  roomCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      otherRoom.checked = false;
      const text = (index + 1).toString();
      roomArr = updateRoomArr(roomArr, text);
      checkbox.parentNode.classList.toggle("checked");
      updateCheckedEmlakRoom();
    });
  });
  roomCheckboxes2.forEach((checkbox, index) => {
    checkbox.addEventListener("click", () => {
      otherRoom.checked = false;
      const text = (index + 1).toString();
      roomArr = updateRoomArr(roomArr, text);
      checkbox.parentNode.classList.toggle("checked");
      updateCheckedEmlakRoom();
    });
  });

  function updateRoomArr(arr, text) {
    if (arr.includes(text)) {
      arr = arr.filter((a) => a != text);
    } else {
      arr.push(text);
    }
    return arr.sort((a, b) => a - b);
  }

  function updateCheckedEmlakRoom() {
    let word = roomArr.join(", ");
    if (roomArr.includes("5")) {
      checkedEmlakRoom.textContent = `${word} otaqlı və daha çox`;
      checkedEmlakRoom2.textContent = `${word} otaqlı və daha çox`;
    } else {
      checkedEmlakRoom.textContent = word ? `${word} otaqlı` : "Otaq sayı";
      checkedEmlakRoom2.textContent = word ? `${word} otaqlı` : "Otaq sayı";
    }
    if (
      checkedEmlakRoom.textContent.length > 15 ||
      checkedEmlakRoom2.textContent.length > 15
    ) {
      checkedEmlakRoom.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
      checkedEmlakRoom2.textContent =
        checkedEmlakRoom.textContent.slice(0, 15) + "...";
    }
  }
});

document.querySelectorAll(".emlak_floor_hero").forEach(function (floorHero) {
  const emlakFloorNotOneInput1 = floorHero.querySelector(
    "#emlak_floor_not_one_input1"
  );
  const emlakFloorNotOneInput2 = floorHero.querySelector(
    "#emlak_floor_not_one_input2"
  );
  const emlakFloorNotOneInput3 = floorHero.querySelector(
    "#emlak_floor_not_one_input3"
  );
  emlakFloorNotOneInput1.checked = false;
  emlakFloorNotOneInput2.checked = false;
  emlakFloorNotOneInput3.checked = false;

  emlakFloorNotOneInput3.addEventListener("click", () => {
    if (emlakFloorNotOneInput3.checked == true) {
      emlakFloorNotOneInput2.checked = false;
    }
  });
  emlakFloorNotOneInput2.addEventListener("click", () => {
    if (emlakFloorNotOneInput2.checked == true) {
      emlakFloorNotOneInput3.checked = false;
    }
  });
});

const emlakHideBtn = document.querySelector(".emlak_hide");
const emlakShowBtn = document.querySelector(".emlak_show");
const emlakReset = document.querySelector(".emlak_reset");

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
let selectedCity = "Bakı";
let selectedMetro = "";
let filteredMetro = [];
const metroDropdownList = document.querySelector("#metros");
const metroDropdown = document.querySelector("#emlak_metro");
const metroDropdownBtn = document.querySelector("#metro-btn");
document.querySelectorAll(".dropdown").forEach(function (dropDownWrapper) {
  const citiesArr = [
    { city: "Ağcabədi" },
    { city: "Ağdam" },
    { city: "Ağdaş" },
    { city: "Ağstafa" },
    { city: "Ağsu" },
    { city: "Astara" },
    { city: "Babək" },
    {
      city: "Bakı",
      metro: ["Hazi Aslanov", "Xetai"],
      nisangah: ["Heydar Aliyev Centre", "28 Mall"],
      rayon: ["Xətai r.", "Xəzər r."],
      qesebe: ["Buzovna", "Mərdəkan"],
    },
    { city: "Balakən" },
    { city: "Beyləqan" },
    { city: "Bərdə" },
    { city: "Biləsuvar" },
    { city: "Cəbrayıl" },
    { city: "Cəlilabad" },
    { city: "Culfa" },
    { city: "Daşkəsən" },
    { city: "Dəliməmmədli" },
    { city: "Füzuli" },
    { city: "Gədəbəy" },
    { city: "Gəncə", nisangah: ["Heydar Aliyev Park", "Kolorit"] },
    { city: "Goranboy" },
    { city: "Göyçay" },
    { city: "Göygöl" },
    { city: "Göytəpə" },
    { city: "Hacıqabul" },
    { city: "Horadiz" },
    { city: "İmişli" },
    { city: "İsmayıllı" },
    { city: "Kürdəmir" },
    { city: "Laçın" },
    { city: "Lerik" },
    { city: "Lənkəran" },
    { city: "Liman" },
    { city: "Masallı" },
    { city: "Mingəçevir" },
    { city: "Naftalan" },
    { city: "Naxçıvan" },
    { city: "Neftçala" },
    { city: "Oğuz" },
    { city: "Ordubad" },
    { city: "Qax" },
    { city: "Qazax" },
    { city: "Qəbələ" },
    { city: "Qobustan" },
    { city: "Quba" },
    { city: "Qusar" },
    { city: "Saatlı" },
    { city: "Sabirabad" },
    { city: "Şabran" },
    { city: "Şahbuz" },
    { city: "Salyan" },
    { city: "Şamaxı" },
    { city: "Samux" },
    { city: "Şəki" },
    { city: "Şəmkir" },
    { city: "Şərur" },
    { city: "Şirvan" },
    { city: "Siyəzən" },
    { city: "Sumqayıt" },
    { city: "Şuşa" },
    { city: "Tərtər" },
    { city: "Tovuz" },
    { city: "Ucar" },
    { city: "Xaçmaz" },
    { city: "Xırdalan" },
    { city: "Xızı" },
    { city: "Xudat" },
    { city: "Yardımlı" },
    { city: "Yevlax" },
    { city: "Zaqatala" },
    { city: "Zərdab" },
  ];
  const dropDownBtn = dropDownWrapper.querySelector(".dropdown__button");
  const type = dropDownBtn.dataset.value;
  const dropDownList = dropDownWrapper.querySelector(".dropdown__list");
  if (type == "emkak-buy") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Alış";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-house") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Yeni tikili";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-city") {
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a.city);
      li.textContent = a.city;
      dropDownList.append(li);
    });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Şəhər";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emkak-mobi-house") {
    // yearArr.map((a) => {
    //   const li = document.createElement("li");
    //   li.classList.add("dropdown__list-item");
    //   li.setAttribute("data-value", a);
    //   li.textContent = a;
    //   dropDownList.append(li);
    // });
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      dropDownList.classList.toggle("dropdown__list--visible");
      dropDownList.classList.toggle("dropdown_otaq");
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove("dropdown__list--visible");
      });
    });

    dropDownWrapper
      .querySelector(".items_reset_btn")
      .addEventListener("click", () => {
        dropDownBtn.innerText = "Yeni tikililər";
      });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
        dropArrow.classList.remove("rotate");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownList.classList.remove("dropdown__list--visible");
      }
    });
  }
  if (type == "emlak_desc_city") {
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
    const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");
    citiesArr.map((a) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list-item");
      li.setAttribute("data-value", a.city);
      li.textContent = a.city;
      dropDownList.append(li);
    });

    dropDownListHero.append(dropDownList);
    const dropDownListItems = dropDownList.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropOpen = false;
    dropDownBtn.addEventListener("click", function (e) {
      // dropDownListHero.classList.toggle(".dropdown__list_hero_visible");
      if (dropOpen) {
        dropDownListHero.style.display = "none";
        dropOpen = false;
      } else {
        dropDownListHero.style.display = "block";
        dropDownList.innerText = "";
        citiesArr.map((a) => {
          // console.log(a);
          const li = document.createElement("li");
          li.classList.add("dropdown__list-item");
          li.setAttribute("data-value", a.city);
          li.textContent = a.city;
          dropDownList.append(li);
        });
        input.value = "";
        dropOpen = true;
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
      const dropDownListItems = dropDownList.querySelectorAll(
        ".dropdown__list-item"
      );
      dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener("click", function (e) {
          e.stopPropagation();
          const text = e.target.textContent;
          dropArrow.classList.remove("rotate");
          dropDownBtn.innerText = this.innerText;
          selectedCity = this.innerText;
          document.querySelector("#metros").innerText = "";
          document.querySelector("#qesebeler").innerText = "";
          fillMetro();
          fillNisangah();
          fillRayon();
          fillQesebe();
          dropDownBtn.focus();
          dropDownInput.value = this.dataset.value;
          dropDownListHero.classList.remove(".dropdown__list_hero_visible");
          dropDownListHero.style.display = "none";
          dropOpen = false;
        });
      });
    });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        const text = e.target.textContent;
        dropArrow.classList.remove("rotate");
        dropDownBtn.innerText = this.innerText;
        selectedCity = this.innerText;
        // document.querySelector("#models").innerText = "";
        fillNisangah();
        fillMetro();
        fillRayon();
        fillQesebe();
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      });
    });

    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Şəhər";
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

    itemsResetBtn.addEventListener("click", () => {
      dropDownBtn.innerText = "Şəhər";
      document.querySelector("#metro-btn").innerText = "Metro";
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
      document.querySelector("#metros").innerText = "";
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
        dropArrow.classList.remove("rotate");
        dropDownListHero.style.display = "none";
        dropOpen = false;
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListHero.classList.remove(".dropdown__list_hero_visible");
      }
    });
  }
  // if (type == "emlak_desc_city") {
  //   const dropDownListHero = dropDownWrapper.querySelector(
  //     ".dropdown__list_hero"
  //   );
  //   const dropDownList = document.createElement("ul");
  //   dropDownList.classList.add("dropdown__list");
  //   const input = document.createElement("input");
  //   input.classList.add("universal_search_input");
  //   input.setAttribute("type", "text");
  //   dropDownListHero.append(input);
  //   input.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //   });
  //   const p = document.createElement("p");
  //   p.classList.add("items_reset_btn");
  //   p.textContent = "Sıfırla";
  //   const i = document.createElement("i");
  //   i.classList.add("fa-sharp");
  //   i.classList.add("fa-solid");
  //   i.classList.add("fa-xmark");
  //   p.append(i);
  //   dropDownListHero.append(p);
  //   const itemsResetBtn = dropDownWrapper.querySelector(".items_reset_btn");
  //   citiesArr.map((a) => {
  //     const li = document.createElement("li");
  //     li.classList.add("dropdown__list-item");
  //     li.setAttribute("data-value", a.city);
  //     li.textContent = a.city;
  //     dropDownList.append(li);
  //   });

  //   dropDownListHero.append(dropDownList);
  //   const dropDownListItems = dropDownList.querySelectorAll(
  //     ".dropdown__list-item"
  //   );
  //   const dropDownInput = dropDownWrapper.querySelector(
  //     ".dropdown__input-hidden"
  //   );
  //   const dropArrow = dropDownWrapper.querySelector("i");
  //   // Клик по кнопке. Открыть/Закрыть select
  //   dropOpen = false;
  //   dropDownBtn.addEventListener("click", function (e) {
  //     // dropDownListHero.classList.toggle(".dropdown__list_hero_visible");
  //     if (dropOpen) {
  //       dropDownListHero.style.display = "none";
  //       dropOpen = false;
  //     } else {
  //       dropDownListHero.style.display = "block";
  //       dropDownList.innerText = "";
  //       citiesArr.map((a) => {
  //         // console.log(a);
  //         const li = document.createElement("li");
  //         li.classList.add("dropdown__list-item");
  //         li.setAttribute("data-value", a.city);
  //         li.textContent = a.city;
  //         dropDownList.append(li);
  //       });
  //       input.value = "";
  //       dropOpen = true;
  //     }
  //     this.classList.toggle("dropdown__button--active");
  //     dropArrow.classList.toggle("rotate");
  //     const dropDownListItems = dropDownList.querySelectorAll(
  //       ".dropdown__list-item"
  //     );
  //     dropDownListItems.forEach(function (listItem) {
  //       listItem.addEventListener("click", function (e) {
  //         e.stopPropagation();
  //         const text = e.target.textContent;
  //         dropArrow.classList.remove("rotate");
  //         dropDownBtn.innerText = this.innerText;
  //         selectedCity = this.innerText;
  //         filteredMetro = citiesArr.filter(
  //           (city) => city.city == this.innerText && city.metro
  //         );
  //         if (filteredMetro.length > 0) {
  //           console.log(filteredMetro);
  //           updateMetroDropdown();
  //           metroDropdownBtn.classList.remove("empty");
  //         } else {
  //           metroDropdownBtn.classList.add("empty");
  //         }
  //         fillMetro();
  //         fillNisangah();
  //         fillRayon();
  //         fillQesebe();
  //         dropDownBtn.focus();
  //         dropDownInput.value = this.dataset.value;
  //         dropDownListHero.classList.remove("dropdown__list_hero_visible");
  //         dropDownListHero.style.display = "none";
  //         dropOpen = false;
  //       });
  //     });
  //   });
  //   // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  //   dropDownListItems.forEach(function (listItem) {
  //     listItem.addEventListener("click", function (e) {
  //       e.stopPropagation();
  //       const text = e.target.textContent;
  //       dropArrow.classList.remove("rotate");
  //       dropDownBtn.innerText = this.innerText;
  //       selectedCity = this.innerText;
  //       // document.querySelector("#models").innerText = "";
  //       fillNisangah();
  //       fillMetro();
  //       fillRayon();
  //       fillQesebe();
  //       dropDownBtn.focus();
  //       dropDownInput.value = this.dataset.value;
  //       dropDownListHero.classList.remove(".dropdown__list_hero_visible");
  //       dropDownListHero.style.display = "none";
  //       dropOpen = false;
  //     });
  //   });
  //   function updateMetroDropdown() {
  //     const metroDropdown = document.querySelector("#metros");
  //     const metroDropdownBtn = document.querySelector("#metro-btn");

  //     // Clear existing metro options
  //     metroDropdown.innerHTML = "";

  //     // Append new metro options based on the selected city
  //     if (filteredMetro.length > 0) {
  //       const dropDownListHero = document.querySelector("#metros");
  //       const input = document.createElement("input");
  //       input.classList.add("universal_search_input");
  //       input.setAttribute("type", "text");
  //       dropDownListHero.append(input);

  //       const p = document.createElement("p");
  //       p.classList.add("items_reset_btn");
  //       p.textContent = "Sıfırla";
  //       const i = document.createElement("i");
  //       i.classList.add("fa-sharp");
  //       i.classList.add("fa-solid");
  //       i.classList.add("fa-xmark");
  //       p.append(i);
  //       dropDownListHero.append(p);
  //       filteredMetro[0].metro.map((metroOption) => {
  //         const li = document.createElement("li");
  //         li.classList.add("dropdown__list-item");
  //         li.setAttribute("data-value", metroOption);
  //         li.textContent = metroOption;
  //         metroDropdown.append(li);
  //       });

  //       // You may also want to update other UI elements or perform additional actions here
  //     } else {
  //       // Handle the case when there are no metro options for the selected city
  //       // You may want to reset the metro dropdown or handle it accordingly
  //     }
  //   }
  //   p.addEventListener("click", () => {
  //     dropDownBtn.textContent = "Şəhər";
  //   });

  //   input.addEventListener("input", (e) => {
  //     const value = e.target.value;
  //     const newList = [];
  //     dropDownList.innerText = "";
  //     dropDownListItems.forEach(function (listItem) {
  //       const newItem = listItem.textContent.toLowerCase();
  //       if (newItem.startsWith(value.toLowerCase())) {
  //         newList.push(listItem);
  //       }
  //     });
  //     const h4 = document.createElement("h4");
  //     h4.classList.add("none_text");
  //     h4.textContent = "Nəticə tapılmadi";
  //     dropDownList.append(h4);
  //     if (newList.length) {
  //       newList.map((a) => {
  //         dropDownList.append(a);
  //       });
  //       h4.classList.remove("none_text_visible");
  //     } else {
  //       h4.classList.add("none_text_visible");
  //     }
  //   });

  //   itemsResetBtn.addEventListener("click", () => {
  //     dropDownBtn.innerText = "Şəhər";
  //     document.querySelector("#metro-btn").innerText = "Metro";
  //     document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
  //     document.querySelector("#metros").innerText = "";
  //   });

  //   // Клик снаружи дропдауна. Закрыть дропдаун
  //   document.addEventListener("click", function (e) {
  //     if (e.target !== dropDownBtn) {
  //       dropDownBtn.classList.remove("dropdown__button--active");
  //       dropDownListHero.classList.remove(".dropdown__list_hero_visible");
  //       dropArrow.classList.remove("rotate");
  //       dropDownListHero.style.display = "none";
  //       dropOpen = false;
  //     }
  //   });

  //   // Нажатие на Tab или Escape. Закрыть дропдаун
  //   document.addEventListener("keydown", function (e) {
  //     if (e.key === "Tab" || e.key === "Escape") {
  //       dropDownBtn.classList.remove("dropdown__button--active");
  //       dropDownListHero.classList.remove(".dropdown__list_hero_visible");
  //     }
  //   });
  // }
  // if (type == "emlak_desc_metro") {
  //   const dropDownListHero = dropDownWrapper.querySelector(
  //     ".dropdown__list_hero"
  //   );
  //   const dropArrow = dropDownWrapper.querySelector("i");
  //   const dropDownList = document.createElement("ul");
  //   dropDownList.classList.add("dropdown__list");
  //   const p = document.createElement("p");
  //   p.classList.add("items_reset_btn");
  //   p.textContent = "Sıfırla";
  //   const i = document.createElement("i");
  //   i.classList.add("fa-sharp");
  //   i.classList.add("fa-solid");
  //   i.classList.add("fa-xmark");
  //   p.append(i);
  //   dropDownListHero.append(p);
  //   const input = document
  //     .querySelector("#metros")
  //     .querySelector(".universal_search_input");
  //   dropDownBtn.addEventListener("click", function (e) {
  //     // dropDownListHero.classList.toggle(".dropdown__list_hero_visible");
  //     if (dropOpen) {
  //       dropDownListHero.style.display = "none";
  //       dropOpen = false;
  //     } else {
  //       dropDownListHero.style.display = "block";
  //       dropDownList.innerText = "";
  //       citiesArr.map((a) => {
  //         // console.log(a);
  //         const li = document.createElement("li");
  //         li.classList.add("dropdown__list-item");
  //         li.setAttribute("data-value", a.city);
  //         li.textContent = a.city;
  //         dropDownList.append(li);
  //       });
  //       dropOpen = true;
  //     }
  //     this.classList.toggle("dropdown__button--active");
  //     dropArrow.classList.toggle("rotate");
  //     const dropDownListItems = dropDownList.querySelectorAll(
  //       ".dropdown__list-item"
  //     );
  //     dropDownListItems.forEach(function (listItem) {
  //       listItem.addEventListener("click", function (e) {
  //         e.stopPropagation();
  //         const text = e.target.textContent;
  //         dropArrow.classList.remove("rotate");
  //         dropDownBtn.innerText = this.innerText;
  //         selectedCity = this.innerText;
  //         filteredMetro = citiesArr.filter(
  //           (city) => city.city == this.innerText && city.metro
  //         );
  //         if (filteredMetro.length > 0) {
  //           console.log(filteredMetro);
  //           updateMetroDropdown();
  //           metroDropdownBtn.classList.remove("empty");
  //         } else {
  //           metroDropdownBtn.classList.add("empty");
  //         }
  //         // fillMetro();
  //         // fillNisangah();
  //         // fillRayon();
  //         // fillQesebe();
  //         dropDownBtn.focus();
  //         dropDownInput.value = this.dataset.value;
  //         dropDownListHero.classList.remove("dropdown__list_hero_visible");
  //         dropDownListHero.style.display = "none";
  //         dropOpen = false;
  //       });
  //     });
  //     input.addEventListener("click", (e) => {
  //       e.stopPropagation();
  //     });
  //     input.addEventListener("input", (e) => {
  //       const value = e.target.value;
  //       console.log(e);
  //       const newList = [];
  //       dropDownList.innerText = "";
  //       dropDownListItems.forEach(function (listItem) {
  //         console.log(listItem);
  //         const newItem = listItem.textContent.toLowerCase();
  //         if (newItem.startsWith(value.toLowerCase())) {
  //           newList.push(listItem);
  //         }
  //       });
  //       const h4 = document.createElement("h4");
  //       h4.classList.add("none_text");
  //       h4.textContent = "Nəticə tapılmadi";
  //       dropDownList.append(h4);
  //       if (newList.length) {
  //         newList.map((a) => {
  //           dropDownList.append(a);
  //         });
  //         h4.classList.remove("none_text_visible");
  //       } else {
  //         h4.classList.add("none_text_visible");
  //       }
  //     });
  //   });
  // }

  function fillMetro() {
    let filteredMetro = citiesArr.filter((city) => city.city == selectedCity);

    if (filteredMetro.length > 0) {
      const firstCity = filteredMetro[0];
      if (firstCity.metro && firstCity.metro.length > 0) {
        console.log("true");
        document.querySelector("#metro-btn").style.backgroundColor = "#fff";
      } else {
        document.querySelector("#metro-btn").style.backgroundColor =
          "#f7f5f562";
        return;
      }
    } else {
      console.log("City not found");
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
    }

    const dropDownListMetro = document.querySelector("#metros");
    const dropDownBtn = document.querySelector("#metro-btn");
    dropDownBtn.innerText = "Metro";
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListMetro.append(p);
    if (filteredMetro[0].metro) {
      filteredMetro[0].metro.map((a) => {
        const li = document.createElement("li");
        li.classList.add("dropdown__list-item");
        li.setAttribute("data-value", a);
        li.textContent = a;
        dropDownListMetro.append(li);
      });
    }
    const dropDownListItems = dropDownListMetro.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      const dropDownListMetro = document.getElementById("metros");
      if (dropDownListMetro.childElementCount > 0) {
        dropDownListMetro.classList.toggle("dropdown__list--visible");
      } else {
        dropDownListMetro.classList.remove("dropdown__list--visible");
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });
    document
      .querySelector("#emlak_all_reset_btn")
      .addEventListener("click", () => {
        removeEventButton();
        dropDownBtn.removeEventListener("click", removeEventButton);
      });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
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
        dropDownBtn.innerText = name.length ? name.join(", ") : "Metro";
        if (dropDownBtn.innerText == "Metro") {
          document.querySelector("#Metro-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        document
          .querySelector("#emlak_all_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Metro";
            name = [];
            ifCheck = [];
          });
      });
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Metro";
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#metro-btn").classList.add("empty");
        dropDownListMetro.textContent = "";
      });
    });
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListMetro.classList.remove("dropdown__list--visible");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListMetro.classList.remove("dropdown__list--visible");
      }
    });
    const removeEventButton = () => {
      dropDownBtn.textContent = "Metro";
      document.querySelector("#metro-btn").style.backgroundColor = "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#metro-btn").classList.add("empty");
        dropDownListMetro.textContent = "";
      });
    };
  }

  function fillNisangah() {
    let filteredNisangah = citiesArr.filter(
      (city) => city.city == selectedCity
    );
    if (filteredNisangah.length > 0) {
      const firstCity = filteredNisangah[0];
      if (firstCity.nisangah && firstCity.nisangah.length > 0) {
        console.log("true");
        document.querySelector("#nisangah-btn").style.backgroundColor = "#fff";
      } else {
        document.querySelector("#nisangah-btn").style.backgroundColor =
          "#f7f5f562";
        return;
      }
    } else {
      console.log("City not found");
      document.querySelector("#nisangah-btn").style.backgroundColor =
        "#f7f5f562";
    }

    const dropDownListNisangah = document.querySelector("#nisangahs");
    const dropDownBtn = document.querySelector("#nisangah-btn");
    dropDownBtn.innerText = "Nişangah";
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListNisangah.append(p);
    if (filteredNisangah[0].nisangah) {
      filteredNisangah[0].nisangah.map((a) => {
        const li = document.createElement("li");
        li.classList.add("dropdown__list-item");
        li.setAttribute("data-value", a);
        li.textContent = a;
        dropDownListNisangah.append(li);
      });
    }
    const dropDownListItems = dropDownListNisangah.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      const dropDownListNisangah = document.getElementById("nisangahs");
      if (dropDownListNisangah.childElementCount > 1) {
        dropDownListNisangah.classList.toggle("dropdown__list--visible");
      } else {
        dropDownListNisangah.classList.remove("dropdown__list--visible");
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });
    document
      .querySelector("#emlak_all_reset_btn")
      .addEventListener("click", () => {
        removeEventButton();
        dropDownBtn.removeEventListener("click", removeEventButton);
      });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
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
        dropDownBtn.innerText = name.length ? name.join(", ") : "Nişangah";
        if (dropDownBtn.innerText == "Nişangah") {
          document.querySelector("#nisangah-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        document
          .querySelector("#emlak_all_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Nişangah";
            name = [];
            ifCheck = [];
          });
      });
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Nişangah";
      document.querySelector("#nisangah-btn").style.backgroundColor =
        "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#nisangah-btn").classList.add("empty");
        dropDownListNisangah.textContent = "";
      });
    });
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListNisangah.classList.remove("dropdown__list--visible");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListNisangah.classList.remove("dropdown__list--visible");
      }
    });
    const removeEventButton = () => {
      dropDownBtn.textContent = "Nişangah";
      document.querySelector("#nisangah-btn").style.backgroundColor =
        "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#nisangah-btn").classList.add("empty");
        dropDownListNisangah.textContent = "";
      });
    };
  }
  function fillRayon() {
    let filteredRayon = citiesArr.filter((city) => city.city == selectedCity);
    if (filteredRayon.length > 0) {
      const firstCity = filteredRayon[0];
      if (firstCity.rayon && firstCity.rayon.length > 0) {
        console.log("true");
        document.querySelector("#rayon-btn").style.backgroundColor = "#fff";
      } else {
        document.querySelector("#rayon-btn").style.backgroundColor =
          "#f7f5f562";
        return;
      }
    } else {
      console.log("City not found");
      document.querySelector("#rayon-btn").style.backgroundColor = "#f7f5f562";
    }

    const dropDownListRayon = document.querySelector("#rayons");
    const dropDownBtn = document.querySelector("#rayon-btn");
    dropDownBtn.innerText = "Rayon";
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListRayon.append(p);
    if (filteredRayon[0].rayon) {
      filteredRayon[0].rayon.map((a) => {
        const li = document.createElement("li");
        li.classList.add("dropdown__list-item");
        li.setAttribute("data-value", a);
        li.textContent = a;
        dropDownListRayon.append(li);
      });
    }
    const dropDownListItems = dropDownListRayon.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      const dropDownListRayon = document.getElementById("rayons");
      if (dropDownListRayon.childElementCount > 1) {
        dropDownListRayon.classList.toggle("dropdown__list--visible");
      } else {
        dropDownListRayon.classList.remove("dropdown__list--visible");
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });
    document
      .querySelector("#emlak_all_reset_btn")
      .addEventListener("click", () => {
        removeEventButton();
        dropDownBtn.removeEventListener("click", removeEventButton);
      });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
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
        dropDownBtn.innerText = name.length ? name.join(", ") : "Rayon";
        if (dropDownBtn.innerText == "Rayon") {
          document.querySelector("#rayon-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        document
          .querySelector("#emlak_all_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Rayon";
            name = [];
            ifCheck = [];
          });
      });
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Rayon";
      document.querySelector("#rayon-btn").style.backgroundColor = "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#rayon-btn").classList.add("empty");
        dropDownListRayon.textContent = "";
      });
    });
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListRayon.classList.remove("dropdown__list--visible");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListRayon.classList.remove("dropdown__list--visible");
      }
    });
    const removeEventButton = () => {
      dropDownBtn.textContent = "Rayon";
      document.querySelector("#rayon-btn").style.backgroundColor = "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#rayon-btn").classList.add("empty");
        dropDownListRayon.textContent = "";
      });
    };
  }
  function fillQesebe() {
    let filteredQesebe = citiesArr.filter((city) => city.city == selectedCity);
    if (filteredQesebe.length > 0) {
      const firstCity = filteredQesebe[0];
      if (firstCity.qesebe && firstCity.qesebe.length > 0) {
        console.log("true");

        document.querySelector("#qesebe-btn").style.backgroundColor = "#fff";
      } else {
        document.querySelector("#qesebe-btn").style.backgroundColor =
          "#f7f5f562";
        return;
      }
    } else {
      console.log("City not found");
      document.querySelector("#qesebe-btn").style.backgroundColor = "#f7f5f562";
    }

    const dropDownListQesebe = document.querySelector("#qesebeler");
    const dropDownBtn = document.querySelector("#qesebe-btn");
    dropDownBtn.innerText = "Qəsəbə";
    const p = document.createElement("p");
    p.classList.add("items_reset_btn");
    p.textContent = "Sıfırla";
    const i = document.createElement("i");
    i.classList.add("fa-sharp");
    i.classList.add("fa-solid");
    i.classList.add("fa-xmark");
    p.append(i);
    dropDownListQesebe.append(p);
    if (filteredQesebe[0].qesebe) {
      filteredQesebe[0].qesebe.map((a) => {
        const li = document.createElement("li");
        li.classList.add("dropdown__list-item");
        li.setAttribute("data-value", a);
        li.textContent = a;
        dropDownListQesebe.append(li);
      });
    }
    const dropDownListItems = dropDownListQesebe.querySelectorAll(
      ".dropdown__list-item"
    );
    const dropDownInput = dropDownWrapper.querySelector(
      ".dropdown__input-hidden"
    );
    const dropArrow = dropDownWrapper.querySelector("i");
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener("click", function (e) {
      const dropDownListQesebe = document.getElementById("qesebeler");
      if (dropDownListQesebe.childElementCount > 1) {
        dropDownListQesebe.classList.toggle("dropdown__list--visible");
      } else {
        dropDownListQesebe.classList.remove("dropdown__list--visible");
      }
      this.classList.toggle("dropdown__button--active");
      dropArrow.classList.toggle("rotate");
    });
    document
      .querySelector("#emlak_all_reset_btn")
      .addEventListener("click", () => {
        removeEventButton();
        dropDownBtn.removeEventListener("click", removeEventButton);
      });
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation();
        e.target.classList.toggle("added_model");
        let ifCheck = [];
        dropDownListItems.forEach((a) => {
          let gfgf = a.classList.value;
          let b = gfgf.split(" ");
          if (a.classList.value.split(" ").includes("added_model")) {
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
        dropDownBtn.innerText = name.length ? name.join(", ") : "Qəsəbə";
        if (dropDownBtn.innerText == "Qəsəbə") {
          document.querySelector("#qesebe-btn").style.backgroundColor =
            "#f7f5f562";
        }
        if (dropDownBtn.innerText.length > 20) {
          dropDownBtn.innerText = dropDownBtn.innerText.slice(0, 20) + "...";
        }
        dropDownBtn.focus();
        dropDownInput.value = dropDownInput.value.length
          ? dropDownInput.value + this.dataset.value
          : dropDownInput.value;
        document
          .querySelector("#emlak_all_reset_btn")
          .addEventListener("click", () => {
            dropDownBtn.innerText = "Qəsəbə";
            name = [];
            ifCheck = [];
          });
      });
    });
    p.addEventListener("click", () => {
      dropDownBtn.textContent = "Qəsəbələr";
      document.querySelector("#qesebe-btn").style.backgroundColor = "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#qesebe-btn").classList.add("empty");
        dropDownListQesebe.textContent = "";
      });
    });
    document.addEventListener("click", function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListQesebe.classList.remove("dropdown__list--visible");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab" || e.key === "Escape") {
        dropDownBtn.classList.remove("dropdown__button--active");
        dropDownListQesebe.classList.remove("dropdown__list--visible");
      }
    });
    const removeEventButton = () => {
      dropDownBtn.textContent = "Qəsəbə";
      document.querySelector("#qesebe-btn").style.backgroundColor = "#f7f5f562";
      dropDownListItems.forEach(function (listItem) {
        listItem.classList.remove("added_model");
        document.querySelector("#qesebe-btn").classList.add("empty");
        dropDownListQesebe.textContent = "";
      });
    };
  }
});

document
  .querySelectorAll(".unersal_inputs")
  .forEach(function (universalInputs) {
    const labels = universalInputs.querySelectorAll("label");
    labels.forEach((label) => {
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
          .querySelector(".emlakMobiSearchDropdown_reset")
          .addEventListener("click", () => {
            p.classList.remove("active_p");
            input.value = "";
          });
      });
    });
  });

document.querySelector(".emlakMobiSearchBtn").addEventListener("click", () => {
  document
    .querySelector(".emlakMobiSearchDropdown")
    .classList.add("emlakMobiSearchDropdown_visible");
});
document
  .querySelector(".emlakMobiSearchDropdown_header i")
  .addEventListener("click", () => {
    document
      .querySelector(".emlakMobiSearchDropdown")
      .classList.remove("emlakMobiSearchDropdown_visible");
  });

const alqiSatqi = document.getElementById("emlak_mobi_alqi_input_mean");
const kiraye = document.getElementById("emlak_mobi_kiraye_input_mean");
document.getElementById("emlak_mobi_alqi_input_mean").checked = true;
console.log(document.getElementById("emlak_mobi_alqi_input_mean").checked);
document.querySelector(".month").classList.add("dnone");
document
  .querySelector(".emlak_ipoteka_cixarish_mobi")
  .classList.remove("dnone");
document.querySelector(".floor_check").classList.remove("dnone");
document.querySelector(".floor_floor").classList.remove("dnone");
document.querySelector(".sand_place").classList.add("dnone");
document.querySelector(".emlak_biznes").classList.add("dnone");
document.querySelector(".floor_all").classList.remove("dnone");
document.querySelector(".sand_metr").classList.remove("dnone");

alqiSatqi.addEventListener("change", () => {
  if (alqiSatqi.checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
});
kiraye.addEventListener("change", () => {
  document.querySelector(".month").classList.remove("dnone");
  document.querySelector(".emlak_ipoteka_cixarish_mobi").classList.add("dnone");
});

const checksHome = document.getElementById("checks_home");
const checksNewHome = document.getElementById("checks_Newhome");
const checksOldHome = document.getElementById("checks_Oldhome");
const checksGarden = document.getElementById("checks_garden");
const checksOffice = document.getElementById("checks_ofise");
const checksQarage = document.getElementById("checks_qaraje");
const checksLand = document.getElementById("checks_land");
const checksObject = document.getElementById("checks_object");

checksHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksNewHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksOldHome.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksGarden.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.remove("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksOffice.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.remove("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.querySelector(".emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksQarage.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.add("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksLand.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.remove("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.add("dnone");
  document.querySelector(".sand_metr").classList.add("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});
checksObject.addEventListener("change", () => {
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.add("dnone");
  document.querySelector(".floor_floor").classList.add("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.getElementById("emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
});

const additional = [
  "1ci olmasın",
  "Ən üst olmasın",
  "Yalnız ən üst",
  "İpoteka var",
  "Çıxarış var",
  "Barter var",
];
const additionalChekings = document.querySelector(".additional_chekings_emlak");
additional.map((a, i) => {
  const div = document.createElement("div");
  div.classList.add("additional_chekings_item");
  const label = document.createElement("label");
  label.textContent = a;
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", `additional_chekings_input${i}`);
  label.setAttribute("for", `additional_chekings_input${i}`);
  div.append(input);
  div.append(label);
  additionalChekings.append(div);
});

const emlakResetBtn = document.querySelector(".emlakMobiSearchDropdown_reset");

emlakResetBtn.addEventListener("click", () => {
  const alqiSatqi = document.getElementById("emlak_mobi_alqi_input_mean");
  const kiraye = document.getElementById("emlak_mobi_kiraye_input_mean");
  alqiSatqi.checked = true;
  kiraye.checked = false;
  document.querySelector(".month").classList.add("dnone");
  document
    .querySelector(".emlak_ipoteka_cixarish_mobi")
    .classList.remove("dnone");

  const checksHome = document.getElementById("checks_home");
  const checksNewHome = document.getElementById("checks_Newhome");
  const checksOldHome = document.getElementById("checks_Oldhome");
  const checksGarden = document.getElementById("checks_garden");
  const checksOffice = document.getElementById("checks_ofise");
  const checksQarage = document.getElementById("checks_qaraje");
  const checksLand = document.getElementById("checks_land");
  const checksObject = document.getElementById("checks_object");
  checksHome.checked = true;
  checksNewHome.checked = false;
  checksOldHome.checked = false;
  checksGarden.checked = false;
  checksOffice.checked = false;
  checksQarage.checked = false;
  checksLand.checked = false;
  checksObject.checked = false;
  document.querySelector(".sand_place").classList.add("dnone");
  document.querySelector(".emlak_biznes").classList.add("dnone");
  document.querySelector(".floor_check").classList.remove("dnone");
  document.querySelector(".floor_all").classList.remove("dnone");
  document.querySelector(".sand_metr").classList.remove("dnone");
  document.querySelector(".floor_floor").classList.remove("dnone");
  if (document.getElementById("emlak_mobi_alqi_input_mean").checked) {
    document.querySelector(".month").classList.add("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.remove("dnone");
  }
  if (document.querySelector(".emlak_ipoteka_cixarish_mobi").checked) {
    document.querySelector(".month").classList.remove("dnone");
    document
      .querySelector(".emlak_ipoteka_cixarish_mobi")
      .classList.add("dnone");
  }
  document.getElementById("checks_1").checked = false;
  document.getElementById("checks_2").checked = false;
  document.getElementById("checks_3").checked = false;
  document.getElementById("checks_4").checked = false;
  document.getElementById("checks_5").checked = false;
  document.getElementById("emlak_cixarish3").checked = false;
  document.getElementById("emlak_ipoteka4").checked = false;
  document.getElementById("emlak_cixarish5").checked = false;
  document.getElementById("emlak_ipoteka5").checked = false;
  const emlakFloorNotOneInput1 = document.querySelector(
    "#emlak_floor_not_one_input1"
  );
  const emlakFloorNotOneInput2 = document.querySelector(
    "#emlak_floor_not_one_input2"
  );
  const emlakFloorNotOneInput3 = document.querySelector(
    "#emlak_floor_not_one_input3"
  );
  emlakFloorNotOneInput1.checked = false;
  emlakFloorNotOneInput2.checked = false;
  emlakFloorNotOneInput3.checked = false;
});
document.getElementById("emlak_mobi_alqi_input").checked = true;
document.getElementById("emlak_mobi_kiraye_input").checked = false;

const emlakAllResetBtn = document.getElementById("emlak_all_reset_btn");

emlakAllResetBtn.addEventListener("click", () => {
  const additionalCheckings = document.querySelectorAll(
    ".additional_chekings_emlak div"
  );
  additionalCheckings.forEach((item) => {
    item.querySelector("input").checked = false;
  });
  roomArr = [];
  document.querySelectorAll("#emlakRoom").forEach(function (room) {
    room
      .querySelectorAll('.emlak_room_dropdown input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.style.backgroundColor = "";
        checkbox.style.color = "";
        checkbox.parentNode.classList.remove("checked");
      });
    room
      .querySelectorAll('.mobile_emlak_room input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.checked = false;
        checkbox.style.backgroundColor = "";
        checkbox.style.color = "";
        checkbox.parentNode.classList.remove("checked");
      });
  });
  document.getElementById("emlakBuy").querySelector("button").textContent =
    "Alış";
  document.getElementById("emlakHouse").querySelector("button").textContent =
    "Yeni tikili";
  document.getElementById("checkedEmlakRoom").textContent = "Otaq sayı";
  document
    .getElementById("emlakRoom")
    .querySelectorAll("input")
    .forEach((input) => {
      input.checked = false;
    });
  document
    .querySelectorAll(".unersal_inputs")
    .forEach(function (universalInputs) {
      const labels = universalInputs.querySelectorAll("label");
      labels.forEach((label) => {
        const input = label.querySelector("input");
        const p = label.querySelector("p");
        p.classList.remove("active_p");
        input.value = "";
      });
    });
  document.getElementById("hamisi_input").checked = true;
  document.getElementById("temirli_input").checked = false;
  document.getElementById("temirsiz_input").checked = false;
  document.getElementById("emlak_city").querySelector("button").textContent =
    "Şəhər";
  document.getElementById("emlak_metro").querySelector("button").textContent =
    "Metro";
});

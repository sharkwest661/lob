"use strict";

$(document).ready(function () {
  $(".time").datetimepicker({
    format: "HH:mm",
    defaultDate: moment(),
    allowInputToggle: true,
  });

  $(".modal").on("show.bs.modal", function () {
    $(".modal").not(this).modal("hide");
  });

  // header

  $(".navbar-collapse")
    .on("shown.bs.collapse", function () {
      $("body, html").addClass("noscroll");
      $(".header__btn").addClass("show");
      $(".navbar-toggler").addClass("active");
      $(".navbar-brand").hide();
    })
    .on("hide.bs.collapse", function () {
      $("body, html").removeClass("noscroll");
      $(".header__btn").removeClass("show");
      $(".navbar-toggler").removeClass("active");
      $(".navbar-brand").show();
    });

  var $headerTopbar = $(".header__topbar")
    .clone()
    .addClass("header__topbar--mob");
  if (window.innerWidth < 768) {
    $(".navbar-collapse").append($headerTopbar);
  }

  // selectpicker

  $(".selectpicker").each(function () {
    var $select = $(this);
    var $btn = $select.next();

    if ($select.val().length > 0) {
      $btn.removeClass("bs-placeholder");
    }

    $select.on("changed.bs.select", function () {
      $btn = $select.next();
      $btn.removeClass("bs-placeholder");
    });
  });

  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
  //     $('.selectpicker').selectpicker('mobile');
  // }

  // tooltips
  

  $('[data-toggle="tooltip"]').tooltip();
  $(".promotion__item").tooltip({
    template:
      '<div class="tooltip tooltip--secondary" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    html: true,
    title: function title() {
      return $(this).find(".promotion__tooltip").html();
    },
  });

  // textarea symbols count

  if ($(".textarea-group .form-textarea").length > 0) {
    $(".textarea-group .form-textarea").each(function () {
      var $this = $(this),
        $parentEl = $this.closest(".textarea-group"),
        $counter = $parentEl.find(".textarea-counter span");

      var typedText = $this.val(),
        textLen = typedText.length,
        maxLen = $this.attr("maxlength"),
        remainingLen = maxLen - textLen;

      if (textLen > 0) {
        $counter.text(textLen + " / " + maxLen);
      } else {
        $counter.text(0 + " / " + maxLen);
      }

      $this.keyup(function () {
        typedText = $(this).val();
        textLen = typedText.length;

        if (remainingLen <= 0) {
          $this.val(typedText.substr(0, maxLen));
          remainingLen = 0;
          textLen = maxLen;
        }
        if ($counter.length) {
          $counter.text(textLen + " / " + maxLen);
        }
      });
    });
  }

  // add post to favorites

  $(document).on("click", ".post__favorites", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  // post check

  if ($(".post__item .custom-checkbox").length > 0) {
    var $postItem = $(".post__item");

    $postItem.each(function () {
      var $this = $(this),
        $checkbox = $this.find(".custom-checkbox input");

      if ($checkbox.is(":checked")) {
        $this.addClass("post__item--checked");
      }

      $checkbox.change(function () {
        if (this.checked) {
          $this.addClass("post__item--checked");
        } else {
          $this.removeClass("post__item--checked");
        }
      });
    });
  }

  // filter

  $(".filter__section").each(function () {
    var $this = $(this),
      $checkbox = $this.find(".custom-checkbox"),
      $showMore = $this.find(".filter__showMore");

    if ($checkbox.length > 5) {
      $showMore.removeClass("d-none");

      for (var i = 5; i < $checkbox.length; i++) {
        $checkbox.eq(i).hide();
      }
    }

    $showMore.on("click", function (e) {
      e.preventDefault();
      $checkbox.show();
      $showMore.addClass("d-none");
    });
  });

  // hide categories (on mobile)

  var categoriesFunc;
  (categoriesFunc = function categoriesFunc() {
    if ($(".category").length > 0) {
      var $category = $(".category"),
        $categoryItem = $category.find(".category__item"),
        $categoryBtn = $category.find(".category__btn");

      if (window.innerWidth < 768) {
        if ($categoryItem.length > 4) {
          $categoryBtn.removeClass("d-none");

          for (var i = 4; i < $categoryItem.length; i++) {
            $categoryItem.eq(i).addClass("d-none");
          }

          $categoryBtn.on("click", function (e) {
            e.preventDefault();
            $categoryItem.removeClass("d-none");
            $categoryBtn.addClass("d-none");
          });
        }
      } else {
        $categoryItem.removeClass("d-none");
        $categoryBtn.addClass("d-none");
      }
    }
  })();

  // review form toggle

  if ($(".review").length > 0) {
    var $review = $(".review"),
      $reviewForm = $review.find(".review__form"),
      $reviewBtn = $review.find(".review__btn");

    $reviewBtn.on("click", function (e) {
      e.preventDefault();

      $reviewForm.show();
      $reviewBtn.hide();
    });
  }

  // product carousel

  $("#lightSlider").lightSlider({
    item: 1,
    gallery: true,
    loop: false,
    auto: true,
    speed: 700, //ms'
    pause: 3000,
    pauseOnHover: true,
    thumbItem: 10,
    thumbMargin: 8,
    controls: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          thumbItem: 20,
        },
      },
    ],
  });

  var zoomFunc;
  (zoomFunc = function zoomFunc() {
    var $zoomImg = $(".zoomImg");
    $zoomImg.each(function (index) {
      var _this = $(this);

      var _src = _this.attr("src");

      _this.attr("data-full", _src);
      _this.attr("data-thumb", _src);

      if (window.innerWidth > 767) {
        var $zoomResult = document.createElement("div");
        $zoomResult.setAttribute("class", "zoomResult");
        document.body.append($zoomResult);

        var $productCarousel = $(".product__carousel"),
          _pos = $productCarousel.offset(),
          _width = $productCarousel.width(),
          _rightPos = _pos.left + _width + 60;

        $(".zoomResult").css({
          top: _pos.top,
          left: _rightPos,
          width: _width,
          height: _width,
        });

        enlargeImage(this, $zoomResult);
      }
    });
  })();

  // product promotion settings (mobile)

  if ($(".product").length > 0) {
    var $pSettings = $(".promotion__settings")
      .clone()
      .addClass("promotion__settings--mob");
    if (window.innerWidth < 768) {
      $(".product__info").append($pSettings);
    }
  }

  // add product to favorites

  $.fn.extend({
    toggleText: function toggleText(a, b) {
      return this.text(this.text() == b ? a : b);
    },
  });

  if ($(".product .product__favorite").length > 0) {
    $(".product .product__favorite").each(function () {
      var $this = $(this),
        _defaultTitle = $this.text(),
        _newTitle = $this.data("title");

      $this.on("click", function (e) {
        e.preventDefault();

        $this.toggleClass("active");

        $this.toggleText(_defaultTitle, _newTitle);
      });
    });
  }

  // file upload

  var $fileInput = $(".file__input"),
    $fileIcon = $(".file__icon"),
    $fileList = $(".file__list:not(.file__list--secondary)");

  var fileSort;
  (fileSort = function fileSort() {
    var $fileItems = $(".file__list .file__item");

    if ($fileItems.length > 1) {
      $fileItems.addClass("file__item--sortable");
      $(".file__list").sortable({
        items: ".file__item:not(.ui-state-disabled)",
        connectWith: "#sortable1",
        tolerance: "pointer",
        placeholder: "file__placeholder",
        start: function start(e, ui) {
          ui.placeholder.height(ui.item.children().height());
        },
      });
    } else {
      $fileItems.removeClass("file__item--sortable");
    }
  })();

  function filePreview(input) {
    if (input.files) {
      var filesAmount = input.files.length;

      for (var i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = function (event) {
          $(".file__list").append(
            '<div class="file__item ui-state-default"><img src="' +
              event.target.result +
              '" alt=""><a href="" class="file__delete"></a></div>'
          );
        };

        reader.readAsDataURL(input.files[i]);
      }
    }
  }

  $fileInput.on("change", function () {
    $fileIcon.hide();
    $fileList.removeClass("d-none");

    filePreview(this);

    setTimeout(function () {
      fileSort();
    }, 100);
  });

  $(document).on("click", ".file__delete", function (e) {
    e.preventDefault();
    $(this).closest(".file__item").remove();

    setTimeout(function () {
      fileSort();
    }, 100);

    if ($(".file__item").length == 0) {
      $fileIcon.show();
      $fileList.addClass("d-none");
    }
  });

  $(".form-material input, .form-material textarea").each(function () {
    let $this = $(this),
      $formGroup = $this.closest(".form-material");

    if ($this.val() != "") {
      $formGroup.addClass("active");
    }

    $this.focus(function () {
      $formGroup.addClass("active");
    });
    $this.blur(function () {
      if ($this.val() == "") {
        $formGroup.removeClass("active");
      }
    });
  });
  $(".form-material select").on("change", function () {
    $(this).closest(".form-material").addClass("active");
  });
  $(document).on("click", ".customFilter__more", function (e) {
    e.preventDefault();
    $(".customFilter__collapse").toggleClass("active");
    $(this).toggleClass("active");
  });

  $("#cities-select").on(
    "show.bs.select",
    function (e, clickedIndex, isSelected, previousValue) {
      $("#cities-selectBox").show();
      $(this).selectpicker("toggle");
    }
  );
  $(document).on("click", ".selectBox__close", function (e) {
    e.preventDefault();
    $(".selectBox").hide();
  });

  // $(document).on("click", "#brands-select", function (e) {
  //   e.preventDefault();
  //   $("#brands-selectBox").show();
  // });
  $(document).on("click", "#afterMark", function (e) {
    e.preventDefault();
    $("#brands-selectBox").show();
  });
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

  window.onresize = function () {
    categoriesFunc();
    zoomFunc();

    var t = w.innerWidth || e.clientWidth || g.clientWidth;
    if (t !== x) {
    }
  };
});


// if ($('.typed').length > 0) {

//   var typed4 = new Typed('.typed', {
//       strings: ["bolbol axtar", 'iPhone 12', 'PÉ™rdÉ™', 'MaÅŸÄ±n tÉ™kÉ™ri', 'Xiaomi Mi9T', 'RÉ™qs dÉ™rslÉ™ri', 'vÉ™ sairÉ™...'],
//       typeSpeed: 40,
//       backSpeed: 20,
//       attr: 'placeholder',
//       bindInputFocusEvents: true,
//       loop: true
//   });
// }
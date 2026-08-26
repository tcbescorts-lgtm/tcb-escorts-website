/* =========================================================================
   TCB ESCORTS LLC — Site Scripts
   Handles: mobile nav, FAQ accordion, quote/careers form submission
   (Web3Forms), pickup-location prefill, back-to-top, active nav link.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Mobile navigation ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  var scrim = document.querySelector(".nav-scrim");

  function closeNav() {
    if (nav) nav.classList.remove("open");
    if (scrim) scrim.classList.remove("open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  function openNav() {
    if (nav) nav.classList.add("open");
    if (scrim) scrim.classList.add("open");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.contains("open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });
  }

  if (scrim) {
    scrim.addEventListener("click", closeNav);
  }

  document.querySelectorAll(".main-nav a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  /* ---------------- Back to top button ---------------- */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------------- FAQ accordion ---------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var question = item.querySelector(".faq-q");
    var answer = item.querySelector(".faq-a");
    if (!question || !answer) return;

    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".faq-a").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        answer.style.maxHeight = null;
      } else {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  /* ---------------- Forms (Web3Forms — no backend required) ----------------
     Setup: create a free access key at https://web3forms.com (just enter
     your email, no account/password needed) and paste it into the hidden
     "access_key" input on each form below, replacing the placeholder.
  ------------------------------------------------------------------------- */
  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var statusEl = form.querySelector(".form-status");
      var submitBtn = form.querySelector('button[type="submit"]');
      var accessKeyInput = form.querySelector('input[name="access_key"]');

      function showStatus(type, message) {
        if (!statusEl) return;
        statusEl.textContent = message;
        statusEl.className = "form-status show " + type;
      }

      if (!accessKeyInput || !accessKeyInput.value || accessKeyInput.value.indexOf("YOUR_") === 0) {
        showStatus(
          "error",
          "Form is not fully configured yet. Add your free Web3Forms access key in js/script.js setup (see comments) — until then, please call (601) 633-9096 or email admin@tcbescorts.com."
        );
        return;
      }

      var formData = new FormData(form);

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          if (data.success) {
            form.reset();
            showStatus("success", "Thank you. Your request has been sent — our dispatch team will follow up shortly.");
          } else {
            showStatus("error", "Something went wrong sending your request. Please call (601) 633-9096 or email admin@tcbescorts.com.");
          }
        })
        .catch(function () {
          showStatus("error", "Something went wrong sending your request. Please call (601) 633-9096 or email admin@tcbescorts.com.");
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            var i18nKey = submitBtn.getAttribute("data-i18n");
            var translated = i18nKey && window.TCB_I18N ? window.TCB_I18N.translate(i18nKey) : null;
            submitBtn.textContent = translated || submitBtn.getAttribute("data-label") || "Submit Request";
          }
        });
    });
  });

  /* ---------------- Pickup location prefill (Coverage Map -> Quote form) ----------------
     service-area.html links each state to contact.html?pickup=STATE#quote. On load here,
     we fill the Pickup Location field, show a brief confirmation, and highlight the field.
     The page already scrolls to #quote via CSS scroll-behavior: smooth.
  ------------------------------------------------------------------------- */
  var pickupParam = new URLSearchParams(window.location.search).get("pickup");
  if (pickupParam) {
    var pickupField = document.getElementById("q-pickup");
    var pickupBanner = document.getElementById("pickup-confirm");
    if (pickupField) {
      pickupField.value = pickupParam;
      pickupField.classList.add("field-highlight");
      setTimeout(function () {
        pickupField.classList.remove("field-highlight");
      }, 2500);
    }
    if (pickupBanner) {
      pickupBanner.textContent =
        "Pickup location set to " + pickupParam + ". Complete the form below to request your quote.";
      pickupBanner.hidden = false;
    }
  }

  /* ---------------- Set active nav link ---------------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  /* ---------------- Current year in footer ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------------- Hero background photo/video loader ----------------
     The hero ships with a dark gradient + line-texture background (see
     .hero-media in style.css) so it looks intentional on its own. Drop a
     hero-bg.mp4 (muted/looped, no audio needed) and/or hero-bg.jpg into the
     project root and this fades the real media in automatically — no code
     changes required. Video is preferred over the still photo when both
     are present; if neither exists, the gradient stays exactly as-is.
  ------------------------------------------------------------------------- */
  var heroMedia = document.getElementById("hero-media");
  if (heroMedia) {
    var heroVideo = document.getElementById("hero-bg-video");
    var heroImg = document.getElementById("hero-bg-img");

    function tryHeroVideo() {
      if (!heroVideo) return;
      var source = document.createElement("source");
      source.src = "hero-bg.mp4";
      source.type = "video/mp4";
      var settled = false;
      function onReady() {
        if (settled) return;
        settled = true;
        heroVideo.classList.add("is-visible");
        heroVideo.play().catch(function () {
          /* Autoplay can be blocked in rare cases; the gradient remains a
             perfectly good background if playback doesn't start. */
        });
      }
      function onFail() {
        if (settled) return;
        settled = true;
        heroVideo.remove();
      }
      heroVideo.addEventListener("loadeddata", onReady, { once: true });
      heroVideo.addEventListener("error", onFail, { once: true });
      source.addEventListener("error", onFail, { once: true });
      heroVideo.appendChild(source);
      heroVideo.load();
    }

    function tryHeroImage() {
      if (!heroImg) return;
      heroImg.addEventListener(
        "load",
        function () {
          heroImg.classList.add("is-visible");
        },
        { once: true }
      );
      heroImg.addEventListener(
        "error",
        function () {
          heroImg.remove();
        },
        { once: true }
      );
      heroImg.src = "hero-bg.jpg";
      if (heroImg.complete && heroImg.naturalWidth > 0) {
        heroImg.classList.add("is-visible");
      }
    }

    tryHeroVideo();
    tryHeroImage();
  }

  /* ---------------- Trusted Partners — logo loader ----------------
     The section starts [hidden]. Each real logo file that loads keeps its
     tile (and its duplicate, for the seamless loop); any that 404 are
     removed. If zero real logos exist yet, the whole section is removed —
     nothing fake or broken ever shows. Drop partner-1.png..partner-8.png
     into the project root to activate it.
  ------------------------------------------------------------------------- */
  var partnersSection = document.getElementById("partners");
  if (partnersSection) {
    var primaryTiles = Array.prototype.slice.call(
      partnersSection.querySelectorAll(".partner-logo:not([aria-hidden])")
    );
    var total = primaryTiles.length;
    var settled = 0;
    var loadedCount = 0;

    function settleOne() {
      settled++;
      if (settled === total) {
        if (loadedCount > 0) {
          partnersSection.hidden = false;
        } else {
          partnersSection.remove();
        }
      }
    }

    if (total === 0) {
      partnersSection.remove();
    } else {
      primaryTiles.forEach(function (tile) {
        var img = tile.querySelector("img");
        if (!img) {
          settleOne();
          return;
        }
        var src = img.getAttribute("src");

        function onOk() {
          loadedCount++;
          settleOne();
        }

        function onFail() {
          tile.remove();
          var dup = partnersSection.querySelector('.partner-logo[aria-hidden] img[src="' + src + '"]');
          if (dup && dup.closest(".partner-logo")) {
            dup.closest(".partner-logo").remove();
          }
          settleOne();
        }

        img.addEventListener("load", onOk, { once: true });
        img.addEventListener("error", onFail, { once: true });

        if (img.complete) {
          if (img.naturalWidth === 0) {
            onFail();
          } else {
            onOk();
          }
        }
      });
    }
  }

  /* ---------------- Certifications carousel ---------------- */
  var certTrack = document.getElementById("cert-track");
  if (certTrack) {
    var certDotsWrap = document.getElementById("cert-dots");
    var certPrev = document.getElementById("cert-prev");
    var certNext = document.getElementById("cert-next");
    var slides = Array.prototype.slice.call(certTrack.children);

    slides.forEach(function (slide, i) {
      var dot = document.createElement("button");
      dot.className = "cert-dot" + (i === 0 ? " active" : "");
      dot.setAttribute("aria-label", "Go to slide " + (i + 1));
      dot.addEventListener("click", function () {
        slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      });
      if (certDotsWrap) certDotsWrap.appendChild(dot);
    });

    var certDots = certDotsWrap ? Array.prototype.slice.call(certDotsWrap.children) : [];

    function scrollStep(dir) {
      var slide = slides[0];
      if (!slide) return;
      var style = window.getComputedStyle(certTrack);
      var gap = parseFloat(style.columnGap || style.gap || "16") || 16;
      var amount = slide.getBoundingClientRect().width + gap;
      certTrack.scrollBy({ left: dir * amount, behavior: "smooth" });
    }

    if (certPrev) certPrev.addEventListener("click", function () { scrollStep(-1); });
    if (certNext) certNext.addEventListener("click", function () { scrollStep(1); });

    var scrollTimer;
    certTrack.addEventListener("scroll", function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function () {
        var style = window.getComputedStyle(certTrack);
        var gap = parseFloat(style.columnGap || style.gap || "16") || 16;
        var slideWidth = slides[0].getBoundingClientRect().width + gap;
        var index = Math.round(certTrack.scrollLeft / slideWidth);
        certDots.forEach(function (d, i) {
          d.classList.toggle("active", i === index);
        });
      }, 100);
    });
  }
});

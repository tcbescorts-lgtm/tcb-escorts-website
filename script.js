/* =========================================================================
   TCB ESCORTS LLC - Site Scripts
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

  /* ---------------- Forms (Web3Forms - no backend required) ----------------
     The access key is a public identifier stored in each form's hidden
     "access_key" input (contact.html and careers.html).
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
        showStatus("error", "This form is temporarily unavailable. Please call dispatch at (601) 633-9096 or email admin@tcbescorts.com.");
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
            document.dispatchEvent(new CustomEvent("tcb:form-success", { detail: { form: form.getAttribute("data-form") } }));
            form.reset();
            showStatus("success", "Thank you. Your request has been sent. Our dispatch team will follow up shortly.");
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

  /* ---------------- Prefill quote form from links (Coverage Map / Service cards) ----------------
     service-area.html links each state to contact.html?pickup=STATE#quote, and the homepage
     service cards link to contact.html?position=NAME#quote. On load here, we fill whichever
     field(s) are present, show a confirmation, and highlight the field(s). The page already
     scrolls to #quote via CSS scroll-behavior: smooth.
  ------------------------------------------------------------------------- */
  var quoteParams = new URLSearchParams(window.location.search);
  var pickupParam = quoteParams.get("pickup");
  var positionParam = quoteParams.get("position");
  var pickupField = document.getElementById("q-pickup");
  var positionField = document.getElementById("q-position");
  var pickupBanner = document.getElementById("pickup-confirm");
  var confirmMessages = [];

  function highlightField(field) {
    field.classList.add("field-highlight");
    setTimeout(function () {
      field.classList.remove("field-highlight");
    }, 2500);
  }

  if (pickupParam && pickupField) {
    pickupField.value = pickupParam;
    highlightField(pickupField);
    confirmMessages.push("pickup location set to " + pickupParam);
  }

  if (positionParam && positionField) {
    var positionMatches = Array.prototype.some.call(positionField.options, function (opt) {
      return opt.value === positionParam;
    });
    if (positionMatches) {
      positionField.value = positionParam;
      highlightField(positionField);
      confirmMessages.push("escort position set to " + positionParam);
    }
  }

  if (confirmMessages.length && pickupBanner) {
    pickupBanner.textContent =
      "We've " + confirmMessages.join(" and ") + ". Complete the form below to request your quote.";
    pickupBanner.hidden = false;
  }

  /* ---------------- Set active nav link ---------------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html") || (href === "resources.html" && currentPage.indexOf("blog-") === 0)) {
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
     project root and this fades the real media in automatically - no code
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

  /* ---------------- Service cards -> booking prefill ----------------
     Each service card's "Book This Service" link already points to
     contact.html?position=NAME#quote (handled above on that page). Making
     the whole card clickable (not just the link) gives a larger, easier
     tap target, especially on mobile, while the link itself remains the
     single source of truth for the destination URL. ---------------------- */
  document.querySelectorAll(".service-card").forEach(function (card) {
    var link = card.querySelector('a.card-link[href*="position="]');
    if (!link) return;
    card.classList.add("service-card-clickable");
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      window.location.href = link.getAttribute("href");
    });
  });
});

/* Mobile action bar: Call / Text / Quote, shown on small screens only */
(function () {
  if (document.querySelector(".mobile-bar")) return;
  var pre = "";
  var bar = document.createElement("div");
  bar.className = "mobile-bar";
  bar.innerHTML =
    '<a class="mobile-bar-call" href="tel:+16016339096">Call Dispatch</a>' +
    '<a class="mobile-bar-text" href="sms:6016339096?body=Hi%2C%20TCB%20Escorts%20can%20you%20tell%20me%20more%20about%20this%3F">Text Us</a>' +
    '<a class="mobile-bar-quote" href="' + pre + 'contact.html#quote">Get a Quote</a>';
  document.body.appendChild(bar);
})();

/* Adaptive header: white while over dark areas (hero, dark bands, footer);
   turns gray with white text while over white/light sections. */
(function () {
  var header = document.querySelector(".site-header");
  if (!header || !document.elementFromPoint) return;
  var ticking = false;

  function isLightColor(bg) {
    var m = bg.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    var p = m[1].split(",").map(function (v) { return parseFloat(v); });
    var a = p.length > 3 ? p[3] : 1;
    if (a < 0.5) return null; // transparent: keep climbing
    var lum = (0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) / 255;
    return lum > 0.6;
  }

  function update() {
    ticking = false;
    var y = Math.min(window.innerHeight - 1, Math.round(header.getBoundingClientRect().bottom) + 2);
    var el = document.elementFromPoint(Math.round(window.innerWidth / 2), y);
    var light = true;
    while (el && el !== document.documentElement) {
      if (el.classList && (el.classList.contains("hero") || el.classList.contains("hero-media"))) { light = false; break; }
      var r = isLightColor(getComputedStyle(el).backgroundColor);
      if (r !== null) { light = r; break; }
      el = el.parentElement;
    }
    header.classList.toggle("is-gray", light && window.scrollY > 4);
  }

  function request() {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", request);
  window.addEventListener("load", update);
  update();
})();

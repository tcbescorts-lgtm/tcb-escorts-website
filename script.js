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
            submitBtn.textContent = submitBtn.getAttribute("data-label") || "Submit Request";
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
});

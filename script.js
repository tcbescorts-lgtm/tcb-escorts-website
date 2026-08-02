/* =========================================================================
   TCB ESCORTS LLC — Site Scripts
   Handles: mobile nav, header shadow, FAQ accordion, animated counters,
   quote/contact form submission (Web3Forms), back-to-top button.
   ========================================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------------- Fleet gallery fallback ----------------
     Each .fleet-item holds an <img> pointed at fleet-1.jpg, fleet-2.jpg, etc.
     Until those files are added to the project, this swaps in a friendly
     "add photo" placeholder instead of a broken-image icon.
  ------------------------------------------------------------------------- */
  document.querySelectorAll(".fleet-item img").forEach(function (img) {
    img.addEventListener("error", function () {
      var item = img.closest(".fleet-item");
      if (item) item.classList.add("is-empty");
    });
  });

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

  /* ---------------- Animated stat counters ---------------- */
  var counters = document.querySelectorAll("[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    counters.forEach(function (el) {
      observer.observe(el);
    });
  }

  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var duration = 1200;
    var start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.textContent = value.toLocaleString() + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }
    window.requestAnimationFrame(step);
  }

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

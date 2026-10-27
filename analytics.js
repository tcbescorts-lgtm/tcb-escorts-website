/* TCB Escorts: consent-gated Google Analytics 4 (single install point).
   - Google Analytics only loads after the visitor clicks Accept.
   - A browser Global Privacy Control signal is treated as Decline.
   - The Measurement ID is a public identifier (it is visible in any site's
     page source) and is not a secret. */
(function () {
  var MEASUREMENT_ID = "G-G45DSEGPS2";
  var KEY = "tcb-analytics-consent"; // "granted" | "denied"
  var pre = "";
  var loaded = false;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadAnalytics() {
    if (loaded) return;
    loaded = true;
    window["ga-disable-" + MEASUREMENT_ID] = false;
    gtag("consent", "default", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    gtag("js", new Date());
    gtag("config", MEASUREMENT_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + MEASUREMENT_ID;
    document.head.appendChild(s);
  }

  function disableAnalytics() {
    window["ga-disable-" + MEASUREMENT_ID] = true;
    if (!loaded) return;
    document.cookie.split(";").forEach(function (c) {
      var n = c.split("=")[0].trim();
      if (n === "_ga" || n.indexOf("_ga_") === 0) {
        document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      }
    });
  }

  function track(name, params) {
    if (loaded && read() === "granted") gtag("event", name, params || {});
  }
  window.tcbTrack = track;

  function hideBanner() {
    var b = document.querySelector(".cookie-notice");
    if (b) b.remove();
  }

  function showBanner() {
    if (document.querySelector(".cookie-notice")) return;
    var b = document.createElement("div");
    b.className = "cookie-notice";
    b.setAttribute("role", "region");
    b.setAttribute("aria-label", "Global Compliance Notice");
    b.innerHTML =
      "<div class=\"cookie-text\"><strong class=\"cookie-title\">Global Compliance Notice</strong>" +
      "<p>We use cookies to analyze traffic and ensure legal compliance with international transport regulations. By continuing, you agree to our <a href=\"" + pre + "privacy.html\">Privacy Policy</a>.</p></div>" +
      "<div class=\"cookie-actions\"><button type=\"button\" class=\"btn btn-primary btn-sm\" data-consent=\"granted\">Continue</button></div>";
    document.body.appendChild(b);
    // "By continuing" = scrolling on or using the page also accepts and closes the notice
    function onContinue() {
      if (!document.body.contains(b)) return cleanup();
      if (window.scrollY > 240) { write("granted"); loadAnalytics(); hideBanner(); cleanup(); }
    }
    function cleanup() { window.removeEventListener("scroll", onContinue); }
    window.addEventListener("scroll", onContinue, { passive: true });
    b.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-consent]");
      if (!btn) return;
      var v = btn.getAttribute("data-consent");
      write(v);
      if (v === "granted") loadAnalytics(); else disableAnalytics();
      hideBanner();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var gpc = navigator.globalPrivacyControl === true;
    var stored = read();
    if (gpc) { disableAnalytics(); }
    else if (stored === "granted") { loadAnalytics(); }
    else if (stored === "denied") { disableAnalytics(); }
    else { showBanner(); }

    // Footer link to change the choice later
    var legal = document.querySelector(".footer-legal-links");
    if (legal && !legal.querySelector("[data-cookie-settings]")) {
      var a = document.createElement("a");
      a.href = "#";
      a.setAttribute("data-cookie-settings", "");
      a.textContent = "Cookie Settings";
      a.addEventListener("click", function (e) { e.preventDefault(); showBanner(); });
      legal.appendChild(document.createTextNode(" · "));
      legal.appendChild(a);
    }
  });

  // Interaction events (sent only when analytics is allowed; one listener per page)
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    var href = a.getAttribute("href") || "";
    if (a.hasAttribute("data-track")) {
      track(a.getAttribute("data-track"), { link_text: (a.textContent || "").trim().slice(0, 60) });
    } else if (href.indexOf("tel:") === 0) {
      track("click_to_call", { phone_number: href.replace("tel:", "") });
    } else if (href.indexOf("sms:") === 0) {
      track("click_to_text", {});
    } else if (href.indexOf("mailto:") === 0) {
      track("click_email", {});
    }
  });
  document.addEventListener("tcb:form-success", function (e) {
    track("generate_lead", { form_name: (e.detail && e.detail.form) || "form" });
  });
})();

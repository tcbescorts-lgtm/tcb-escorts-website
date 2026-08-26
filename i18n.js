/* =========================================================================
   TCB ESCORTS LLC — Language Switcher (English / Español)
   Lightweight, dependency-free i18n: swaps text on elements marked with
   data-i18n (textContent), data-i18n-html (innerHTML — dictionary content
   only, never user input), and data-i18n-placeholder (input placeholder).
   Preference persists across pages via localStorage.
   ========================================================================= */

(function () {
  var DICT = {
    en: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.serviceArea": "Service Area",
      "nav.careers": "Careers",
      "nav.contact": "Contact",
      "cta.getQuote": "Get a Quote",
      "cta.callNow": "Call Now",

      "footer.tagline": "Big Loads. Safe Roads.",
      "footer.desc": "Nationwide Pilot Car &amp; Oversize Load Escort Services.",
      "footer.desc2": "Nationwide Pilot Car &amp; Oversize Load Escort Services",
      "footer.company": "Company",
      "footer.contactHeading": "Contact",
      "footer.rights": "All rights reserved.",

      "hero.eyebrow": "Nationwide &middot; 24/7 Dispatch",
      "hero.h1": "Big Loads.<br />Safe Roads.",
      "hero.tagline": "Professional Pilot Car &amp; Oversize Load Escort Services",
      "hero.lead": "Nationwide coverage &bull; Certified escorts &bull; 24/7 dispatch. TCB Escorts LLC delivers Lead, Chase, High Pole, Steer, and Route Survey escorts for carriers, brokers, and owner-operators across all 50 states.",

      "stats.loads": "Loads Escorted",
      "stats.partners": "Carrier &amp; Broker Partners",
      "stats.states": "States Covered",
      "stats.dispatch": "Nationwide Dispatch",

      "services.tag": "What We Do",
      "services.h2": "Escort Services",
      "services.sub": "We scope every job to your route, permits, and dimensions, from a single steer car to a full multi-vehicle escort package.",
      "service.lead.title": "Lead Escort",
      "service.lead.desc": "Travels ahead of the load to identify hazards, low clearances, and traffic conditions before the truck arrives.",
      "service.chase.title": "Chase Escort",
      "service.chase.desc": "Follows behind the load to manage trailing traffic and protect the rear of the movement.",
      "service.highpole.title": "High Pole Escort",
      "service.highpole.desc": "Equipped with a height pole to detect overhead obstructions ahead of tall loads.",
      "service.steer.title": "Steer Escort",
      "service.steer.desc": "Guides the load through tight turns and congested areas where extra maneuvering support is critical.",
      "service.routesurvey.title": "Route Survey",
      "service.routesurvey.desc": "Pre-trip route analysis to confirm clearances, permits, and turn radii before moving day.",
      "learnMore": "Learn More &rarr;",

      "how.tag": "Process",
      "how.h2": "How It Works",
      "how.step1.title": "Request a Quote",
      "how.step1.desc": "Provide your route, load dimensions, travel date, and escort requirements.",
      "how.step2.title": "We Plan the Escort",
      "how.step2.desc": "Our team reviews the route, requirements, and availability.",
      "how.step3.title": "We Confirm Your Escort",
      "how.step3.desc": "Receive your pricing, escort details, and booking confirmation.",
      "how.step4.title": "We Escort Your Load",
      "how.step4.desc": "Our escort stays coordinated with your team throughout the move.",

      "why.tag": "Why TCB",
      "why.h2": "Why TCB Escorts",
      "why.certified": "Certified Escorts",
      "why.experienced": "Experienced Professionals",
      "why.insured": "Fully Insured",
      "why.nationwide": "Nationwide Coverage",
      "why.dispatch": "24/7 Dispatch",
      "why.communication": "Clear Communication",

      "serve.tag": "Who We Serve",
      "serve.h2": "Built for Carriers, Brokers &amp; Owner-Operators",
      "serve.carriers.title": "Heavy Haul Carriers",
      "serve.carriers.desc": "Reliable escort support for oversized and permitted loads.",
      "serve.brokers.title": "Freight Brokers",
      "serve.brokers.desc": "Fast communication and dependable nationwide coverage.",
      "serve.owners.title": "Owner-Operators",
      "serve.owners.desc": "Straightforward scheduling and professional escort support.",

      "cert.tag": "Compliance",
      "cert.h2": "Certified. Insured. Ready.",
      "cert.sub_html": "Our escorts carry the credentials states and clients ask for. Full details are on our <a href=\"about.html#certifications\" style=\"color:var(--red);\">About page</a>.",
      "cert.state": "State Certifications",
      "cert.nsc": "NSC Defensive Driving",
      "cert.insured": "Fully Insured",

      "partners.tag": "Trusted Partners",
      "partners.h2": "Carriers &amp; Brokers Who Run With Us",

      "coverage.tag": "Coverage",
      "coverage.h2": "Nationwide Coverage",
      "coverage.sub": "TCB Escorts provides pilot car and oversize load escort services across all 50 states, dispatched from our Jackson, Mississippi headquarters.",

      "faq.tag": "FAQ",
      "faq.h2": "Common Questions",
      "faq.q1": "Do you provide escort services nationwide?",
      "faq.a1": "Yes. We dispatch certified pilot car escorts to all 50 states through our own vehicles and a vetted nationwide network.",
      "faq.q2": "How quickly can I book an escort?",
      "faq.a2": "Our network operates 24/7 and short-notice requests are common. Submit a quote request or call dispatch and we'll confirm the fastest available option.",
      "faq.q3": "What information do you need for a quote?",
      "faq.a3": "Pickup and delivery locations, the date, load height/width/length/weight, and which escort positions you need (lead, chase, high pole, and/or steer).",
      "faq.q4": "Do you work with carriers, brokers, and owner-operators?",
      "faq.a4": "Yes. We work with heavy haul carriers, freight brokers, and owner-operators moving oversize and overweight loads.",
      "faq.q5": "Are your escorts certified and insured?",
      "faq.a5": "Yes. Our escorts carry certifications including WITPAC, TWIC, state certifications, NSC Defensive Driving, CPC, and PEVO, and operate under active commercial insurance.",

      "finalcta.tag": "Get Started",
      "finalcta.h2": "Moving an Oversize Load?",
      "finalcta.sub": "Tell us your route, dimensions, and travel date.",

      "page.about.h1": "Big Loads. Safe Roads.",
      "page.about.lead": "TCB Escorts LLC is a certified pilot car escort company based in Jackson, Mississippi, dispatching Lead, Chase, High Pole, Steer, and Route Survey escorts to carriers, brokers, and owner-operators moving oversize and overweight loads nationwide.",
      "page.services.h1": "Pilot Car Escort Services",
      "page.services.lead": "Every oversize or overweight load has different needs. We staff the right combination of Lead, Chase, High Pole, Steer, and Route Survey escorts for your specific dimensions, route, and state requirements.",
      "page.serviceArea.h1": "All 50 States. Every Load.",
      "page.serviceArea.lead": "Headquartered in Jackson, Mississippi, TCB Escorts dispatches certified pilot car escorts coast to coast, with a network built to cover last-minute loads as easily as scheduled ones.",
      "page.careers.h1": "Join the TCB Escorts Network",
      "page.careers.lead": "We're always looking for certified, professional pilot car drivers to join our nationwide network. Consistent loads, straightforward dispatch, and a company that takes safety as seriously as you do.",
      "page.contact.h1": "Get a Quote or Reach Dispatch",
      "page.contact.lead": "Call dispatch or send us your load details below and our team will follow up quickly with availability and pricing.",
      "page.resources.h1": "Resources &amp; Guides",
      "page.resources.lead": "Straight answers on pilot car escorts, oversize load rules, and safety, written for carriers, brokers, and owner-operators. New guides are added regularly; start with our FAQ below in the meantime.",

      "breadcrumb.about": "Home / About",
      "breadcrumb.services": "Home / Services",
      "breadcrumb.serviceArea": "Home / Service Area",
      "breadcrumb.careers": "Home / Careers",
      "breadcrumb.contact": "Home / Contact",
      "breadcrumb.resources": "Home / Resources",

      "form.quote.title": "Request a Quote",
      "form.quote.sub": "Tell us about your load and we'll get back to you with availability and pricing.",
      "form.name": "Name",
      "form.phone": "Phone",
      "form.email": "Email",
      "form.position": "Escort Position(s) Needed",
      "form.dateNeeded": "Date Needed",
      "form.pickup": "Pickup Location",
      "form.delivery": "Delivery Location",
      "form.loadDetails": "Load Details / Message",
      "form.submitRequest": "Submit Request",
      "form.fullName": "Full Name",
      "form.statesCertified": "States Certified In",
      "form.yearsExperience": "Years of Experience",
      "form.positionsCertified": "Positions You're Certified For",
      "form.additionalDetails": "Additional Details",
      "form.submitApplication": "Submit Application"
    },
    es: {
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.about": "Nosotros",
      "nav.serviceArea": "Área de Servicio",
      "nav.careers": "Empleo",
      "nav.contact": "Contacto",
      "cta.getQuote": "Solicitar Cotización",
      "cta.callNow": "Llamar Ahora",

      "footer.tagline": "Cargas Grandes. Caminos Seguros.",
      "footer.desc": "Servicios Nacionales de Escolta para Vehículos Piloto y Cargas Sobredimensionadas.",
      "footer.desc2": "Servicios Nacionales de Escolta para Vehículos Piloto y Cargas Sobredimensionadas",
      "footer.company": "Compañía",
      "footer.contactHeading": "Contacto",
      "footer.rights": "Todos los derechos reservados.",

      "hero.eyebrow": "Cobertura Nacional &middot; Despacho 24/7",
      "hero.h1": "Cargas Grandes.<br />Caminos Seguros.",
      "hero.tagline": "Servicios Profesionales de Vehículo Piloto y Escolta de Cargas Sobredimensionadas",
      "hero.lead": "Cobertura nacional &bull; Escoltas certificados &bull; Despacho 24/7. TCB Escorts LLC ofrece escoltas Lead, Chase, High Pole, Steer y Route Survey para transportistas, corredores y operadores independientes en los 50 estados.",

      "stats.loads": "Cargas Escoltadas",
      "stats.partners": "Transportistas y Corredores Asociados",
      "stats.states": "Estados Cubiertos",
      "stats.dispatch": "Despacho Nacional",

      "services.tag": "Lo Que Hacemos",
      "services.h2": "Servicios de Escolta",
      "services.sub": "Adaptamos cada trabajo a su ruta, permisos y dimensiones, desde un solo vehículo guía hasta un paquete completo de escolta multivehicular.",
      "service.lead.title": "Escolta Delantera (Lead)",
      "service.lead.desc": "Viaja delante de la carga para identificar peligros, alturas limitadas y condiciones de tráfico antes de que llegue el camión.",
      "service.chase.title": "Escolta Trasera (Chase)",
      "service.chase.desc": "Sigue detrás de la carga para controlar el tráfico y proteger la parte trasera del movimiento.",
      "service.highpole.title": "Escolta de Poste Alto",
      "service.highpole.desc": "Equipada con un poste de altura para detectar obstáculos aéreos antes de las cargas altas.",
      "service.steer.title": "Escolta de Maniobra (Steer)",
      "service.steer.desc": "Guía la carga en curvas cerradas y áreas congestionadas donde se necesita apoyo adicional de maniobra.",
      "service.routesurvey.title": "Estudio de Ruta",
      "service.routesurvey.desc": "Análisis previo de la ruta para confirmar alturas, permisos y radios de giro antes del día de la mudanza.",
      "learnMore": "Más Información &rarr;",

      "how.tag": "Proceso",
      "how.h2": "Cómo Funciona",
      "how.step1.title": "Solicite una Cotización",
      "how.step1.desc": "Indique su ruta, las dimensiones de la carga, la fecha de viaje y los requisitos de escolta.",
      "how.step2.title": "Planificamos la Escolta",
      "how.step2.desc": "Nuestro equipo revisa la ruta, los requisitos y la disponibilidad.",
      "how.step3.title": "Confirmamos su Escolta",
      "how.step3.desc": "Reciba su precio, los detalles de la escolta y la confirmación de la reserva.",
      "how.step4.title": "Escoltamos su Carga",
      "how.step4.desc": "Nuestra escolta se mantiene coordinada con su equipo durante todo el trayecto.",

      "why.tag": "Por Qué TCB",
      "why.h2": "Por Qué Elegir TCB Escorts",
      "why.certified": "Escoltas Certificados",
      "why.experienced": "Profesionales Experimentados",
      "why.insured": "Totalmente Asegurados",
      "why.nationwide": "Cobertura Nacional",
      "why.dispatch": "Despacho 24/7",
      "why.communication": "Comunicación Clara",

      "serve.tag": "A Quién Servimos",
      "serve.h2": "Diseñado para Transportistas, Corredores y Operadores Independientes",
      "serve.carriers.title": "Transportistas de Carga Pesada",
      "serve.carriers.desc": "Apoyo confiable de escolta para cargas sobredimensionadas y con permiso.",
      "serve.brokers.title": "Corredores de Carga",
      "serve.brokers.desc": "Comunicación rápida y cobertura nacional confiable.",
      "serve.owners.title": "Operadores Independientes",
      "serve.owners.desc": "Programación sencilla y apoyo de escolta profesional.",

      "cert.tag": "Cumplimiento",
      "cert.h2": "Certificados. Asegurados. Listos.",
      "cert.sub_html": "Nuestros escoltas cuentan con las credenciales que exigen los estados y clientes. Vea todos los detalles en nuestra <a href=\"about.html#certifications\" style=\"color:var(--red);\">página Nosotros</a>.",
      "cert.state": "Certificaciones Estatales",
      "cert.nsc": "Manejo Defensivo NSC",
      "cert.insured": "Totalmente Asegurados",

      "partners.tag": "Socios de Confianza",
      "partners.h2": "Transportistas y Corredores Que Confían en Nosotros",

      "coverage.tag": "Cobertura",
      "coverage.h2": "Cobertura Nacional",
      "coverage.sub": "TCB Escorts brinda servicios de escolta de vehículos piloto y cargas sobredimensionadas en los 50 estados, despachados desde nuestra sede en Jackson, Mississippi.",

      "faq.tag": "Preguntas Frecuentes",
      "faq.h2": "Preguntas Comunes",
      "faq.q1": "¿Ofrecen servicios de escolta a nivel nacional?",
      "faq.a1": "Sí. Despachamos escoltas certificados de vehículo piloto a los 50 estados mediante nuestros propios vehículos y una red nacional verificada.",
      "faq.q2": "¿Qué tan rápido puedo reservar una escolta?",
      "faq.a2": "Nuestra red opera 24/7 y las solicitudes de último momento son comunes. Envíe una solicitud de cotización o llame a despacho y confirmaremos la opción más rápida disponible.",
      "faq.q3": "¿Qué información necesitan para una cotización?",
      "faq.a3": "Los lugares de recogida y entrega, la fecha, la altura/ancho/largo/peso de la carga, y qué posiciones de escolta necesita (delantera, trasera, poste alto y/o maniobra).",
      "faq.q4": "¿Trabajan con transportistas, corredores y operadores independientes?",
      "faq.a4": "Sí. Trabajamos con transportistas de carga pesada, corredores de carga y operadores independientes que mueven cargas sobredimensionadas y con sobrepeso.",
      "faq.q5": "¿Sus escoltas están certificados y asegurados?",
      "faq.a5": "Sí. Nuestros escoltas cuentan con certificaciones como WITPAC, TWIC, certificaciones estatales, Manejo Defensivo NSC, CPC y PEVO, y operan bajo seguro comercial activo.",

      "finalcta.tag": "Comience Ahora",
      "finalcta.h2": "¿Va a Transportar una Carga Sobredimensionada?",
      "finalcta.sub": "Díganos su ruta, dimensiones y fecha de viaje.",

      "page.about.h1": "Cargas Grandes. Caminos Seguros.",
      "page.about.lead": "TCB Escorts LLC es una empresa certificada de escolta de vehículos piloto con sede en Jackson, Mississippi, que despacha escoltas Lead, Chase, High Pole, Steer y Route Survey a transportistas, corredores y operadores independientes que mueven cargas sobredimensionadas a nivel nacional.",
      "page.services.h1": "Servicios de Escolta de Vehículo Piloto",
      "page.services.lead": "Cada carga sobredimensionada o con sobrepeso tiene necesidades diferentes. Asignamos la combinación correcta de escoltas Lead, Chase, High Pole, Steer y Route Survey según sus dimensiones, ruta y los requisitos estatales.",
      "page.serviceArea.h1": "Los 50 Estados. Cada Carga.",
      "page.serviceArea.lead": "Con sede en Jackson, Mississippi, TCB Escorts despacha escoltas certificados de vehículo piloto de costa a costa, con una red diseñada para cubrir tanto cargas de último momento como programadas.",
      "page.careers.h1": "Únase a la Red de TCB Escorts",
      "page.careers.lead": "Siempre buscamos conductores de vehículo piloto certificados y profesionales para unirse a nuestra red nacional. Cargas constantes, despacho sencillo y una empresa que toma la seguridad tan en serio como usted.",
      "page.contact.h1": "Solicite una Cotización o Contacte a Despacho",
      "page.contact.lead": "Llame a despacho o envíenos los detalles de su carga a continuación, y nuestro equipo le responderá pronto con disponibilidad y precios.",
      "page.resources.h1": "Recursos y Guías",
      "page.resources.lead": "Respuestas claras sobre escoltas de vehículo piloto, normas de cargas sobredimensionadas y seguridad, escritas para transportistas, corredores y operadores independientes. Agregamos nuevas guías regularmente; mientras tanto, consulte nuestras Preguntas Frecuentes.",

      "breadcrumb.about": "Inicio / Nosotros",
      "breadcrumb.services": "Inicio / Servicios",
      "breadcrumb.serviceArea": "Inicio / Área de Servicio",
      "breadcrumb.careers": "Inicio / Empleo",
      "breadcrumb.contact": "Inicio / Contacto",
      "breadcrumb.resources": "Inicio / Recursos",

      "form.quote.title": "Solicitar una Cotización",
      "form.quote.sub": "Cuéntenos sobre su carga y le responderemos con disponibilidad y precios.",
      "form.name": "Nombre",
      "form.phone": "Teléfono",
      "form.email": "Correo Electrónico",
      "form.position": "Posición(es) de Escolta Necesaria(s)",
      "form.dateNeeded": "Fecha Necesaria",
      "form.pickup": "Lugar de Recogida",
      "form.delivery": "Lugar de Entrega",
      "form.loadDetails": "Detalles de la Carga / Mensaje",
      "form.submitRequest": "Enviar Solicitud",
      "form.fullName": "Nombre Completo",
      "form.statesCertified": "Estados en los que Está Certificado",
      "form.yearsExperience": "Años de Experiencia",
      "form.positionsCertified": "Posiciones para las que Está Certificado",
      "form.additionalDetails": "Detalles Adicionales",
      "form.submitApplication": "Enviar Solicitud"
    }
  };

  var STORAGE_KEY = "tcb-lang";

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || "en";
    } catch (e) {
      return "en";
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function applyLanguage(lang) {
    var dict = DICT[lang] || DICT.en;
    document.documentElement.setAttribute("lang", lang === "es" ? "es" : "en");

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key].replace(/&amp;/g, "&").replace(/&bull;/g, "•").replace(/&middot;/g, "·").replace(/&rarr;/g, "→");
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    var selects = document.querySelectorAll(".lang-select");
    selects.forEach(function (sel) {
      sel.value = lang;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = getLang();
    applyLanguage(lang);

    document.querySelectorAll(".lang-select").forEach(function (sel) {
      sel.value = lang;
      sel.addEventListener("change", function () {
        setLang(sel.value);
        applyLanguage(sel.value);
      });
    });
  });

  /* Small public helper so other scripts (e.g. form submit-button text
     restore in script.js) can look up a translated string in the
     currently-selected language without duplicating the dictionary. */
  window.TCB_I18N = {
    translate: function (key) {
      var dict = DICT[getLang()] || DICT.en;
      var val = dict[key];
      if (val === undefined) return null;
      return val.replace(/&amp;/g, "&").replace(/&bull;/g, "•").replace(/&middot;/g, "·").replace(/&rarr;/g, "→");
    },
    getLang: getLang
  };
})();

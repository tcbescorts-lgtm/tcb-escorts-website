/* =========================================================================
   TCB ESCORTS LLC - Language Switcher (English / Español)
   Lightweight, dependency-free i18n: swaps text on elements marked with
   data-i18n (textContent), data-i18n-html (innerHTML - dictionary content
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
      "footer.desc": "Pilot Car &amp; Oversize Load Escort Services Across 48 States.",
      "footer.desc2": "Pilot Car &amp; Oversize Load Escort Services Across 48 States",
      "footer.company": "Company",
      "footer.contactHeading": "Contact",
      "footer.rights": "All rights reserved.",

      "hero.eyebrow": "Big Loads. Safe Roads.",
      "hero.h1": "Pilot Car Services<br />Across United States",
      "hero.tagline": "TCB Escorts provides experienced lead, chase, high pole, route survey and steer pilot car services across the United States and escort vehicle support for oversize and overweight loads.",
      "hero.lead": "48-state coverage &bull; Certified escorts &bull; $1 Million insured. TCB Escorts LLC delivers Lead, Chase, High Pole, Steer, and Route Survey escorts for carriers, brokers, and owner-operators across 48 states.",
      "hero.trust.coverage": "Nationwide Coverage",
      "hero.trust.certified": "Certified Escorts",
      "hero.trust.based": "Based in Jackson, Mississippi", "stats.insurance": "Insurance Coverage",

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
      "learnMore": "Book This Service &rarr;",

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
      "why.insured": "$1M Insurance Coverage",
      "why.nationwide": "Nationwide Coverage",
      "why.dispatch": "Dispatch",
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
      "cert.insured": "$1,000,000 Insurance Coverage",

      "partners.tag": "Trusted Partners",
      "partners.h2": "Carriers &amp; Brokers Who Run With Us",

      "coverage.tag": "Coverage",
      "coverage.h2": "Pilot Car Services Across the United States",
      "coverage.sub": "Dispatch arranges lead, chase, high pole and steer coverage along your route in 48 states, using our own vehicles and our established network of drivers. Send us your route and we will confirm coverage for your dates.",

      "faq.tag": "FAQ",
      "faq.h2": "Common Questions",
      "faq.q1": "Do you provide pilot car services in my state?",
      "faq.a1": "Yes. We dispatch certified pilot car escorts to 48 states through our own vehicles and a vetted nationwide network.",
      "faq.q2": "How quickly can I book an escort?",
      "faq.a2": "Short-notice requests are common. Submit a quote request or call dispatch and we'll confirm the fastest available option.",
      "faq.q3": "What information do you need for a quote?",
      "faq.a3": "Pickup and delivery locations, the date, load height/width/length/weight, and which escort positions you need (lead, chase, high pole, and/or steer).",
      "faq.q4": "Do you work with carriers, brokers, and owner-operators?",
      "faq.a4": "Yes. We work with heavy haul carriers, freight brokers, and owner-operators moving oversize and overweight loads.",
      "faq.q5": "Are your escorts certified and insured?",
      "faq.a5": "Yes. Our escorts carry certifications including WITPAC, TWIC, state certifications, NSC Defensive Driving, CPC, and PEVO, and operate under active commercial insurance with $1,000,000 in coverage.",

      "finalcta.tag": "Get Started",
      "finalcta.h2": "Moving an Oversize Load?",
      "finalcta.sub": "Tell us your route, dimensions, and travel date.",

      "page.about.h1": "Big Loads. Safe Roads.",
      "page.about.lead": "TCB Escorts LLC is a certified pilot car escort company based in Jackson, Mississippi, dispatching Lead, Chase, High Pole, Steer, and Route Survey escorts to carriers, brokers, and owner-operators moving oversize and overweight loads nationwide.",
      "page.services.h1": "Pilot Car Escort Services",
      "page.services.lead": "Every oversize or overweight load has different needs. We staff the right combination of Lead, Chase, High Pole, Steer, and Route Survey escorts for your specific dimensions, route, and state requirements.",
      "page.serviceArea.h1": "Pilot Car Services Across 48 States",
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
      "form.position": "Escort Position",
      "form.dateNeeded": "Date Needed",
      "form.pickup": "Pickup Location",
      "form.delivery": "Delivery Location",
      "form.loadDetails": "Load Details / Message",
      "form.submitRequest": "Submit Request",
      "form.fullName": "Full Name",
      "form.statesCertified": "States Certified In",
      "form.yearsExperience": "Years of Experience",
      "form.positionsCertified": "Certified Positions",
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
      "footer.desc": "Servicios de Escolta y Vehículos Piloto para Cargas Sobredimensionadas en 48 Estados.",
      "footer.desc2": "Servicios de Escolta y Vehículos Piloto para Cargas Sobredimensionadas en 48 Estados",
      "footer.company": "Compañía",
      "footer.contactHeading": "Contacto",
      "footer.rights": "Todos los derechos reservados.",

      "hero.eyebrow": "Cargas Grandes. Caminos Seguros.",
      "hero.h1": "Servicios de Vehículo Piloto<br />en Todo Estados Unidos",
      "hero.tagline": "TCB Escorts ofrece servicios de vehículo piloto con escoltas lead, chase, high pole, estudios de ruta y steer con experiencia en todo Estados Unidos, y apoyo con vehículos de escolta para cargas sobredimensionadas y de sobrepeso.",
      "hero.lead": "Cobertura en 48 estados &bull; Escoltas certificados &bull; Asegurados por $1 Millón. TCB Escorts LLC ofrece escoltas Lead, Chase, High Pole, Steer y Route Survey para transportistas, corredores y operadores independientes en 48 estados.",
      "hero.trust.coverage": "Cobertura Nacional",
      "hero.trust.certified": "Escoltas Certificados",
      "hero.trust.based": "Con sede en Jackson, Mississippi", "stats.insurance": "Cobertura de Seguro",

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
      "learnMore": "Reservar Este Servicio &rarr;",

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
      "why.insured": "Seguro de $1M",
      "why.nationwide": "Cobertura Nacional",
      "why.dispatch": "Despacho",
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
      "cert.insured": "Cobertura de Seguro de $1,000,000",

      "partners.tag": "Socios de Confianza",
      "partners.h2": "Transportistas y Corredores Que Confían en Nosotros",

      "coverage.tag": "Cobertura",
      "coverage.h2": "Servicios de Vehículo Piloto en Todo Estados Unidos",
      "coverage.sub": "Despacho coordina la cobertura lead, chase, high pole y steer a lo largo de su ruta en 48 estados, con nuestros propios vehículos y nuestra red de conductores. Envíenos su ruta y confirmaremos la cobertura para sus fechas.",

      "faq.tag": "Preguntas Frecuentes",
      "faq.h2": "Preguntas Comunes",
      "faq.q1": "¿Ofrecen servicios de vehículo piloto en mi estado?",
      "faq.a1": "Sí. Despachamos escoltas certificados de vehículo piloto a 48 estados mediante nuestros propios vehículos y una red nacional verificada.",
      "faq.q2": "¿Qué tan rápido puedo reservar una escolta?",
      "faq.a2": "Las solicitudes de último momento son comunes. Envíe una solicitud de cotización o llame a despacho y confirmaremos la opción más rápida disponible.",
      "faq.q3": "¿Qué información necesitan para una cotización?",
      "faq.a3": "Los lugares de recogida y entrega, la fecha, la altura/ancho/largo/peso de la carga, y qué posiciones de escolta necesita (delantera, trasera, poste alto y/o maniobra).",
      "faq.q4": "¿Trabajan con transportistas, corredores y operadores independientes?",
      "faq.a4": "Sí. Trabajamos con transportistas de carga pesada, corredores de carga y operadores independientes que mueven cargas sobredimensionadas y con sobrepeso.",
      "faq.q5": "¿Sus escoltas están certificados y asegurados?",
      "faq.a5": "Sí. Nuestros escoltas cuentan con certificaciones como WITPAC, TWIC, certificaciones estatales, Manejo Defensivo NSC, CPC y PEVO, y operan bajo seguro comercial activo con cobertura de $1,000,000.",

      "finalcta.tag": "Comience Ahora",
      "finalcta.h2": "¿Va a Transportar una Carga Sobredimensionada?",
      "finalcta.sub": "Díganos su ruta, dimensiones y fecha de viaje.",

      "page.about.h1": "Cargas Grandes. Caminos Seguros.",
      "page.about.lead": "TCB Escorts LLC es una empresa certificada de escolta de vehículos piloto con sede en Jackson, Mississippi, que despacha escoltas Lead, Chase, High Pole, Steer y Route Survey a transportistas, corredores y operadores independientes que mueven cargas sobredimensionadas a nivel nacional.",
      "page.services.h1": "Servicios de Escolta de Vehículo Piloto",
      "page.services.lead": "Cada carga sobredimensionada o con sobrepeso tiene necesidades diferentes. Asignamos la combinación correcta de escoltas Lead, Chase, High Pole, Steer y Route Survey según sus dimensiones, ruta y los requisitos estatales.",
      "page.serviceArea.h1": "Servicios de Vehículo Piloto en 48 Estados",
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
      "form.position": "Posición de Escolta",
      "form.dateNeeded": "Fecha Necesaria",
      "form.pickup": "Lugar de Recogida",
      "form.delivery": "Lugar de Entrega",
      "form.loadDetails": "Detalles de la Carga / Mensaje",
      "form.submitRequest": "Enviar Solicitud",
      "form.fullName": "Nombre Completo",
      "form.statesCertified": "Estados en los que Está Certificado",
      "form.yearsExperience": "Años de Experiencia",
      "form.positionsCertified": "Posiciones Certificadas",
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

  /* TCB-OVERRIDES-START */
  Object.assign(DICT.en, {
  "nav.blog": "Blog",
  "cta.contactUs": "Contact Us",
  "cta.messageUs": "Message Us",
  "cta.callDispatch": "Call Dispatch",
  "cta.textUs": "Text Us",
  "intro.link": "Read: What is a pilot car? &rarr;",
  "coverage.link": "See our service area &rarr;",
  "service.lead.title": "Lead Escort",
  "service.lead.desc": "Drives ahead of the load, watching for low clearances, tight turns, work zones and oncoming traffic, and radios what it sees.",
  "service.chase.title": "Chase Escort",
  "service.chase.desc": "Follows behind to keep traffic from crowding the load, help with lane changes and merges, and keep an eye on the load itself.",
  "service.highpole.title": "High Pole Escort",
  "service.highpole.desc": "Leads with a height pole set just above the tallest point of the load to check clearance under wires, signs and bridges.",
  "service.steer.title": "Steer Escort",
  "service.steer.desc": "Steering support for long or articulated loads through tight turns and intersections, as the assignment requires.",
  "service.routesurvey.title": "Route Survey",
  "service.routesurvey.desc": "A drive-through of the planned route before moving day to check clearances, turns and trouble spots.",
  "learnMore": "Request this service &rarr;",
  "faq.q1": "Do you provide pilot car services in my state?",
  "faq.a1": "Yes. We provide pilot car and escort vehicle services across 48 states, using our own vehicles and our established network of escort drivers. Coverage depends on your route and dates, so send us the details and dispatch will confirm.",
  "faq.q2": "How quickly can I book an escort?",
  "faq.a2": "Short-notice requests are common. Send a quote request or call dispatch and we will tell you what is available for your date.",
  "faq.q3": "What information do you need for a quote?",
  "faq.a3": "Pickup and delivery locations, the date, the load's height, width, length and weight, and the escort positions your permit calls for (lead, chase, high pole, steer). If you have the permit, send it along.",
  "faq.q4": "Who do you work with?",
  "faq.a4": "Heavy haul carriers, freight brokers and owner-operators moving oversize and overweight loads.",
  "faq.q5": "Are your escorts certified and insured?",
  "faq.a5": "Our escorts hold credentials that include WITPAC, TWIC, state certifications, NSC Defensive Driving, CPC and PEVO, and TCB Escorts carries $1,000,000 in insurance coverage. Use the Request Insurance & Credentials button on this page and we will send documentation.",
  "faq.q6": "Do I need a pilot car for my load?",
  "faq.a6": "It depends on your load's dimensions, the route and the permit for each state. The permit sets the number and type of escorts, so check it first, and read our guide on <a href=\"blog-when-is-a-pilot-car-required.html\">when a pilot car is required</a>.",
  "hero.eyebrow": "Big Loads. Safe Roads.",
  "hero.tagline": "TCB Escorts provides experienced lead, chase, high pole, route survey and steer pilot car services across the United States and escort vehicle support for oversize and overweight loads.",
  "hero.trust.coverage": "48-State Coverage",
  "hero.trust.insured": "$1 Million Insured",
  "hero.trust.based": "Based in Jackson, Mississippi", "stats.insurance": "Insurance Coverage",
  "stats.loads": "Loads Escorted",
  "stats.partners": "Carrier &amp; Broker Partners",
  "stats.states": "States Served",
  "stats.dispatch": "Dispatch Availability",
  "intro.tag": "What a Pilot Car Does",
  "intro.h2": "Escort vehicles that keep oversize loads moving safely",
  "intro.p1": "An oversize load is harder to steer, stop and merge than an ordinary truck. A pilot car travels with it to scout the route, warn other drivers and keep the driver informed by radio. We run lead, chase, high pole and steer positions, plus route surveys when a move calls for one.",
  "intro.p2": "Every move starts with your permit and route, because the state and the load decide how many escorts you need. Send us the details and we will help you confirm the right setup.",
  "services.tag": "Escort Positions",
  "services.h2": "Pilot Car Services",
  "services.sub": "We scope every job to your route, permit and load dimensions, from a single escort to a full multi-vehicle package.",
  "how.tag": "Process",
  "how.h2": "How It Works",
  "how.step1.title": "Send your details",
  "how.step1.desc": "Route, dates, load dimensions and, if you have it, the permit.",
  "how.step2.title": "We review the move",
  "how.step2.desc": "Dispatch checks the route, the positions required and driver availability.",
  "how.step3.title": "You get a confirmation",
  "how.step3.desc": "Pricing, positions and schedule, confirmed with you before dispatch.",
  "how.step4.title": "We escort the load",
  "how.step4.desc": "Our drivers stay in contact with your driver from pickup to delivery.",
  "why.tag": "Why TCB",
  "why.h2": "Why carriers and brokers call TCB Escorts",
  "why.experienced": "Experienced escort teams",
  "why.experienced.desc": "More than 1,300 loads escorted for over 110 carrier and broker partners, with drivers who hold WITPAC, PEVO and state credentials.",
  "why.insured": "$1 Million Insured",
  "why.insured.desc": "Contact our team to request insurance documentation. We share it directly rather than posting it publicly.",
  "why.communication": "Clear communication",
  "why.communication.desc": "Written confirmation of route, schedule and positions, and a dispatcher you can reach by phone or text.",
  "serve.tag": "Who We Serve",
  "serve.h2": "Built for Carriers, Brokers &amp; Owner-Operators",
  "serve.carriers.title": "Heavy Haul Carriers",
  "serve.carriers.desc": "Escort coverage for permitted oversize and overweight loads, including multi-state moves.",
  "serve.brokers.title": "Freight Brokers",
  "serve.brokers.desc": "One point of contact for escort positions on your customer's route, with fast answers.",
  "serve.owners.title": "Owner-Operators",
  "serve.owners.desc": "Simple scheduling and a professional escort team for your next permitted move.",
  "cert.tag": "Credentials &amp; Insurance",
  "cert.h2": "$1 Million Insured",
  "cert.sub": "Contact our team to request insurance documentation. We keep certificates and policy records private and send them to you directly.",
  "cert.state": "State Certifications",
  "cert.nsc": "NSC Defensive Driving",
  "cta.requestInsurance": "Request Insurance &amp; Credentials",
  "fleet.tag": "Our Fleet",
  "fleet.h2": "Our Pilot Cars in the Field",
  "fleet.sub": "TCB Escorts vehicles on real moves, equipped with amber lights, flags and oversize load signs.",
  "coverage.tag": "Coverage",
  "coverage.h2": "Pilot Car Services Across the United States",
  "coverage.sub": "Dispatch arranges lead, chase, high pole and steer coverage along your route in 48 states, using our own vehicles and our established network of drivers. Send us your route and we will confirm coverage for your dates.",
  "faq.tag": "FAQ",
  "faq.h2": "Common Questions",
  "finalcta.tag": "Get Started",
  "finalcta.h2": "Moving an Oversize Load?",
  "finalcta.sub": "Send us your route, dimensions and travel date, and we will confirm your escort positions."
});
  Object.assign(DICT.es, {
  "nav.blog": "Blog",
  "cta.contactUs": "Contáctenos",
  "cta.messageUs": "Envíenos un Mensaje",
  "cta.callDispatch": "Llamar a Despacho",
  "cta.textUs": "Enviar Mensaje",
  "intro.link": "Lea: ¿Qué es un vehículo piloto? &rarr;",
  "coverage.link": "Ver nuestra área de servicio &rarr;",
  "service.lead.title": "Escolta Líder (Lead)",
  "service.lead.desc": "Va delante de la carga y vigila espacios bajos, giros cerrados, zonas de obra y tráfico en sentido contrario, y avisa por radio.",
  "service.chase.title": "Escolta Trasera (Chase)",
  "service.chase.desc": "Sigue detrás para evitar que el tráfico se acerque demasiado, ayudar en cambios de carril e incorporaciones y vigilar la carga.",
  "service.highpole.title": "Escolta High Pole",
  "service.highpole.desc": "Va al frente con un poste de altura ajustado justo por encima del punto más alto de la carga para revisar el espacio bajo cables, señales y puentes.",
  "service.steer.title": "Escolta de Dirección (Steer)",
  "service.steer.desc": "Apoyo de dirección para cargas largas o articuladas en giros cerrados e intersecciones, según lo requiera la asignación.",
  "service.routesurvey.title": "Estudio de Ruta",
  "service.routesurvey.desc": "Un recorrido de la ruta planeada antes del día del traslado para revisar alturas, giros y puntos problemáticos.",
  "learnMore": "Solicitar este servicio &rarr;",
  "faq.q1": "¿Ofrecen servicios de vehículo piloto en mi estado?",
  "faq.a1": "Sí. Ofrecemos servicios de vehículo piloto y escolta en 48 estados, con nuestros propios vehículos y nuestra red de conductores de escolta. La cobertura depende de su ruta y fechas; envíenos los detalles y despacho lo confirmará.",
  "faq.q2": "¿Qué tan rápido puedo reservar una escolta?",
  "faq.a2": "Las solicitudes de último momento son comunes. Envíe una solicitud o llame a despacho y le diremos qué hay disponible para su fecha.",
  "faq.q3": "¿Qué información necesitan para una cotización?",
  "faq.a3": "Lugares de recogida y entrega, la fecha, altura, ancho, largo y peso de la carga, y las posiciones de escolta que indica su permiso (lead, chase, high pole, steer). Si tiene el permiso, envíelo.",
  "faq.q4": "¿Con quién trabajan?",
  "faq.a4": "Transportistas de carga pesada, corredores de carga y operadores independientes que mueven cargas sobredimensionadas y con sobrepeso.",
  "faq.q5": "¿Sus escoltas están certificados y asegurados?",
  "faq.a5": "Nuestros escoltas tienen credenciales como WITPAC, TWIC, certificaciones estatales, Manejo Defensivo NSC, CPC y PEVO, y TCB Escorts cuenta con $1,000,000 en cobertura de seguro. Use el botón Request Insurance & Credentials de esta página y le enviaremos la documentación.",
  "faq.q6": "¿Necesito un vehículo piloto para mi carga?",
  "faq.a6": "Depende de las dimensiones de su carga, la ruta y el permiso de cada estado. El permiso fija el número y tipo de escoltas, así que revíselo primero y lea nuestra guía sobre <a href=\"blog-when-is-a-pilot-car-required.html\">cuándo se requiere un vehículo piloto</a>.",
  "hero.eyebrow": "Cargas Grandes. Caminos Seguros.",
  "hero.tagline": "TCB Escorts ofrece servicios de vehículo piloto con escoltas lead, chase, high pole, estudios de ruta y steer con experiencia en todo Estados Unidos, y apoyo con vehículos de escolta para cargas sobredimensionadas y de sobrepeso.",
  "hero.trust.coverage": "Cobertura en 48 Estados",
  "hero.trust.insured": "Asegurados por $1 Millón",
  "hero.trust.based": "Con sede en Jackson, Mississippi", "stats.insurance": "Cobertura de Seguro",
  "stats.loads": "Cargas Escoltadas",
  "stats.partners": "Transportistas y Corredores Asociados",
  "stats.states": "Estados Atendidos",
  "stats.dispatch": "Despacho Disponible",
  "intro.tag": "Qué Hace un Vehículo Piloto",
  "intro.h2": "Vehículos de escolta que mantienen las cargas sobredimensionadas en movimiento seguro",
  "intro.p1": "Una carga sobredimensionada es más difícil de dirigir, frenar e incorporar que un camión común. Un vehículo piloto viaja con ella para explorar la ruta, advertir a otros conductores y mantener informado al conductor por radio. Ofrecemos posiciones lead, chase, high pole y steer, además de estudios de ruta cuando el traslado lo requiere.",
  "intro.p2": "Cada traslado comienza con su permiso y su ruta, porque el estado y la carga determinan cuántas escoltas necesita. Envíenos los detalles y le ayudaremos a confirmar la configuración correcta.",
  "services.tag": "Posiciones de Escolta",
  "services.h2": "Servicios de Vehículo Piloto",
  "services.sub": "Definimos cada trabajo según su ruta, permiso y dimensiones de carga, desde una sola escolta hasta un paquete de varios vehículos.",
  "how.tag": "Proceso",
  "how.h2": "Cómo Funciona",
  "how.step1.title": "Envíe sus datos",
  "how.step1.desc": "Ruta, fechas, dimensiones de la carga y, si lo tiene, el permiso.",
  "how.step2.title": "Revisamos el traslado",
  "how.step2.desc": "Despacho revisa la ruta, las posiciones requeridas y la disponibilidad de conductores.",
  "how.step3.title": "Recibe una confirmación",
  "how.step3.desc": "Precio, posiciones y horario, confirmados con usted antes del despacho.",
  "how.step4.title": "Escoltamos la carga",
  "how.step4.desc": "Nuestros conductores se mantienen en contacto con su conductor desde la recogida hasta la entrega.",
  "why.tag": "Por Qué TCB",
  "why.h2": "Por qué transportistas y corredores llaman a TCB Escorts",
  "why.experienced": "Equipos de escolta con experiencia",
  "why.experienced.desc": "Más de 1,300 cargas escoltadas para más de 110 transportistas y corredores, con conductores que tienen credenciales WITPAC, PEVO y estatales.",
  "why.insured": "Asegurados por $1 Millón",
  "why.insured.desc": "Contacte a nuestro equipo para solicitar la documentación del seguro. La compartimos directamente en lugar de publicarla.",
  "why.communication": "Comunicación clara",
  "why.communication.desc": "Confirmación escrita de ruta, horario y posiciones, y un despachador al que puede llamar o escribir.",
  "serve.tag": "A Quién Servimos",
  "serve.h2": "Hecho para Transportistas, Corredores y Operadores Independientes",
  "serve.carriers.title": "Transportistas de Carga Pesada",
  "serve.carriers.desc": "Cobertura de escolta para cargas permitidas sobredimensionadas y con sobrepeso, incluidos traslados entre estados.",
  "serve.brokers.title": "Corredores de Carga",
  "serve.brokers.desc": "Un solo punto de contacto para las posiciones de escolta en la ruta de su cliente, con respuestas rápidas.",
  "serve.owners.title": "Operadores Independientes",
  "serve.owners.desc": "Programación sencilla y un equipo de escolta profesional para su próximo traslado con permiso.",
  "cert.tag": "Credenciales y Seguro",
  "cert.h2": "Asegurados por $1 Millón",
  "cert.sub": "Contacte a nuestro equipo para solicitar la documentación del seguro. Mantenemos los certificados y registros de la póliza privados y se los enviamos directamente.",
  "cert.state": "Certificaciones Estatales",
  "cert.nsc": "Manejo Defensivo NSC",
  "cta.requestInsurance": "Request Insurance &amp; Credentials",
  "fleet.tag": "Nuestra Flota",
  "fleet.h2": "Nuestros Vehículos Piloto en Acción",
  "fleet.sub": "Vehículos de TCB Escorts en traslados reales, equipados con luces ámbar, banderas y letreros de carga sobredimensionada.",
  "coverage.tag": "Cobertura",
  "coverage.h2": "Servicios de Vehículo Piloto en Todo Estados Unidos",
  "coverage.sub": "Despacho coordina la cobertura lead, chase, high pole y steer a lo largo de su ruta en 48 estados, con nuestros propios vehículos y nuestra red de conductores. Envíenos su ruta y confirmaremos la cobertura para sus fechas.",
  "faq.tag": "Preguntas",
  "faq.h2": "Preguntas Frecuentes",
  "finalcta.tag": "Comience Aquí",
  "finalcta.h2": "¿Va a Mover una Carga Sobredimensionada?",
  "finalcta.sub": "Envíenos su ruta, dimensiones y fecha de viaje, y confirmaremos sus posiciones de escolta."
});
  /* TCB-OVERRIDES-END */

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

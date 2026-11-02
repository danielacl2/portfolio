/* =====================================================================
   PROYECTOS Y CONTACTO DE DANIELA CORTÉS
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas tocar para:
   1) Añadir un proyecto nuevo  → copia un bloque { ... } entero,
      pégalo al final de la lista (antes del "];") y cambia los textos.
   2) Poner tu correo y tus redes → rellena CONTACTO (abajo del todo).

   Imágenes de cada proyecto (guárdalas en la carpeta img/):
     ordenador : captura de la portada a 1440 × 900 px
     completa  : captura de la página entera (para recorrerla en el portátil)
     movil     : captura del móvil a 390 × 844 px
     detalle   : captura de una sección especial de la web
   ===================================================================== */

const PROYECTOS = [
  {
    id: "megapark",
    nombre: "MegaPark Segovia",
    tipo: "Parque indoor de trampolines",
    lugar: "Segovia",
    estado: "Propuesta de diseño",
    url: "https://danielacl2.github.io/megaParw-web/",
    color1: "#ff3d8b",
    color2: "#2f6bff",
    idea: "Un parque recién abierto necesitaba una web con la misma energía que sus trampolines: azul eléctrico, rosa y amarillo sobre fondo de noche, titulares enormes y movimiento. Todo lo que una familia busca antes de ir está a la vista.",
    hecho: [
      "Diseño visual y desarrollo completo",
      "Tarifas por día y por horas, tomadas del cartel del parque",
      "Packs de cumpleaños con reserva directa por WhatsApp",
      "Horario que resalta automáticamente el día de hoy",
      "Mapa que solo se carga si el visitante acepta las cookies",
      "Preguntas frecuentes, aviso legal, privacidad y cookies"
    ],
    paleta: [
      ["#120f3a", "Noche"],
      ["#2f6bff", "Azul"],
      ["#ff3d8b", "Rosa"],
      ["#7b5cff", "Violeta"],
      ["#ffd23f", "Sol"]
    ],
    tipografias: ["Unbounded", "Nunito"],
    img: {
      ordenador: "img/megapark-ordenador.webp",
      completa: "img/megapark-completa.webp",
      movil: "img/megapark-movil.webp",
      detalle: "img/megapark-detalle.webp"
    },
    detalle: "El horario marca solo el día de hoy y su franja de apertura."
  },
  {
    id: "encanto",
    nombre: "El Encanto del Pinar",
    tipo: "Suites solo adultos",
    lugar: "San Rafael, Segovia",
    estado: "Propuesta de diseño",
    url: "https://danielacl2.github.io/el-encanto-del-pinar-web/",
    color1: "#e0a35f",
    color2: "#1f6b4f",
    idea: "Cinco suites con nombre de diosa romana entre los pinos de la Sierra de Guadarrama. La web se viste de noche de pino, luz de vela y madera, con una tipografía clásica que transmite calma y escapada en pareja.",
    hecho: [
      "Diseño visual y desarrollo completo",
      "Una ficha para cada suite con lo que incluye",
      "Calculadora de la luna: eliges la noche y ves la fase lunar, la puesta de sol y el amanecer",
      "Reserva enlazada con Booking y llamada directa",
      "Mapa y cómo llegar en coche y en tren",
      "Fotos con licencia libre, cada una con su crédito"
    ],
    paleta: [
      ["#0c1512", "Noche de pino"],
      ["#2a1a12", "Terciopelo"],
      ["#a8552b", "Granate"],
      ["#e0a35f", "Latón"],
      ["#f3ece0", "Crema"]
    ],
    tipografias: ["Cormorant Garamond", "Fraunces", "Archivo"],
    img: {
      ordenador: "img/encanto-ordenador.webp",
      completa: "img/encanto-completa.webp",
      movil: "img/encanto-movil.webp",
      detalle: "img/encanto-detalle.webp"
    },
    detalle: "Eliges la fecha de llegada y la web calcula la luna de esa noche."
  },
  {
    id: "donoso",
    nombre: "Grupo DoNoso",
    tipo: "Tostadores de café y chocolateros",
    lugar: "Salvaterra de Miño, Pontevedra",
    estado: "Propuesta de diseño",
    url: "https://danielacl2.github.io/donoso-web/",
    color1: "#c98a4b",
    color2: "#6b4026",
    idea: "Una casa gallega que tuesta café desde 1986. La paleta sale del propio producto (espresso, cacao, caramelo y leche) y la tipografía elegante le da el aire de una marca con historia.",
    hecho: [
      "Diseño visual y desarrollo completo",
      "Catálogo de cafés con filtros por gama y por país de origen",
      "Barras que explican el tueste natural y torrefacto de cada café",
      "Tableta de chocolate interactiva: cada onza abre una familia",
      "Formulario para hostelería que prepara el correo con la consulta",
      "Historia de la empresa en línea del tiempo y textos legales"
    ],
    paleta: [
      ["#24160e", "Espresso"],
      ["#3d2219", "Cacao"],
      ["#c98a4b", "Caramelo"],
      ["#a3a865", "Grano verde"],
      ["#ead8bd", "Arena"]
    ],
    tipografias: ["Cormorant Garamond", "Manrope"],
    img: {
      ordenador: "img/donoso-ordenador.webp",
      completa: "img/donoso-completa.webp",
      movil: "img/donoso-movil.webp",
      detalle: "img/donoso-detalle.webp"
    },
    detalle: "Pulsa una onza y aparece esa familia de chocolate."
  },
  {
    id: "goat",
    nombre: "GOAT Segovia",
    tipo: "Bar y hamburguesería",
    lugar: "Segovia",
    estado: "Propuesta de diseño",
    url: "https://danielacl2.github.io/goat-web/",
    color1: "#ea9835",
    color2: "#8f1813",
    idea: "Una hamburguesería junto a la Plaza Mayor con carácter de bar de barrio. La web tiene hambre: noche, granate y mostaza, un titular enorme con relieve y una hamburguesa ilustrada que se monta capa a capa.",
    hecho: [
      "Diseño visual y desarrollo completo",
      "Carta con 6 categorías y 38 productos, que se cambia desde un solo archivo",
      "Filtros para ver opciones vegetarianas y sin gluten",
      "Horario del bar y de la cocina siempre a la vista",
      "Cinta animada con los platos de la casa",
      "Mapa, llamada directa, Instagram y textos legales"
    ],
    paleta: [
      ["#0c1014", "Noche"],
      ["#6d0f0d", "Granate"],
      ["#8f1813", "Granate vivo"],
      ["#ea9835", "Mostaza"],
      ["#f7ecd6", "Crema"]
    ],
    tipografias: ["Inter Display", "Inter"],
    img: {
      ordenador: "img/goat-ordenador.webp",
      completa: "img/goat-completa.webp",
      movil: "img/goat-movil.webp",
      detalle: "img/goat-detalle.webp"
    },
    detalle: "La carta se organiza por pestañas: hamburguesas, para compartir, vegetarianas, sin gluten, infantil y postres."
  }
];

/* ---------------------------------------------------------------------
   CONTACTO. Escribe tus datos entre las comillas. Lo que dejes vacío ("")
   no aparece en la web.
   whatsapp: solo números, con el 34 delante.  instagram: solo el usuario.
   --------------------------------------------------------------------- */
const CONTACTO = {
  correo: "cortesloord@gmail.com",
  whatsapp: "34611109481",
  instagram: "danielaacl._"
};

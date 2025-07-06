export default () => ({
  "all-rights-reserved": "Todos los derechos reservados",
  copied: "Copiado al portapapeles",
  settings: {
    title: "Configuración",
    language: "Idioma",
  },
  introduction: {
    title: "Introducción",
    "mlops-by-profession": "{mlops} por profesión",
    "fullstack-by-passion": "{fullstack} por pasión",
    quote:
      "Caminar sobre el agua y desarrollar software a partir de una especificación son fáciles si ambos están congelados",
    "years-of-experience": "Años de experiencia",
    "ml-projects": "Proyectos de ML escalados utilizando estándares MLOps",
  },
  about: {
    title: "Acerca de",
    automating: "Automatizado",
    "automating-purpose": "con propósito",
    scaling: "escalado",
    "scaling-precision": "con precisión",
    driven: "guiado",
    "driven-design": "por el diseño",
    quote1:
      "{mlops} (Machine Learning Operations) es la disciplina que conecta la ciencia de datos con la ingeniería de software, con el objetivo de optimizar y automatizar todo el ciclo de vida del aprendizaje automático. Combina las mejores prácticas de {devops}, ingeniería de datos y machine learning para garantizar sistemas de ML escalables, confiables y reproducibles",
    quote2:
      "Como ingeniero MLOps con una sólida experiencia en entornos de nube y experiencia previa como ingeniero de datos, estoy especializado en la automatización de pipelines de entrenamiento y despliegue, {infraascode} y prácticas de DevOps aplicadas al ciclo de vida de ML",
    infraascode: "infraestructura como código",
    quote3:
      "Como desarrollador {fullstack}, fundé The RomM Project: una solución de código abierto y autohospedada que ayuda a gestionar bibliotecas de juegos retro, enfocada en el diseño y la experiencia de usuario",
    quote4:
      "Además, gestiono mi propio servidor personal, que alberga una variedad de servicios contenerizados. Esta experiencia práctica me permite explorar continuamente nuevas tecnologías, mejorar la gestión de la infraestructura y optimizar los despliegues en un entorno del mundo real, fortaleciendo aún más mis habilidades de DevOps y {sysadmin}",
    sysadmin: "administración de sistemas",
    quote5:
      "Soy una persona proactiva con una gran capacidad de aprendizaje que disfruta colaborar con equipos {multidisciplinary} y {multicultural}",
    multidisciplinary: "multidisciplinares",
    multicultural: "multiculturales",
  },
  resume: {
    title: "Currículum",
    education: "Educación",
    experience: "Experiencia",
    items: [
      {
        date: "Feb 2022 - Presente",
        description: "Senior MLOps en Inditex",
        compute_target: "Azure",
        compute_target_icon: "mdi-microsoft-azure",
      },
      {
        date: "Ene 2021 - Feb 2022",
        description: "Senior Data Engineer en Atresmedia",
        compute_target: "AWS",
        compute_target_icon: "mdi-aws",
      },
      {
        title: "Consultor Tecnológico en TMC España",
        date: "Dic 2019 - Ene 2021",
        description: "Data Engineer en Orange España",
        compute_target: "On-premise",
        compute_target_icon: "mdi-server-network",
      },
      {
        title: "Consultor Tecnológico en Alten",
        date: "May 2017 - Dic 2019",
        description: "Data Engineer en Unidad Editorial",
        compute_target: "On-premise",
        compute_target_icon: "mdi-server-network",
      },
      {
        title: "Universidad de Alcalá de Henares, Madrid, España",
        date: "2011",
        description: "Grado en Ingeniería Informática",
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    "personal-projects": "{projects} {personal}",
    personal: "Personales",
    projects: "Proyectos",
    romm: {
      description1:
        "{romm} (abreviatura de Rom Manager) es un gestor de bibliotecas de juegos autoalojado enfocado en el retro gaming. Administra, organiza y juega todos tus juegos desde un navegador web. Está desarrollado con {vue} y {python}, y se distribuye como una {dockerimage}",
      description2:
        "Además del desarrollo de tanto del back como del front, también he diseñado y mantenido toda la infraestructura de distribución: desde la creación de la imagen de docker, hasta el desarrollo de pipelines de integración y despliegue continuo {cicd} mediante {ghactions}, asegurando lanzamientos consistentes, versionados y listos para producción",
      description3:
        "Con más de {stars} estrellas en {github}, más de {downloads} pulls en {dockerhub}, y una comunidad de más de {users} miembros en {discord}, RomM es la opción número uno entre quienes prefieren soluciones autoalojadas",
      dockerimage: "imagen de Docker",
    },
    homelab: {
      title: "On-premise homelab autoalojado",
      description1:
        "Gestión y mantenimiento de un homelab personal con múltiples servicios desplegados utilizando {docker}, {dockercompose} y {gitops} a través de {portainer}. La configuración de los servidores se gestiona con {ansible}",
      description2:
        "{infrastructure}: red doméstica avanzada con un mini PC como servidor central, algunas Raspberry Pis como dispositivos independientes, un NAS y un switch de red",
      infrastructure: "Infraestructura",
      description3:
        "{orchestration}: gestión de contenedores con docker-compose y GitOps a través de Portainer para el control de versiones y actualizaciones automatizadas de servicios",
      orchestration: "Orquestación",
      description4:
        "{networksecurity}: configuración de la red en malla y VPN con Tailscale, reglas de firewall con UFW, DNS local con Pi-hole + Tailscale, gestión de tráfico con nginx como proxy inverso y SSL a través de Let's Encrypt",
      networksecurity: "Red y seguridad",
      description5:
        "{nas}: almacenamiento centralizado con compartición de volúmenes a través de NFS/SMB, persistencia de datos para servicios y copias de seguridad automatizadas",
    },
    zurdi: {
      description1:
        "{zurdi} es mi portafolio personal, diseñado y desarrollado desde cero para reflejar tanto mis habilidades técnicas como mi sensibilidad por el diseño. Desarrollado con {vue}, {nuxt} y {vuetify}, combina una interfaz limpia y responsiva con animaciones sutiles y un enfoque en el rendimiento y la accesibilidad",
      description2:
        "Cada sección está cuidadosamente elaborada para demostrar mi experiencia {fullstack} y mi atención al detalle en la experiencia de usuario",
    },
  },
  skills: {
    title: "Skills",
    "tech-stack": "{stack} {tech}",
    tech: "Tecnológico",
    stack: "Stack",
  },
});

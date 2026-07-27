export default () => ({
  "all-rights-reserved": "Todos los derechos reservados",
  copied: "Copiado al portapapeles",
  settings: {
    title: "Configuración",
    language: "Idioma",
  },
  introduction: {
    title: "Introducción",
    "cloudops-by-profession": "{cloudops} por profesión",
    "fullstack-by-passion": "{fullstack} por pasión",
    quote:
      "Caminar sobre el agua y desarrollar software a partir de una especificación son fáciles si ambos están congelados",
    "years-of-experience": "Años de experiencia",
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
      "{cloudops} (Cloud Operations) es la disciplina que se enfoca en optimizar, gestionar y automatizar la infraestructura y los servicios en la nube. Combina las mejores prácticas de {devops}, gestión de infraestructura e ingeniería de nube para garantizar sistemas de nube escalables, confiables y eficientes",
    quote2:
      "Como ingeniero CloudOps con experiencia previa como Ingeniero MLOps e Ingeniero de Datos, estoy especializado en automatización de infraestructura, optimización de nube, {infraascode} y prácticas de DevOps aplicadas a infraestructura de nube",
    infraascode: "infraestructura como código",
    quote3:
      "Durante el último año he trabajado en una plataforma AWS {multiaccount} como parte de un equipo de plataforma de cuatro personas: cinco clústeres EKS que dan servicio a dos productos en sandbox, staging y producción, definida íntegramente como código con {terraform} y desplegada mediante {gitops} con Argo CD. El alcance del equipo iba desde la red y la seguridad hasta el autoescalado, el coste y la guardia de on-call",
    multiaccount: "multi-cuenta",
    terraform: "Terraform y Terragrunt",
    quote4:
      "Disfruto especialmente de la parte en la que una decisión de diseño se nota directamente en la factura: rediseñé el escalado de la plataforma, llevando el aprovisionamiento de nodos a {karpenter} y las cargas dirigidas por eventos a {keda}, con un uso deliberado de {spot}, e integré {costchecks} en los pipelines de infraestructura para que cada despliegue muestre su propio delta de gasto",
    spot: "capacidad Spot",
    costchecks: "controles de impacto en coste",
    quote5:
      "Más allá de la infraestructura, me centro en llevar la IA moderna a {workflows}, donde de verdad aporta. He desarrollado un sistema {agentic} de triaje de incidencias: un bucle de agente propio que descubre sus herramientas desde {mcp} de New Relic, AWS y una base de conocimiento interna, cruza alertas y trazas con el código de la aplicación, el Terraform que define la infraestructura y el estado real del cloud, y publica una hipótesis de causa raíz enfocada junto a una propuesta de solución directamente en {teams}",
    workflows: "workflows operativos reales",
    agentic: "agéntico",
    mcp: "servidores MCP",
    quote6:
      "Como desarrollador {fullstack}, fundé {rommapp}: una solución de código abierto y autohospedada que ayuda a gestionar bibliotecas de juegos retro, enfocada en el diseño y la experiencia de usuario. También desarrollo {turtletrips}, un planificador de viajes autoalojado que cubre itinerarios, reservas y gastos compartidos, distribuido como una PWA instalable",
    quote7:
      "Además, gestiono mi propia plataforma personal sobre un clúster {k3s} de un solo nodo, donde cada workload se despliega a través de {argocd}. Esta experiencia práctica me permite explorar continuamente nuevas tecnologías, mejorar la gestión de la infraestructura y optimizar los despliegues en un entorno del mundo real, fortaleciendo aún más mis habilidades de DevOps y {sysadmin}",
    sysadmin: "administración de sistemas",
    quote8:
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
        date: "Ago 2025 - Jul 2026",
        description: "Platform Engineer (CloudOps) en Busuu",
        stack: [
          { name: "AWS", icon: "mdi-aws" },
          { name: "Kubernetes", icon: "mdi-kubernetes" },
          { name: "Karpenter", image: "karpenter" },
          { name: "Terraform", icon: "mdi-terraform" },
          { name: "ArgoCD", image: "argocd" },
          { name: "New Relic", image: "newrelic" },
        ],
      },
      {
        date: "Feb 2022 - Ago 2025",
        description: "Senior MLOps Engineer en Inditex",
        stack: [
          { name: "Azure", icon: "mdi-microsoft-azure" },
          { name: "Terraform", icon: "mdi-terraform" },
          { name: "Azure DevOps", image: "azuredevops" },
          { name: "Python", icon: "mdi-language-python" },
        ],
      },
      {
        date: "Ene 2021 - Feb 2022",
        description: "Senior Data Engineer en Atresmedia",
        stack: [
          { name: "AWS", icon: "mdi-aws" },
          { name: "Ansible", icon: "mdi-ansible" },
          { name: "Python", icon: "mdi-language-python" },
        ],
      },
      {
        title: "Consultor Tecnológico en TMC España",
        date: "Dic 2019 - Ene 2021",
        description: "Data Engineer en Orange España",
        stack: [
          { name: "On-premise", icon: "mdi-server-network" },
          { name: "Python", icon: "mdi-language-python" },
        ],
      },
      {
        title: "Consultor Tecnológico en Alten",
        date: "May 2017 - Dic 2019",
        description: "Data Engineer en Unidad Editorial",
        stack: [
          { name: "On-premise", icon: "mdi-server-network" },
          { name: "Python", icon: "mdi-language-python" },
        ],
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
        "{romm} (abreviatura de Rom Manager) es un gestor de bibliotecas de juegos autoalojado enfocado en el retro gaming. Administra, organiza y juega todos tus juegos desde un navegador web. Está desarrollado con {vue} sobre {customui}, {python}, y se distribuye como una {dockerimage}",
      customui: "una librería de UI propia",
      description2:
        "Además del desarrollo de tanto del back como del front, también he diseñado y mantenido toda la infraestructura de distribución: desde la creación de la imagen de docker, hasta el desarrollo de pipelines de integración y despliegue continuo {cicd} mediante {ghactions}, asegurando lanzamientos consistentes, versionados y listos para producción",
      description3:
        "Con más de {stars} estrellas en {github}, más de {downloads} pulls en {dockerhub}, y una comunidad de más de {users} miembros en {discord}, RomM es la opción número uno entre quienes prefieren soluciones autoalojadas",
      dockerimage: "imagen de Docker",
    },
    homelab: {
      title: "Servidor on-premise",
      description1:
        "Una plataforma personal sobre un clúster {k3s} de un solo nodo, donde cada workload se despliega a través de {argocd}. La configuración de los servidores se gestiona con {ansible}",
      description2:
        "{infrastructure}: red doméstica avanzada con un mini PC como servidor central, algunas Raspberry Pis como dispositivos independientes y gateways, un NAS principal y un NAS secundario como nodo de backup onsite",
      infrastructure: "Infraestructura",
      description3:
        "{delivery}: cada workload declarado como manifiestos en un repositorio Git, con Argo CD reconciliando el clúster contra él para el control de versiones y las actualizaciones automatizadas de servicios",
      delivery: "Despliegue",
      description4:
        "{networksecurity}: configuración de la red en malla y VPN con Tailscale, reglas de firewall con UFW, DNS local con Pi-hole + Tailscale, gestión de tráfico con nginx como proxy inverso y SSL a través de Let's Encrypt",
      networksecurity: "Red y seguridad",
      description5:
        "{nas}: almacenamiento centralizado con compartición de volúmenes a través de NFS/SMB, persistencia de datos para servicios y copias de seguridad automatizadas",
    },
    turtletrips: {
      description1:
        "{turtletrips} es un {tripplanner} autoalojado y multiusuario que cubre itinerario, reservas, {expenses} con reparto estilo Splitwise, listas de equipaje y un mapa del mundo con todo lo que has visitado",
      tripplanner: "planificador de viajes",
      expenses: "gastos multi-divisa",
      description2:
        "Desarrollado con {frontend} y Vite en el front y {backend} con SQLAlchemy en el back, se distribuye como una {pwa} instalable y una imagen de Docker multi-stage publicada en {ghcr} mediante GitHub Actions",
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
    groups: {
      cloud: "Cloud e Infraestructura como Código",
      kubernetes: "Kubernetes y Contenedores",
      cicd: "Despliegue y Automatización",
      observability: "Observabilidad y Datos",
      dev: "Desarrollo",
    },
  },
});

export default () => ({
  "all-rights-reserved": "All rights reserved",
  copied: "Copied to clipboard",
  settings: {
    title: "Settings",
    language: "Language",
  },
  introduction: {
    title: "Introduction",
    "mlops-by-profession": "{mlops} by profession",
    "fullstack-by-passion": "{fullstack} by passion",
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen",
    "years-of-experience": "Years of experience",
    "ml-projects": "ML projects scaled using MLOps standards",
  },
  about: {
    title: "About",
    automating: "Automating",
    "automating-purpose": "with purpose",
    scaling: "scaling",
    "scaling-precision": "with precision",
    driven: "driven",
    "driven-design": "by design",
    quote1:
      "{mlops} (Machine Learning Operations) is the discipline that bridges the gap between data science and software engineering, aiming to streamline and automate the entire machine learning lifecycle. It combines best practices from {devops}, data engineering, and machine learning to ensure scalable, reliable, and reproducible ML systems",
    quote2:
      "As a MLOps Engineer with a solid background in cloud environments and previous experience as a data engineer, I am specialized in automating training and deployment pipelines, {infraascode} and DevOps practices applied to the ML lifecycle",
    infraascode: "infrastructure as code",
    quote3:
      "As a {fullstack} developer, I founded The RomM Project: an open-source, self-hosted solution that helps manage retro game libraries, focused on design and user experience",
    quote4:
      "In addition, I manage my own personal server, which hosts a variety of containerized services. This hands-on experience allows me to continuously explore new technologies, improve infrastructure management and fine-tune deployments in a real-world environment, further strengthening my DevOps and {sysadmin} skills",
    sysadmin: "system administration",
    quote5:
      "I am a proactive individual with a strong ability to learn who enjoys collaborating with {multidisciplinary} and {multicultural} teams",
    multidisciplinary: "multidisciplinary",
    multicultural: "multicultural",
  },
  resume: {
    title: "Resume",
    education: "Education",
    experience: "Experience",
    items: [
      {
        date: "Feb 2022 - Present",
        description: "Senior MLOps at Inditex",
        compute_target: "Azure",
        compute_target_icon: "mdi-microsoft-azure",
      },
      {
        date: "Jan 2021 - Feb 2022",
        description: "Senior Data Engineer at Atresmedia",
        compute_target: "AWS",
        compute_target_icon: "mdi-aws",
      },
      {
        title: "Technology Consultant at TMC Spain",
        date: "Dec 2019 - Jan 2021",
        description: "Data Engineer at Orange España",
        compute_target: "On-premise",
        compute_target_icon: "mdi-server-network",
      },
      {
        title: "Technology Consultant at Alten",
        date: "May 2017 - Dec 2019",
        description: "Data Engineer at Unidad Editorial",
        compute_target: "On-premise",
        compute_target_icon: "mdi-server-network",
      },
      {
        title: "University of Alcalá de Henares, Madrid, Spain",
        date: "2011",
        description: "Bachelor's Degree in Computer Engineering",
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    "personal-projects": "{personal} {projects}",
    personal: "Personal",
    projects: "Projects",
    romm: {
      description1:
        "{romm} (short for Rom Manager) is a self-hosted game library manager focused on retro gaming. It manages, organizes, and lets you play all your games from a web browser. It is developed with {vue} and {python}, and distributed as a {dockerimage}",
      description2:
        "In addition to developing both the backend and frontend, I also designed and maintained the entire distribution infrastructure: from creating the Docker image to building continuous integration and deployment {cicd} pipelines using {ghactions}, ensuring consistent, versioned, and production-ready releases",
      description3:
        "With over {stars} stars on {github}, more than {downloads} pulls on {dockerhub}, and a community of over {users} members on {discord}, RomM is the number one choice for those who prefer self-hosted solutions",
      dockerimage: "Docker image",
    },
    homelab: {
      title: "On-premise self-hosted homelab",
      description1:
        "Management and maintenance of a personal homelab with multiple services deployed using {docker}, {dockercompose} and {gitops} through {portainer}. Servers setup is managed with {ansible}",
      description2:
        "{infrastructure}: advanced home network with a mini PC as central server, some Raspberry Pis as standalone devices, one NAS and one switch to interconnect them",
      infrastructure: "Infrastructure",
      description3:
        "{orchestration}: container management with docker-compose and GitOps through Portainer for version control and automated service updates",
      orchestration: "Orchestration",
      description4:
        "{networksecurity}: network mesh and VPN configuration with Tailscale, firewall rules with UFW, local DNS with Pi-hole + Tailscale, traffic management with nginx as reverse proxy and SSL via Let's Encrypt",
      networksecurity: "Network and security",
      description5:
        "{nas}: centralized storage with volume sharing via NFS/SMB, data persistence for services and automated backups",
    },
    zurdi: {
      description1:
        "{zurdi} is my personal portfolio, designed and developed from scratch to reflect both my technical skills and design sensibility. Built using {vue}, {nuxt}, and {vuetify}, it combines a clean, responsive interface with subtle animations and a focus on performance and accessibility",
      description2:
        "Every section is handcrafted to demonstrate my {fullstack} expertise and attention to detail in user experience",
    },
  },
  skills: {
    title: "Skills",
    "tech-stack": "{tech} {stack}",
    tech: "Tech",
    stack: "Stack",
  },
});

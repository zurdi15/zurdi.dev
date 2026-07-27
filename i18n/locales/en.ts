export default () => ({
  "all-rights-reserved": "All rights reserved",
  copied: "Copied to clipboard",
  settings: {
    title: "Settings",
    language: "Language",
  },
  introduction: {
    title: "Introduction",
    "cloudops-by-profession": "{cloudops} by profession",
    "fullstack-by-passion": "{fullstack} by passion",
    quote:
      "Walking on water and developing software from a specification are easy if both are frozen",
    "years-of-experience": "Years of experience",
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
      "{cloudops} (Cloud Operations) is the discipline that focuses on optimizing, managing, and automating cloud infrastructure and services. It combines best practices from {devops}, infrastructure management, and cloud engineering to ensure scalable, reliable, and efficient cloud systems",
    quote2:
      "As a CloudOps Engineer with previous experience as a MLOps Engineer and Data Engineer, I am specialized in infrastructure automation, cloud optimization, {infraascode} and DevOps practices applied to cloud infrastructure",
    infraascode: "infrastructure as code",
    quote3:
      "Over the past year I worked on a {multiaccount} AWS platform as part of a four-person platform team: five EKS clusters serving two products across sandbox, staging and production, defined entirely as code with {terraform} and delivered through {gitops} with Argo CD. The team's remit ran from networking and security to autoscaling, cost and the on-call rotation",
    multiaccount: "multi-account",
    terraform: "Terraform and Terragrunt",
    quote4:
      "I enjoy the part where a design decision shows up directly in the bill: I redesigned how the platform scales, moving node provisioning to {karpenter} and event-driven workloads to {keda} with deliberate use of {spot}, and wired {costchecks} into the infrastructure pipelines so every deployment surfaces its own spend delta",
    spot: "Spot capacity",
    costchecks: "cost-impact checks",
    quote5:
      "Beyond infrastructure, I focus on bringing modern AI into {workflows}, where it actually pays off. I built an {agentic} incident-triage system: a custom agent loop that discovers its own tooling from {mcp} for New Relic, AWS and an internal knowledge base, correlates alerts and traces with the application code, the Terraform behind the infrastructure and live cloud state, and posts a focused root-cause hypothesis and proposed fix straight into {teams}",
    workflows: "real operational workflows",
    agentic: "agentic",
    mcp: "MCP servers",
    quote6:
      "As a {fullstack} developer, I founded {rommapp}: an open-source, self-hosted solution that helps manage retro game libraries, focused on design and user experience. I also build {turtletrips}, a self-hosted trip planner covering itineraries, bookings and shared expenses, shipped as an installable PWA",
    quote7:
      "In addition, I run my own personal platform on a single-node {k3s} cluster, where every workload is delivered through {argocd}. This hands-on experience allows me to continuously explore new technologies, improve infrastructure management and fine-tune deployments in a real-world environment, further strengthening my DevOps and {sysadmin} skills",
    sysadmin: "system administration",
    quote8:
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
        date: "Aug 2025 - Jul 2026",
        description: "Platform Engineer (CloudOps) at Busuu",
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
        date: "Feb 2022 - Aug 2025",
        description: "Senior MLOps Engineer at Inditex",
        stack: [
          { name: "Azure", icon: "mdi-microsoft-azure" },
          { name: "Terraform", icon: "mdi-terraform" },
          { name: "Azure DevOps", image: "azuredevops" },
          { name: "Python", icon: "mdi-language-python" },
        ],
      },
      {
        date: "Jan 2021 - Feb 2022",
        description: "Senior Data Engineer at Atresmedia",
        stack: [
          { name: "AWS", icon: "mdi-aws" },
          { name: "Ansible", icon: "mdi-ansible" },
          { name: "Python", icon: "mdi-language-python" },
        ],
      },
      {
        title: "Technology Consultant at TMC Spain",
        date: "Dec 2019 - Jan 2021",
        description: "Data Engineer at Orange España",
        stack: [
          { name: "On-premise", icon: "mdi-server-network" },
          { name: "Python", icon: "mdi-language-python" },
        ],
      },
      {
        title: "Technology Consultant at Alten",
        date: "May 2017 - Dec 2019",
        description: "Data Engineer at Unidad Editorial",
        stack: [
          { name: "On-premise", icon: "mdi-server-network" },
          { name: "Python", icon: "mdi-language-python" },
        ],
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
        "{romm} (short for Rom Manager) is a self-hosted game library manager focused on retro gaming. It manages, organizes, and lets you play all your games from a web browser. It is developed with {vue} on top of {customui}, {python}, and distributed as a {dockerimage}",
      customui: "a custom UI library",
      description2:
        "In addition to developing both the backend and frontend, I also designed and maintained the entire distribution infrastructure: from creating the Docker image to building continuous integration and deployment {cicd} pipelines using {ghactions}, ensuring consistent, versioned, and production-ready releases",
      description3:
        "With over {stars} stars on {github}, more than {downloads} pulls on {dockerhub}, and a community of over {users} members on {discord}, RomM is the number one choice for those who prefer self-hosted solutions",
      dockerimage: "Docker image",
    },
    homelab: {
      title: "Self-hosted homeserver",
      description1:
        "A personal platform running on a single-node {k3s} cluster, with every workload delivered through {argocd}. Servers setup is managed with {ansible}",
      description2:
        "{infrastructure}: advanced home network with a mini PC as central server, some Raspberry Pis as standalone devices and gateways, one main NAS and a secondary NAS as an onsite backup node",
      infrastructure: "Infrastructure",
      description3:
        "{delivery}: every workload declared as manifests in a Git repository, with Argo CD reconciling the cluster against it for version control and automated service updates",
      delivery: "Delivery",
      description4:
        "{networksecurity}: network mesh and VPN configuration with Tailscale, firewall rules with UFW, local DNS with Pi-hole + Tailscale, traffic management with nginx as reverse proxy and SSL via Let's Encrypt",
      networksecurity: "Network and security",
      description5:
        "{nas}: centralized storage with volume sharing via NFS/SMB, data persistence for services and automated backups",
    },
    turtletrips: {
      description1:
        "{turtletrips} is a self-hosted, multi-user {tripplanner} covering itinerary, bookings, {expenses} with Splitwise-style splitting, packing lists and a world map of everywhere you have been",
      tripplanner: "trip planner",
      expenses: "multi-currency expenses",
      description2:
        "Built with {frontend} and Vite on the frontend and {backend} with SQLAlchemy on the backend, shipped as an installable {pwa} and a multi-stage Docker image published to {ghcr} through GitHub Actions",
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
    groups: {
      cloud: "Cloud & Infrastructure as Code",
      kubernetes: "Kubernetes & Containers",
      cicd: "Delivery & Automation",
      observability: "Observability & Data",
      dev: "Development",
    },
  },
});

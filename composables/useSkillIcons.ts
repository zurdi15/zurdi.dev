// Logos for skills that Material Design Icons v5 (the CDN set Vuetify loads) does not ship.
const icons: Record<string, string> = {
  argocd: new URL("@/assets/img/skills/argocd.svg", import.meta.url).href,
  azuredevops: new URL("@/assets/img/skills/azuredevops.svg", import.meta.url)
    .href,
  githubactions: new URL(
    "@/assets/img/skills/githubactions.svg",
    import.meta.url,
  ).href,
  grafana: new URL("@/assets/img/skills/grafana.svg", import.meta.url).href,
  jenkins: new URL("@/assets/img/skills/jenkins.webp", import.meta.url).href,
  karpenter: new URL("@/assets/img/skills/karpenter.svg", import.meta.url).href,
  keda: new URL("@/assets/img/skills/keda.svg", import.meta.url).href,
  newrelic: new URL("@/assets/img/skills/newrelic.svg", import.meta.url).href,
  postgresql: new URL("@/assets/img/skills/postgresql.svg", import.meta.url)
    .href,
  prometheus: new URL("@/assets/img/skills/prometheus.svg", import.meta.url)
    .href,
};

export const useSkillIcons = () => icons;

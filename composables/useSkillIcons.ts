// Logos for skills that Material Design Icons v5 (the CDN set Vuetify loads) does not ship.
const icons: Record<string, string> = {
  argocd: new URL("@/assets/img/skills/argocd.svg", import.meta.url).href,
  newrelic: new URL("@/assets/img/skills/newrelic.svg", import.meta.url).href,
  jenkins: new URL("@/assets/img/skills/jenkins.webp", import.meta.url).href,
};

export const useSkillIcons = () => icons;

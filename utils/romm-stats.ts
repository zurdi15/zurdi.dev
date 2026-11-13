interface RommStats {
  stars: string;
  downloads: string;
  users: string;
}

function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return num.toString();
}

async function fetchStat(
  service: string,
  url: string,
  field: string,
  format: (value: unknown) => string | null,
): Promise<string> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data: unknown = await response.json();
    if (typeof data !== "object" || data === null || !(field in data)) {
      throw new Error(`Invalid ${field} in response`);
    }
    const value = format(data[field]);
    if (value === null) {
      throw new Error(`Invalid ${field} in response`);
    }
    return value;
  } catch (error) {
    console.error(`[romm-stats] ${service} request failed:`, error);
    return "—";
  }
}

function formatCount(value: unknown): string | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? formatNumber(value)
    : null;
}

function formatBadge(value: unknown): string | null {
  return typeof value === "string" && /^\d+(?:\.\d+)?[kmb]?$/i.test(value)
    ? value
    : null;
}

export async function getRommStats(): Promise<RommStats> {
  const [stars, downloads, users] = await Promise.all([
    fetchStat(
      "GitHub",
      "https://api.github.com/repos/rommapp/romm",
      "stargazers_count",
      formatCount,
    ),
    fetchStat(
      "Shields.io",
      "https://img.shields.io/docker/pulls/rommapp/romm.json",
      "value",
      formatBadge,
    ),
    fetchStat(
      "Discord",
      "https://discord.com/api/v9/invites/P5HtHnhUDH?with_counts=true",
      "approximate_member_count",
      formatCount,
    ),
  ]);
  return { stars, downloads, users };
}

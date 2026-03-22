import { defineCachedEventHandler } from "#imports";

interface GitHubRepo {
  stargazers_count: number;
}

interface DockerHubRepo {
  pull_count: number;
}

interface DiscordInvite {
  approximate_member_count: number;
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

export default defineCachedEventHandler(
  async () => {
    const [github, dockerhub, discord] = await Promise.all([
      $fetch<GitHubRepo>("https://api.github.com/repos/rommapp/romm", {
        headers: { Accept: "application/vnd.github.v3+json" },
      }).catch(() => null),
      $fetch<DockerHubRepo>(
        "https://hub.docker.com/v2/repositories/rommapp/romm/",
      ).catch(() => null),
      $fetch<DiscordInvite>(
        "https://discord.com/api/v9/invites/P5HtHnhUDH?with_counts=true",
      ).catch(() => null),
    ]);

    return {
      stars: formatNumber(github?.stargazers_count ?? 0),
      downloads: formatNumber(dockerhub?.pull_count ?? 0),
      users: formatNumber(discord?.approximate_member_count ?? 0),
    };
  },
  {
    maxAge: 3600, // Cache for 1 hour
    swr: true,
  },
);

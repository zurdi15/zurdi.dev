import assert from "node:assert/strict";
import { test } from "node:test";
import { getRommStats } from "../utils/romm-stats.ts";

test("fetches and formats the three browser-compatible statistics", async (t) => {
  const values = [
    { stargazers_count: 14351 },
    { value: "16M" },
    { approximate_member_count: 999 },
  ];
  const fetchMock = t.mock.method(globalThis, "fetch", async () =>
    Response.json(values.shift()),
  );
  assert.deepEqual(await getRommStats(), {
    stars: "14.4K",
    downloads: "16M",
    users: "999",
  });
  assert.equal(fetchMock.mock.callCount(), 3);
});

test("reports upstream failures without hiding available statistics", async (t) => {
  const values = [
    new Response("rate limited", { status: 403 }),
    Response.json({ value: "invalid" }),
    Response.json({ approximate_member_count: 0 }),
  ];
  t.mock.method(globalThis, "fetch", async () => values.shift()!);
  const log = t.mock.method(console, "error", () => {});
  assert.deepEqual(await getRommStats(), {
    stars: "—",
    downloads: "—",
    users: "0",
  });
  assert.equal(log.mock.callCount(), 2);
});

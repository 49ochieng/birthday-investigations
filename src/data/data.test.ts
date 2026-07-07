import { describe, expect, it } from "vitest";
import martinData from "./martin";
import sammyData from "./sammy";
import type { PersonData } from "./types";

describe.each([
  ["sammy", sammyData],
  ["martin", martinData],
])("%s data", (_name, data: PersonData) => {
  it("has a non-empty name and matching slug", () => {
    expect(data.name.length).toBeGreaterThan(0);
    expect(["sammy", "martin"]).toContain(data.slug);
  });

  it("has at least one roast level and one gif", () => {
    expect(data.roastLevels.length).toBeGreaterThan(0);
    expect(data.gifs.length).toBeGreaterThan(0);
  });

  it("has unique image paths", () => {
    expect(new Set(data.images).size).toBe(data.images.length);
  });

  it("only references gifs over https", () => {
    for (const gif of data.gifs) {
      expect(gif.url.startsWith("https://")).toBe(true);
    }
  });

  it("has a roast level entry for every level from 1 to the max", () => {
    const levels = data.roastLevels.map((l) => l.level).sort((a, b) => a - b);
    const max = levels[levels.length - 1];
    expect(levels).toEqual(Array.from({ length: max }, (_, i) => i + 1));
  });
});

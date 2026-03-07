import {
  convertToDate,
  getRepoName,
  truncateEmail,
  matchesSearchQuery,
} from "@/lib/utils";

describe("convertToDate", () => {
  it("passes through a Date unchanged", () => {
    const d = new Date("2024-01-01");
    expect(convertToDate(d)).toBe(d);
  });

  it("calls .toDate() on Firestore Timestamp objects", () => {
    const d = new Date("2024-06-15");
    const ts = { toDate: () => d };
    expect(convertToDate(ts)).toBe(d);
  });

  it("converts a numeric millisecond value to Date", () => {
    const ms = 1704067200000;
    expect(convertToDate(ms)).toEqual(new Date(ms));
  });

  it("converts an ISO string to Date", () => {
    const iso = "2024-01-01T00:00:00.000Z";
    expect(convertToDate(iso)).toEqual(new Date(iso));
  });
});

describe("getRepoName", () => {
  it("extracts owner/repo from a full GitHub URL", () => {
    expect(getRepoName("https://github.com/owner/repo")).toBe("owner/repo");
  });

  it("extracts the last two path segments from any slash-separated string", () => {
    expect(getRepoName("org/project/subdir")).toBe("project/subdir");
  });

  it("handles a two-segment path", () => {
    expect(getRepoName("owner/repo")).toBe("owner/repo");
  });
});

describe("truncateEmail", () => {
  it("returns an email of 35 chars or fewer unchanged", () => {
    const email = "short@example.com"; // 17 chars
    expect(truncateEmail(email)).toBe(email);
  });

  it("truncates emails longer than 35 chars to 30 chars + '...'", () => {
    const email = "averylongemailaddressthatexceedslimit@example.com"; // > 35 chars
    expect(truncateEmail(email)).toBe(email.substring(0, 30) + "...");
  });

  it("returns empty string for null", () => {
    expect(truncateEmail(null)).toBe("");
  });

  it("returns empty string for undefined", () => {
    expect(truncateEmail(undefined)).toBe("");
  });

  it("returns empty string for empty string", () => {
    expect(truncateEmail("")).toBe("");
  });
});

describe("matchesSearchQuery", () => {
  const post = {
    title: "Build a Website",
    shortDesc: "Create a landing page",
    fullDesc: "Full description here",
    username: "johndoe",
  };

  it("returns true for an empty query", () => {
    expect(matchesSearchQuery(post, "")).toBe(true);
  });

  it("matches by title (case-insensitive)", () => {
    expect(matchesSearchQuery(post, "website")).toBe(true);
    expect(matchesSearchQuery(post, "WEBSITE")).toBe(true);
  });

  it("matches by shortDesc", () => {
    expect(matchesSearchQuery(post, "landing")).toBe(true);
  });

  it("matches by fullDesc", () => {
    expect(matchesSearchQuery(post, "full description")).toBe(true);
  });

  it("matches by username", () => {
    expect(matchesSearchQuery(post, "johndoe")).toBe(true);
  });

  it("returns false when no fields match", () => {
    expect(matchesSearchQuery(post, "notfound")).toBe(false);
  });

  it("handles posts with missing fields", () => {
    expect(matchesSearchQuery({}, "anything")).toBe(false);
  });
});

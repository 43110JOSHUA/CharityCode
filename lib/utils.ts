export type TimestampInput = Date | { toDate: () => Date } | string | number;

export function convertToDate(timestamp: TimestampInput): Date {
  if (timestamp instanceof Date) return timestamp;
  if (timestamp && typeof timestamp === "object" && "toDate" in timestamp) {
    return (timestamp as { toDate: () => Date }).toDate();
  }
  return new Date(timestamp as string | number);
}

export function getRepoName(url: string): string {
  try {
    const parts = url.split("/");
    return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
  } catch {
    return url;
  }
}

export function truncateEmail(email: string | null | undefined): string {
  if (!email) return "";
  return email.length > 35 ? email.substring(0, 30) + "..." : email;
}

export interface PostFilterData {
  title?: string;
  shortDesc?: string;
  fullDesc?: string;
  username?: string;
}

export function matchesSearchQuery(post: PostFilterData, query: string): boolean {
  if (!query) return true;
  const term = query.toLowerCase();
  return (
    post.title?.toLowerCase().includes(term) ||
    post.shortDesc?.toLowerCase().includes(term) ||
    post.fullDesc?.toLowerCase().includes(term) ||
    post.username?.toLowerCase().includes(term) ||
    false
  );
}

export interface SearchResult {
  searchId: string;
  count: number;
  message: string;
}

export interface SearchError {
  error: string;
  details?: string;
}

export interface ApifyRunInput {
  searchStringsArray: string[];
  maxCrawledPlaces: number;
}

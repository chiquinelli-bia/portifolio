export interface IBugReport {
  problema: string;
  onde: string;
  desejaRetorno: boolean;
  email?: string;
  status?: "open" | "in_progress" | "resolved";
  pageUrl?: string;
  userAgent?: string;
  createdAt?: any;
}

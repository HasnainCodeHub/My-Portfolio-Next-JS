// sanity.d.ts
declare module 'sanity' {
  export interface Rule {
    required(): Rule;
    min(length: number): Rule;
    error(message: string): Rule;
    uri(options?: {
      scheme?: string[];
      allowRelative?: boolean;
    }): Rule;
    // Add other methods as needed
  }
}

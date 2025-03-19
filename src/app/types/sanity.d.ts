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

  // Add additional exports if needed
  export function defineType(args: any): any; // Adjust this as necessary
  export function defineConfig(args: any): any; // Add this if you find it exists
  export function StructureResolver(args: any): any; // Add this if you find it exists
}




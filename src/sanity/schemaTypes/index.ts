import { type SchemaTypeDefinition } from '@sanity/types'; // Adjusted import
import project from './typescript/project'; // Adjust the path based on your file structure
import nextproject from './nextjs/nextproject';
import agent from './agenticai/agent';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project,nextproject,agent], // Make sure to use the correct variable name
};

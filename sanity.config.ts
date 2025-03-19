'use client'



import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity'; // Corrected import
import { structureTool } from 'sanity/structure'; // Corrected import

import { apiVersion, dataset, projectId } from './src/sanity/env';
import { schema } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

const config = defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }),

    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
export default config;
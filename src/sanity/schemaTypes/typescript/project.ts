import { defineType } from '@sanity/types';
import { Rule } from '@sanity/types'; // Import Rule

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Project Type',
  fields: [
    {
      name: 'projectName',
      type: 'string',
      title: 'Project Name',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(2)
          .error('Project name is required and must be at least 2 characters long.'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(10)
          .error('Description is required and must be at least 10 characters long.'),
    },
    {
      name: 'npmCommand',
      type: 'string',
      title: 'NPM Command',
      description: 'The NPM command to run the project',
      validation: (Rule: Rule) => Rule.required().error('NPM command is required.'),
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true, // Enables image cropping and resizing
      },
      validation: (Rule: Rule) => Rule.required().error('Background image is required.'),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Project Link',
      description: 'Open Project',
      validation: (Rule: Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }).error('Please provide a valid URL.'),
    },
  ],
});

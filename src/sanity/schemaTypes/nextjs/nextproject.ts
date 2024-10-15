import { defineType } from '@sanity/types';

export default defineType({
  name: 'nextproject',
  type: 'document',
  title: 'Project Next',
  fields: [
    {
      name: 'projectName',
      type: 'string',
      title: 'Project Name',
      description: 'Name of the project',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .error('Project name is required and must be at least 2 characters long.'),
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true, // Enables image cropping and resizing
      },
      validation: (Rule) => Rule.required().error('Background image is required.'),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .error('Description is required and must be at least 10 characters long.'),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Project Link',
      description: 'Open Project Live',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }).error('Please provide a valid URL.'),
    },
  
  ],
});

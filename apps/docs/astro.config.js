import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://open-curriculum.github.io',
  base: '/oer-pds',
  integrations: [
    starlight({
      title: 'Open Instructional Systems',
      description:
        'A pedagogical design system for open education — tokens, patterns, themes, renderers, and validation rules for making instructional intent portable, adaptable, automatable, and researchable.',
      social: {
        github: 'https://github.com/open-curriculum/oer-pds',
      },
      editLink: {
        baseUrl:
          'https://github.com/open-curriculum/oer-pds/edit/main/apps/docs/',
      },
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            type: 'application/json',
            href: '/ois-index.json',
            title: 'OIS Registry Index',
          },
        },
      ],
      sidebar: [
        {
          label: 'Overview',
          items: [
            {
              label: 'What is OIS?',
              link: '/concepts/open-instructional-systems',
            },
            {
              label: 'Pedagogical Styling',
              link: '/concepts/pedagogical-styling',
            },
            {
              label: 'Relationship to OERSchema',
              link: '/concepts/oerschema',
            },
            {
              label: 'AI Agent Readiness',
              link: '/concepts/ai-agent-readiness',
            },
          ],
        },
        {
          label: 'Tokens',
          autogenerate: { directory: 'tokens' },
        },
        {
          label: 'Patterns',
          autogenerate: { directory: 'patterns' },
        },
        {
          label: 'Themes',
          autogenerate: { directory: 'themes' },
        },
        {
          label: 'Renderers',
          autogenerate: { directory: 'renderers' },
        },
        {
          label: 'Validation',
          autogenerate: { directory: 'validation' },
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
        {
          label: 'Implementation',
          autogenerate: { directory: 'implementation' },
        },
        {
          label: 'For AI Agents',
          autogenerate: { directory: 'ai' },
        },
        {
          label: 'Research',
          autogenerate: { directory: 'research' },
        },
        {
          label: 'Specification',
          autogenerate: { directory: 'spec' },
        },
      ],
    }),
  ],
});

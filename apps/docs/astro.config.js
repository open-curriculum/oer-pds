import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const base = '/oer-pds';

export default defineConfig({
  site: 'https://www.open-curriculum.org',
  base,
  integrations: [
    starlight({
      title: 'OER Design System',
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
            href: `${base}/ois-index.json`,
            title: 'OER Design System Registry Index',
          },
        },
      ],
      sidebar: [
        {
          label: 'Start Here',
          items: [
            { label: 'Getting Started', link: '/getting-started' },
            { label: 'About the OER Design System', link: '/about' },
            { label: 'Glossary', link: '/glossary' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            {
              label: 'What is the OER Design System?',
              link: '/concepts/open-instructional-systems',
            },
            {
              label: 'Pedagogical Styling',
              link: '/concepts/pedagogical-styling',
            },
            {
              label: 'Pedagogical Tokens',
              link: '/concepts/pedagogical-tokens',
            },
            {
              label: 'Instructional Patterns',
              link: '/concepts/instructional-patterns',
            },
            {
              label: 'Pedagogical Themes',
              link: '/concepts/pedagogical-themes',
            },
            {
              label: 'Renderer Profiles',
              link: '/concepts/renderer-profiles',
            },
            {
              label: 'Validation Rules',
              link: '/concepts/validation-rules',
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

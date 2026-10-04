# AGENTS.md

## Project overview

This repository is a TypeScript React application built with webpack, Redux Toolkit, React Router, and i18next. The app is structured as a feature-oriented frontend with a clear layering split:

- `src/app/` — application shell, providers, routing setup, global styles
- `src/widgets/` — composed UI blocks that combine multiple smaller pieces
- `src/pages/` — route-level screens and page entry points
- `src/entities/` — domain/stateful business entities such as the counter
- `src/shared/` — reusable utilities, i18n config, UI primitives, and shared helpers

Use the existing folder boundaries when adding code. Prefer extending the nearest module instead of creating unrelated top-level utilities.

## Common commands

From the repo root:

- `npm install`
- `npm run start` — run the dev server with webpack
- `npm run build:dev` — development build
- `npm run build:prod` — production build
- `npm run test:unit` — run Jest tests
- `npm run lint` — ESLint for TypeScript/TSX files
- `npm run lint:fix` — auto-fix ESLint issues
- `npm run storybook` — run Storybook locally
- `npm run build-storybook` — build Storybook assets

## Architecture and conventions

### Imports and aliases

The project uses a simple path alias system via `tsconfig.json`:

- imports resolve from `src` via the wildcard alias
- prefer imports like `app/...`, `widgets/...`, `shared/...`, `entities/...`, `pages/...`
- do not add ad-hoc relative imports when a project alias already matches the target module

### Feature structure

Follow the same layout pattern used by the existing code:

- page components live under `src/pages/<Page>/ui/`
- feature/entity logic is grouped by domain under `src/entities/<Entity>/`
- reusable UI lives under `src/shared/ui/` or a widget under `src/widgets/<Widget>/`
- app-level wiring belongs under `src/app/providers/` 

### React / component patterns

- prefer functional components and typed props
- maintain the current naming style: PascalCase for components, camelCase for functions/variables
- if a component has a new feature, colocate related logic close to it
- keep UI and business logic separated when possible; use `entities` and `widgets` for domain composition, `shared` for generic primitives

### Styling

- the app uses SCSS with global theme files under `src/app/styles/`
- shared styling utilities are already centralized; prefer the existing `classNames` helper instead of introducing a new utility
- when adding styles, keep them aligned with the current SCSS architecture and theme variables

### Testing

- Jest is configured in `config/jest/jest.config.ts`
- the test environment is `jsdom`
- CSS and SVG imports are mocked via the Jest config
- when adding tests, keep them close to the feature or utility under test
- prefer testing behavior and rendered output over implementation details

### i18n and routing

- translations live under `public/locales/<lang>/...`
- route logic is centralized in app/provider and config patterns; use the established router structure instead of custom route wiring
- keep translations keyed consistently with the existing locale JSON files

## Do and do not

Do:

- match the repository’s existing patterns and naming conventions
- keep changes small and scoped to the relevant layer
- rely on existing aliases, providers, and shared utilities before creating new abstractions
- preserve the current structure of styles, tests, and page composition

Do not:

- create a different project architecture just for a small feature
- duplicate shared logic across layers
- add broad or generic abstractions before checking whether a shared module already exists
- bypass the existing app, widgets, entities, and shared boundaries without a clear reason

## Suggested follow-up customizations

If this repo grows further, the next useful additions would be a targeted React/TypeScript instruction file for component and hook patterns, and a dedicated UI-component-testing skill for Storybook/Jest conventions.

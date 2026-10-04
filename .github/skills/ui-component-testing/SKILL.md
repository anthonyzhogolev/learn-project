---
name: ui-component-testing
description: "Use when writing or improving unit tests for React UI components with Jest and React Testing Library. Covers rendering, props, user interaction, accessibility, edge cases, and validation with targeted test commands."
---

# UI Component Testing with RTL and Jest

## Goal

Create reliable unit tests for React components that verify behavior from the user’s point of view and stay stable as the UI evolves.

## Workflow

1. Inspect the component contract
   - Read the component API, required props, default values, and visible output.
   - Identify the behaviors users can observe: text, role, state, disabled state, validation, callbacks.
   - Convert each behavior into one or more focused tests.

2. Start with the smallest failing test
   - Use `render(...)` from `@testing-library/react`.
   - Query by `role`, `label`, `placeholder`, or visible text instead of implementation details.
   - Assert only what a user would notice in the DOM.

3. Cover user interaction flows
   - Simulate real behavior using `fireEvent` for simple events or `userEvent` when it is installed.
   - Verify callback calls, state transitions, and visible updates after interaction.
   - Test one interaction per test to keep failures easy to diagnose.

4. Add edge cases and accessibility checks
   - Include loading, empty, disabled, error, validation, and default-state scenarios.
   - Check accessible names, roles, labels, and ARIA states when relevant.
   - Validate keyboard and click behavior for interactive elements.

5. Keep tests readable and maintainable
   - Use descriptive test names like `renders title` or `calls onClick when pressed`.
   - Prefer helper setup patterns when multiple tests share the same render configuration.
   - Avoid snapshot testing unless the snapshot represents user-visible output and adds value.
   - Mock only external side effects; do not mock the component under test.

6. Run targeted validation
   - Execute the relevant Jest test file or test name.
   - Example:
     `npm run test:unit -- --runTestsByPath src/shared/ui/Button/Button.test.tsx`
   - Fix failures by checking the actual rendered behavior, not internal implementation details.

7. Completion checklist
   - Every critical behavior has coverage.
   - The test reads like a user story and is easy to understand.
   - Assertions use accessible queries and real DOM behavior.
   - The target suite passes without flaky or brittle checks.

## Decision points

- Presentational components:
  - Test rendering, props, default values, variants, and visible text.
- Interactive components:
  - Test click, submit, change, keyboard interaction, and callback behavior.
- Async UI:
  - Use `findBy*` and `waitFor` for loading and delayed rendering.
- Conditional rendering:
  - Assert visible state after props or toggles change.

## Example pattern

```tsx
import { fireEvent, render, screen } from '@testing-library/react'
import Button, { ThemeButton } from './Button'

describe('Button', () => {
  it('renders the label', () => {
    render(<Button>Save</Button>)

    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument()
  })

  it('calls onClick when pressed', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Save</Button>)

    fireEvent.click(screen.getByRole('button', { name: /save/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('applies the clear theme class', () => {
    render(<Button theme={ThemeButton.CLEAR}>Save</Button>)

    expect(screen.getByRole('button', { name: /save/i })).toHaveClass('clear')
  })
})
```

## Quality standards

- Prefer `getByRole`, `getByLabelText`, `getByText`, and `findBy*` queries.
- Assert on visible behavior and accessible state, not on private state or implementation details.
- Keep one assertion goal per test unless the behavior is tightly related.
- Maintain naming conventions and project structure.
- Use `jest-dom` matchers such as `toBeInTheDocument`, `toHaveClass`, and `toHaveTextContent`.

## When to stop

Stop when the target behavior is covered, the tests are clear to a teammate, and the relevant suite passes reliably.

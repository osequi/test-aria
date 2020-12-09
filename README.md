# test-aria

Playin' with react-aria and react-stately.

## tldr;

- Very precious foundations. Even so, it's a framework for building design systems.
- Perhaps lost of things / customizations / adaptations for a new design system has to be done manually.
- It's much better than React's Material UI. MUI is created by a bunch of individuals while this is backed up by a large corp.
- If one day a classic UI is needed Adobe Spectrum is the to-go detination.
- The whole stuff is very young (Summer 2020) and poorly documented. I mean the docs are fine, but cover only 1% of what's inside.

## react-stately

- https://react-spectrum.adobe.com/react-stately/index.html
- Provides cross-platform state management for a design system.
- Provides the foundation and core logic for a component library.
- It's very low level. First try to see if `react-aria` offers a higher level solution.

### Collections

- https://react-spectrum.adobe.com/react-stately/collections.html
- For lists, menus, selects, tables, trees, and grids.
- Offers:
  - Keyboard navigation.
  - Selection.
  - Loading data asynchronously.
  - Updating that data over time.
  - Virtualized scrolling for performance with large collections.
  - JSX API
- The full list follows:
  - Static data.
  - Dynamic data.
  - Async loading.
  - Sections/groups of data from a single source.
  - Sections from different sources.
  - Single and multiple selection (controlled and uncontrolled).
  - Controlled and uncontrolled _expanded states for components like trees and accordions_.
  - Marking items as selected, expanded, disabled, etc. prior to loading them from a server.
  - _Drag and drop_ of items.
  - Virtualization for large collections.
  - _Infinite scrolling_ to load more items on demand.

#### `<Item>`, `<Section>`

- For static collections.

#### `<ListBox>`

- For dynamic collections.
- Data comes form a React state.
- Collection items should be immutable.
- For display render props vs map is used. To _automatically cache the results of rendering_ each item and avoid re-rendering all items in the collection when only one of them changes. This has big performance benefits for large collections.

#### `useTreeData`

- For hierarchical collections.

## react-aria

- https://react-spectrum.adobe.com/react-aria/index.html
- Provides accessible UI primitives for a design system.
- Provides mouse, touch, keyboard, and screen reader interactions that have been tested across a wide variety of browsers, devices, and platforms.
- It's a collection of hooks => provides only business logic, doesn't interfere with styling.
- Supports SSR (`SSRProvider`) and automatic id generation (`useId`) / syncing with the server.

### Collections

- Implements the following collections:
  - `useListBox` - displays a list of options and allows a user to select one or more of them.
  - `useMenu` - displays a list of actions or options that a user can choose.
- Both of them implement only a subset of `react-stately` Collections like virtualized lists, but no hierarchy.

## react-spectrum

- It's a full design system.
- Lots of things to learn from.

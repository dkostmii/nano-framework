# nano-framework

Yeah, I must not call it "framework", but it's so hyped 😁

The idea of this project is to create API for rendering `Components` as in React (which is not framework ☝)

Try it without installing [here](https://dkostmii.github.io/nano-framework)

## How to start project

1. Install dependencies:

    ```Powershell
    npm install
    ```

2. Start the project:

    ```PowerShell
    npm run start
    ```

3. While experimenting with code, you may want to lint your code with **ESLint**:

    ```PowerShell
    npm run lint
    ```

    Also, you can use such plugin for VS Code, which saves a lot of time

## Concepts

- **Dependecies** (`deps`) - `Components` which are rendered first (are leafs of `Component` hierarchy)
- **Baking** - for `Component` which has children `Components` - rendering every children and including in current `Component`'s DOM tree
- **DOM tree** - `div` element which is returned after `Component` rendering
- **Rendering** - creation of `Component`'s **DOM tree**
- **Root `div`** - container, where the whole application **DOM tree** is rendered
- **Root `Component`** - `Component` which is highest in hierarchy
- **Render tree** - render **Root `Component`** into **Root `div`**
- **`Component` state** - some information projected from `Component` to its own **DOM tree** during **Rendering**
- **Set `Component` state** - change information inside component and **Rerender** it
- **Rerendering** - replace old `Component`'s **DOM tree** with new one (which includes projected info from state)

## How it works

1. Bake each `Component`

    After baking, every `Component`, which is included in `deps` for current `Component`, is rendered as a DOM tree.

2. Render each `Component`

    Current `Component` includes `baked` `Components` in its own DOM tree and returns it.

3. Render tree

    Render **root `Component`** into **root `div`**

4. Set `Component`'s state

    Change some information inside `Component` using its `setState(state, prevState)` method. Here `prevState` is merged with `state` object if former is provided.

5. Rerender `Component` after state update

    State update causes `Component` to be rerendered. Its old DOM tree is replaced with a new one (`baked` chunks are preserved)

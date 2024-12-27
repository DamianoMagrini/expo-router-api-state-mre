# Expo router API state MRE

Inconsistent behavior.

- **Behavior in development mode** (`yarn web`): Calling the API route multiple times resets its state even if it was not modified since the last invocation. Previous invocations are kept alive indefinitely.
- **Behavior in production mode with `output: 'server'`** (`yarn expo export -p web`, then `node server.js` and open `http://localhost:3000/`): Calling the API route multiple times preserves its state.

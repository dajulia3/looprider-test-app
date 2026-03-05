# looprider-test-app

A minimal Vite + React + TypeScript app used as a test fixture for [LoopRider](https://github.com/dajulia3/agent-ops). LoopRider's manual QA skill provisions worktree branches in this repo, extends the app through terminal and Claude Code sessions, then verifies CI/PR integration end-to-end.

**Not intended for production use.** Expect throwaway branches and test commits.

## Setup

```bash
npm install
npm run dev
```

## CI

GitHub Actions runs `tsc --noEmit` and `npm run build` on every push to `master` and on all PRs.

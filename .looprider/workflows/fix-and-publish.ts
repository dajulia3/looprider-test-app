/**
 * Fix and Publish — build, fix errors with Claude, rebuild, commit, push.
 *
 * Runs the build. If it fails, launches a Claude Code session to fix the
 * errors, then re-runs the build. On success, commits and pushes.
 */
import type { WorkflowContext } from "@looprider/workflow-sdk";

export default async function (ctx: WorkflowContext) {
  const build = await ctx.shell("build", { command: "npm run build" });

  if (build.status === "FAILED") {
    await ctx.agent("fix-errors", {
      prompt: `The build failed with the following output:\n\n${build.output}\n\nFix the TypeScript and build errors so that \`npm run build\` succeeds.`,
    });

    const rebuild = await ctx.shell("rebuild", { command: "npm run build" });

    if (rebuild.status === "FAILED") {
      return; // Still broken — stop here so the user can inspect
    }
  }

  await ctx.shell("commit", {
    command: 'git add -A && git commit -m "fix: resolve build errors"',
  });
  await ctx.shell("push", { command: "git push" });
}

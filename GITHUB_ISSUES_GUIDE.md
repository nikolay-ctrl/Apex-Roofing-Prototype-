# GitHub Issues Guide

Use this guide at the start of future development sessions in this repository. It keeps AI-assisted work tied to visible GitHub issues, clear scope, and reviewable follow-up.

## Starting Prompt

Use this prompt when beginning a new AI development chat:

```text
We are working in Apex-Roofing-Prototype.

Please read GITHUB_ISSUES_GUIDE.md first. Verify the repo status, current branch, open issues, and relevant milestones/labels before making changes. Continue from the existing GitHub issue workflow and keep work linked to issues.
```

## When To Create Issues

Create or update a GitHub issue when work is more than a tiny direct edit, when it affects user-facing behavior, when it changes repository process, or when it leaves follow-up work.

Do not create a new issue for trivial one-line fixes unless the user asks or the fix reveals a broader task.

Prefer updating an existing issue when the work is already covered by its goal or acceptance criteria. Create a new issue when the work has a distinct outcome, owner, risk, or review path.

## Issue Titles

Use concise, scannable titles with a type prefix:

- `[Feature]` for new user-facing behavior.
- `[Bug]` for broken or incorrect behavior.
- `[Chore]` for maintenance, tooling, documentation, or process work.
- `[Refactor]` for structure changes without intended behavior changes.
- `[Meta]` for tracking a group of related repository or planning tasks.

## Issue Body Template

Use this structure for new issues:

```markdown
## Goal
What outcome should this issue produce?

## Scope
- What is included?
- What is intentionally excluded?

## Acceptance Criteria
- [ ] Clear completion condition
- [ ] Clear completion condition

## Notes
Context, links, blockers, or implementation hints.
```

## Labels

Use labels to make issue lists useful. If labels are not available yet, define or request them as part of repository organization work.

Recommended core labels:

- `type: feature`
- `type: bug`
- `type: chore`
- `type: refactor`
- `type: docs`
- `priority: high`
- `priority: medium`
- `priority: low`
- `status: blocked`
- `status: ready`
- `status: in progress`
- `area: frontend`
- `area: workflow`
- `area: content`

## Milestones

Use milestones for groups of work that should be tracked together, such as a launch polish pass, repository setup pass, or feature release.

When working on an issue:

- Confirm whether it belongs to an existing milestone.
- Add it to the milestone if the issue clearly fits.
- Leave it unassigned if no milestone has been agreed.
- Create a follow-up issue instead of expanding the milestone scope silently.

## Status Updates

Keep GitHub issues current during meaningful work:

- Comment when implementation starts on a larger task.
- Comment when scope changes or blockers are found.
- Link related commits or pull requests.
- Update acceptance criteria when work is completed.
- Close the issue only when the acceptance criteria are satisfied.

For quick changes, a concise closing comment or linked commit is enough.

## Blockers

If blocked:

- Add a short comment explaining the blocker.
- Add or request the `status: blocked` label if labels are available.
- State the decision or access needed to continue.
- Avoid making unrelated changes while waiting.

## Pull Requests

When creating a pull request:

- Link the issue with `Closes #<number>` only if the PR fully completes the issue.
- Use `Refs #<number>` if it only contributes to the issue.
- Keep the PR summary focused on user-facing and review-relevant changes.
- Include a short test plan or explain why tests were not run.

## AI Agent Checklist

At the start of work:

- [ ] Read this guide.
- [ ] Check `git status --short --branch`.
- [ ] Confirm the current branch and remote state.
- [ ] Review relevant open issues.
- [ ] Decide whether to update an existing issue or create a new one.

During work:

- [ ] Keep changes scoped to the issue or user request.
- [ ] Avoid committing unrelated files.
- [ ] Note blockers or scope changes in the relevant issue.

Before finishing:

- [ ] Verify the changed files.
- [ ] Run available checks when practical.
- [ ] Summarize what changed and what was not verified.
- [ ] Update or close the related issue when acceptance criteria are met.

## Current Repository Organization Issues

- [#5 `[Meta] Repository Organization Setup`](https://github.com/FlightZzY/Apex-Roofing-Prototype-/issues/5)
- [#6 `[Chore] Establish Workflow and Issue Tracking`](https://github.com/FlightZzY/Apex-Roofing-Prototype-/issues/6)

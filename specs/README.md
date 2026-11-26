# Specs
Manual test specs for Testspace: Markdown with Liquid, one heading per test case. Testspace reads this folder because of `.testspace.yml` at the root of the repository.

- `account/` and `power/`: example specs. `account/sign-in.md` runs an automated fixture; `power/turn-off-power.md` uses variables and loops from its front matter.
- `_includes/`: steps shared between specs.
- `_config.yml`, `Gemfile`, `index.markdown`: an optional Jekyll setup to preview the specs on your desktop. See [Desktop Preview](https://help.testspace.com/manual/desktop-preview).

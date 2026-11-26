# Manual tests kept in GitHub

An example of manual test specs kept in a repository and run in [Testspace](https://www.testspace.com). The specs are Markdown with [Liquid](https://shopify.github.io/liquid/), changed through commits and pull requests like the code; testers run them in Testspace test sessions.

- [`.testspace.yml`](.testspace.yml) turns on manual testing for the repository.
- [`specs/`](specs) holds the specs and the steps they share (`specs/_includes`).
- [`.github/workflows/testspace.yml`](.github/workflows/testspace.yml) runs a spec's automated fixture: Testspace starts it when a tester starts [`specs/account/sign-in.md`](specs/account/sign-in.md).

To see specs being run, with test sessions and issues, browse the [live demo](https://s2.testspace.com/projects/EXAMPLE:MANUAL). It needs no account.

Read more: [Manual testing](https://www.testspace.com/github-test-management) · [Implementing manual tests using GitHub repositories](https://www.testspace.com/blog/github-test-case-management) · [Writing a spec](https://help.testspace.com/manual/implementation-spec) · [Automated fixtures](https://help.testspace.com/manual/automated-fixtures)

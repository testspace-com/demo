# Demo Results
The repo is for *demonstration purposes* only. There is a set of `pre-canned result` XML files under the *fake.results* used folder used for pushing content to Testspace. 

The results highlight the following:

- `Failure Tracking Management`
- `Built-in Flaky analysis`
- `Exemptions` (i.e. muting failures)
- `Grouping Similar Failure Types`
- and more

For general information on Testspace, refer to the [help documentation](https://help.testspace.com).

## Badges

[![Space Metric](https://munderseth.stridespace.com/spaces/20816/badge?token=c71c3491a97523d234adddfff5b2a96453c40dcb)](https://munderseth.stridespace.com/spaces/20816?utm_campaign=badge&utm_medium=referral&utm_source=test "Test Cases") [![Space Metric](https://munderseth.stridespace.com/spaces/20816/metrics/42601/badge?token=5bcf0084de221044e8723ac8c55783deeadda701)](https://munderseth.stridespace.com/spaces/20816/current/Issues?utm_campaign=badge&utm_medium=referral&utm_source=issues "Issues")

## Scripts 

The following scripts are used for generating results:

- `push.clean.sh` scripts clear out past failure tracking.
- `push.setup.sh` script creates a set of results for Triage.

Use the two GitHub Workflows to manual execute the corresponding shell scripts via the *Workflow Dispatch*
- `clean.yml`
- `setup.yml`

The GitHub workflows require the following secrets to be available:

- `TESTSPACE_TOKEN`
- `TESTPACE_DOMAIN` 
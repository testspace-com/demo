# Demo Results
The repo is for *demonstration purposes* only. There is a set of `pre-canned result` XML files under the *fake.results* used folder used for pushing content to Testspace. 

The results highlight the following:

- `Failure Tracking Management`
- `Built-in Flaky analysis`
- `Exemptions` (i.e. muting failures)
- `Grouping Similar Failure Types`
- and more

For general information on Testspace, refer to the [help documentation](https://help.testspace.com).

## Scripts 

The following scripts are used for generating results:

- `push.clean.sh` script pushes *5 Results* to clear out all past failure tracking. 
- `push.setup.sh` script pushes *4 Results* to create a set of different types of tracked failures. 

Use the two GitHub Workflows to manual execute the corresponding shell scripts via the *Workflow Dispatch*
- `clean.yml`
- `setup.yml`

The GitHub workflows use the `inputs` to set the domain. The default is `testspace`. 

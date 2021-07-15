## Demo Tour
A Demo Tour is available at [demo.testspace.com](https://demo.testspace.com). There are some publicly viewable *real test projects* (i.e. Testspace, Stride, etc.) and a fake test project called `testspace-com:demo`. To invoke the tour click on the following link: 

> https://demo.testspace.com

A demonstration is using the **Hopscotch** framework from LinkedIn. 

## Fake Results
The fake results contained in the `testspace-com:demo` project are for *demonstration purposes* only. There is a set of `pre-canned result` XML files under the *fake.results* used for pushing content to Testspace. 

The *fake results* highlight the following:

- `Failure Tracking Management`
- `Built-in Flaky analysis`
- `Exemptions` (i.e. muting failures)
- `Grouping Similar Failure Types`
- and more

For general information on Testspace, refer to the [help documentation](https://help.testspace.com).

### Scripts 

The following scripts are used for generating fake results:

- `push.clean.sh` script pushes *5 Results* to clear out all past failure tracking. 
- `push.setup.sh` script pushes *4 Results* to create a set of different types of tracked failures. 

Use the two GitHub Workflows to manual execute the corresponding shell scripts via the *Workflow Dispatch*
- `clean.yml`
- `setup.yml`

The GitHub workflows use the `inputs` to set the domain. The default is `testspace`. 

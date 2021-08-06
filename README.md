## Demo 
This demo Testspace project is available at [testspace-com:demo](https://s2.testspace.com/projects/testspace-com:demo). To invoke the tour click on the following link: 

> https://s2.testspace.com/projects/testspace-com:demo

<br>

[![Space Metric](https://s2.testspace.com/spaces/145811/badge?token=abd9fb053d807511f04d580d4a33c0c339f83f9b)](https://s2.testspace.com/spaces/145811?utm_campaign=badge&utm_medium=referral&utm_source=test "Test Cases") [![Space Metric](https://s2.testspace.com/spaces/145811/metrics/158512/badge?token=5f668b3435e44885d4891097ee77f89dd2df4862)](https://s2.testspace.com/spaces/145811/current/Code%20Coverage?utm_campaign=badge&utm_medium=referral&utm_source=coverage "Code Coverage (lines)") [![Space Metric](https://s2.testspace.com/spaces/145811/metrics/152878/badge?token=a4490c3a7bcae7a2c5c65e72706b820c463608d5)](https://s2.testspace.com/spaces/145811/current/Issues?utm_campaign=badge&utm_medium=referral&utm_source=issues "Issues")

## Fake Results
The fake results contained in the `testspace-com:demo` project are for *demonstration purposes* only. There is a set of `pre-canned result` XML files under the *fake.results* used for pushing content to Testspace. 

The *fake results* highlight the following:

- `Failure Tracking Management`
- `Built-in Flaky analysis`
- `Exemptions` (i.e. muting failures)
- `Grouping Similar Failure Types`
- and more

For general information on Testspace publishing, refer to the [help documentation](https://help.testspace.com/publish/overview).

### Scripts 

The following scripts are used for generating fake results:

- `push.clean.sh` script pushes *5 Results* to clear out all past failure tracking. 
- `push.setup.sh` script pushes *4 Results* to create a set of different types of tracked failures. 

Use the two GitHub Workflows to manual execute the corresponding shell scripts via the *Workflow Dispatch*
- `clean.yml`
- `setup.yml`

The GitHub workflows use the `inputs` to set the domain. The default is `testspace`. 

## Specs
The repo also contains a set of *fake* test specs for *demonstration purposes only*. The *fake specs* highlight the following:

- `Specs` ca be co-located with automated tests 
- Manual results are `carried` from previous session(s) when new test automated results are published


For general information on Testspace Manual Test Framework, refer to the [help documentation](https://help.testspace.com/manual/overview).

### Desktop Preview
To preview the `specs` on console:

Install:
```
cd specs
bundle install
```

Run:
```
cd specs
bundle exec jekyll serve
```

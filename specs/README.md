# Test Specs
The **Results Demo** also contains a few "fake" `Test Specs` for demonstration purposes. Manual testings can be easily integrated with automated testing, even though the execution of the tests can occur at different times. 

- Logout
- Sign in (uses a `Fake` automated fixture)
- Sign up
- Turn off power
- Turn on power

For more information on the manual testing, refer [here](https://help.testspace.com/manual/overview). 

Note that the example `Test Specs` leverage the [variables](https://help.testspace.com/manual/implementation-spec#variables) and [include](https://help.testspace.com/manual/implementation-spec#includes) features, minimizing typing and making them easier to maintain.

## Run Specs Locally
Install dependencies.

```
cd specs
bundle install
```

View the Specs using Jekyll in the *specs* folder.

```
cd specs
bundle exec jekyll serve 
```

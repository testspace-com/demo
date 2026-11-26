---
testspace:
title: Sign In
before:
  name: github::setup
  description: Create the test account
  payload:
    name: Sam
    password: 1234
description: Checks the sequence for signing into the system. 
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
This spec runs an automated fixture before its cases: the `setup` job in `.github/workflows/testspace.yml`, with the `payload` above.

## [setup]
Verify states before checking specific cases. 

Mode     | Check
-------- | -----
New      | Sign Up
Existing | Credentials


## Credentials
Confirm credentials are valid.

- Exists for the configured duration
- Logged in with the primary account


{% assign case_name = 'Self Verify: ' | append: spec.title %}
{% include example-case.md name=case_name %}

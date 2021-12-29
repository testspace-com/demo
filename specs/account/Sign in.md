---
testspace:
title: Sign In
before:
  name: github::setup
  description: SETUP FIXTURE
  input:
    name: Sam
    password: 1234
description: Checks the sequence for signing into the system. 
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
This example uses an automated setup fixture. 

> USES A AUTOMATED FIXTURE 🎁

## [setup]
Verify states before checking specific cases. 

Mode     | Check
-------- | -----
New      | Sign Up
Existing | Credentials

<br>

## Credentials
Confirm credentials are valid.

- Exists for the configured duration
- Logged in with the primary account


{% assign case_name = 'Self Verify: ' | append: spec.title %}
{% include example-case.md name=case_name %}

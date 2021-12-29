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
{% include example-intro.md %}

> USES A AUTOMATED FIXTURE 🎁

## Credentials
Confirm credentials are valid.

- Exists for the configured duration
- Logged in with the primary account


{% assign case_name = 'Self Verify: ' | append: spec.title %}
{% include example-case.md name=case_name %}

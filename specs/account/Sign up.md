---
testspace:
title: Sign Up
description: Checks the sequence of signing up for using the account. 
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{% include example-intro.md %}

## Check for existing account
Confirm that the user has an existing account.

- Confirm database contains the user
- Verify proper usage profile


## Credentials
Confirm credentials are valid.

- Exists for the configured duration
- Logged in with a primary account

{% include example-case.md name="Self Verify 3" %}
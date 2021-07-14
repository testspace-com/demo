---
testspace:
title: Sign in
description: Checks the sequence of signing into the system. 
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{% include example-intro.md %}


## Credentials
Confirm credentials are valid.

- Exists for the configured duration
- Logged in with the primary account


{% include example-case.md name="Self Verify" %}

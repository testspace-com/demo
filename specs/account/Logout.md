---
testspace:
title: Logout
description: Checks the sequence of logs from the staging server. 
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{% include example-intro.md %}

## Still Logged in
Confirm the credentials are valid.

- Exists for the configured duration
- Logged in with the primary account


{% assign case_name = 'Self Verify: ' | append: spec.title %}
{% include example-case.md name=case_name %}

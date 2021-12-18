---
testspace:
title: Log out
description: Checks the sequence of logging out of the system. 
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
{% include example-intro.md %}

## Still Logged in
Confirm the credentials are valid.

- Exists for the configured duration
- Logged in with the primary account


{% include example-case.md name="Self Verify" %}

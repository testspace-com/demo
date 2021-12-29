---
testspace:
title: Turn off power
matrix: # test different systems
  - name: Idle
    timeout: 27 seconds
    reqs: "[reqs](https://github.com/testspace-com/demo/issues/5)"
  - name: Shutdown
    timeout: 14 seconds
    reqs: "[reqs](https://github.com/testspace-com/demo/issues/6)"
cycle: 77
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
This test verifies shutdown stages for each device. The device type will always be displayed during the power cycle shutdown sequence.

- The timeout specific to each device type required for verification
- Any Device specifics requirements can be found on [here](https://github.com/testspace-com/demo/issues?q=is%3Aissue+is%3Aopen+label%3Areqs) filtering on the `reqs` label. 

## [setup]
The following is the requirement matrix:

State | Timeout | Info
-----| --------| ----- 
{%- for state in spec.matrix %}
  {{ state.name }} | {{ state.timeout}} | {{state.reqs }} 
{%- endfor %}

<br>
<br>


## [teardown]
Make sure to remove device from any external contact.

## Device 457.A check
This device requires the switch **cycle** to be set to `{{ spec.cycle }}`. 

{% for state in spec.matrix %}
* Sequence timeout for `{{ state.name}}`: {{ state.timeout -}}   
{% endfor %}


## Device 777.a check
This device requires the switch **cycle** to be set to `{{ spec.cycle | plus: 100 }}`. 

{% for state in spec.matrix %}
* Sequence timeout for `{{ state.name}}`: {{ state.timeout -}}   
{% endfor %}


## Beta Device 4.0.01 check
This device requires the switch **cycle** to be set to `{{ spec.cycle | plus: 200 }}`. 

{% for state in spec.matrix %}
* Sequence timeout for this `{{ state.name}}`: {{ state.timeout -}}   
{% endfor %}


## Turn off delay
The turn off delay verification is used for input configuration.

- Go back on line to check for switch-on
- Check UI mode display

---
testspace:
title: Turn off power
matrix: # test different systems
  - name: Idle
    timeout: 27 seconds
    reqs: "[details](https://staging7.newco.com/reqs)"
  - name: Shutdown
    timeout: 14 seconds
    reqs: "[details](https://staging7.newco.com/reqs)"
---

{% if page %} {% assign spec = page %} {% endif %}

# {{ spec.title }}
This test verifies shutdown stages for each device. The device type will always be displayed during the power cycle shutdown sequence.

- The timeout specific to each device type required for verification
- Any Device specifics requirements can be found on the staging site.

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
This device requires the switch **cycle** to be set to `77`. 

{% for state in spec.matrix %}
* Sequence timeout for this `{{ state.name}}`: {{ state.timeout -}}   
{% endfor %}


## Device 777.a check
This device requires the switch **cycle** to be set to `77`. 

{% for state in spec.matrix %}
* Sequence timeout for this `{{ state.name}}`: {{ state.timeout -}}   
{% endfor %}


## Beta Device 4.0.01 check
This device requires the switch **cycle** to be set to `77`. 

{% for state in spec.matrix %}
* Sequence timeout for this `{{ state.name}}`: {{ state.timeout -}}   
{% endfor %}


## Turn off delay
The turn off delay verification is used for input configuration.

- Go back on line to check for switch-on
- Check UI mode display

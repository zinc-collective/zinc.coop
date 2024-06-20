---
layout: layouts/default.njk
title: About Us
---

Some members of the Zinc Collective.

{% for person in people -%}
<div class="person">
  {% if person.image -%}
    <img src="{{ person.image }}" alt="{{ person.name }}"/>
  {% endif -%}
  <div class="person-basics">
    <h3>{{ person.name }}</h3>
    {{ person.type }}<br/>
    {{ person.location }}
    <ul>
      {% for name, url in person.links -%}
      <li><a href="{{ url }}">{{ name }}</a></li>
      {% endfor -%}
    </ul>
  </div>

  <div class="person-specialties">
    <h4>Specialties:</h4> {{ person.specialties }}
  </div>

  <div class="person-specialties">
    <h4>Interests:</h4> {{ person.interests }}
  </div>
  <p>{% markdown %}{{ person.bio }}{% endmarkdown %}</p>

</div>
{% endfor -%}

---
layout: page.njk
title: Blog Posts
---
{% for post in collections.blog | reverse | limit(10) %}
  {% if page.url != '/' -%}
    - [{{ post.data.title }}]({{ post.url | url}})
  {% endif -%}
{% endfor %}
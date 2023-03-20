---
layout: page.njk
title: Blog Posts
---
{% for post in collections.blog | reverse | limit(10) %}
  {% if post.data.title != 'Blog Posts' -%}
    - [{{ post.data.title }}]({{ post.url | url}}) 
  {% endif -%}
{% endfor %}
---
layout: page.njk
title: Blog Posts
---
{% for post in collections.blog | reverse | limit(10) %}
- [{{ post.data.title }}]({{ post.url | url}})
{% endfor %}
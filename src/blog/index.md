---
layout: page.njk
title: Blog Posts
pagination:
  data: collections.blog
  size: 5
  reverse: true
  alias: posts
---

{% for post in posts %}
  {% if post.url != page.url %}
    <h3><a href="{{ post.url | url }}" class="collection-heading">{{ post.data.title }}</a></h3>
    <p>{{ post.date | date('MMMM Do, YYYY') }}</p>
    <p>{{ post.templateContent | safe }}</p>
  {% endif %}
{% endfor %}

{% if pagination.href.previous %}
  <a href="{{ pagination.href.previous }}">Previous</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{ pagination.href.next }}">Next</a>
{% endif %}
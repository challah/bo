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
    <!-- {% if post.data.tags %}
      <p>Tags: {{ post.data.tags | join(', ') }}</p>
    {% endif %} -->
  {% endif %}
{% endfor %}

{% if pagination.pageNumber > 0 %}
  <a href="/bo/blog/{{ pagination.pageNumber }}">Previous</a>
{% endif %}
{% if pagination.pageNumber + 1 < pagination.pages.length %}
  <a href="/bo/blog/{{ pagination.pageNumber + 2 }}">Next</a>
{% endif %}
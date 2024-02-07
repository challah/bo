---
layout: page.njk
title: Blog Posts
pagination:
  data: collections.blog
  size: 3
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

<div class="pagination">
  {% if pagination.previous %}
    <a href="{{ pagination.href.previous | url }}" class="pagination__prev">&larr; Prev Page</a>
  {% endif %}
  {% if pagination.next %}
    <a href="{{ pagination.href.next | url }}" class="pagination__next">Next Page &rarr;</a>
  {% endif %}
</div>
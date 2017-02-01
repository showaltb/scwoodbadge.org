---
---

{% for post in site.posts %}
# [{{ post.title }}]({{ site.baseurl }}{{ post.url }})
<p class="meta page-date">Posted {{ post.date | date_to_string }}</p>
{{ post.content }}
----
{% endfor %}

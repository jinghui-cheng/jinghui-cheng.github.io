---
layout: page
permalink: /teaching/
title: Teaching
---

<div class="news">
    {% if site.teaching %}
    <table>
        {% assign course = site.teaching | reverse %}
        {% for item in course%}
        <tr>
            <td class="date">{{item.meta}}</td>
            <td class="announcement">
                {% if item.inline %}
                    {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
                {% else %}
                    <a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
                {% endif %}
            </td>
        </tr>
        {% endfor %}
    </table>
    {% endif %}
</div>
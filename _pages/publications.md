---
layout: page
title: Publications
display-title:
  Publications &nbsp; &nbsp;
  <div style="display:inline-block;">
    <a target="_blank" href="https://scholar.google.com/citations?user=ebhZJVEAAAAJ"><img alt="Google Scholar Profile" src="/assets/img/googlescholar.png" height="23px"/></a> &nbsp;
    <a target="_blank" href="https://www.researchgate.net/profile/Jinghui_Cheng"><img alt="ReseachGate Profile" src="/assets/img/researchgate.png" height="23px"/></a> &nbsp;
    <a target="_blank" href="http://dblp.uni-trier.de/pers/hd/c/Cheng:Jinghui"><img alt="dblp Profile" src="/assets/img/dblp.png" height="23px"/></a>
  </div>
permalink: /publications/
description: #Publications by categories in reversed chronological order. Generated by jekyll-scholar.
years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2010]
---

{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

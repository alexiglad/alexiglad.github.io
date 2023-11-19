---
layout: home
title: Home
---
<div class="content-wrapper">
<style>
.headshot {
  width: 1500px;
  height: auto;
}
</style>

<style>
  .separator-line {
    border-bottom: 1px solid #eaeaea; /* Gray line, 1px thick */
    margin-bottom: 20px; /* Space below the line */
  }
</style>

<style>
.profile-image-container {
    margin-right: 20px;
}
</style>
<style>
.content-wrapper {
  display: flex;
  align-items: flex-start;
}
</style>
  <div class="profile-image-container" style="margin-top: 35px;">
    <img src="/assets/Headshot.png" alt="Alexi" class="headshot" />
  </div>



  <div class="main-content">
    {% include about.html %}
    
  </div>
  
</div>

{% include publications.html %}
{% include news.html %}
{% include services.html %}

<div class="separator-line">
<a href="/blog.html" style="font-size: 24px;">Read My Blog on various AI opinions!</a>
</div>

{% include socials.html %}



<div>
    <a href="assets/Alexi_Gladstone_CV.pdf" style="font-size: 24px;" >Download my CV</a> <br>
    <a href="assets/Alexi_Gladstone_Resume.pdf" style="font-size: 24px;">Download my Resume</a>
</div>



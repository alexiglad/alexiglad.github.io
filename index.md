---
layout: home
title: Home
---
<div class="content-wrapper">
<style>
.headshot {
  width: 1300px;
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
  <div class="profile-image-container" style="margin-top: 80px;">
    <img src="/assets/BestHeadshot.jpg" alt="Alexi" class="headshot" />
  </div>



  <div class="main-content">
    {% include about.html %}
    
  </div>
  
</div>

{% include publications.html %}
<div class="separator-line">
<a href="/blog.html" style="font-size: 24px;">Read my blogs!</a>
</div>

{% include news.html %}

{% include services.html %}
{% include socials.html %}



<div>
    <a href="assets/Alexi_Gladstone_CV.pdf" style="font-size: 20px;" >Download my CV</a> <br>
    <a href="assets/Alexi_Gladstone_Resume.pdf" style="font-size: 20px;">Download my Resume</a>
</div>



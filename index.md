---
layout: home
title: Home
---
<div class="content-wrapper">
<style>
.headshot {
  width: 600px;
  height: auto;
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
  <div class="profile-image-container">
    <img src="/assets/Headshot.png" alt="Alexi" class="headshot" />
  </div>



  <div class="main-content">
    {% include about.html %}
    
  </div>
  
</div>
{% include publications.html %}
{% include news.html %}
{% include services.html %}
{% include socials.html %}
[Download my resume](assets/Alexi_Gladstone_Resume.pdf)



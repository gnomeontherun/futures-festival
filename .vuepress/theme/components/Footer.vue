<template>
<div>
  <footer class="footer" cds-layout="horizontal">
    <div class="footer-logo">
      <img src="/images/apf-logo.png" width="120" alt="Association of Professional Futurists Logo">
    </div>
    <p class="footer-text">&copy; 2020 Futures Festival - Organized by the <a href="https://apf.org">Association of Professional Futurists</a></p>

    <nav cds-layout="display@sm:none" class="center">
      <a href="/#call-for-speakers">Call For Speakers</a>
      <a href="/#registration">Register</a>
      <a href="/#archives">Archives</a>
      <a href="about.html">About Us</a>
    </nav>
  </footer>
  <ul class="share">
    <li><a href="mailto:info@futuresfestival.online"><img src="/images/email.png" aria-label="Send us an email" alt="Send us an email" /></a></li>
    <li><a href="https://www.instagram.com/futuresfestival.online"><img src="/images/instagram.png" aria-label="Visit our Instagram page" alt="Visit our Instagram page" /></a></li>
    <li><a href="https://web.facebook.com/futuresfestival.online"><img src="/images/facebook.png" aria-label="Visit our Facebook page" alt="Visit our Facebook page" /></a></li>
    <li><a href="https://twitter.com/profuturists?lang=en"><img src="/images/twitter.png" aria-label="Visit our Twitter page" alt="Visit our Twitter page" /></a></li>
    <li><a href="https://www.linkedin.com/company/association-of-professional-futurists/"><img src="/images/linkedin.png" aria-label="Visit our LinkedIn page" alt="Visit our LinkedIn page" /></a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="css">
.footer {
  border-top: 1px solid #ccc;
  padding-top: 30px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}
.footer-logo {
  margin-right: 30px;
}
.footer-text {
  line-height: 24px;
}
.footer nav a {
  display: block;
}

/* Share */
.share {
  background: #941B80;
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 100;
  padding: 2px;
}
.share li {
  list-style: none;
  padding: 12px 6px;
}
.share li img {
  width: 20px;
}
@media (max-width: 768px) {
  .share {
    margin: 0;
    position: static;
    display: flex;
    justify-content: center;
  }
  .share li a {
    display: inline-block;
    vertical-align: middle;
  }
}
</style>

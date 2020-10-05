<template>
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
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="css">
.footer {
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
</style>

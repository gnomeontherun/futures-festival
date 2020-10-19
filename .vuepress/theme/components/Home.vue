<template>
<main cds-layout="vertical gap:lg align:horizontal-stretch" class="add-spacing">

  <!-- Banner -->
  <div cds-layout="vertical gap:md align:horizontal-stretch">
    <p class="showcase center">Showcasing our collective stories</p>
    <img class="showcase-img" src="/images/futures.svg" alt="Full Spectrum Futures">
    <div cds-layout="align:center" class="center"><h2 class="header-3">Saturday <b>October 24, 2020</b><br /> <time id="start" datetime="2020-10-24 14:00UTC">07:00</time> to <time id="end">19:00 UTC-5</time></h2></div>
    <p class="center">Online Event - Free to all!</p>
    <p class="center"><a href="https://www.apf.org/events/register.aspx?id=1397920" class="register-link">Register Now!</a></p>
    <p class="center">Join the conversation using #FuturesFest20  #FullSpectrumFutures </p>
  </div>

  <!-- Intro -->
  <div cds-layout="grid gap:lg">
    <div cds-layout="display:none display@sm:block col@sm:3">
      <img src="/images/stacks.png" alt="Stacks of shapes" class="max-img" style="padding-top: 40px;">
    </div>
    <div cds-layout="col@sm:9 col@xs:12" class="padding-left-xl">
      <h2 class="header-2">2020 continues to change our lives in dramatic ways. Globally.</h2>
      
      <p>Over the course of the last two years, we are proud that Futures Festival has become a free public knowledge sharing event centered on Futures Thinking. In our efforts to finalize the 2020 theme, it dawned on us, that we don’t want to jump themes every year. In fact, we want to stay committed to the same one that has been at the core of our event from its inception: that of Inclusivity and Plurality, and have each year, instead, look at different aspects and angles. This remains a feeling of critical importance with each passing year.</p>

      <p>We all know that 2020 is continuing to change our lives in dramatic ways. Globally. To use our theme last year - ‘radical transformations’ are unfolding in front of us. There is an aftermath of confusion, pain, and loss, but also that of new opportunities and possibilities.</p>

      <p>Because after Collapse comes Transformation, this year we open space for dissent; we put emphasis on the spectrum of views, and voices needed to collectively create our alternative futures. Our festival focus this year, Full Spectrum Futures, is about radical unity.</p>
      <a id="call-for-speakers"></a>
    </div>
  </div>

  <!-- Registration -->
  <h2 class="header-1 center" cds-layout="align:center">Registrations <span class="header-1-alt">Open</span></h2>
  <div cds-layout="grid gap:lg" >
    <div cds-layout="col@sm:12 col@md:3">
      <div cds-layout="grid gap:lg">
        <div cds-layout="col@sm:4 col@md:12 display:none display@sm:block" class="center">
          <img src="/images/apf-logo-alt.png" style="max-width: 150px;" />
        </div>
        <div cds-layout="col@sm:8 col@md:12">
          <p class="text-justify">The Association of Professional Futurists is a global community of futurists, dedicated to promoting professional excellence and demonstrating the value of strategic foresight and futures studies for their clients and/or employers.</p>
        </div>
      </div>
    </div>
    <div cds-layout="col@sm:12 col@md:8" class="padding-left-xl">
      <h3 class="header-2 clear-margin-top">Register for Futures Festival 2020</h3>
      <p>Tickets to the 2020 Futures Festival are now available online. Last year over 600 people from around the world came together to engage with 30 diverse and insightful sessions. We invite you to join the conversation!</p>
      <p>Registration is required for each individual who wishes to attend the Futures Festival 2020. It's easy to sign up. And, it’s free (donation optional).</p>
      <p>&nbsp;</p>
      <p class="right"><a href="https://www.apf.org/events/register.aspx?id=1397920" class="register-link-alt">Register Now!</a></p>
    </div>
  </div>

  <!-- Sessions -->
  <h2 class="header-1 center" cds-layout="align:center">Sessions</h2>
  <div cds-layout="grid gap:lg" class="clear-margin-bottom">
    <div cds-layout="col@sm:12 col@md:3" v-for="session in sessions">
      <router-link :to="session.path">
        <img :src="session.frontmatter.image" alt="session.title" class="max-img" />
      </router-link>
    </div>
  </div>
  <div>
    <p class="right"><a href="/sessions/" class="register-link">See All Sessions &raquo;</a></p>
  </div>

  <!-- Speakers -->
  <h2 class="header-1 center" cds-layout="align:center">Speakers</h2>
  <div cds-layout="grid gap:lg" class="clear-margin-bottom">
    <div cds-layout="col@sm:12 col@md:3" v-for="session in sessions">
      <router-link :to="session.path">
        <img :src="session.frontmatter.speakers[0].image" alt="session.frontmatter.speakers[0].title" class="max-img" />
      </router-link>
    </div>
  </div>
  <div>
    <p class="right"><a href="/speakers/" class="register-link">See All Speakers &raquo;</a></p>
  </div>

  <!-- Archives -->
  <div cds-layout="vertical gap:md align:horizontal-stretch" id="archives">
    <h2 class="header-1 center">Archives</h2>
    <p class="center">You can view all videos from previous festivals on Vimeo!</p>
    <p class="center"><a href="https://vimeo.com/channels/radicaltransformations">2019 - Radical Transformations</a></p>
    <p class="center"><a href="https://vimeo.com/channels/diversefutures">2018 - Diverse Futures</a></p>
  </div>
</main>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    sessions() {
      return this.$site.pages.filter(page => page.regularPath.substring(0, 11) === '/_sessions/').slice(0, 4);
    }
  }
}
</script>

<style lang="css">
.showcase {
  color: var(--ff-blue);
  letter-spacing: 3px;
  font-weight: bolder;
}
.max-img {
  max-width: 100%;
}
.padding-left-xl {
  padding-left: 2rem;
}
@media (max-width: 767px) {
  .padding-left-xl {
    padding-left: 0;
  }
}
.register-link {
  color: white;
  background: var(--ff-blue);
  padding: 6px 100px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.25rem;
}
.register-link-alt {
  color: white;
  background: var(--ff-red);
  padding: 6px 80px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.25rem;
}
@media (max-width: 768px) {
  .register-link, .register-link-alt {
    padding: 6px 20px;
  }
}
</style>

<template>
<main cds-layout="vertical gap:lg align:horizontal-stretch" class="add-spacing">

  <!-- Banner -->
  <div cds-layout="vertical gap:md align:horizontal-stretch">
    <div><img class="showcase-img" src="/images/header-banner.png" alt="Shifting from Me to We"></div>
    <h2 class="showcase center">• Achieving positive impact<br/> through collective journeys •</h2>
    <div cds-layout="align:center" class="center">
      <h2 class="date">October 30, 2021</h2>
      <h3 class="time"><time id="start" datetime="2020-10-30 14:00UTC">07:00</time> to <time id="end">19:00 UTC-5</time></h3>
      </div>
    <!-- <p class="center">Online Event - Free to all!</p> -->
    <p class="center">Join the conversation using #ShiftingFromMeToWe and #FuturesFest21 </p>
    <p class="center">Registration coming soon!</p>
    <p class="center"><a href="https://docs.google.com/forms/d/18_FIJitIgYklewM3zIe4ewEwP2Esq7kcyRUQu-6J6F4/edit">Call for speakers for Futures Festival, deadline extended to October 11!</a></p>
    <!-- <p class="center"><a href="/invite.ics">Save it on your calendar!</a></p> -->
  </div>

  <div cds-layout="horizontal align:center">
    <iframe title="vimeo-player" src="https://player.vimeo.com/video/606834513?h=b5f98f2482" width="640" height="360" frameborder="0" allowfullscreen></iframe>
  </div>

  <!-- Intro -->
  <div cds-layout="grid gap:lg">
    <div cds-layout="col:12" class="padding-left-xl">
      <h3 class="showcase center">&ldquo;At moments of immense change, we see with new clarity the systems – political, economic, social, ecological – in which we are immersed as they change around us. We see what’s strong, what’s weak, what’s corrupt, what matters and what doesn’t.&rdquo; - Rebecca Solnit</h3>
      
      <img src="/images/2021/instagram-me.png" alt="From Me" class="center" style="max-width: 300px; margin: 0 auto; display: block; padding-top: 40px;">

      <p>The world over we have seen how the pandemic has made acts of (localized) solidarity more common and more prominent. In what had increasingly been recognized as being an individualistic world, many of us have chosen in the past year and half to challenge that perception by showing up for each other - and not just our families and those we know, but oftentimes, strangers. Strangers we don’t necessarily share anything in common with, other than our shared humanity.</p>

      <p>We have witnessed community gardens and kitchens, meals for migrants, free personal protective equipment (PPE), and mental health support efforts for our healthcare workers, and much more take hold in communities around the world.</p>

      <p>Some of these acts of compassion and solidarity have also gone beyond individual action to becoming acts of collective advocacy pushing for change at a systemic level. </p>

      <img src="/images/2021/instagram-we.png" alt="To We" class="center" style="max-width: 300px; margin: 0 auto; display: block; padding-top: 40px;">

      <p>In this year’s <a href="https://docs.google.com/forms/d/18_FIJitIgYklewM3zIe4ewEwP2Esq7kcyRUQu-6J6F4/edit">call for Speakers at Futures Festival</a> we want to amplify the voices of individuals and organizations who have found themselves pivot towards this collective direction. We are also looking for examples where groups have used the pandemic to spur advocacy movements that have led to change in policies, their communities, and/or their institutions. </p>

      <p>Examples could include ways in which you began to use your platform to draw attention to the needs of others, or how you’ve creatively used your resources to help meet the needs of fellow citizens.</p>

      <p>We want to hear not just about the acts, but also how this has fundamentally changed you forever in what you do or how you do what you do. How permanent does this change feel for you? Was it something specific that triggered it, or was there a tipping point during the pandemic that pushed  you to take this leap? What lessons have you learnt along the way that you would want to share with other listeners who are at the cusp of doing similarly? </p>

      <p>We attract an audience of over 700 participants from over 45 countries. We might all come from different parts of the world, but our curiosity and interest in making this a more inclusive world unite us. Futures Festival looks forward to sharing and amplifying your work with this mission in mind!</p>

      <p><a href="https://docs.google.com/forms/d/18_FIJitIgYklewM3zIe4ewEwP2Esq7kcyRUQu-6J6F4/edit">Submit your speaking propsal for Futures Festival</a></p>
      <a id="call-for-speakers"></a>
    </div>
  </div>

  <!-- Call for speakers -->
  <!-- <h2 class="header-1 center" cds-layout="align:center">Sessions</h2>
  <div cds-layout="grid gap:lg" class="clear-margin-bottom">
    <div cds-layout="col@sm:12 col@md:3" v-for="session in sessions">
      <router-link :to="session.path">
        <img :src="session.frontmatter.image" alt="session.title" class="max-img" />
      </router-link>
    </div>
  </div>
  <div>
    <p class="right"><a href="/sessions/" class="register-link">See All Sessions &raquo;</a></p>
  </div> -->

  <!-- Registration -->
  <!-- <h2 class="header-1 center" cds-layout="align:center">Registrations <span class="header-1-alt">Open</span></h2>
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
  </div> -->

  <!-- Sessions -->
  <!-- <h2 class="header-1 center" cds-layout="align:center">Sessions</h2>
  <div cds-layout="grid gap:lg" class="clear-margin-bottom">
    <div cds-layout="col@sm:12 col@md:3" v-for="session in sessions">
      <router-link :to="session.path">
        <img :src="session.frontmatter.image" alt="session.title" class="max-img" />
      </router-link>
    </div>
  </div>
  <div>
    <p class="right"><a href="/sessions/" class="register-link">See All Sessions &raquo;</a></p>
  </div> -->

  <!-- Speakers -->
  <!-- <h2 class="header-1 center" cds-layout="align:center">Speakers</h2>
  <div cds-layout="grid gap:lg" class="clear-margin-bottom">
    <div cds-layout="col@sm:12 col@md:3" v-for="session in sessions">
      <router-link :to="session.path">
        <img :src="session.frontmatter.speakers[0].image" alt="session.frontmatter.speakers[0].title" class="max-img" />
      </router-link>
    </div>
  </div>
  <div>
    <p class="right"><a href="/speakers/" class="register-link">See All Speakers &raquo;</a></p>
  </div> -->

  <!-- Archives -->
  <div cds-layout="vertical gap:md align:horizontal-stretch" id="archives">
    <h2 class="header-1 center">Archives</h2>
    <p class="center">You can view all videos from previous festivals on Vimeo!</p>
    <p class="center"><a href="https://vimeo.com/showcase/7773726">2020 - Full Spectrum Futures</a></p>
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
      return this.$site.pages.filter(page => page.regularPath.substring(0, 11) === '/_sessions/' && page.frontmatter.draft !== true).slice(0, 4);
    }
  }
}
</script>

<style lang="css">
.showcase {
  color: var(--ff-color-secondary-1);
  font-style: italic;
}
.showcase-img {
  max-width: 100%;
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
.date {
  text-transform: uppercase;
  color: var(--ff-color-secondary-6);
}
.time {
  text-transform: uppercase;
  color: var(--ff-color-secondary-8);
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

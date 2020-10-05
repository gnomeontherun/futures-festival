<template>
<main cds-layout="vertical gap:lg align:horizontal-stretch" class="add-spacing">

  <!-- Banner -->
  <div cds-layout="vertical gap:md align:horizontal-stretch">
    <p class="showcase center">Showcasing our collective stories</p>
    <img class="showcase-img" src="/images/futures.svg" alt="Full Spectrum Futures">
    <div cds-layout="align:center" class="center"><h2 class="header-3">Saturday <b>October 24, 2020</b><br /> <time id="start" datetime="2020-10-24 14:00UTC">07:00</time> to <time id="end">19:00 UTC-5</time></h2></div>
    <p class="center">Online Event - Free to all!</p>
    <p class="center"><a href="https://www.apf.org/events/register.aspx?id=1397920" class="register-link">Register Now!</a></p>
    <p class="center">Join the conversation using #futuresfest20  #fullspectrumfutures </p>
    <p class="center"><a href="/invite.ics">Save it on your calendar!</a></p>
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

  <!-- Call for Speakers -->
  <h2 class="header-1 center">Call for Speakers <span class="header-1-alt">Closed</span></h2>
  <div cds-layout="grid gap:lg">
    <div cds-layout="col@sm:12 col@md:3">
      <div cds-layout="grid gap:lg">
        <div cds-layout="col@sm:4 col@md:12">
          <img src="/images/guest-quote.jpg" class="max-img" />
        </div>
        <div cds-layout="col@sm:8 col@md:12">
          <p class="text-justify">&ldquo;Not only did the Futures Festival provide me with a space to present what I am passionate about - sustainable economic model - it also gave me access to a platform through which I could reach hundreds of people from all over the world and have a discussion with them. This kind of open access is what makes the Futures Festival truly unique and valuable.&rdquo;</p>
          <p><i>- Tomas Rehacek, Futures Festival 2019 Presenter</i></p>
        </div>
      </div>
    </div>
    <div cds-layout="col@sm:12 col@md:9" class="padding-left-xl">
      <h3 class="header-2 clear-margin-top">Be heard!</h3>
      <p>We want to commit to consistently showcasing practitioners from around the world who are united by their commitment to inclusivity and plurality in imagining the future. We want to go on this annual journey with you, and see how this conversation continues to evolve until it becomes our collective norm.</p>

      <p>In the past two years, we have hosted over 50 speakers, and almost 50 sessions committed to this cause, and welcomed over 900 registrants from over 45 countries.</p>
        
      <p>This year, we want to amplify practitioner’s and projects who are driving change with a particularly strong partnership with the community. Who in the chaos, are seeing windows where there were walls. Who are asking new types of questions, and seeking new types of answers. Whose projects are welcoming new voices to act on the redefining moments of 2020.</p>

      <p>Submissions are now closed, stay tuned for speaker announcements!</p>

      <!-- <p>&nbsp;</p>

      <p class="right"><a class="register-link-alt" href="https://forms.gle/4Yeei4k3ZNfgoWGG6">Submit</a></p> -->
      <a id="registration"></a>
    </div>
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
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
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

<style lang="stylus">
// .home
//   padding $navbarHeight 2rem 0
//   max-width $homePageWidth
//   margin 0px auto
//   display block
//   .hero
//     text-align center
//     img
//       max-width: 100%
//       max-height 280px
//       display block
//       margin 3rem auto 1.5rem
//     h1
//       font-size 3rem
//     h1, .description, .action
//       margin 1.8rem auto
//     .description
//       max-width 35rem
//       font-size 1.6rem
//       line-height 1.3
//       color lighten($textColor, 40%)
//     .action-button
//       display inline-block
//       font-size 1.2rem
//       color #fff
//       background-color $accentColor
//       padding 0.8rem 1.6rem
//       border-radius 4px
//       transition background-color .1s ease
//       box-sizing border-box
//       border-bottom 1px solid darken($accentColor, 10%)
//       &:hover
//         background-color lighten($accentColor, 10%)
//   .features
//     border-top 1px solid $borderColor
//     padding 1.2rem 0
//     margin-top 2.5rem
//     display flex
//     flex-wrap wrap
//     align-items flex-start
//     align-content stretch
//     justify-content space-between
//   .feature
//     flex-grow 1
//     flex-basis 30%
//     max-width 30%
//     h2
//       font-size 1.4rem
//       font-weight 500
//       border-bottom none
//       padding-bottom 0
//       color lighten($textColor, 10%)
//     p
//       color lighten($textColor, 25%)
//   .footer
//     padding 2.5rem
//     border-top 1px solid $borderColor
//     text-align center
//     color lighten($textColor, 25%)

// @media (max-width: $MQMobile)
//   .home
//     .features
//       flex-direction column
//     .feature
//       max-width 100%
//       padding 0 2.5rem

// @media (max-width: $MQMobileNarrow)
//   .home
//     padding-left 1.5rem
//     padding-right 1.5rem
//     .hero
//       img
//         max-height 210px
//         margin 2rem auto 1.2rem
//       h1
//         font-size 2rem
//       h1, .description, .action
//         margin 1.2rem auto
//       .description
//         font-size 1.2rem
//       .action-button
//         font-size 1rem
//         padding 0.6rem 1.2rem
//     .feature
//       h2
//         font-size 1.25rem
</style>

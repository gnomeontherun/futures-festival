<template>
<div>
  <div style="margin: 0 auto;" cds-layout="container:lg">
    <div
      cds-layout="vertical gap:xl align:horizontal-stretch"
      class="theme-container"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
      />

      <div
        class="sidebar-mask"
        @click="toggleSidebar(false)"
      />

      <Sidebar
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
      >
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>

      <router-link to="/sessions/">&laquo; Back to sessions</router-link>

      <h1>Session: {{$page.title}}</h1>

      <div cds-layout="grid gap:lg">
        <div cds-layout="col@sm:3">
          <img :src="$page.frontmatter.image" class="max-img" />
        </div>
        <div cds-layout="col@sm:9">
          <p class="header-5 clear-margin-top" v-if="$page.frontmatter.type">Type: {{$page.frontmatter.type}}</p>
          <Content />
        </div>
      </div>

      <template v-if="$page.frontmatter.video">
      <h2>Video</h2>

      <div style="position: relative; overflow: hidden; padding-top: 56.25%;">
        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" :src="'https://player.vimeo.com/video/'+$page.frontmatter.video" xwidth="100%" xheight="auto" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <p><a :href="'https://vimeo.com/'+$page.frontmatter.video">See the video on Vimeo</a> from <a href="https://vimeo.com/profuturists">APF</a>.</p>
      </template>

      <h2>Presenters</h2>

      <div cds-layout="grid gap:lg" v-for="speaker in $page.frontmatter.speakers">
        <div cds-layout="col@sm:3">
          <img :src="speaker.image" class="max-img" />
        </div>
        <div cds-layout="col@sm:9">
          <p class="header-4">{{speaker.speaker}}  <template v-if="speaker.pronouns">({{speaker.pronouns}})</template></p>
          <p class="header-5 clear-margin-top" v-if="speaker.speakerTitle">{{speaker.speakerTitle}}</p>
          <p>{{speaker.bio}}</p>
          <p v-if="speaker.twitter">Twitter: <a :href="speaker.twitter">{{speaker.twitter}}</a></p>
          <p v-if="speaker.instagram">Instagram: <a :href="speaker.twitter">{{speaker.instagram}}</a></p>
          <p v-if="speaker.facebook">Facebook: <a :href="speaker.twitter">{{speaker.facebook}}</a></p>
          <p v-if="speaker.linkedin">LinkedIn: <a :href="speaker.linkedin">{{speaker.linkedin}}</a></p>
        </div>
      </div>

    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import Home from '@theme/components/Home.vue'
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import Footer from '@theme/components/Footer.vue'
import { resolveSidebarItems } from '../util'

export default {
  name: 'Session',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    Footer
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    speakerText() {
      if (this.$page.frontmatter.speakers.length > 1) {
        return 'Speakers';
      }
      return 'Speaker';
    },
    shouldShowNavbar () {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

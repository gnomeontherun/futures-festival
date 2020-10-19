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

      <div>

        <h1>2020 Futures Festival Schedule</h1>

        <table>
          <tr>
            <th>Session</th>
            <th>Speakers</th>
            <th>Time</th>
            <th>Room</th>
          </tr>
        <template v-for="session in sessions">
          <tr>
            <td><router-link :to="session.path">{{session.title}}</router-link></td>
            <td><template v-for="(speaker, index) in session.frontmatter.speakers">{{speaker.speaker}}<template v-if="session.frontmatter.speakers.length > index + 1">, </template></template></td>
            <td>{{session.frontmatter.date}}</td>
            <td>Room {{session.frontmatter.room}}</td>
          </tr>
        </template>
        </table>
        
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
  name: 'Sessions',

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
    sessions() {
      return this.$site.pages
        .filter(page => page.regularPath.substring(0, 11) === '/_sessions/')
        .sort((a, b) => {
          const aDate = Date.parse(a.frontmatter.date);
          const bDate = Date.parse(b.frontmatter.date);
          let value = 0;
          if (aDate > bDate) {
            value = 1;
          } else if (bDate > aDate) {
            value = -1
          }
          return value;
        })
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

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

        <h1>2021 Futures Festival Sessions</h1>

        <template v-if="keynotes.length">
          <h2>Keynotes</h2>

          <div cds-layout="grid gap:lg">
            <template v-for="page in keynotes">
              <div v-if="page.frontmatter.image" cds-layout="col:12 col@sm:6 col@md:3">
                <router-link :to="page.path">
                  <img :src="page.frontmatter.image" v-bind:alt="page.frontmatter.title" class="max-img" />
                </router-link>
              </div>
            </template>
          </div>
        </template>

        <template v-if="workshops.length">
          <h2>Workshops</h2>

          <div cds-layout="grid gap:lg">
            <template v-for="page in workshops">
              <div v-if="page.frontmatter.image" cds-layout="col:12 col@sm:6 col@md:3">
                <router-link :to="page.path">
                  <img :src="page.frontmatter.image" v-bind:alt="page.frontmatter.title" class="max-img" />
                </router-link>
              </div>
            </template>
          </div>
        </template>

        <template v-if="panels.length">
          <h2>Panels</h2>

          <div cds-layout="grid gap:lg">
            <template v-for="page in panels">
              <div v-if="page.frontmatter.image" cds-layout="col:12 col@sm:6 col@md:3">
                <router-link :to="page.path">
                  <img :src="page.frontmatter.image" v-bind:alt="page.frontmatter.title" class="max-img" />
                </router-link>
              </div>
            </template>
          </div>
        </template>

        <template v-if="otherFormats.length">
          <h2>Other Formats</h2>

          <div cds-layout="grid gap:lg">
            <template v-for="page in otherFormats">
              <div v-if="page.frontmatter.image" cds-layout="col:12 col@sm:6 col@md:3">
                <router-link :to="page.path">
                  <img :src="page.frontmatter.image" v-bind:alt="page.frontmatter.title" class="max-img" />
                </router-link>
              </div>
            </template>
          </div>
        </template>

        <template v-if="breakSessions.length">
          <h2>Break Sessions</h2>

          <div cds-layout="grid gap:lg">
            <template v-for="page in breakSessions">
              <div v-if="page.frontmatter.image" cds-layout="col:12 col@sm:6 col@md:3">
                <router-link :to="page.path">
                  <img :src="page.frontmatter.image" v-bind:alt="page.frontmatter.title" class="max-img" />
                </router-link>
              </div>
            </template>
          </div>
        </template>

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
    keynotes() {
      return this.$site.pages.filter(({ frontmatter }) => frontmatter.type === 'Keynote' && frontmatter.draft !== true && frontmatter.year == 2021);
    },
    workshops() {
      return this.$site.pages.filter(({ frontmatter }) => frontmatter.type === 'Workshop' && frontmatter.draft !== true && frontmatter.year == 2021);
    },
    otherFormats() {
      return this.$site.pages.filter(({ frontmatter }) => frontmatter.type === 'Other Formats' && frontmatter.draft !== true && frontmatter.year == 2021);
    },
    panels() {
      return this.$site.pages.filter(({ frontmatter }) => frontmatter.type === 'Panel' && frontmatter.draft !== true && frontmatter.year == 2021);
    },
    breakSessions() {
      return this.$site.pages.filter(({ frontmatter }) => frontmatter.type === 'Break Session' && frontmatter.draft !== true && frontmatter.year == 2021);
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

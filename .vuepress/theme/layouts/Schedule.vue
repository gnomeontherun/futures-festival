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

        <h2>Room 1</h2>

        <table>
          <tr>
            <th>Session</th>
            <th>Speakers</th>
            <th>Type</th>
            <th style="min-width: 120px">Start Time</th>
            <th>Facilitators</th>
          </tr>
        <template v-for="session in roomOne">
          <tr>
            <td v-if="session.path"><router-link :to="session.path">{{session.title}}</router-link></td>
            <td v-else>{{session.title}}</td>
            <td><template v-for="(speaker, index) in session.frontmatter.speakers">{{speaker.speaker}}<template v-if="session.frontmatter.speakers.length > index + 1">,<br /></template></template></td>
            <td>{{session.frontmatter.type}}</td>
            <td>{{session.frontmatter.date | localTime}}<br /><small>({{session.frontmatter.date | time}} EST)</small></td>
            <td>{{session.frontmatter.facilitators}}</td>
          </tr>
        </template>
        </table>

        <h2>Room 2</h2>

        <table>
          <tr>
            <th>Session</th>
            <th>Speakers</th>
            <th>Type</th>
            <th style="min-width: 120px">Start Time</th>
            <th>Facilitators</th>
          </tr>
        <template v-for="session in roomTwo">
          <tr>
            <td v-if="session.path"><router-link :to="session.path">{{session.title}}</router-link></td>
            <td v-else>{{session.title}}</td>
            <td><template v-for="(speaker, index) in session.frontmatter.speakers">{{speaker.speaker}}<template v-if="session.frontmatter.speakers.length > index + 1">,<br /></template></template></td>
            <td>{{session.frontmatter.type}}</td>
            <td>{{session.frontmatter.date | localTime}}<br /><small>({{session.frontmatter.date | time}} EST)</small></td>
            <td>{{session.frontmatter.facilitators}}</td>
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

const sessionsRoomOne = [
  { title: 'Introduction', frontmatter: { date: '2020-10-24 07:00:00 -0400', type: 'Plenary', speakers: [{ speaker: 'Prateeksha Singh'}, { speaker: 'Graciela Guadarrama'}] }},
  { title: 'Breathing & Meditation', frontmatter: { date: '2020-10-24 09:15:00 -0400', type: 'Break', speakers: [{ speaker: 'Krittika Sharma'}] }},
  { title: 'Reflection: Obituary to Self', frontmatter: { date: '2020-10-24 11:00:00 -0400', type: 'Reflection', speakers: [{ speaker: 'Krittika Sharma'}] }},
  { title: 'Ideas about change: a cross-cultural campaign', frontmatter: { date: '2020-10-24 11:45:00 -0400', type: 'Live experiment', speakers: [{ speaker: 'Wendy Schultz'}] }},
  { title: 'Queer resilience admist uncertainty', frontmatter: { date: '2020-10-24 13:30:00 -0400', type: 'Conversation', speakers: [{ speaker: 'Lydia Timlin-Broussard'}], facilitators: 'Dave Roselle' }},
  { title: 'Breathing & Meditation', frontmatter:{ date: '2020-10-24 16:00:00 -0400', type: 'Break', speakers: [{ speaker: 'Amy Yockus Hartman'}] }},
  { title: 'Breathing & Meditation', frontmatter: { date: '2020-10-24 18:15:00 -0400', type: 'Reflection', speakers: [{ speaker: 'Zainab Kakal'}] }},
  { title: 'Closing', frontmatter: { date: '2020-10-24 18:30:00 -0400', type: 'Plenary', speakers: [{ speaker: 'Amy Hosotsuji'}] }},
];

const sessionsRoomTwo = [
  { title: 'Introduction', frontmatter: { date: '2020-10-24 07:00:00 -0400', type: 'Plenary', speakers: [{ speaker: 'Prateeksha Singh'}, { speaker: 'Graciela Guadarrama'}] }},
  { title: 'Energizer', frontmatter: { date: '2020-10-24 09:00:00 -0400', type: 'Break', speakers: [{ speaker: ''}] }},
  { title: 'Reflection: Obituary to Self', frontmatter: { date: '2020-10-24 11:00:00 -0400', type: 'Reflection', speakers: [{ speaker: 'Krittika Sharma'}] }},
  { title: 'Mental Health', frontmatter: { date: '2020-10-24 14:00:00 -0400', type: 'Conversation', speakers: [{ speaker: 'Sheila Mutaramuka'}] }},
  { title: 'Energizer', frontmatter:{ date: '2020-10-24 16:15:00 -0400', type: 'Break', speakers: [{ speaker: 'Amy Yockus Hartman'}] }},
  { title: 'Breathing & Meditation', frontmatter: { date: '2020-10-24 18:15:00 -0400', type: 'Reflection', speakers: [{ speaker: 'Zainab Kakal'}] }},
  { title: 'Closing', frontmatter: { date: '2020-10-24 18:30:00 -0400', type: 'Plenary', speakers: [{ speaker: 'Amy Hosotsuji'}] }},
];

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

  filters: {
    localTime(value) {
      return new Date(value).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
    },
    time(value) {
      return new Date(value).toLocaleTimeString([], {timeZone: 'America/New_York', hour: 'numeric', minute:'2-digit'});
    },
  },

  computed: {
    roomOne() {
      const pages = this.$site.pages
        .filter(page => page.regularPath.substring(0, 11) === '/_sessions/' && page.frontmatter.draft !== true)
        .filter(page => page.frontmatter.room == 1)
      pages.push(...sessionsRoomOne);
      return pages.sort((a, b) => {
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
    roomTwo() {
      const pages =  this.$site.pages
        .filter(page => page.regularPath.substring(0, 11) === '/_sessions/' && page.frontmatter.draft !== true)
        .filter(page => page.frontmatter.room == 2)
      pages.push(...sessionsRoomTwo);
      return pages.sort((a, b) => {
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
    endTime(frontmatter) {
      const end = new Date(frontmatter.date).getTime() + 1000 * 60 * frontmatter.length;
      return new Date(end).toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'});
    },

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

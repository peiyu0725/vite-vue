<template>
  <v-navigation-drawer class="a-drawer" permanent>
    <v-list>
      <v-list-item title="FreeNote." class="drawer-title"> </v-list-item>
      <v-list-item>
        <v-btn block class="mt-3 add-note">
          <v-icon class="mr-2" size="28">mdi-plus-circle</v-icon>
          新增筆記
        </v-btn>
      </v-list-item>
    </v-list>
    <v-list class="router-list">
      <v-list-item
        v-for="item in items"
        :to="item.href"
        :prepend-icon="item.icon"
        :title="item.text"
        :value="item.value"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list>
        <v-list-item>
          <div>
            <span class="mr-3">模式</span>
            <v-btn
              icon="mdi-weather-sunny"
              size="x-small"
              class="ml-3"
              color="#ffffff"
              :class="{
                'mode-active': theme.global.name.value === 'lightTheme',
              }"
              :variant="
                theme.global.name.value === 'darkTheme'
                  ? 'outlined'
                  : 'elevated'
              "
              @click="onChangeTheme('lightTheme')"
            ></v-btn>
            <v-btn
              icon="mdi-weather-night"
              size="x-small"
              class="ml-3"
              color="#ffffff"
              :class="{
                'mode-active': theme.global.name.value === 'darkTheme',
              }"
              :variant="
                theme.global.name.value === 'lightTheme'
                  ? 'outlined'
                  : 'elevated'
              "
              @click="onChangeTheme('darkTheme')"
            ></v-btn>
          </div>
        </v-list-item>
        <v-list-item class="append-user">
          <v-avatar class="mr-3">
            <v-icon icon="mdi-account-circle" size="35"></v-icon>
          </v-avatar>
          Sandy
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
  <v-main>
    <router-view></router-view>
  </v-main>
</template>
    
<script setup>
import { ref, onMounted, watch } from "vue";
import { useTheme } from "vuetify";
const theme = useTheme();
const items = ref([
  {
    href: "/",
    text: "所有筆記",
    value: "all",
    icon: "mdi-file-document-outline",
  },
  { href: "/fav", text: "捷徑", value: "fav", icon: "mdi-star" },
  { href: "/tag", text: "標籤", value: "tag", icon: "mdi-tag" },
  {
    href: "/calendar",
    text: "月曆",
    value: "calendar",
    icon: "mdi-calendar-blank-outline",
  },
  {
    href: "/share",
    text: "與我共用",
    value: "share",
    icon: "mdi-account-multiple",
  },
  {
    href: "/trash",
    text: "垃圾桶",
    value: "delete",
    icon: "mdi-delete-outline",
  },
]);

onMounted(() => {
  theme.global.name.value =
    window.localStorage.getItem("noteTheme") || "lightTheme";
});

const onChangeTheme = (val) => {
  window.localStorage.setItem("noteTheme", val);
  theme.global.name.value = val;
};
</script>
    
<style lang="sass">
html
  overflow: -moz-hidden-unscrollable
  height: 100%

body::-webkit-scrollbar
  display: none

body
  -ms-overflow-style: none
  height: 100%
  overflow-y: auto

#app
  font-family: Helvetica Neue, Myriad Pro, Inter, Avenir, Arial, sans-serif
.a-drawer
  -webkit-user-select: none
  -khtml-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none
  border-right: none !important
  .v-navigation-drawer__content, .v-navigation-drawer__append
    padding: 48px 0
  .v-list, .v-navigation-drawer__content, .v-navigation-drawer__append
    background-color: rgb(var(--v-theme-primary))
    .v-list-item, .v-list-item-title, i
      color: rgb(var(--v-theme-drawerText))
      i
        opacity: 1
      .add-note
        height: 48px
        color: rgb(var(--v-theme-primary))
        background-color: rgb(var(--v-theme-btnBg))
        i
          color: rgb(var(--v-theme-primary))
      .v-btn
        font-size: 18px
  .drawer-title
    .v-list-item-title
      font-size: 22px
      font-weight: 600
      padding-left: 21px
  .v-list-item
    padding-inline-start: 33px !important
    padding-inline-end: 33px !important
  .router-list .v-list-item
    cursor: pointer
    padding-inline-start: 54px !important
    padding-inline-end: 54px !important
    &:hover
      background-color: rgba(var(--v-theme-pageDrawerBg),.2)
  .v-list-item--active
    background-color: rgb(var(--v-theme-btnBg)) !important
    .v-list-item__overlay
      opacity: 0 !important
    .v-list-item-title, i
      color: rgb(var(--v-theme-primary))
  .v-navigation-drawer__append
    .v-list-item
      padding-inline-start: 54px !important
      padding-inline-end: 54px !important
    .append-user
      margin-top: 20px
      .v-list-item__content
        display: flex
        align-items: center
        opacity: 0.7
        font-size: 18px
        font-weight: 600
    .mode-active
      i
        color: rgb(var(--v-theme-primary))
.v-main
  display: flex
  overflow-y: hidden
  .page-drawer
    width: 355px
    min-height: 100vh
    background: rgb(var(--v-theme-pageDrawerBg)) 0% 0% no-repeat padding-box
    border-right: 1px solid rgb(var(--v-theme-pageDrawerBorder))
    &__header
      padding: 50px 32px 0px 32px
    &__body
      padding: 32px 32px 17px 32px
  .page-content
    width: calc(100% - 355px)
    min-height: 100vh

.pointer
  cursor: pointer
</style>
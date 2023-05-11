<template>
  <div class="news">
    <News />
  </div>
</template>

<script>
export default {
  name: "FriendsView",
  components: {
    News: () => import("@/components/news/News.vue"),
  },
};
</script>
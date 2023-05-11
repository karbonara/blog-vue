<template>
  <div class="home">
    <Home />
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    Home: () => import("@/components/home/Home.vue"),
  },
};
</script>

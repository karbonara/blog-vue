<template>
  <div class="home">
    <div class="home__header">
      <h1>Добро пожаловать в приложение</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        accusantium quidem voluptatum quas nesciunt. Quisquam, quae. Quisquam
        voluptates, quod, quia, voluptatibus quae voluptatem quibusdam
        accusantium quidem voluptatum quas nesciunt. Quisquam, quae.
      </p>
    </div>
    <div class="home__content">
      <div class="home__content__news">
        <News />
      </div>
      <div class="home__content__friends">
        <Friends />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    News: () => import("@/components/news/News.vue"),
    Friends: () => import("@/components/friends/Friends.vue"),
  },
};
</script>

<style lang="scss">
.home {
  box-sizing: border-box;
  padding: 12px;
}
</style>
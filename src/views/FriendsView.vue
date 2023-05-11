<template>
  <div class="friends">
    <Friends />
  </div>
</template>

<script>
export default {
  name: "FriendsView",
  components: {
    Friends: () => import("@/components/friends/Friends.vue"),
  },
};
</script>
<template>
  <div class="home">
    <Messages />
  </div>
</template>

<script>
export default {
  name: "MessagesView",
  components: {
    Messages: () => import("@/components/messages/Messages.vue"),
  },
};
</script>

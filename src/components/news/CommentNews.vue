<template>
  <div class="info-news__add-comment">
    <input
      v-model="newCommentInput"
      type="text"
      placeholder="Ваш комментарий"
      class="info-news__input"
    />
    <button @click="addComment(newPost)" class="info-news__button">
      Комментарий
    </button>
  </div>
</template>

<script>
export default {
  name: "CommentNews",
  props: {
    newPost: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newCommentInput: "",
    };
  },
  methods: {
    addComment(newPost) {
      if (!this.newCommentInput) {
        // Проверка на пустой input
        return;
      }
      newPost.comment.push({
        id: newPost.comment.length + 1,
        name: "John", // Имя и аватарку сделал статичное
        img: "https://via.placeholder.com/150",
        comment: this.newCommentInput,
      });
      this.newCommentInput = "";
    },
  },
};
</script>

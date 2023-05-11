<template>
  <section>
    <h1>Новости</h1>
    <div class="info-news__add-post">
      <input
        type="text"
        placeholder="Добавить новость"
        class="info-news__input"
        v-model="newPost"
        value=""
      />
      <button @click="addPost(newPost)" class="info-news__button">
        Отправить
      </button>
    </div>
    <ul class="list-new">
      <li v-for="newPost in news" :key="newPost.id">
        <div>
          <div class="list-new__wrapper">
            <div class="info-news">
              <img :src="newPost.img" alt="avatar" />
              <div class="info-news__title-name">{{ newPost.name }}</div>
            </div>
            <div>
              <button @click="likePost(newPost)" class="info-news__button">
                <img src="@/assets/like.svg" alt="Лайк" width="16" />
                {{ newPost.like }}
              </button>
            </div>
          </div>
          <div class="info-news__title-name">{{ newPost.body }}</div>
          <CommentNews :newPost="newPost" />
        </div>
        <ul class="list-new__comments">
          <li v-for="comment in newPost.comment" :key="comment.id">
            <div class="info-news">
              <div class="info-news__title-name">
                <img :src="comment.img" alt="avatar" />
              </div>
              <div class="info-news__title-name">{{ comment.name }}</div>
            </div>
            <div class="info-news__title-name">{{ comment.comment }}</div>
            <button @click="deletePost(newPost)" class="info-news__button">
              Удалить
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>
<script>
import Like from "@/assets/like.svg";
import CommentNews from "@/components/news/CommentNews.vue";
export default {
  name: "NewsView",
  components: {
    Like,
    CommentNews,
  },
  data() {
    return {
      news: [],
      newPost: "",
      newCommentInput: "",
    };
  },
  created() {
    this.news = [
      {
        id: 1,
        name: "John",
        img: "https://via.placeholder.com/150",
        like: 1,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        comment: [
          {
            id: 1,
            name: "John",
            img: "https://via.placeholder.com/150",
            comment: "Комментарий",
          },
        ],
      },
      {
        id: 2,
        name: "John",
        img: "https://via.placeholder.com/150",
        like: 1,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        comment: [
          {
            id: 1,
            name: "John",
            img: "https://via.placeholder.com/150",
            comment: "Комментарий",
          },
        ],
      },
      {
        id: 3,
        name: "John",
        img: "https://via.placeholder.com/150",
        like: 1,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        comment: [
          {
            id: 1,
            name: "John",
            img: "https://via.placeholder.com/150",
            comment: "Комментарий",
          },
        ],
      },
    ];
  },

  methods: {
    likePost(news) {
      news.like++;
    },
    deletePost(news) {
      news.comment.pop();
    },
    addPost(newPost) {
      if (!this.newPost) {
        // Проверка на пустой input
        return;
      }
      this.news.push({
        id: this.news.length + 1,
        name: "John",
        img: "https://via.placeholder.com/150",
        like: 0,
        body: newPost,
        comment: [],
      });
      this.newPost = "";
    },
  },
};
</script>

<style lang="scss">
.list-new {
  width: 90%;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  li {
    margin: 2rem 0;
  }
}

.list-new__wrapper {
  display: flex;
  justify-content: space-between;
}

.info-news {
  display: flex;
  align-items: center;
  img {
    width: 82px;
    border-radius: 0;
  }
}
.info-news__add-comment {
  display: flex;
  align-items: center;
}
.info-news__button {
  width: 120px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ccc;
  }
  img {
    margin-right: 8px;
  }
}
.info-news__input {
  width: 244px !important;
  display: block;
  padding: 0.5rem;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.list-new__comments {
  padding: 0;
  margin: 0;
  li {
    list-style: none;
    text-align: start;
    border: 1px solid #afafaf7d;
    box-sizing: border-box;
    padding: 12px;
    margin: 8px 0;
  }
}
.info-news__add-post {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
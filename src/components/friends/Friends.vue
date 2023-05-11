<template>
  <section>
    <h1>Друзья</h1>
    <ul class="friend-list" v-if="friends.length">
      <li v-for="friend in friends" :key="friend.id">
        <div class="info">
          <img :src="friend.img" alt="" />
          <div class="title-name">{{ friend.name }}</div>
        </div>
        <div class="buttons">
          <button @click="deleteFriend(friend)" class="button">Удалить</button>
          <button @click="sendMessage" class="button">Написать</button>
        </div>
      </li>
      <div v-if="showSuccessModal" class="friends-modal">
        <div class="friends-modal__wrapper">
          <p>Вы удалили друга!</p>
          <button @click="closeSuccessModal">Закрыть</button>
        </div>
      </div>
      <div v-if="showMessageModal" class="friends-modal">
        <div class="friends-modal__wrapper">
          <p>Модальное окно для отправки сообщения</p>
          <input type="text" placeholder="Текст сообщения" v-model="message" />
          <button @click="send">Отправить</button>
        </div>
      </div>
    </ul>
    <div v-else>
      <p>У вас нет друзей</p>
    </div>

    <router-view />
  </section>
</template>

<script>
export default {
  name: "FriendsView",
  data() {
    return {
      friends: [],
      showSuccessModal: false,
      showMessageModal: false,
      message: "",
    };
  },
  created() {
    this.friends = [
      {
        id: 1,
        name: "John",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "John",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "John",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "John",
        img: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "John",
        img: "https://via.placeholder.com/150",
      },
    ];
  },
  methods: {
    deleteFriend(friend) {
      this.friends = this.friends.filter((f) => f.id !== friend.id);
      this.showSuccessModal = true;
    },
    closeSuccessModal() {
      this.showSuccessModal = false;
    },
    sendMessage() {
      this.showMessageModal = true;
    },
    send() {
      this.message = "";
      this.showMessageModal = false;
    },
  },
};
</script>

<style lang="scss">
.friend-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 192px;
    margin: 0.5rem auto;
    padding: 0.5rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
    img {
      width: 58px;
      border-radius: 50px;
    }
    .info {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .title-name {
      text-align: center;
      font-size: 24px;
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      button {
        display: block;
        width: 44%;
        margin: 0.5rem auto;
        padding: 0.5rem;
        border: 1px solid #ccc;
        box-sizing: border-box;
        background-color: #fff;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #ccc;
        }
      }
    }
  }

  .friends-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    .friends-modal__wrapper {
      width: 50%;
      height: 200px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      p {
        font-size: 24px;
        margin: 0;
        padding: 0;
      }
      button {
        display: block;
        width: 44%;
        margin: 0.5rem auto;
        padding: 0.5rem;
        border: 1px solid #ccc;
        box-sizing: border-box;
        background-color: #fff;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: #ccc;
        }
      }
    }
    input {
      width: 44%;
      padding: 0.5rem;
      border: 1px solid #ccc;
      box-sizing: border-box;
    }
  }
}
</style>

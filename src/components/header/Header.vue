<template>
  <div>
    <nav>
      <div class="nav-title">Ludivpluse</div>
      <router-link to="/">Новости</router-link> |
      <router-link to="/friends">Друзья</router-link> |
      <router-link to="/messages">Сообщения</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
nav {
  padding: 30px;
  display: flex;
  background: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #bebebe;
  text-decoration: none;
  display: flex;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.nav-title {
  color: #bebebe;
  margin-right: 22px;
}
</style>

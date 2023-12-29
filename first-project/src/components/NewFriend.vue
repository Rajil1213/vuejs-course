<script lang="ts">
import { defineComponent } from "vue";
import type { Friend } from "@/App.vue";

export default defineComponent({
  name: "NewFriend",

  data(): { friend: Friend } {
    return {
      friend: {
        id: new Date().getTime().toString(),
        name: "",
        phone: 0,
        email: "",
        isFavorite: false,
      },
    };
  },

  emits: {
    "add-friend": function (_friend: Friend) {
      return true;
    },
  },

  methods: {
    newFriend() {
      this.$emit("add-friend", this.friend);
    },
  },
});
</script>

<template>
  <div class="form">
    <!-- to prevent page reload after submission -->
    <form @submit.prevent>
      <label for="name">Name</label>
      <input
        type="text"
        v-model="friend.name"
        id="name"
      />
      <br />
      <label for="phone">Phone</label>
      <input
        type="number"
        v-model="friend.phone"
        id="phone"
      />
      <br />
      <label for="email">Email</label>
      <input
        type="email"
        v-model="friend.email"
        id="email"
      />
      <br />
      <label for="favorite">Favorite</label>
      <input
        type="checkbox"
        v-model="friend.isFavorite"
        id="favorite"
      />
      <br />

      <button @click="newFriend">Add New Friend</button>
    </form>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
}

input {
  margin: 1rem;
}

button {
  display: block;
}
</style>

<script lang="ts">
import FriendContact from "@/components/FriendContact.vue";
import NewFriend from "@/components/NewFriend.vue";
import newFriend from "@/components/NewFriend.vue";

export type Friend = {
  id: string;
  name: string;
  phone: number;
  email: string;
  isFavorite: boolean;
};

export default {
  computed: {
    newFriend() {
      return newFriend;
    },
  },
  components: { NewFriend, FriendContact },
  data(): {
    friends: Array<Friend>;
  } {
    return {
      friends: [
        {
          id: "john",
          name: "John Doe",
          phone: 1234,
          email: "john@mail.com",
          isFavorite: false,
        },
        {
          id: "jane",
          name: "Jane Doe",
          phone: 5678,
          email: "jane@mail.com",
          isFavorite: true,
        },
      ],
    };
  },

  methods: {
    toggleFavorite(id: string) {
      const identifiedFriend = this.friends.find(({ id: friendId }) => id === friendId);
      if (!identifiedFriend) return;

      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },

    addFriend(friend: Friend) {
      this.friends.push(friend);
    },
  },
};
</script>

<template>
  <header><h1>My Friends</h1></header>
  <ul>
    <FriendContact
      v-for="{ id, name, email, phone, isFavorite } in friends"
      :key="id"
      :id="id"
      :contact="phone"
      :name="name"
      :email-address="email"
      :is-favorite="isFavorite"
      @toggle-favorite="toggleFavorite"
    />
  </ul>
  <NewFriend @add-friend="addFriend" />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>

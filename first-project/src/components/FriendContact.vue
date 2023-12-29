<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FriendContact",

  data(): { showDetails: boolean, friend: { id: string; name: string; contact: number; email: string; }}  {
    return {
      showDetails: true,
      friend: {
        id: "john",
        name: "John Doe",
        contact: 1234,
        email: "john@mail.com",
      },
    };
  },

  methods: {
    toggleShow() {
      this.showDetails = !this.showDetails;
    }
  }
});
</script>

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleShow">{{ showDetails ? "Hide" : "Show"}} Details</button>
    <ul v-if="showDetails">
      <li><strong>Contact:</strong>{{friend.contact}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
</template>

<style scoped>

</style>
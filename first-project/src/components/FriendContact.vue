<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FriendContact",

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    contact: Number, // optional
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  // emits: ["toggle-favorite"],
  emits: {
    "toggle-favorite": function (id: string) {
      return !!id;
    },
  },

  data(): { showDetails: boolean } {
    return {
      showDetails: true,
    };
  },

  methods: {
    toggleShow() {
      this.showDetails = !this.showDetails;
    },

    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
});
</script>

<template>
  <li>
    <h2>{{ name }}{{ isFavorite ? " (Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>&nbsp;
    <button @click="toggleShow">{{ showDetails ? "Hide" : "Show" }} Details</button>
    <ul v-if="showDetails">
      <li><strong>Contact:</strong>{{ contact }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<style scoped></style>

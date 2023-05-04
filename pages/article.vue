<template>
  <div>
    <nav class="u-flex u-cross-center u-main-space-between u-padding-32">
      <h2 class="logo u-padding-32 eyebrow-heading-1 u-color-text-pink">
        <NuxtLink to="/">Pink Blog</NuxtLink>
      </h2>
      <NuxtLink to="/">
        <span class="button"> GO BACK TO POSTS </span>
      </NuxtLink>
    </nav>
    <form @submit.prevent="submitForm">
      <h2 class="eyebrow-heading-1 u-text-center u-padding-64">
        write an article
      </h2>
      <div class="u-grid u-cross-center u-main-center u-padding-16">
        <label for="title">Article title:</label>
        <input
          placeholder="Title"
          type="text"
          id="title"
          v-model="title"
          required
        />
        <label for="content">Content:</label>
        <textarea
          class="input-text"
          placeholder="Content"
          cols="100"
          rows="10"
          type="content"
          id="content"
          v-model="content"
          required
        />

        <button class="button" type="submit">
          <span class="text">Submit</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { Client, Databases, ID } from "appwrite";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    async submitForm() {
      const client = new Client();

      const databases = new Databases(client);
      client
        .setEndpoint("OUR_API_ENDPOINT") // Your API Endpoint
        .setProject("OUR_PROJECT_ID"); // Your project ID
      try {
        const response = await databases.createDocument(
          "OUR_DATABASE_ID",
          "OUR_COLLECTION_ID",
          ID.unique(),
          {
            title: this.title,
            content: this.content,
          }
        );
        console.log(response);
        this.name = "";
        this.comment = "";
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

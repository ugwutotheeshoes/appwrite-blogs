<template>
  <form @submit.prevent="submitForm">
    <h3 class="heading-level-4 u-text-left u-padding-8">Leave a comment</h3>
    <div class="u-grid u-cross-center u-main-start u-padding-16">
      <label for="name">Name:</label>
      <input placeholder="Name" type="text" id="name" v-model="name" required />
      <label for="comment">Comment:</label>
      <textarea
        class="input-text"
        placeholder="Comment"
        cols="80"
        rows="10"
        type="comment"
        id="comment"
        v-model="comment"
        required
      />
      <button class="button" type="submit">
        <span class="text">Submit</span>
      </button>
    </div>
  </form>
</template>

<script>
import { Client, Databases, ID } from "appwrite";

export default {
  data() {
    return {
      name: "",
      comment: "",
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
            name: this.name,
            comment: this.comment,
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

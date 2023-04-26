<template>
  <main>
    <nav>
      <h2 class="logo u-padding-32 eyebrow-heading-1 u-color-text-pink">
        <NuxtLink to="/">Pink Blog</NuxtLink>
      </h2>
    </nav>
    <div v-if="isIdMatch ">
      <h2 class="heading-level-3 u-text-left u-padding-64">{{ post.title }}</h2>
      <p class="heading-level-7 u-padding-64" style="line-height: 2.5rem">
        {{ post.posts }}
      </p>
    </div>
  </main>
</template>

<script setup>
import { Client, Databases } from "appwrite";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const id = route.params;

const isIdMatch = router.currentRoute.value.params.id === id;

const post = ref(null);
const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint(
    "https://8080-appwrite-integrationfor-vscej96iekp.ws-eu94.gitpod.io/v1"
  ) // Your API Endpoint
  .setProject("643bc171521ce38501dd"); // Your project ID

const singlePost = databases.getDocument(
  "OUR_DATABASE_ID",
  "OUR_COLLECTION_ID",
  "OUR_DOCUMENT_ID"
);

onMounted(() => {
  singlePost.then(
    function (response) {
      ss.value = response;
      console.log(ss.value); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
});
</script>

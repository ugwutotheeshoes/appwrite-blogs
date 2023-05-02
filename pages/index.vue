<template>
  <main>
    <nav>
      <h2 class="logo u-padding-32 eyebrow-heading-1 u-color-text-pink">
        <NuxtLink to="/">Pink Blog</NuxtLink>
      </h2>
    </nav>
    <div class="container">
      <div class="u-grid">
        <h2
          class="heading-level-3 u-text-left u-margin-inline-start-16 u-padding-inline-end-56"
        >
          {{ docs[0].title }}
        </h2>
        <p class="heading-level-7 u-padding-16 u-line-height-2">
          {{ docs[0].content }}
        </p>
      </div>
      <comment />
    </div>
  </main>
</template>

<script setup>
import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import comment from "../components/comment.vue";
import { getPost } from "../utils";
const docs = ref(null);

onMounted(() => {
  getPost.then(
    function (response) {
      docs.value = response.documents;
      console.log(docs.value[0].title);
    },
    function (error) {
      console.log(error);
    }
  );
});
</script>

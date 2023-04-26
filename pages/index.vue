<template>
  <main>
    <nav>
      <h2 class="logo u-padding-32 eyebrow-heading-1 u-color-text-pink">
        <NuxtLink to="/">Pink Blog</NuxtLink>
      </h2>
    </nav>
    <div class="container">
      <h2 class="eyebrow-heading-1 u-text-center u-padding-64">posts</h2>
      <ul class="list">
        <li
          class="box u-flex u-cross-center u-main-space-between"
          v-for="doc in docs"
          :key="doc.$id"
        >
          <NuxtLink :to="`/post/${doc.$id}`">
            <div class="u-grid">
              <span class="text eyebrow-heading-1"> {{ doc.title }} </span>
              <span class="text">{{ doc.posts.slice(1, 200) }}</span>
            </div>
          </NuxtLink>
          <span class="button icon-cheveron-right" aria-hidden="true"></span>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import { getPost } from "../utils";
const docs = ref(null);

onMounted(() => {
  getPost.then(
    function (response) {
      docs.value = response.documents;
      console.log(docs.value);
    },
    function (error) {
      console.log(error);
    }
  );
});
</script>

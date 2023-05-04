<template>
  <main>
    <nav class="u-flex u-cross-center u-main-space-between u-padding-32">
      <h2 class="logo u-padding-32 eyebrow-heading-1 u-color-text-pink">
        <NuxtLink to="/">Pink Blog</NuxtLink>
      </h2>
      <NuxtLink to="/article">
        <span class="button"> WRITE AN ARTICLE </span>
      </NuxtLink>
    </nav>
        <div class="container">
      <h2 class="eyebrow-heading-1 u-text-center u-padding-64">posts</h2>
      <ul class="list">
        <li class="box" v-for="doc in docs.slice().reverse()" :key="doc.$id">
          <NuxtLink :to="`/post/${doc.$id}`">
            <div class="u-flex u-cross-center u-main-space-between">
              <div class="u-grid">
                <span class="text eyebrow-heading-1"> {{ doc.title }} </span>
                <span class="text">{{ doc.content.slice(1, 200) }}</span>
              </div>
              <span
                class="button icon-cheveron-right"
                aria-hidden="true"
              ></span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup>
import "@appwrite.io/pink";
import "@appwrite.io/pink-icons";
import { getPost } from "../utils";
import { Client, Databases } from "appwrite";
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

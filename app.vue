<template>
  <div class="bg-black py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-9xl font-semibold text-blue-600">Title</h1>
      <p class="mt-4 text-6xl font-bold text-gray-900">Description</p>
    </div>
    <NuxtLayout>
      <template #default>
        <NuxtPage />
      </template>
      <template #footer>
        <p>我是 Footer</p>
      </template>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup></script>

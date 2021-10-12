<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div class="flex-shrink-0">
      <img class="h-48 w-full object-cover" :src="article.imageUrl" alt="" />
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <p class="text-sm font-medium text-indigo-600 bg-indigo-200 rounded-full w-min px-3 py-1">
          <a :href="article.category.href" class="whitespace-nowrap">
            {{ article.category.name }}
          </a>
        </p>
        <a :href="article.href" class="block mt-2">
          <p class="text-xl font-semibold text-gray-900">
            {{ article.title }}
          </p>
          <p class="mt-3 text-base text-gray-500">
            {{ article.description }}
          </p>
        </a>
      </div>
      <div class="mt-6 flex items-center">
        <div class="flex-shrink-0">
          <a :href="article.author.href">
            <span class="sr-only">{{ article.author.name }}</span>
            <img class="h-10 w-10 rounded-full" :src="article.author.imageUrl" alt="" />
          </a>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">
            <a :href="article.author.href" class="hover:underline">
              {{ article.author.name }}
            </a>
          </p>
          <div class="flex space-x-1 text-sm text-gray-500">
            <time :datetime="article.datetime">
              {{ article.date }}
            </time>
            <span aria-hidden="true"> &middot; </span>
            <span> {{ article.readingTime }} read </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

type Props = {
  article: { [K: string]: string }
}

withDefaults(defineProps<Props>(), {
  article: {}
})
</script>

<style>

</style>
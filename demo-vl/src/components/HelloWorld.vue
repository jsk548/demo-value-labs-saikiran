<template>
  <div class="flex flex-col bg-black min-h-96">
    <div id="banner" class="flex w-full space-x-2 overflow-auto">
      <img v-for="n in 3" src="../assets/01.webp" />
    </div>
    <div id="tiles_1" class="flex flex-col mb-2">
      <div class="text-white text-lg font-bold sm:text-xl pl-2">{{ secondRowTitle }}</div>
      <div class="flex flex-row my-2 overflow-auto">
        <div v-for="asset in secondRowData" class="min-w-32 w-32 sm:w-64">
          <img :src="getImageUrl(asset)" />
          <p class="text-white font-semibold px-2"> {{ asset.title }}</p>
          <p class="px-2 text-gray-300"> {{ asset.params.genres[0].title }}</p>
        </div>
      </div>
    </div>
    <div id="tiles_with_rank" class="mb-5">
      <div class="text-white text-lg sm:text-xl font-bold pl-2">{{ thirdRowTitle }}</div>
      <div class="flex flex-row overflow-auto">
        <div v-for="(asset, index) in thirdRowData" class="flex flex-row min-w-32 w-32 sm:w-64 ml-1">
          <div class="text-[35px] font-bold text-white relative pr-2">
            <span class="absolute bottom-12 sm:bottom-8 mr-1">{{ index+1 }}</span>
          </div>
          <div class="">
          <img class="object-cover" :src="getImageUrl(asset)" />
          <p class="px-2 font-semibold text-white"> {{ asset.title }}</p>
          <p class="px-2 text-gray-300"> {{ asset.params.genres[1]?.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 



<script setup lang="ts">
import { computed, onMounted} from 'vue';
import { useDemo } from '../composable/useDemo'

const { data, fetchData } = useDemo();


 onMounted(async () => {
  await fetchData();
})

const secondRowTitle = computed(() => (data.value)[1]?.title);
const thirdRowTitle = computed(() => (data.value)[2]?.title);

const secondRowData = computed(() => (data.value)[1]?.assets.map((element:any, index: number) =>  ({...element, imgUrl: `../assets/1${index}.jpg`})));
const thirdRowData = computed(() => (data.value)[2]?.assets.map((element:any, index: number) =>  ({...element, imgUrl: `../assets/2${index}.jpg`})));

function getImageUrl(asset: any) {
  return new URL(asset.imgUrl, import.meta.url);
}

</script>

<style scoped>
@import url("https://m7cdn.io/common/css/external/external.css");

</style>

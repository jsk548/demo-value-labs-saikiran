<template>
  <div class="flex flex-col bg-black">
    <div id="banner" class="flex w-full space-x-2 overflow-auto no-scrollbar min-h-60">
      <img v-for="n in 3" src="../assets/01.webp" />
    </div>
    <div id="tiles_1" class="flex flex-col mb-2">
      <div class="text-white text-md font-bold sm:text-xl pl-2">{{ secondRowTitle }}</div>
      <div class="flex flex-row my-2 overflow-auto no-scrollbar">
        <div v-for="asset in secondRowData" class="min-w-44 w-44  px-1  sm:w-64">
          <img :src="getImageUrl(asset)" class="w-44 h-52" />
          <p class="text-white font-semibold px-2 py-0"> {{ asset.title }}</p>
          <p class="px-2 text-gray-300 py-0"> {{ asset.params.genres[0].title }}</p>
        </div>
      </div>
    </div>
    <div id="tiles_with_rank" class="mb-5">
      <div class="text-white text-md sm:text-xl font-bold pl-2">{{ thirdRowTitle }}</div>
      <div class="flex flex-row overflow-auto no-scrollbar">
        <div v-for="(asset, index) in thirdRowData" class="flex flex-row min-w-44 w-44 sm:w-64 ml-1">
          <div class="text-[35px] font-bold text-white min-w-8 w-8 relative pr-1">
            <span class="absolute left-2 bottom-5 mb-20">{{ index+1 }}</span>
          </div>
          <div class="">
          <img class="object-cover w-44 h-52" :src="getImageUrl(asset)"  />
          <p class="px-2 font-semibold text-white py-0"> {{ asset.title }}</p>
          <p class="px-2 text-gray-300 py-0"> {{ asset.params.genres[1]?.title }}</p>
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

<template>
  <div class="bg-black">
    <div class="flex banner">
      <img v-for="n in 3" src="../assets/01.webp" />
    </div>
    <div class="py-8 px-24">
      <h1 class="text-white py-1.5 px-0">{{ secondRowTitle }}</h1>
      <div class="flex banner">
        <span v-for="asset in secondRowData" class="flex flex-col p-1 h-auto w-64 banner-card">
          <img :src="getImageUrl(asset)" />
          <span class="text-white p-1 text-xs"> {{ asset.title }}</span>
          <span class="type py-0.5 px-1"> {{ asset.params.genres[0].title }}</span>
        </span>
      </div>
    </div>
    <div class="py-8 px-24">
      <h1 class="text-white py-1.5 px-0">{{ thirdRowTitle }}</h1>
      <div class="flex banner">
        <span v-for="asset in thirdRowData" class="flex flex-col p-1 h-auto w-64 banner-card">
          <img :src="getImageUrl(asset)" />
          <span class="text-white p-1 text-xs"> {{ asset.title }}</span>
          <span class="type py-0.5 px-1"> {{ asset.params.genres[1]?.title }}</span>
        </span>
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

.banner {
  overflow: auto;
  white-space: nowrap;
}

.banner::-webkit-scrollbar {
  display: none;
}

.banner-card {
  white-space: wrap;
  min-width: 260px;
}

.type {
  color: lightgrey;
  font-size: 11px;
}
</style>

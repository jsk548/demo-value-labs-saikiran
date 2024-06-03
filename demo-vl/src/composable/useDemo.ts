import { ref } from 'vue';

export function useDemo() {
  const data = ref<any>([]);

  async function fetchData(): Promise<void> {
    const response = await fetch("https://asstatic.solocoo.tv/v1/showcase/Home?app=as");
    data.value = (await response.json()).showcase;
    console.log(data.value);
  }

  return {
    data,
    fetchData,
  }
}
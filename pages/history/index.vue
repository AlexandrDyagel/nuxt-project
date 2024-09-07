<script setup>
const limit = ref(22);
const page = ref(1);

const userInfos = ref([]);
const isProgress = ref(false);

const url = computed(() => {
  return `https://jsonplaceholder.typicode.com/users?_limit=${limit.value}&_page=${page.value}`;
});

async function fetchData() {
  try {
    isProgress.value = true;
    const { data } = await useFetch(url);
    userInfos.value = data.value;
  } catch (e) {
    console.error(e.message);
  } finally {
    isProgress.value = false;
  }
}

fetchData();
</script>

<template>
  <TopAppBar title="История" :is-back-button="true" />
  <div
    v-if="isProgress"
    class="fixed start-0 top-0 w-full h-full content-center"
  >
    <svg
      aria-hidden="true"
      class="w-8 h-8 text-gray-200 m-auto animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
    <span class="sr-only text-white">Loading...</span>
  </div>
  <div class="relative overflow-y-auto shadow-md">
    <div v-if="!isProgress">
      <ul
        v-auto-animate
        class="w-full text-sm text-left rtl:text-right text-gray-400"
      >
        <li
          :key="item.id"
          v-for="item in userInfos"
          class="flex items-center justify-between border-b bg-gray-800 border-gray-700"
        >
          <div class="flex items-center px-6 py-4 whitespace-nowrap text-white">
            <div class="ps-3">
              <div class="text-base font-semibold">{{ item.name }}</div>
              <div class="font-normal text-gray-500">{{ item.username }}</div>
              <div class="font-normal text-gray-500">{{ item.email }}</div>
              <div class="font-normal text-gray-500">
                {{ item.address.street }}
              </div>
              <div class="font-normal text-gray-500">
                {{ item.address.suite }}
              </div>
              <div class="font-normal text-gray-500">
                {{ item.address.city }}
              </div>
              <div class="font-normal text-gray-500">
                {{ item.address.zipcode }}
              </div>
            </div>
          </div>
          <div class="px-6 py-4">
            <!-- Modal toggle -->
            <button
              type="button"
              data-toggle="modal"
              data-target="#editUserModal"
              class="text-[10px] px-2 py-0 hover:text-white border focus:ring-4 focus:outline-none font-medium rounded-lg text-center me-2 mb-2 border-green-500 text-green-500 hover:bg-green-600 focus:ring-green-800"
            >
              Посмотреть
            </button>
            <!--          <a href="#" type="button" data-modal-target="editUserModal" data-modal-show="editUserModal"
                         class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Посмотреть</a>-->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

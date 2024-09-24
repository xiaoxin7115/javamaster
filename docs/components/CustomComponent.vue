<template>
  <div>
    <div>
      <input
          type="text"
          v-model="searchQuery"
          placeholder="搜索项目名称"
      />
    </div>
    <table >
      <thead>
      <tr>
        <th scope="col" style="padding: 3px 6px;width: 400px">项目名称</th>
        <th scope="col" style="padding: 3px 6px;width: 400px">项目链接</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(project, index) in filteredProjects"
          :key="index"
          style="background-color: white; border-bottom: 1px solid #ddd; hover: background-color: #f5f5f5;"
      >
        <td style="padding: 4px 6px;">{{ project.name }}</td>
        <!--        <td class="py-4 px-6">-->
        <!--          <a :href="project.link" target="_blank">{{ project.link }}</a>-->
        <!--        </td>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue';

// 模拟数据
const projects = [
  { name: 'Vue CLI', link: 'https://cli.vuejs.org/' },
  { name: 'Element Plus', link: 'https://element-plus.org/' },
  { name: 'Vuetify', link: 'https://vuetifyjs.com/' },
  { name: 'Quasar', link: 'https://quasar.dev/' },
  { name: 'NuxtJS', link: 'https://nuxtjs.org/' },
  { name: 'Pinia', link: 'https://pinia.vuejs.org/' },
  { name: 'Vue Router', link: 'https://router.vuejs.org/' },
  { name: 'Vuex', link: 'https://vuex.vuejs.org/' },
];

// 搜索框绑定的数据
const searchQuery = ref('');

// 过滤后的数据
const filteredProjects = computed(() => {
  if (!searchQuery.value) return projects;
  return projects.filter(project => project.name.includes(searchQuery.value));
});
</script>

<style scoped>
.container {
  max-width: 800px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 10px;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

tr:hover {
  background-color: #f5f5f5;
}

a {
  color: blue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

<template>
  <div>
    <!-- hearder -->
    <TodoHeader />
    <!-- hearder -->

    <!-- Listes des tâches -->
    <main class="main">
      <div class="toggle-all-container">
        <input type="checkbox" id="toggle-all-input" class="" />
        <label for="toggle-all-input">Tous afficher</label>
      </div>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <div class="view">
            <input type="checkbox" :id="todo.id" class="toggle"  />
            <label :for="todo.id">{{ todo.label }}</label>
          </div>
        </li>
        
      </ul>
    </main>
    <!-- Listes des tâches -->

    <!-- footer -->
    <TodoFooter />
    <!-- footer -->
  </div>
</template>

<script setup lang="ts">
import TodoFooter from '@/components/TodoFooter.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import { ref } from 'vue';

const todos = ref([
  {id: "b3067bb8-7471-4bf5-ae72-719f766652f5" , label:" Ma tâche 1" , conmpleted:false},
  {id: "6887a322-9985-41a1-b90e-66f7749a3773" , label:" Ma tâche 2" , conmpleted:false},
  {id: "6255b7c4-0ffc-42ed-a757-80bec22d583e" , label:" Ma tâche 3" , conmpleted:false},
  {id: "33d57b1b-ef58-43f3-a1db-cb8f18f8e042" , label:" Ma tâche 4" , conmpleted:false},
])
</script>

<style scoped></style>

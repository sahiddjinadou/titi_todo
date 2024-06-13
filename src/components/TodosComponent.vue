<template>
  <div>
    <!-- hearder -->
    <TodoHeader />
    <!-- hearder -->

    <!-- Listes des tâches -->
    <main class="main">
      <div class="toggle-all-container">
        <input type="checkbox"  id="toggle-all-input" class="">
        <label for="toggle-all-input">Tous afficher</label>
      </div>
      <ul class="todo-list">
        <li>
          <div class="view">
            <input type="checkbox"  id="" class="toggle">
            <label for="">Tâches 1</label>
          </div>
        </li>
        <li>
          <div class="view">
            <input type="checkbox"  id="" class="toggle">
            <label for="">Tâches 2</label>
          </div>
        </li>
        <li>
          <div class="view">
            <input type="checkbox"  id="" class="toggle">
            <label for="">Tâches 3</label>
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
</script>

<style scoped></style>

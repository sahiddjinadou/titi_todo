<template>
  <div class="footer">
    <span class="todo-count">
      <strong> 10 tâches Restantes</strong>
    </span>
    <ul class="filters">
      <li><RouterLink to="#">Tous</RouterLink></li>
      <li><RouterLink to="#">En Cours</RouterLink></li>
      <li><RouterLink to="#"> Terminer</RouterLink></li>
    </ul>
    <button class="clear-completed">sup. tâches terminées</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>

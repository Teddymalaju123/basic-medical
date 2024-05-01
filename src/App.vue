<template>
  <div>
    <Navigator />
    <router-view />
  </div>
</template>

<script>
import Navigator from "./components/Navigator.vue";

export default {
  components: {
    Navigator,
  },
};
</script>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

@media (max-width: 768px) {
  .app-container {
    font-size: 14px;
  }
}

@media (min-width: 768px) {
  .app-container {
    font-size: 16px;
  }
}

@media (min-width: 992px) {
  .app-container {
    font-size: 18px;
  }
}

@media (min-width: 1200px) {
  .app-container {
    font-size: 20px;
  }
}
</style>
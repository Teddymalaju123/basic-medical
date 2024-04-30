<template>
<nav class="tapbar d-flex justify-content-between">
  <i class="fa-solid fa-chevron-left mt-3 ms-2" @click="goBack"></i>
  <div class="tapbar-top mt-2">
    <span>{{ selectedTab }}</span>
  </div>
  <div></div>
</nav>

 <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-start">
    <div class="icon-link">

      <router-link to="/" class="navbar-item" :class="{ active: $route.path === '/' }" @click="selectTab('Action plan')">
        <i class="fa-solid fa-truck-medical" style="font-size: 24px;"></i>
        <div><span class="text-nav">Action plan</span></div>
      </router-link>

    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: "Navigator",
  data() {
    return {
      selectedTab: "Action plan",
    };
  },
  methods: {
    selectTab(tabName) {
      this.selectedTab = tabName;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.tapbar{
    background-color: orange;
    height: 45px;
    display: flex;
    justify-content: center;
    border-bottom: 4px solid #dda42a;
}

.navbar {
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.navbar-item {
  color: #333333;
  width: 100%;
  text-align: center;
}

.navbar-item.active {
  color: orange;
}

.icon-link {
  display: flex;
  align-items: center;
}

.icon-link i {
  margin-right: 5px;
}

.navbar-start {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>

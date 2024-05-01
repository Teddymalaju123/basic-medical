<template>
  <div class="d-flex justify-content-center">
    <div class="mt-1"> 
      <img
        src="@/assets/asthema.png"
        alt="รูปภาพ"
        class="responsive-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Spacer",
};
</script>

<style scoped>
.responsive-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .responsive-image {
    max-width: 90%;
  }
}

@media (min-width: 992px) {
  .responsive-image {
    max-width: 70%;
  }
}

@media (min-width: 1200px) {
  .responsive-image {
    max-width: 50%;
  }
}
</style>

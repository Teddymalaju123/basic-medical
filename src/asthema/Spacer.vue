<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="max-image-width">
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

.max-image-width {
  max-width: calc(80vw - 25px);
  overflow-x: auto;
  display: flex;
  justify-content: center;
}
</style>

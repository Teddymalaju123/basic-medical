<template>
  <div class="card text-center ms-2 me-2 mt-4">
    <div class="card-header">
      <h2>อาการปกติ</h2>
    </div>
    <div class="card-body">
      <h5 class="card-title">ปฏิบัติดังนี้</h5>
      <div class="card-text">
        <div>- ใช้ยาตามคำแนะนำของเภสัชกรทุกวัน เพื่อการควบคุมอาการของโรค</div>
      </div>

       <div class="border border-2 rounded-2 mt-3 d-grid gap-2 col-6 mx-auto">
        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToMDI">MDI</button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToSpacer">
            MDI + Spacer
          </button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToTurbuhaler">
            Turbuhaler
          </button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToAccuhaler">
            Accuhaler
          </button>
        </div>

        <div class="mt-2 pb-2">
          <button class="btn btn-outline-success" @click="goToHandihaler">
            Handihaler
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "NoCopd",
  methods: {
    goToAccuhaler() {
      this.$router.push("/accuhaler");
    },
    goToHandihaler() {
      this.$router.push("/handihaler");
    },
    goToMDI() {
      this.$router.push("/mdi");
    },
    goToSpacer() {
      this.$router.push("/spacer");
    },
    goToTurbuhaler() {
      this.$router.push("/turbuhaler");
    },
  },
};
</script>

<style scoped>
 .btn-outline-success{
    width: 95%;
 }
</style>

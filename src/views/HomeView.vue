<template>
  <div class="card-form">
    <header class="text-center">
      <h1 class="mt-5">โรคที่ท่านต้องการเลือก?</h1>
    </header>

    <main class="d-flex justify-content-center align-items-center vh-100">
      <div class="card text-center">
        <div class="card-body">
          <div class="card-text row">
            <!-- ปุ่มเลือก ไม่หอบ -->
            <button @click="goToCopdView" class="btn btn-primary">
              โรคปอดอุดกั้นเรื้องรัง
            </button>

            <!-- ปุ่มเลือก หอบแล้ว -->
            <button @click="goToAsthmaView" class="btn btn-primary mt-2">
              โรคหอบหืด
            </button>

            <!-- QR Code Generator -->
            <div class="qrcode" v-if="qrCodeData">
              <VueQrcode :value="qrCodeData" type="url" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VueQrcode from "vue-qrcode";
import QRCode from "qrcode";

export default {
  name: "HomeView",
  components: {
    VueQrcode,
  },
  data() {
    return {
      qrCodeData: window.location.href,
    };
  },
  methods: {
    goToCopdView() {
      this.$router.push('/copd');
    },
    goToAsthmaView() {
      this.$router.push('/asthema');
    },
    async generateQRCode() {
      try {
        const text = "Your text or data for QR Code";
        const qrCodeDataURL = await QRCode.toDataURL(text);
        this.qrCodeData = qrCodeDataURL;
      } catch (error) {
        console.error("Error generating QR Code:", error);
      }
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding: 20px;
}
.card {
  width: 25rem;
  border: 2px solid #007bff;
}
.qrcode img {
  width: 200px;
  height: 200px;
}
.card-form {
  margin:20px;
  border: 2px solid orange;
}
.btn.btn-primary:active{
  background-color: #a00404;
}
.btn.btn-primary:hover{
  background-color: #a00404;
}

.vh-100 {
    height: 50vh !important;
}

</style>

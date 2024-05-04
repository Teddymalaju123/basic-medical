<template>
  <div class="card-form">
    <header class="text-center">
      <h1 class="mt-5">โรคที่ท่านต้องการเลือก?</h1>
    </header>

    <main class="d-flex justify-content-center align-items-center vh-100">
      <div class="card text-center ms-1 me-1">
        <div class="card-body" style="background: linear-gradient(to right, #9DC4FE, #246DDA);">
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
              <h1 class="text-qr">scan me:</h1>
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
.card {
  width: 25rem;
  border: 2px solid #f8f8f8;
}
.qrcode img {
  width: 200px;
  height: 200px;
}
.card-form {
  margin:20px;
  border: 2px solid #f8f8f8;
}
.btn.btn-primary:active{
  background-color: aliceblue;
  color:black;
}
.btn.btn-primary:hover{
  background-color: aliceblue;
  color:black;
}

.vh-100 {
    height: 50vh !important;
}

.text-qr{
  font-size: 20px;
  color: aliceblue;
}
</style>

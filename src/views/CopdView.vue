<template>
  <main class="d-flex justify-content-center align-items-center vh-100">
    <div class="card text-center">
      <div class="card-body">
        <div class="card-text row">
          <button @click="showNotAsthmaPopup" class="btn btn-primary">
            ไม่มีอาการหอบ
          </button>

          <button @click="showAsthmaPopup" class="btn btn-primary mt-2">
            มีอาการหอบ
          </button>

          <div>
            <div v-if="notAsthmaPopupVisible" class="popup">
              <div class="popup-content">
                <h2>ไม่มีอาการหอบ</h2>
                <p>คำอธิบายเกี่ยวกับการดูแลสุขภาพเบื้องต้น</p>
                <button @click="closePopup" class="btn btn-secondary">
                  ปิด
                </button>
              </div>
            </div>

            <div v-if="asthmaPopupVisible" class="popup">
              <div class="popup-content">
                <h2>มีอาการหอบ</h2>
                <p>คำอธิบายเกี่ยวกับอาการเบื้องต้นของหอบ</p>
                <button @click="showMedicationPopup" class="btn btn-primary">
                  ยาสำหรับการรักษา
                </button>
                <button @click="closePopup" class="btn btn-secondary">
                  ปิด
                </button>
              </div>
            </div>

            <div v-if="medicationPopupVisible" class="popup">
              <div class="popup-content">
                <h2>ยาสำหรับการรักษา</h2>
                <p>ข้อมูลเกี่ยวกับการพ่นยาสำหรับการรักษาอาการหอบ</p>
                <img src="@/assets/asthema.png" alt="รูปภาพ" />
                <button @click="closePopup" class="btn btn-secondary">
                  ปิด
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "CopdView",
  data() {
    return {
      notAsthmaPopupVisible: false,
      asthmaPopupVisible: false,
      medicationPopupVisible: false,
      qrCodeData: window.location.href,
    };
  },
  methods: {
    showNotAsthmaPopup() {
      this.notAsthmaPopupVisible = true;
    },
    showAsthmaPopup() {
      this.asthmaPopupVisible = true;
    },
    showMedicationPopup() {
      this.medicationPopupVisible = true;
    },
    closePopup() {
      this.notAsthmaPopupVisible = false;
      this.asthmaPopupVisible = false;
      this.medicationPopupVisible = false;
    },
  },
};
</script>
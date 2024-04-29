<template>
  <header class="text-center">
    <h1>แนวทางปฏิบัติฉุกเฉินเมื่อเกิดอาการหอบ?</h1>
    <h2>ตอนนี้ท่านมีอาการหอบหรือไม่</h2>
  </header>

  <main class="d-flex justify-content-center align-items-center vh-100">
    <div class="card text-center">
      <div class="card-body">
        <div class="card-text row">
          <!-- ปุ่มเลือก ไม่หอบ -->
          <div @click="showNotAsthmaPopup" class="noasthe-body">
            ไม่มีอาการหอบ
          </div>

          <!-- ปุ่มเลือก หอบแล้ว -->
          <div class="asthe-body" @click="showAsthmaPopup">
            <div>หอบ</div>
            <div>ตื่นมาไอตอนกลางคืน</div>
            <div>แน่นหน้าอก หวีด</div>
            <div>ค่าสมรรถภาพปอด 50 - 80% ของค่าสูงสุด</div>
          </div>

          <div class="hardasthe-body" @click="showHardAsthmaPopup">
            <div>หอบมาก</div>
            <div>พูดได้เป็นคำ ไม่เป็นประโยค</div>
            <div>หน้าเขียว</div>
            <div>ค่าสมรรถภาพปอดน้อยกว่า 50% ของค่าสูงสุด</div>
          </div>
        </div>

        <!-- Popup หากเลือก ไม่หอบ -->
        <div v-if="notAsthmaPopupVisible" class="popup">
          <div class="header-pop">
            <h2>ไม่หอบ</h2>
            <h2>สบาย หายใจสะดวก ไม่แน่นหน้าอกหรือไอ</h2>
          </div>

          <div class="body-popup">
            <p>ปฏิบัติดังนี้</p>
            <div>- ใช้ยาป้องกันหอบเป็นประจำทุกวัน ไม่ปรับยาลดลง</div>
            <div>- หลีกเลี่ยงสิงกระตุ้นที่ทำให้อาการแย่ลง</div>
            <div>
              - ถ้าหอบจากการออกกำลังกายให้พ่นยาขยายหลอดลมก่อนออกกำลังกาย 15 นาที
            </div>
            <div>
              - ควรอบอุ่นร่างกายและผ่อนคลายกล้ามเนื้อ 10 - 15 นาที
              ก่อนและหลังการออกกำลังกาย
            </div>
            <button @click="closePopup" class="btn btn-secondary">ปิด</button>
          </div>
        </div>

        <!-- Popup หากเลือก หอบแล้ว -->
        <div v-if="asthmaPopupVisible" class="popup">
          <div class="header-pop">
            <h2>หอบ</h2>
            <p>อาการกำเริบ ควบคุมได้บ้าง</p>
          </div>

          <div class="body-popup">
            <p>ปฏิบัติดังนี้</p>
            <div>- พ้นยาฉุกเฉิน ทุก 15 นาที 3 ชุด</div>
            <div>
              - pMDI 1 ชุด คือ กดยา 4 ครั้ง แต่ล่ะครั้งห่างกัน 10 วินาที
            </div>
            <div>- Trubuhaler 1 ชุด คือ 1 สูด</div>
            <div>- ถ้าพ่น 3 ชุดแล้วอาการไม่ดีขึ้น โทรเรียกรถพยาบาลมารับ</div>
          </div>
          <button @click="showMedicationPopup" class="btn btn-primary">
            ยาสำหรับการรักษา
          </button>
          <button @click="closePopup" class="btn btn-secondary">ปิด</button>
        </div>

        <!-- Popup หากเลือก หอบมาก -->
        <div v-if="hardAsthmaPopupVisible" class="popup">
          <div class="header-pop">
            <h2>หอบมาก</h2>
            <p>คำอธิบายเกี่ยวกับอาการเบื้องต้นของหอบ</p>
          </div>

          <div class="body-popup">
            <p>ปฏิบัติดังนี้</p>
            <div>- ควรพบแบทย์ทันที</div>
            <div>- พ่นยาฉุกเฉิน 1 ชุด 15 นาที ระหว่างทางไปโรงพยาบาล</div>
            <div>
              - pMDI 1 ชุด คือ กดยา 4 ครั้ง แต่ล่ะครั้งห่างกัน 10 วินาที
            </div>
            <div>- Trubuhaler 1 ชุด คือ 1 สูด</div>
          </div>
          <button @click="showMedicationPopup" class="btn btn-primary">
            ยาสำหรับการรักษา
          </button>
          <button @click="closePopup" class="btn btn-secondary">ปิด</button>
        </div>

        <!-- Popup หากเลือก หอบแล้วและกดเลือก Medication -->
        <div v-if="medicationPopupVisible" class="popup">
          <h2>วิธีพ่นยา</h2>
          <p>ข้อมูลเกี่ยวกับการพ่นยาสำหรับการรักษาอาการหอบ</p>
          <img
            src="@/assets/asthema.png"
            alt="รูปภาพ"
            style="width: 25vw; height: 25vw"
          />
          <div>
            <button @click="closePopup" class="btn btn-secondary mt-2">
              ปิด
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AsthmaView",
  data() {
    return {
      notAsthmaPopupVisible: false,
      asthmaPopupVisible: false,
      hardAsthmaPopupVisible: false,
      medicationPopupVisible: false,
    };
  },
  methods: {
    showNotAsthmaPopup() {
      this.notAsthmaPopupVisible = true;
    },
    showAsthmaPopup() {
      this.asthmaPopupVisible = true;
    },
    showHardAsthmaPopup() {
      this.hardAsthmaPopupVisible = true;
    },
    showMedicationPopup() {
      this.medicationPopupVisible = true;
    },
    closePopup() {
      this.notAsthmaPopupVisible = false;
      this.asthmaPopupVisible = false;
      this.hardAsthmaPopupVisible = false;
      this.medicationPopupVisible = false;
    },
  },
};
</script>

<style scoped>
.noasthe-body {
  background-color: green;
  width: 100%;
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
}

.asthe-body {
  background-color: yellow;
  width: 100%;
  border: 1px solid #ccc;
  cursor: pointer;
}

.hardasthe-body {
  background-color: red;
  width: 100%;
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
}

.card-text {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.popup-content {
  text-align: center;
}

.popup h2 {
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
}

.popup p {
  font-size: 16px;
  color: #666666;
  margin-bottom: 10px;
}

.popup-buttons {
  display: flex;
  justify-content: center;
}

.popup-buttons button {
  margin: 0 10px;
}

.header-pop {
  background-color: orange;
  color: white;
  border-radius: 8px;
  padding-bottom: 5px;
  padding-top: 5px;
}

.img {
  size: 50%;
}
</style>

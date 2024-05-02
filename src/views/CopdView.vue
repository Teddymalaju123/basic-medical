<template>
  <header class="text-center">
    <h1>แนวทางปฏิบัติฉุกเฉินเมื่อเกิดอาการปอดกั้นเรื้องรัง?</h1>
    <h2>ตอนนี้ท่านมีอาการปอดกั้นเรื้อรังเหรือไม่</h2>
  </header>

  <main class="d-flex justify-content-center align-items-center vh-100">
    <div class="card text-center">
      <div class="card-body">
        <div class="card-text">
          <div @click="goToNoCopdView" class="noasthe-body">
            <div class="border-bottom border-dark border-2">อาการปกติ</div>
            <div class="text-a">- ไม่มีอาการหอบ</div>
            <div class="text-a">- ทำกิจวัตรประจำวันได้ตามปกติ</div>
            <div class="text-a">- ไอเสมหะออกง่าย</div>
            <div class="text-a">- นอนหลับดี</div>
            <div class="text-a">- รับประทานอาหาร</div>
            <div class="text-a">- ออกกำลังกายได้</div>
          </div>

          <div class="asthe-body" @click="goToCopdC">
            <div class="border-bottom border-dark border-2">อาการแย่ลงจากโรค</div>
            <div class="text-a">- หายใจหอบ</div>
            <div class="text-a">- ทำกิจวัตรประจำวันไม่ได้ตามปกติ</div>
            <div class="text-a">- ไอมากขึ้น</div>
            <div class="text-a">- เสมหะเหนียวข้น และเปลี่ยนสี</div>
            <div class="text-a">- มีไข้</div>
            <div class="text-a">- นอนไม่หลับ</div>
            <div class="text-a">- เบื่ออาหาร</div>
            <div class="text-a">- สมาธิลดลง</div>
          </div>

          <div class="hardasthe-body" @click="goToHardCopd">
            <div class="border-bottom border-dark border-2">อาการกำเริบและอันตราย</div>
            <div class="text-a">- หายใจหอบมาก</div>
            <div class="text-a">- ไอถี่ และมีเสมหะมาก</div>
            <div class="text-a">- มีเลือดในเสมหะ</div>
            <div class="text-a">- เจ็บหน้าอก</div>
            <div class="text-a">- สับสน พูดไม่รู้เรื่อง</div>
            <div class="text-a">- เป็นลม หมดสติ</div>
            <div class="text-a">- ใช้ยาสูดฉุกเฉินแล้วไม่ดีขึ้น</div>
            <div class="text-a">- มีไข้หนาวสั่น</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  name: "CopdView",
  methods: {
    goToNoCopdView() {
      this.$router.push("/nocopd");
    },
    goToCopdC() {
      this.$router.push("/copdc");
    },
    goToHardCopd() {
      this.$router.push("/hardCopd");
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

.text-a {
  font-size: 10px;
}

</style>

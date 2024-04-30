<template>
  <header class="text-center">
    <h1>แนวทางปฏิบัติฉุกเฉินเมื่อเกิดอาการหอบ?</h1>
    <h2>ตอนนี้ท่านมีอาการหอบหรือไม่</h2>
  </header>

  <main class="d-flex justify-content-center align-items-center vh-100">
    <div class="card text-center">
      <div class="card-body">
        <div class="card-text">

          <div @click="goToNoAsthmaView" class="noasthe-body">
            ไม่มีอาการหอบ
          </div>

          <div class="asthe-body" @click="goToAsthmaC">
            <div>หอบ</div>
            <div>ตื่นมาไอตอนกลางคืน</div>
            <div>แน่นหน้าอก หวีด</div>
            <div>ค่าสมรรถภาพปอด 50 - 80% ของค่าสูงสุด</div>
          </div>

          <div class="hardasthe-body" @click="goToHardAsthema">
            <div>หอบมาก</div>
            <div>พูดได้เป็นคำ ไม่เป็นประโยค</div>
            <div>หน้าเขียว</div>
            <div>ค่าสมรรถภาพปอดน้อยกว่า 50% ของค่าสูงสุด</div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "AsthmaView",
  methods: {
    goToNoAsthmaView() {
      this.$router.push('/noasthema');
    },
    goToAsthmaC() {
      this.$router.push('/asthemac');
    },
    goToHardAsthema() {
      this.$router.push('/hardasthema');
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

</style>

<template>
  <header
    class="text-center"
    style="padding: 20px; background: linear-gradient(to right, #007bff, #00bcd4); color: white"
  >
    <h1 style="font-size: 2rem; margin-bottom: 10px">
      แนวทางปฏิบัติฉุกเฉินเมื่อเกิดอาการหอบ?
    </h1>
    <h2 style="font-size: 1.5rem">ตอนนี้ท่านมีอาการหอบหรือไม่</h2>
  </header>

  <main class="d-flex justify-content-center align-items-center vh-100">
    <div class="card text-center">
      <div class="card-body">
        <div class="card-text">
          <div @click="goToNoAsthmaView" class="noasthe-body">
            <div class="content">ไม่มีอาการหอบ</div>
          </div>

          <div class="asthe-body" @click="goToAsthmaC">
            <div class="content">
              <div class="border-bottom border-1">หอบ</div>
              <div class="text-a">ตื่นมาไอตอนกลางคืน</div>
              <div class="text-a">แน่นหน้าอก หวีด</div>
              <div class="text-a">ค่าสมรรถภาพปอด 50 - 80% ของค่าสูงสุด</div>
            </div>
          </div>

          <div class="hardasthe-body" @click="goToHardAsthema">
            <div class="content">
              <div class="border-bottom border-1">หอบมาก</div>
              <div class="text-a">พูดได้เป็นคำ ไม่เป็นประโยค</div>
              <div class="text-a">หน้าเขียว</div>
              <div class="text-a">ค่าสมรรถภาพปอดน้อยกว่า 50% ของค่าสูงสุด</div>
            </div>
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
      this.$router.push("/noasthema");
    },
    goToAsthmaC() {
      this.$router.push("/asthemac");
    },
    goToHardAsthema() {
      this.$router.push("/hardasthema");
    },
  },
};
</script>

<style scoped>
.card-body {
  width: 75vh;
  height: 50vh;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.noasthe-body,
.asthe-body,
.hardasthe-body {
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.noasthe-body {
  background-color: green;
}

.asthe-body {
  background-color: yellow;
  color: black;
}

.hardasthe-body {
  background-color: red;
}

.content {
  padding: 10px;
}

.text-a {
  font-size: 15px;
}

.border-1 {
  border-bottom: 1px solid #6c757d;
}

.text-center {
  text-align: center;
}

.header {
  padding: 20px;
  color: white;
}


h1 {
  font-size: 2rem; 
  margin-bottom: 10px; 
}

h2 {
  font-size: 1.5rem;
}
</style>

<template>
  <div class="card text-center">
    <div class="card-header">
      <h2>ไม่หอบ</h2>
      <p>สบาย หายใจสะดวก ไม่แน่นหน้าอกหรือไอ</p>
    </div>
    <div class="card-body">
      <h5 class="card-title">ปฏิบัติดังนี้</h5>
      <div class="card-text">
        <div>- ใช้ยาป้องกันหอบเป็นประจำทุกวัน ไม่ปรับยาลดลง</div>
        <div>- หลีกเลี่ยงสิ่งกระตุ้นที่ทำให้อาการแย่ลง</div>
        <div>
          - ถ้าหอบจากการออกกำลังกายให้พ่นยาขยายหลอดลมก่อนออกกำลังกาย 15 นาที
        </div>
        <div>
          - ควรอบอุ่นร่างกายและผ่อนคลายกล้ามเนื้อ 10 - 15 นาที
          ก่อนและหลังการออกกำลังกาย
        </div>
      </div>

      <div class="border border-2 rounded-2 mt-3 d-grid gap-2 col-6 mx-auto">
        <div class="mt-2">
          <button class="btn btn-outline-success">MDI</button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success">
            MDI + Spacer
          </button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success">Turbuhaler</button>
        </div>

        <div class="mt-2">
          <button class="btn btn-outline-success" @click="goToAccuhaler">Accuhaler</button>
        </div>

        <div class="mt-2 pb-2">
          <button class="btn btn-outline-success">Handihaler</button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "NoAsthema",
  methods :{
    goToAccuhaler(){
        this.$router.push('/accuhaler');
    }
  }
};
</script>

<style scoped>
 .btn-outline-success{
    width: 95%;
 }
</style>

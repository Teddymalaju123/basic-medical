<template>
  <div>
    <h1>แบบสอบถามเพื่อวัดระดับโรคหอบหืด</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="symptoms">ระบุอาการของคุณ:</label>
        <textarea id="symptoms" v-model="symptoms" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="severity">ระบุระดับความรุนแรงของอาการ (1-10):</label>
        <input type="number" id="severity" v-model.number="severity" class="form-control" min="1" max="10">
      </div>
      <button type="submit" class="btn btn-primary">ส่งข้อมูล</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'FormTest',
  data() {
    return {
      symptoms: '',
      severity: null,
    };
  },
  methods: {
    submitForm() {
      // ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือประมวลผลข้อมูลต่อไปที่นี่
      console.log('Submitted form data:', { symptoms: this.symptoms, severity: this.severity });
      // สามารถเรียกใช้ API หรือประมวลผลข้อมูลต่อไปได้ตรงนี้
    }
  }
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}
</style>

<template>
  <div class="container">
    <p class="count">
      {{ count }}
    </p>
    <p class="label">
      {{ label }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: Number,
    label: String
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-direction: column;
}
p {
  margin: 0;
}
.count {
  color: #CD5C35;
  font-weight: bold;
  font-size: 18px;
}
.label {
  text-transform: uppercase;
  font-size: 12px;
  color: #92928B;
}
</style>

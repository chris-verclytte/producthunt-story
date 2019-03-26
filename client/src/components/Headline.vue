<template>
  <div>
    <h1 class="title">
      {{ title }}
    </h1>
    <p class="subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Headline',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped>
.title {
  color: #CD5C35;
  font-weight: 500;
  font-size: 32px;
  margin-bottom: 0;
}
.subtitle {
  font-size: 16px;
  margin: 0;
  color: #92928B;
}
</style>

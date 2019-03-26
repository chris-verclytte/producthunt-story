<template>
  <div class="container">
    <div 
      class="image" 
      v-bind:style="{ 'background-image': `url('${post.screenshotUrl}')` }">
    </div>
    <div class="content">
      <p class="name">
        {{ post.name }}
      </p>
      <p class="upvotes">
        {{ post.upvotes }} upvotes
      </p>
      <p class="tagline">
        {{ post.tagline }}
      </p>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    post: Object,
  }
}
</script>

<style scoped>
.container {
  display: inline-flex;
  flex-direction: column;
  background: #FFFFFF;
  box-shadow: 0 0 6px 0px #CCC;
  height: 300px;
  width: 300px;
}
.container > * {
  flex: 1
}

p {
  margin: 0
}

.image {
  background-size: cover;
}

.content {
  padding: 10px;
}

.name {
  color: #CD5C35;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
}

.upvotes {
  font-size: 12px;
  margin-bottom: 15px;
}
</style>

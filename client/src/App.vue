<template>
  <div id="app">
    <Headline title="ProductHunt" subtitle="The best new products, every day" />
    <select class="selector" v-model="dateSelection">
        <option 
          v-for="(hrDate, index) in dates" 
          v-bind:key="index"
          v-bind:value="index"
        >
          {{ hrDate }}
        </option>
    </select>  

    <div v-if="$apollo.loading">Loading...</div>
    <template v-else>

      <div class="stats">
        <Counter class="counter" label="posts" v-bind:count="postsCount"/>
        <Counter class="counter" label="votes" v-bind:count="votesCount"/>
        <Counter class="counter" label="comments" v-bind:count="commentsCount"/>
        <Counter class="counter" label="makers" v-bind:count="makersCount"/>
      </div>
      
      <div class="post-grid">
        <Card 
          v-for="post in productHuntPosts" 
          v-bind:post="post"
          v-bind:key="post.id"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { gql } from 'apollo-boost'
import Counter from './components/Counter.vue'
import Headline from './components/Headline.vue'
import Card from './components/Card.vue'

export default {
  name: 'app',
  components: {
    Counter,
    Headline,
    Card,
  },
  apollo: {
    productHuntPosts: {
      query: gql`query getProductHuntPosts($daysAgo: Int) {
        productHuntPosts(daysAgo: $daysAgo) {
          id
          name
          tagline
          screenshotUrl
          upvotes
          commentsCount
          makersCount
        }
      }`,
      variables () {
        return {
            daysAgo: this.dateSelection,
        }
      },
    }
  },
  computed: {
    dates: function () {
      const dates = [
        'Today',
        'Yesterday',
      ]
      for (let i = 2; i < 30; i++) {
        dates.push(`${i} days ago`)
      }
      return dates 
    },
    postsCount: function () { 
      return this.productHuntPosts.length
    },
    votesCount: function () { 
      return this.productHuntPosts.reduce((result, post) => result + post.upvotes, 0)
    },
    commentsCount: function () { 
      return this.productHuntPosts.reduce((result, post) => result + post.commentsCount, 0)
    },
    makersCount: function () { 
      return this.productHuntPosts.reduce((result, post) => result + post.makersCount, 0)
    },
  },
  data: () => {
    return {
      productHuntPosts: [],
      dateSelection: 0,
    }
  },
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F2F3F4;
  overflow: scroll;
  height: 100%;
}
</style>

<style scoped>
.counter {
  margin: 5px 10px;
}

.selector {
  display: block;
  margin: 20px auto;
}

.stats {
  margin-bottom: 20px;
}

.post-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto)); 
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 70%;
  margin: 20px auto;
}
</style>
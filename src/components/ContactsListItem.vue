<template>
  <router-link :to="{path:'/contact/'+contact.id}">
      <div class="ui attached vertical segment grid clearing middle aligned">
        <div class="ui row">
          <div class="ui four wide column">
            <img class="ui tiny image" :src="contact.smallImageURL" @error="setDefaultImage()"/>
          </div>
          <div class="ui twelve wide column description">
            <h2 :style="descriptionStyleData" class="ui header aligned left">
              <span style="font-size: 0.75em" v-if="contact.favorite">⭐</span>
              {{contact.name}}
              <div :style="companyNameStyleData" class="sub header">{{contact.companyName}}</div>
            </h2>
          </div>
        </div>
      </div>
  </router-link>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  computed: {
    companyNameStyleData () {
      return (this.contact.favorite) ? {paddingLeft: '2em'} : {}
    },
    descriptionStyleData () {
      return (this.contact.favorite) ? {} : {paddingLeft: '1.25em'}
    }
  },
  methods: {
    setDefaultImage () {
      console.log(`Detected error when retrieving profile image for ${this.contact.name}, replacing with default`)
      this.contact.smallImageURL = 'static/UserSmall/UserIconSmall@3x.png'
    }
  }
}
</script>

<style scoped>
.favorite.icon {
  width: 30px;
  height: 30px;
}

.description .ui.header {
  font-weight: normal;
}
</style>

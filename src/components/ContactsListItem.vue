<template>
  <router-link :to="{path:'/contact/'+contact.id}">
      <div class="ui padded attached segment doubling grid">
        <div class="ui five wide column">
          <img class="ui small image" :src="contact.smallImageURL" @error="setDefaultImage(contact.id)"/>
        </div>
        <div class="ui eleven wide column description">
          <img v-if="contact.favorite" class="ui image" src="static/FavoriteStarTrue/FavoriteTrue@3x.png"/>
          <h3 class="ui header aligned left">{{contact.name}}
            <div class="sub header">{{contact.companyName}}</div>
          </h3>
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
  methods: {
    setDefaultImage (id) {
      console.log("Detected error")
      this.contacts[id].smallImageURL = 'static/UserSmall/UserIconSmall@3x.png'
    }
  }
}
</script>

<style scoped>
.description .ui.image {
  width: 30px;
  height: 30px;
}
</style>

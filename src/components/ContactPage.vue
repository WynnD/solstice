<template>
  <div id="contact-page" class="ui vertical segments" v-if="dataReady">
    <div id="header" class="ui padded top attached segment aligned center">
      <img class="ui centered medium image" :src="contact.largeImageURL" @error="setDefaultImage"/>
      <h1 class="ui header">{{contact.name}}
        <div class="ui sub header">{{contact.companyName}}</div>
      </h1>
    </div>
    <div class="ui padded attached segment grid phone" v-for="(number,type) in contact.phone"
      :key=type>
        <div class="ui ten wide column left floated">
          <div class="ui sub header aligned left">Phone:</div>
          <div class="ui header aligned left">{{formatPhone(number)}}</div>
        </div>
        <div class="ui six wide column bottom aligned phone-type">
          <div class="ui header right aligned">
            {{type}}
          </div>
        </div>
    </div>

    <div id="address" class="ui padded attached segment grid">
      <div class="ui sixteen wide column">
        <div class="ui sub header aligned left">Address:</div>
        <div class="ui header aligned left" v-html="address"></div>
      </div>
    </div>

    <div id="birthdate" class="ui padded attached segment grid">
      <div class="ui sixteen wide column">
        <div class="ui sub header aligned left">Birthdate:</div>
        <div class="ui header aligned left">{{birthDate}}</div>
      </div>
    </div>

    <div id="email" class="ui padded attached segment grid">
      <div class="ui sixteen wide column">
        <div class="ui sub header aligned left">Email:</div>
        <div class="ui header aligned left"><p style="display: block; width: 100%; text-overflow: ellipsis"> {{contact.emailAddress}}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    contact () {
      return this.contactById()(this.id)
    },
    id () {
      return this.$route.params.id
    },
    address () {
      const {city, country, state, street, zipCode} = this.contact.address
      const line2 = `${city}, ${state} ${zipCode}, ${country}`
      return street + '<br>' + line2 
    },
    birthDate () {
      const months = ['January', 'February', 'March', 
                      'April', 'May', 'June', 'July',
                      'August', 'September', 'October',
                      'November', 'December']
      const date = this.contact.birthdate
      const date_parts = date.split('-')
      const y = date_parts[0]
      const m = date_parts[1]
      let d = date_parts[2]

      if (d.substr(0,1) === '0') { // strip 0 from front of day
        d = d.substr(1,1)
      }

      return `${months[m-1]} ${d}, ${y}`
    },
    dataReady () {
      return !(this.contact === undefined || (Object.keys(this.contact).length === 0 && this.contact.constructor === Object))
    },
  },
  mounted () {
  },
  methods: {
    formatPhone(number) {
      const sections = number.split('-')
      return '(' + sections[0] + ') ' + sections[1] + '-' + sections[2]
    },
    setDefaultImage () {
      console.log("Detected error")
      this.contact.largeImageURL = 'static/UserLarge/UserLarge@3x.png'
    },
    ...mapGetters(['contactById'])
  }
}

</script>

<style>
.ui.sub.header {
  color: #AAA;
}

#header .ui.sub.header {
  text-transform: capitalize;
}

.phone .phone-type .header {
  text-transform: capitalize;
  color: #999;
  font-weight: 500;
  font-size: 1rem;
}

</style>

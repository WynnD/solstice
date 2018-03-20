<template>
  <div>
    {{ contacts }}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['contacts'])
  },
  mounted () {
    this.getContactList()
  },
  methods: {
    ...mapActions(['getContactList'])
  }
}
</script>

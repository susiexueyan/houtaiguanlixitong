<template>
  <div>
    <div>主页</div>
  </div>
</template>

<script>
import {testData} from '../api/api.js'
export default {
  data () {
    return {}
  },
  mounted () {
    testData({
      query: '',
      pagenum: 1,
      pagesize: 10
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div>
    <div v-for="(item, index) in hisList">
      <span>{{item.name}}</span>
      <span>{{item.age}}</span>
      <span>{{item.hobby}}</span>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState, mapMutations } from "vuex";
  export default {
    props:[''],

    data () {
      return {

      };
    },

    components: {},

    computed: {
      ...mapState("spuDetails", ["hisList"])
    },

    beforeMount() {},

    mounted() {
      // this.getHistoryList();
      this.add();
    },

    methods: {
      // 引入actions的两种方式
      // 1. ...mapActions("spuDetails", ["getHistoryList"])
      ...mapActions("spuDetails", {add: "getHistoryList"})
    },

    watch: {}
  }

</script>

<style lang='' scoped>

</style>
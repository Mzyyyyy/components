<template>
  <button @click="add">{{count}}</button>
</template>

<script>
export default {
    data(){
        return {
            count:0
        }
    },
    methods:{
        decrease(){
            this.count-=1
        },
        add(){
            this.count+=1
            this.$emit('show',this.count)
        }
    }
}
</script>

<style>

</style>
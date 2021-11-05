<template>
  <Button @click="add">{{count}}</Button>
</template>


<script >
import Button from '../../../node_modules/view-design/src/components/button/index.js'
export default {
    components:{
        Button
    },
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
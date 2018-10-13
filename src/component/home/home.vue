<template>
  <div class="bg">
    <div class="title">hello vue</div>
  </div>
</template>
<script>

import { get } from '../../common/js/http'

export default {
    components: {},
    data () {
        return {
        }
    },
    beforeMount () {
        get('http://cloud.vae1970.top/address.json', null).then(json => {
            console.log(json);
        })
    },
    methods: {}

};

</script>

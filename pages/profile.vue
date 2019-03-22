<template>
    <div>
        {{username}}
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    middleware:'auth',
    computed:{
        ...mapState(['username'])
    }
}
</script>


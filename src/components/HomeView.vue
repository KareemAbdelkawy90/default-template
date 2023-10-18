<template>
    <div class="text-yellow-600">Home</div> 
    <div class="text-brand-gray-1">
      name is {{ name }}
    </div>
</template>

<script>
export default {
    name: 'HomeView',
    computed: {
      name() {
        return this.$store.state.user.name
      }
    }
};
</script>

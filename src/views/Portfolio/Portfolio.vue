<template>
    <b-container>
        <app-portfolio/>
    </b-container>
</template>

<script>
    import portfolio from '@/components/portfolio/portfolio.vue';

    export default {
        name: "portfolio",
        components: {
            appPortfolio: portfolio
        }
    }
</script>

<style scoped>

</style>
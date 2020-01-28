<template>
    <b-container fluid>
        <app-dashboard/>
    </b-container>
</template>

<script>
    import dashboard from '@/components/dashboard/dashboard.vue';

    export default {
        name: 'dashboard-view',
        data: () => ({
            test: 'hello world!!'
        }),
        components: {
            appDashboard: dashboard
        }
    }
</script>


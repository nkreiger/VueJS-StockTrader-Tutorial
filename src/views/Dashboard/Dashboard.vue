<template>
    <b-container fluid>
        <h1>Dashboard</h1>
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


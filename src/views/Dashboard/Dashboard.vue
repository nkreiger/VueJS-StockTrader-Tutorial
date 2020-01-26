<template>
    <b-container fluid>
        <app-dashboard/>
    </b-container>
</template>

<script>
    import dashboard from '@/components/dashboard/dashboard.vue';

    export default {
        name: 'dashboard-view',
        components: {
            appDashboard: dashboard
        }
    }
</script>


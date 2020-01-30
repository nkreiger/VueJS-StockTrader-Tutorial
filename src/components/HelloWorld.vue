<template>
    <b-container class="text-center">
        <b-row>
            <b-col>
                <input type="text" v-model="firstName" :placeholder="hint"/>
            </b-col>
            <b-col>
                <input type="text" v-model="lastName" :placeholder="hint"/>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h1>{{ firstName }}</h1>
            </b-col>
            <b-col>
                <h1>{{ lastName }}</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <h1> {{ fullName }}</h1>
            </b-col>
        </b-row>
        <b-row v-for="(item, index) in items" :key="index">
            <b-col>
                <b-btn @click="show = !show">TOGGLE #{{ index }}</b-btn>
            </b-col>
            <b-col>
                <h1 v-if="show">The Number is {{ item }}</h1>
                <h1 v-else>Good bye {{ item }}</h1>
            </b-col>
        </b-row>
        <b-row v-for="(item, index) in balls" :key="index">
            <b-col>
                <b-btn @click="item.show = !item.show">TOGGLE #{{ index }}</b-btn>
            </b-col>
            <b-col>
                <h1 v-if="item.show">The Number is {{ item }}</h1>
                <h1 v-else>Good bye {{ item }}</h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data: () => ({
            firstName: '',
            lastName: '',
            hint: 'Type something',
            show: true,
            items: [1, 2, 3, 4, 5],
            balls: [{
                value: 1,
                show: true
            },
                {
                    value: 2,
                    show: true
                },
                {
                    value: 3,
                    show: true
                }]
        }),
        computed: {
            fullName() {
                return this.firstName + " " + this.lastName;
            }
        },
        props: ['msg'],
        beforeCreate() {
        },
        created() {
        },
        beforeDestroy() {
        },
        destroyed() {
        }
    }

    /*
        to-do:
        1. data binding (placeholder)
        2. 2-way bind
        3. computed
        3. dynamic toggle
        4. dynamic components
        5. looping
        6. slots and props
        7. lifecycles
        8. state: to do
     */
</script>

<style scoped>

</style>

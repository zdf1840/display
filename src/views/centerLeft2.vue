<template>
    <div id="centreLeft1">
        <div class="com-chart">
            <CentreLeft2Chart />
        </div>
    </div>
</template>

<script>
    import CentreLeft2Chart from "@/components/echart/centerLeft/centerLeft2Chart";
    export default {
        data() {
            return {};
        },
        components: {
            CentreLeft2Chart
        },
        mounted() {},
        methods: {}
    };
</script>

<style scoped>
    .com-chart {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
</style>

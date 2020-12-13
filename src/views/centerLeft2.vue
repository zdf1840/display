<template>
    <div id="centerLeft1">
        <div class="com-chart">
            <CenterLeft2Chart />
        </div>
    </div>
</template>

<script>
    import CenterLeft2Chart from "@/components/echart/centerLeft/centerLeft2Chart";
    export default {
        data() {
            return {};
        },
        components: {
            CenterLeft2Chart
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

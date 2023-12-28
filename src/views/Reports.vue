<template>
    <fragment>
        <Header/>
        <main class="row justify-content-center">
            <div class="col-10 p-5 bg-white">
               <div class="row gy-5">
                <div class="col-6">
                    <div class="chart-container">
                        <h4 class="text-center mb-4">Title 1</h4>
                        <Line/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="chart-container">
                        <h4 class="text-center mb-4">Title 2</h4>
                        <Bar/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="chart-container">
                        <h4 class="text-center mb-4">Title 3</h4>
                        <Radar/>
                    </div>
                </div>
                <div class="col-6">
                    <div class="chart-container">
                        <h4 class="text-center mb-4">Title 4</h4>
                        <Polararea/>
                    </div>
                </div>
               </div>
            </div>
        </main>
    </fragment>

</template>

<script>
import Header from '@/components/Header.vue'
import Bar from '@/components/charts/Bar.vue'
import Line from '@/components/charts/Line.vue'
import Polararea from '@/components/charts/Polararea.vue'
import Radar from '@/components/charts/Radar.vue'
export default {
    components: {
        Header,
        Bar,
        Line,
        Polararea,
        Radar

    }
}
</script>

<style scroped>
    .chart-container{
        padding: 4rem;
        background-color: #f4f7fb;
        border-radius: 8px;
    }
</style>
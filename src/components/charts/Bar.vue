<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="data" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            backgroundColor: ['#fec5bb', '#c8e7ff', '#fad2e1'],
            data: [40, 20, 12],
          } 
        ],
      },
      chartOptions: {
        plugins: {
          legend: {
            display: false, 
          },
        },
      },
    }
  }
}
</script>
<style></style>

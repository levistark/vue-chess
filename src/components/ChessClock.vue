<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { isWhiteToMove } from '@/stores';

const whiteClock = ref({
  time: 600,
  increment: 0.00,
  resume: function() {
    this.increment = 0.1
  },
  start: function () {
    setInterval(() => {      
      this.time -= this.increment
    }, 100)
  },
  pause: function() {
    this.increment = 0.00
  }
})
const blackClock = ref({
  time: 600,
  increment: 0,
  resume: function() {
    this.increment = 0.1
  },
  start: function () {
    setInterval(() => {      
      this.time -= this.increment
    }, 100)
  },
  pause: function() {
    this.increment = 0.00
  }
})

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const whiteTime = computed(() => formatTime(whiteClock.value.time))
const blackTime = computed(() => formatTime(blackClock.value.time))


watch(isWhiteToMove, (boolean) => {
  togglePlayPause(boolean)

})

function togglePlayPause(isWhiteToMove: boolean) {
  if (isWhiteToMove) {
    whiteClock.value.resume()
    blackClock.value.pause()

  } else {
    whiteClock.value.pause()
    blackClock.value.resume()
  }
}

onMounted(() => {
  whiteClock.value.start()
  blackClock.value.start()
})

</script>

<template>
  <div>
    <div class="clock">
      <div class="black-clock time" :key="blackTime">{{ blackTime }}</div>
      <div class="white-clock time" :key="whiteTime">{{ whiteTime }}</div>
    </div>
  </div>
</template>

<style scoped>

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .clock {

    border: solid 1px gray;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;

    .time {
      font-size: 1rem;
      padding: 1rem;
      width: 100%;
      transition: all 0.1s;
    }

    .white-clock {
      background-color: white;
      color: black;
    }

    .black-clock {
      color: white;
    }
  }
  
}
</style>
<template>
  <div class="position-relative" style="top: 5px; left: 5px;">
    <svg width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="18" r="14" fill="white"/>
      <path
        class="icon" 
        :class="{ 'hovered': hovered }"
        d="M29.5312 17.75C29.5312 25.7773 22.9688 32.2812 15 32.2812C6.97266 32.2812 0.46875 25.7773 0.46875 17.75C0.46875 9.78125 6.97266 3.21875 15 3.21875C22.9688 3.21875 29.5312 9.78125 29.5312 17.75ZM13.3008 25.4844L24.082 14.7031C24.4336 14.3516 24.4336 13.707 24.082 13.3555L22.7344 12.0664C22.3828 11.6562 21.7969 11.6562 21.4453 12.0664L12.6562 20.8555L8.49609 16.7539C8.14453 16.3438 7.55859 16.3438 7.20703 16.7539L5.85938 18.043C5.50781 18.3945 5.50781 19.0391 5.85938 19.3906L11.9531 25.4844C12.3047 25.8359 12.9492 25.8359 13.3008 25.4844Z"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
  .icon {
    fill: #8d8d8d;
    transition: fill 0.3s;

    &.hovered {
      fill: #1874DC;
    }
  }
</style>

<script setup>
const props = defineProps({
  hovered: Boolean,
  default: false,
});
</script>
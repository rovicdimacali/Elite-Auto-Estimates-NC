<template>
  <div>
    <RouterView v-if="!isLoading" />
    <loading-page v-else />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    });
  },
};
</script>

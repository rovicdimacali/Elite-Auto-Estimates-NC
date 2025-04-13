<template>
  <div class="loading-container">
    <img
      src="https://cdn-eae.need-clients.com/eliteautoestimates-logo.webp"
      alt="Elite Auto Estimates Logo"
      class="pulse"
    />
  </div>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.pulse {
  animation: pulse 1.5s infinite ease-in-out;
  width: 200px; /* Adjust as needed */
  height: auto;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>

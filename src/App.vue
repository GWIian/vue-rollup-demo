<template>
    <div id="app">
        <h1 style="color:purple;" v-if="isShow">Hello</h1>
    </div>
</template>

<script>
export default {
  computed: {
    isShow() {
      if ("hhhhe".startsWith("hh")) {
        return true;
      }
      return false;
    }
  }
};
</script>

<template>
  <div class="card mt-2">
    <div class="card-body">
      <h4 class="card-title">{{notesProp.reportedBy}}</h4>
      <p class="card-text">{{notesProp.content}}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: "noteComponent",
  props: ["notesProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
</style>
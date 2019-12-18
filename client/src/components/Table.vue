<template>
  <div class="col-12">
    <table class="table tableCss">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Reported By</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "table",
  mounted() {
    return this.$store.state.bugs;
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.tableCss {
  margin-top: 9px;
  border: 2px;
  border-style: solid;
  border-color: gray;
  border-radius: 40px;
}
</style>
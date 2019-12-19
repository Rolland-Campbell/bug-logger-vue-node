<template>
  <div id="home" class="container-fluid">
    <div class="row header">
      <img src="../assets/bugloglogo.png" alt="logo" />
      <button class="btn btn-dark" data-toggle="modal" data-target="#one">Add Note</button>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="card">
        <img class="card-img-top" src="../assets/bugPic.png" alt />
        <div class="card-body">
          <h4 class="card-title">Report Title: {{bugDetails.title}}</h4>
          <div class="card-text">
            Reported By: {{bugDetails.reportedBy}}
            <br />
            Created Date: {{bugDetails.createdAt}}
            <br />
            Status: {{bugDetails.closed}}
          </div>
          <div class="descText">
            <u>Description:</u>
            {{bugDetails.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "bugDetails",
  data() {
    return {};
  },
  computed: {
    bugDetails() {
      return this.$store.state.currentBug;
    }
  },
  methods: {},
  components: {}
};
</script>


<style scoped>
.header {
  justify-content: space-between;
  padding: 10px;
  background-color: maroon;
}

.descText {
  margin-top: 5px;
  padding: 3px;
  border: 1px;
  border-color: gray;
  border-style: solid;
  text-align: left;
}

.card-img-top {
  height: 400px;
  width: 400px;
}
</style>
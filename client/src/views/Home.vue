<template>
  <div id="home" class="container-fluid">
    <div class="row header">
      <img src="../assets/bugloglogo.png" alt="logo" />
      <button class="btn btn-dark" data-toggle="modal" data-target="#one">Report</button>
      <Modal id="one">
        <div slot="title">Report a bug</div>
        <div slot="body">
          <input type="text" placeholder="Title" v-model="title" />
          <br />
          <input type="text" placeholder="Name" v-model="reportedBy" />
          <br />
          <br />
          <textarea placeholder="Enter comments" v-model="description"></textarea>
        </div>
        <div slot="button">
          <button
            type="button"
            class="btn btn-primary"
            @click="addBug()"
            data-dismiss="modal"
          >Save changes</button>
        </div>
      </Modal>
    </div>
    <div class="row">
      <Table />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Modal from "../components/Modal";
import Table from "../components/Table";
export default {
  data() {
    return {
      reportedBy: "",
      description: "",
      closed: false,
      title: "",
      closedDate: ""
    };
  },
  methods: {
    addBug() {
      let bug = {
        reportedBy: this.reportedBy,
        title: this.title,
        description: this.description,
        closedDate: this.closedDate,
        closed: this.closed
      };
      this.$store.dispatch("addBug", bug);
      alert("Bug Reported");
    }
  },
  components: { Modal, Table }
};
</script>

<style scoped>
.header {
  justify-content: space-between;
  padding: 10px;
  background-color: maroon;
}
</style>

<template>
  <div id="home" class="container-fluid">
    <div class="row header">
      <img src="../assets/bugloglogo.png" alt="logo" />
      <button class="btn btn-dark" data-toggle="modal" data-target="#one">Report</button>
      <ModalComponent id="one">
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
      </ModalComponent>
    </div>
    <div class="row tableInsert">
      <div class="col-12">
        <table class="table tableCss">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Title</th>
              <th scope="col">Reported By</th>
              <th scope="col">Status</th>
              <th scope="col">Created Date</th>
            </tr>
          </thead>
          <TableComponent v-for="bug in bugs" :key="bug._id" :bugProps="bug" />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalComponent from "../components/Modal";
import TableComponent from "../components/TableComponent";
export default {
  name: "Home",
  mounted() {
    return this.$store.dispatch("getBugs");
  },
  data() {
    return {
      reportedBy: "",
      description: "",
      closed: false,
      title: "",
      closedDate: ""
    };
  },
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
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
    }
  },
  components: { ModalComponent, TableComponent }
};
</script>

<style scoped>
#home {
  background-color: rgb(248, 236, 221);
  height: 100%;
  margin: auto;
}

.header {
  justify-content: space-between;
  padding: 10px;
  background-color: maroon;
}
.tableInsert {
  overflow: scroll;
  height: 88vh;
  margin: auto;
}

.tableCss {
  margin-top: 9px;
  border: 2px;
  border-style: solid;
  border-color: gray;
  border-radius: 40px;
}
</style>

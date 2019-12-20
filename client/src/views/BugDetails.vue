<template>
  <div id="home" class="container-fluid">
    <div class="row header">
      <img src="../assets/bugloglogo.png" alt="logo" />
      <button class="btn btn-dark" data-toggle="modal" data-target="#note">Add Note</button>
    </div>
    <ModalComponent id="note">
      <div slot="title">
        <h3>Add a Note</h3>
      </div>
      <div slot="body">
        <input class="col-12" type="text" placeholder="Enter your name" v-model="reportedBy" />
        <textarea class="col-12 mt-3" placeholder="Enter comments" v-model="content"></textarea>
      </div>
      <div slot="button">
        <button
          type="button"
          class="btn btn-success"
          @click="addNote()"
          data-dismiss="modal"
        >Add Note</button>
      </div>
    </ModalComponent>
    <div class="row justify-content-center mt-3">
      <div class="col-6">
        <div class="card">
          <img class="card-img-top" src="../assets/bugPic.png" alt />
          <div class="card-body">
            <h4 class="card-title">Report Title: {{bugDetails.title}}</h4>
            <div class="card-text">
              Reported By: {{bugDetails.reportedBy}}
              <br />
              Created Date: {{bugDetails.createdAt.split('T')[0]}}
              <br />Status: OPEN
            </div>
            <div class="descText">
              <u>Description:</u>
              {{bugDetails.description}}
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div>
          <h2 class="notesStyle">Notes:</h2>
        </div>
        <NotesComponent v-for="note in notes" :key="note._id" :notesProp="note" />
      </div>
    </div>
  </div>
</template>


<script>
import ModalComponent from "../components/Modal";
import NotesComponent from "../components/NoteComponent";
export default {
  name: "bugDetails",
  mounted() {
    this.$store.dispatch("getNotesByBugId", this.$route.params.id);
  },
  data() {
    return {
      reportedBy: "",
      content: ""
    };
  },
  computed: {
    bugDetails() {
      return this.$store.state.currentBug;
    },
    notes() {
      return this.$store.state.notes;
    }
  },
  methods: {
    addNote() {
      let note = {
        reportedBy: this.reportedBy,
        content: this.content,
        bug: this.$route.params.id
      };
      this.$store.dispatch("addNote", note);
      alert("Note Added");
    }
  },
  components: { ModalComponent, NotesComponent }
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
  width: cover;
}

.notesStyle {
  background-color: maroon;
  color: white;
}
</style>
<template>
  <div>
    <div class="about">
      <Message ref="msgSuccess" class="success">
        <template v-slot:title>恭喜</template>
        <template>新增课程成功！</template>
      </Message>
      <Message ref="msgWarning" class="warning">
        <template v-slot:title>警告</template>
        <template>请输入课程的名称！</template>
      </Message>
      <Courseadd v-model="course" @add-course="addCourse"></Courseadd>
      <Courselist :courses="courses"></Courselist>
    </div>
  </div>
</template>
<script>
import Courselist from "@/components/Courselist.vue";
import Courseadd from "@/components/Courseadd.vue";
import Message from "@/components/Message.vue";
import { getCourses } from "@/api/courses.js";
import Vue from "vue";

Vue.prototype.$bus = new Vue();

Vue.directive("permission", {
  inserted(el, binding) {
    if (binding.value !== "admin") {
      el.parentElement.removeChild(el);
    }
  }
});

export default {
  name: "App",
  components: {
    //HelloWorld
    Courselist,
    Courseadd,
    Message
  },
  data() {
    return {
      courses: [],
      course: ""
    };
  },
  async created() {
    const courses = await getCourses();
    this.courses = courses;
  },
  methods: {
    addCourse() {
      if (this.course) {
        this.courses.push({ name: this.course });
        this.course = "";
        //this.show = true;
        this.$refs.msgSuccess.toggle();
      } else {
        //this.showWarn = true;
        this.$refs.msgWarning.toggle();
      }
    }
  }
};
</script>

<style scope>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <div></div>
</template>
<script>
var arr = []
var AryData = [
  {
    id: 0,
    children: [
      {
        id: 1,
        children: []
      },
      {
        id: 2,
        children: [
          {
            id: 3,
            children: []
          }
        ]
      }
    ]
  }
];
function aa(data) {
  data.forEach(e => {
    arr.push(e.id);
    if (e.children && e.children.length > 0) {
      aa(e.children);
    }
  })
}
aa(AryData);
console.log(arr);

export default {
  name: "test",
  data() {
    return {
      q: "21432434"
    };
  },
  created() {
    console.log(this.q);
    console.log(this.url);
  },
  computed: {
    url() {
      return "http//qisfiji/qq=" + this.q + "$s=64";
    }
  }
};
</script>
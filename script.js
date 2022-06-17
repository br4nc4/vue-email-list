new Vue({
    el:"#app",
    data:{

    },
    methods:{
       

    },
});

//TEST COME PRIMO APPROCCIO AD AXIOS
axios
.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(function(axiosResp){
    console.log(axiosResp.data.response);
})
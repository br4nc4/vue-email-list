new Vue({
    el:"#app",
    data:{
        mail: [],
    },
    methods:{
        generateMails: function(){
            for (let i = 0; i < 10; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(resp=>{
                    this.mail.push(resp.data.response)
                })
            }
            console.log(this.mail);
        }
    }
});


/* new Vue({
    el:"#app",
    data:{
        listMail:[],
        counter: 0,
    },
    methods:{
        check: function(){
            if (this.listMail === 10) {
                console.log("raggiunto il numero massimo stabilito");
            }
        },
        generateMails: function(){
            const mailRender = document.getElementById("mail");
            const url = "https://flynn.boolean.careers/exercises/api/random/mail";
            for (let i = 0; i < 10; i++) {
                axios
                    .get(url)
                    .then((axiosResponse)=>{
                        this.listMail.push(axiosResponse.data.response);
                        this.check();
                        mailRender.innerText = this.listMail;
                    })
            }
            
        }
    },
}); */

//TEST COME PRIMO APPROCCIO AD AXIOS
/* axios
.get("https://flynn.boolean.careers/exercises/api/random/mail")
.then(function(axiosResp){
    console.log(axiosResp.data.response);
}) */

//TEST PER GENERARE IN UN ARRAY 10 MAIL
const mailUl = document.querySelector(".mail");
function check(){
    if(listMail.length === 10){
        console.log("limite raggiunto");
    }
}
const listMail = [];
for(let i=0; i< 10; i++){
    axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((axiosResp)=>{
            listMail.push(axiosResp.data.response);
            check();
            mailUl.innerText = listMail;
        })
}
console.log(listMail);


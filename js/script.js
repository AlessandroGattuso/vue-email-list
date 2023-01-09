const { createApp } = Vue;

createApp({
  data(){
    return {
      emails: [],
    }
  },
  created(){

    for(let i = 0; i < 10; ++i){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((answer)=>{
          this.emails.push(answer.data.response)
        });
    }

  },
}).mount('#app');
const { createApp } = Vue;

createApp({
  data(){
    return {
      emails: [],
    }
  },
  async created(){

    let tempEmails = [];
    for(let i = 0; i < 10; ++i){
      //the program freeze until this instruction is completly executed
      await axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((answer)=>{
        tempEmails.push(answer.data.response)
      });
    }
    
    //passing 'tempEmails' values to 'emails' with the spread operator
    this.emails = [...tempEmails]
  },
}).mount('#app');
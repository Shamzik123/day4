var app = new Vue({
    el:'#n1',
    data:{
        search:"",
        student:[
            {"id":1,"fio":"Antoshkiv Mukola","grupa":"RPZ 18-2/9","god":2003,"sdal":""},
            {"id":2,"fio":"Bezedinov Miroslav","grupa":"RPZ 18-2/9","god":2002,"sdal":""},
            {"id":3,"fio":"Borzii Danilo","grupa":"RPZ 18-2/9","god":2001,"sdal":""},
            {"id":4,"fio":"Bydovskiy Danilo","grupa":"RPZ 18-2/9","god":2003,"sdal":""},
            {"id":5,"fio":"Velikokon` Boghdan","grupa":"RPZ 18-2/9","god":2003,"sdal":""},
            {"id":6,"fio":"Volosko Serghiy","grupa":"RPZ 18-2/9","god":2002,"sdal":""},
            {"id":7,"fio":"Grychyk Denis","grupa":"RPZ 18-2/9","god":2003,"sdal":""},
            {"id":8,"fio":"Gykov Oleg","grupa":"RPZ 18-2/9","god":2002,"sdal":""},
            {"id":9,"fio":"Korkishko Violetta","grupa":"RPZ 18-2/9","god":2003,"sdal":""},
            {"id":10,"fio":"Kornienko Boghdan","grupa":"RPZ 18-2/9","god":2003,"sdal":""},


        ],
    },
    methods:{
        deleteStudent:function (id) {
            this. student =  this. student.filter(elem => elem.id!=id)
          },
          add:function(){
              let id =this.student[this.student.length-1].id+1;
              this.student.push({"id":id,"fio":this.fio,"grupa":this.grupa,"god":this.god,"sdal":this.sdal})

          }
        
    }
})
var vm = new Vue({
    el:'#databinding',
    data:{
         num1:100,
         num2 :200,
        total:'',
    styleobj:{
       width:"100px",
       height:"100px",
        backgroundColor:"red"
    
    }
    },
    methods:{
        changebgcolor:function(){
        this.styleobj.backgroundColor="green";
    },
        originalcolor:function(){
        this.styleobj.backgroundColor="red";
    }
    },
    });

var url = "http://localhost:3000"
$(document).ready(function(){

   $("#btn_AddNewCity").click(function(){
      $.post(url + "/city/add",{Name:$("#cityName").val()},function(data){
          console.log(data)
         if(data.result == 1){
          $.post(url +"/city",function(data2){
           console.log(data2)
             if(data2.result==1){
              $("#city_List").html("")
             data2.List.forEach(function(city){
  $("#city_List").append(`
  <li cityID="` + city._id+` ">`+city.Name+` </li>
  `)
             })
             }
          })
         }
      })
  })

})


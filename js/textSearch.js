
function gt(keyword){

    var t=document.getElementById("keyword").value;
    console.log(t);
    let nt = t.split("\n");
    var url = "http://classify.ijs.si/ml_hate_speech/ml_bert";
    nt.forEach(element => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      
      xhr.setRequestHeader("accept", "application/json");
      xhr.setRequestHeader("Content-Type", "application/json");
      
      xhr.onreadystatechange = function () {
         if (xhr.readyState === 4) {
            // console.log(xhr.status);
            let x=JSON.parse(xhr.responseText);
            console.log(x[0].Label);
            // if(xhr.responseText==)
            if(element!=""){
            if(x[0].Label=='OFF'){
              var res=`<div class='results offensive'><h4>${element}: This text is offensive</h4></div>`
              document.getElementById("feed").innerHTML+=res;
            }
            else{
              var res=`<div class='results not'><h4>${element}: This text is not offensive</h4></div>`
              document.getElementById("feed").innerHTML+=res;
            }
          }
          else{
            var res=`<div class='results'><h4>Please enter some text</h4></div>`
              document.getElementById("feed").innerHTML+=res;
          }
          }};
  
      
      //var data = '{ "tweet": [ "Fuck"]}';
      
      
      const data={
      tweet:[
      `${element}`
      ]
      }
      
      // console.log(JSON.stringify(data));
      // console.log(data);
      
      let x=JSON.stringify(data);
      
      xhr.send(x);
  
      
    });

  };

  $(document).ready(function(){
    $("#search").click(function(){
    $("div").remove(".results");
    });
  });


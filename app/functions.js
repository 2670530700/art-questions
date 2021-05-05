var x = 0;
    var answer_choice = ["A","B","C","D"];
    var parent = document.getElementById("main");
    function getSum(total, num) {
      return total + num;
    }
    //评分与参考答案
    function examine() {
        olddiv = document.getElementById("score_list");
        if (olddiv) {
          parent.removeChild(olddiv);
        }
        else {
          var newh3 = document.createElement("h3");
          newh3.innerHTML = "评分与参考答案";
          parent.appendChild(newh3);
        }
        var newdiv = document.createElement("div");
        var text = "";
        var scores = [];
        var i=0;
        for (;i<imax;i+=1) {
          var score = 0;
          var answer = exams_choice[i].answer;
          for (var a=1;a<amax;a+=1) {
            if (document.getElementById("choice"+i.toString()+"-"+a.toString()).checked) {
              if (a-1==answer) {
                var score = 3;
                break;
              }
            }
          }
          scores.push(score);
          var text = text + '<thead><tr><td class="mdui-text-center">' + (i + 1).toString() + '</td><td class="mdui-text-center">' + score.toString() + '<td class="mdui-text-center">' + answer_choice[answer] + '</td></tr></thead>';
        }
        for (var x=0;x<xmax;x+=1) {
          var score = 0;
          var answer = exams_judge[x].answer;
          for (var a=0;a<2;a+=1) {
            if (document.getElementById("judge"+x.toString()+"-"+a.toString()).checked) {
              if (a==answer) {
                var score = 3;
                break;
              }
            }
          }
          scores.push(score);
          var text = text + '<thead><tr><td class="mdui-text-center">' + (x + i + 1).toString() + '</td><td class="mdui-text-center">' + score.toString() + '<td class="mdui-text-center">' + answer_choice[answer] + '</td></tr></thead>';
        }
        for (var y=0;y<ymax;y+=1) {
          var score = 0;
          var answer = exams_write[y].answer;
          for (var a=0;a<2;a+=1) {
            if (document.getElementById("check_input-"+a.toString()).value.split(" ")==answer) {
              var score = 3;
              break;
            }
          }
          scores.push(score);
          var text = text + '<thead><tr><td class="mdui-text-center">' + (x + y + i + 1).toString() + '</td><td class="mdui-text-center">' + score.toString() + '<td class="mdui-text-center">' + answer + '</td></tr></thead>';
        }
        for (var z=0;z<zmax;z+=1) {
          var answer = exams_others[z].answer;
          if (answer!="略") {
            var answer = "详见示例";
          }
          var text = text + '<thead><tr><td class="mdui-text-center">' + (x + y + z + i + 1).toString() + '</td><td class="mdui-text-center"><td class="mdui-text-center">' + answer + '</td></tr></thead>';
        }
        newdiv.classList.add("mdui-table-fluid");
        newdiv.setAttribute("id","score_list");
        if (exams_info.exams_others!=undefined) {
          var information = '<div class="mdui-card" style="margin-top: 20px;"><div class="mdui-card-header"><div class="mdui-card-header-title">示例</div></div><div class="mdui-card-content" style="margin-top: -30px;">' + exams_others[0].answer + '</div></div>';
        }
        else {
          var information = "";
        }
        newdiv.innerHTML = '<table class="mdui-table">' +
          '<thead><tr><th class="mdui-text-center">题号</th><th class="mdui-text-center">得分</th><th class="mdui-text-center">答案</th></tr></thead>' + text +
          '<thead><tr><td class="mdui-text-center">总分</td><td class="mdui-text-center">' + scores.reduce(getSum).toString() + '</td></tr></thead></table>' + information;
        parent.appendChild(newdiv);
    }
var newdiv = document.createElement("div");
    newdiv.setAttribute("style","margin-top: 20px;");
    newdiv.classList.add("mdui-card");
    newdiv.innerHTML = '<div class="mdui-card-content"><p>科目：' + exams_tip.subject + '</p><p>类型：' +
      exams_tip.type + '</p><p>题量：' + exams_tip.questions + '</p><p>时间：' + exams_tip.time + '</p>' +
      '<p>请考生在答题时不要离开此页面，否则将自动交卷评分</p></div>';
    parent.appendChild(newdiv);
    for (name in exams_info) {
      var newh3 = document.createElement("h3");
      newh3.innerHTML = exams_info[name];
      parent.appendChild(newh3);
      if (name=="exams_choice") {
        thisdata = exams_choice;
      }
      else if (name=="exams_judge") {
        thisdata = exams_judge;
      }
      else if (name=="exams_write") {
        thisdata = exams_write;
      }
      else if (name=="exams_others") {
        thisdata = exams_others;
      }
    for (index in thisdata) {
      x += 1;
      var information = "";
      var newdiv = document.createElement("div");
      newdiv.setAttribute("style","margin-top: 20px;");
      newdiv.classList.add("mdui-card");
      if (name=="exams_choice") {
        var answer = thisdata[index].choice[thisdata[index].answer];
        thisdata[index].choice.sort(function(){return Math.random()>0.5?-1:1;});
        thisdata[index].answer = thisdata[index].choice.indexOf(answer);
        if (thisdata[index].choice.length==4) {
          var string = '<div class="mdui-col">' +
            '<label class="mdui-radio"><input id="choice' + index.toString() + '-4" type="radio" name="choice"/>' +
            '<i class="mdui-radio-icon"></i>' + thisdata[index].choice[3] + '</label></div>';
        }
        else {
          var string = "";
        }
        var information = '<div class="mdui-col">' +
          '<label class="mdui-radio"><input id="choice' + index.toString() + '-1" type="radio" name="choice"/>' +
          '<i class="mdui-radio-icon"></i>' + thisdata[index].choice[0] + '</label></div>' +
          '<div class="mdui-col">' +
          '<label class="mdui-radio"><input id="choice' + index.toString() + '-2" type="radio" name="choice"/>' +
          '<i class="mdui-radio-icon"></i>' + thisdata[index].choice[1] + '</label></div>' +
          '<div class="mdui-col">' +
          '<label class="mdui-radio"><input id="choice' + index.toString() + '-3" type="radio" name="choice"/>' +
          '<i class="mdui-radio-icon"></i>' + thisdata[index].choice[2] + '</label></div>' + string;
      }
      else if (name=="exams_judge") {
        var information = '<div class="mdui-col">' +
          '<label class="mdui-radio"><input id="judge' + index.toString() + '-0" type="radio" name="choice"/>' +
          '<i class="mdui-radio-icon"></i>正确</label></div>' +
          '<div class="mdui-col">' +
          '<label class="mdui-radio"><input id="judge' + index.toString() + '-1" type="radio" name="choice"/>' +
          '<i class="mdui-radio-icon"></i>错误</label></div>'
      }
      //提示错误
      else if (name=="exams_write") {
        var information = '<div class="mdui-textfield mdui-textfield-floating-label" style="margin-top: -15px;"><label class="mdui-textfield-label">答案</label><input id="check_input-' + index.toString() + '" class="mdui-textfield-input" type="text" required/><div class="mdui-textfield-error">答案错误</div></div>'
      }
      else if (name=="exams_others") {
        var newh3 = document.createElement("h3");
        newh3.innerHTML = thisdata[index].type;
        parent.appendChild(newh3);
        if (thisdata[index].type.indexOf("赏析题")!=-1) {
          var information = '<div class="mdui-textfield mdui-textfield-floating-label" style="margin-top: -15px;"><label class="mdui-textfield-label">答案</label><input id="check_input-' + index.toString() + '" class="mdui-textfield-input" type="text" required/><div class="mdui-textfield-error">答案错误</div></div>'
        }
        else {
          var information = '';
        }
      }
      imagetext = "";
      var image = thisdata[index].image;
      if (image!=undefined) {
        if (typeof image=="string") {
          imagetext = '<div class="mdui-card-media"><img src="' + image + '"/></div>';
        }
        else {
          for (index_ in image) {
            imagetext = imagetext + '<div class="mdui-card-media"><img src="' + image[index_] + '" style="height:300px;"/></div>';
          }
        }
      }
      newdiv.innerHTML = '<div class="mdui-card-header">' +
        '<div class="mdui-card-header-title">第' + parseInt(x).toString() + '题</div></div>' +
        '<div class="mdui-card-primary">' + thisdata[index].question + '</div>' + imagetext +
        '<div class="mdui-card-content"><form>' + information +
        '</form></div></div>';
      parent.appendChild(newdiv);
    }
    }
    var newdiv = document.createElement("div");
    newdiv.innerHTML = '<button onclick="javascript:document.body.scrollTop = 0;document.documentElement.scrollTop = 0;history.go(0)" class="mdui-btn mdui-btn-raised mdui-ripple" style="margin-top: 20px;margin-bottom: 20px;margin-left: 100px;">重新答题</button>' +
      '<button onclick="examine()" class="mdui-btn mdui-btn-raised mdui-ripple mdui-float-right" style="margin-top: 20px;margin-bottom: 20px;">交卷评分</button>';
    parent.appendChild(newdiv);
//倒计时
    var oBox= document.getElementById('timer');       
    var maxtime = 60 * 60;  
    function CountDown() {
      if (maxtime >= 0) {
        minutes = Math.floor(maxtime / 60);
        seconds = Math.floor(maxtime % 60);
        if (seconds.toString().length==1) {
          seconds = "0" + seconds;
        }
        msg = "剩余时间 " + minutes + ":" + seconds;
        oBox.innerHTML = msg;
        if (maxtime == 10 * 60){
          mdui.snackbar({
            message: "距离测试结束还有10分钟，请注意把控时间"
          });
        }
        --maxtime;
      }
      else {
        clearInterval(timer);
        mdui.snackbar({
          message: "测试结束，已自动交卷评分"
        });
        examine();
      }
    }
    timer = setInterval("CountDown()", 1000);
function listener() {
      if (document.visibilityState == "hidden") {
        mdui.snackbar({
          message: "测试结束，已自动交卷评分"
        });
        examine();
        document.removeEventListener("visibilitychange", listener)
      }
    }
    document.addEventListener("visibilitychange", listener);
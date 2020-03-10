/**
 * @author Mustard
 * @dateTime 2020-03-03
 * @version  1.1.1
 */
function removeDuplicatedItem(arr) {
  //去掉重复的id
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

function fillBlanks() {
  var ansarr = [];
  var idList = [];
  var re = [];
  $(".blank-input").each(function(k, v) {
    var id = $(v)
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .parent()
      .attr("id");
    id = id.replace("question", "");
    idList.push(id);
  });
  idList = removeDuplicatedItem(idList);
  // console.log(idList);
  $(idList).each(function(k, id) {
    $.ajax({
      async: false,
      type: "get",
      url: "https://api.ulearning.cn/questionAnswer/" + id,
      datatype: "json",
      success: function(result) {
        re.push(result.correctAnswerList);
      }
    });
  });
  console.log(re);

  $(re).each(function(k1, v1) {
    if (v1.length == 1) {
      ansarr.push(v1[0]);
    } else {
      $(v1).each(function(k2, v2) {
        ansarr.push(v2);
      });
    }
  });
  // console.log(ansarr);
  $(".blank-input").each(function(k, v) {
    console.log(v);
    $(v).val(ansarr.shift());
  });
}

function showAnswer() {
  var sqList = [];
  var re = [];
  $(".question-wrapper").each(function(k, v) {
    var id = $(v).attr("id");
    sqList.push(id.replace("question", ""));
  });
  // console.log(sqList);
  $(sqList).each(function(k, id) {
    $.ajax({
      async: false,
      type: "get",
      url: "https://api.ulearning.cn/questionAnswer/" + id,
      datatype: "json",
      success: function(result) {
        re.push(result.correctAnswerList);
      }
    });
  });
  // console.log(re);
  var an = [];
  $(re).each(function(k, v) {
    an.push(v.join(","));
  });
  var t = $(".question-wrapper").find(".question-title-html");
  t.each(function(k, v) {
    // console.log(v);
    $(v).after('<span style="color:red;">答案：' + an.shift() + "</span>");
  });
}

function quickVideo(speed = 2) {
  $("video").each(function(k, v) {
    v.playbackRate = speed;
    console.log("视频速率为 " + speed + " x");
  });
}

function addSpeed5x() {
  var lastIn = $(".mejs__speed-selector-input").last();
  lastIn.val("5.00");
  lastIn.next().text("5.00x");
}

function addStickyBar() {
  var body = $("body");
  var html = `
		<div style="width: 500px;height: 30px;position: fixed;right: 0;top: 0;z-index: 9999;">
			<div style="height: 30px;width: 100%;">
				<button style="height: 30px;padding: 0 10px;border: none;border-radius: 2px;color: #fff;background-color: #ea5947;
			text-align: center;line-height: 30px;outline: none;margin-right:15px;" onclick="showAnswer()">
					显示答案
				</button>
				<button style="height: 30px;padding: 0 10px;border: none;border-radius: 2px;color: #fff;background-color: #ea5947;
			text-align: center;line-height: 30px;outline: none;margin-right:15px;" onclick="fillBlanks()">自动填空</button>
				<input type="text" id="speed-input" placeholder="倍速" style="width: 50px;">
				<button style="height: 30px;padding: 0 10px;border: none;border-radius: 2px;color: #fff;background-color: #ea5947;
      text-align: center;line-height: 30px;outline: none;" onclick="handlerSpeedClick()">添加倍速</button>
        <button style="height: 30px;padding: 0 10px;border: none;border-radius: 2px;color: #fff;background-color: #ea5947;
			text-align: center;line-height: 30px;outline: none;" onclick="autoNextVideo()">自动换视频</button>
			</div>
			<p>Author:Mustard</p>
		</div>
	`;
  body.prepend($(html));
}

function handlerSpeedClick() {
  var spp = document.getElementById("speed-input").value;
  quickVideo(spp);
}

function autoNextVideo() {
  var $videos = $("video");
  var videoLen = $videos.size();
  if (videoLen) {
    $videos.get(0).play();
  }
  $videos.each(function(i, video) {
    console.log("绑定视频事件！", i);
    // 绑定结束事件
    video.addEventListener("ended", event => {
      console.log("播放完成了一个视频。");
      nextVideo(i + 1 === videoLen, $videos, i);
    });
  });
}

function nextVideo(go, $videos, i) {
  if (go) {
    console.log("下一个！go", go);
    $(".next-page-btn").click();
    setTimeout(() => {
      autoNextVideo();
    }, 2000);
  } else {
    console.log("此页面还有视频");
    $videos.get(i + 1).play();
  }
}

// autoNextVideo();
addSpeed5x();
addStickyBar();


function isDaylight(){
	var currdate = new Date();
	var starthours = 8;//开始小时
	var new_starthours = 9;//开始小时
	var startmintes = 0;//开始分钟
	var endhours = 20;//结束小时
	var endminutes = 0;//结束分钟
	var newstarthours=0;
	var newsendhours=24;
	var new_endhours=18;
	switch(new Date().getDay()){
		case 0:
			if( ((currdate.getHours() > new_starthours)&&(currdate.getHours()< new_endhours ))|| ((currdate.getHours()==new_starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==new_endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
		break;
		case 1:
			if( ((currdate.getHours() > starthours)&&(currdate.getHours()< endhours ))|| ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
		break;
		case 2:
			if( ((currdate.getHours() > starthours)&&(currdate.getHours()< endhours ))|| ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
		break;
		case 3:
			if( ((currdate.getHours() > starthours)&&(currdate.getHours()< endhours ))|| ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
		break;
		case 4:
			if( ((currdate.getHours() > starthours)&&(currdate.getHours()< endhours ))|| ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
		break;
		case 5:
			if( ((currdate.getHours() > starthours)&&(currdate.getHours()< new_endhours ))|| ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==new_endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
		break;
		case 6:
			if( ((currdate.getHours() > starthours)&&(currdate.getHours()< new_endhours ))|| ((currdate.getHours()==starthours)&&(currdate.getMinutes()>= startmintes))|| ((currdate.getHours()==new_endhours)&&(currdate.getMinutes()< endminutes))){
				return false;
			}
			return true;
	}
}
if(!isDaylight()) {
	document.writeln("<script type='text/javascript' src='https://myo.zoosnet.net/JS/LsJS.aspx?siteid=MYO78868373&float=1&lng=cn'><\/script>");
	window.ydtopenchat = function(param1, param2) {
		openZoosUrl()
	}
} else {
	window.ydtopenchat = function(param1, param2) {
		try {
			openJesongChatByGroup(10810, 25939)
		} catch(err) {
			window.location.href = "https://live.easyliao.com/live/chat.do?c=10810&g=25939"
		}
	};
	window.openZoosUrl = function(url, data) {
		ydtopenchat(url, data)
	};
	window.LR_HideInvite = function(url, data) {};
	document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/js/easyliao.js'><\/script>");
	document.writeln("<script type='text/javascript' charset='UTF-8' src='//scripts.easyliao.com/10810/38759.js'><\/script>")
}

function openWply() {
	var mubu = document.getElementsByClassName("wp_mubu")[0];
	mubu.style.display = "block"
}

function closeWply() {
	var mubu = document.getElementsByClassName("wp_mubu")[0];
	mubu.style.display = "none"
}

function online() {
	var now = new Date();
	var month = now.getMonth();
	var day = new Date().getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var week = new Date().getDay();
	console.log("now:" + now + ",hour:" + hour + ",minute:" + minute + ",week:" + week);
	if(week == 0 || week == 6) {
		if(hour <= 7 || hour >= 17) {
			var mubu = document.getElementsByClassName("wp_mubu")[0];
			mubu.style.display = "block"
		} else {
			var e = "moren";
			if(arguments.length == 1) {
				e = encodeURIComponent(arguments[0])
			}
			if(typeof openZoosUrl == "undefined") {
				var url = "https://myo.zoosnet.net/LR/Chatpre.aspx?id=MYO78868373&cid=1df01d68e9974a5b9cdd8804cd55b0ac&lng=cn&sid=1df01d68e9974a5b9cdd8804cd55b0ac&p=" + encodeURIComponent(document.referrer);
				url = url + "&e=" + e + "&p=" + encodeURIComponent(location.href);
				try {
					location.href = " " + url + " "
				} catch(e) {
					qa;
					location.href = url
				}
			} else {
				openZoosUrl("chatwin", "&e=" + e)
			}
			return false
		}
	} else {
		if(hour <= 7 || hour >= 20) {
			var mubu = document.getElementsByClassName("wp_mubu")[0];
			mubu.style.display = "block"
		} else {
			var e = "moren";
			if(arguments.length == 1) {
				e = encodeURIComponent(arguments[0])
			}
			if(typeof openZoosUrl == "undefined") {
				var url = "https://myo.zoosnet.net/LR/Chatpre.aspx?id=MYO78868373&cid=1df01d68e9974a5b9cdd8804cd55b0ac&lng=cn&sid=1df01d68e9974a5b9cdd8804cd55b0ac&p=" + encodeURIComponent(document.referrer);
				url = url + "&e=" + e + "&p=" + encodeURIComponent(location.href);
				try {
					location.href = " " + url + " "
				} catch(e) {
					qa;
					location.href = url
				}
			} else {
				openZoosUrl("chatwin", "&e=" + e)
			}
			return false
		}
	}
}
document.writeln("<script> ");
document.writeln("var _hmt = _hmt || []; ");
document.writeln("(function() { ");
document.writeln("var hm = document.createElement('script'); ");
document.writeln("hm.src = 'http://pv.sohu.com/cityjson?ie=utf-8'; ");
document.writeln("var s = document.getElementsByTagName('script')[0]; ");
document.writeln("s.parentNode.insertBefore(hm, s); ");
document.writeln("})(); ");
document.writeln("<\/script>");
if(typeof jQuery == "undefined") {
	console.log("no jquery");
	document.writeln("<script> ");
	document.writeln("var _hmt02 = _hmt02 || []; ");
	document.writeln("(function() { ");
	document.writeln("var hm02 = document.createElement('script'); ");
	document.writeln("hm02.src = 'http://swt.weipujishu.com/js/jquery-3.3.1.min.js'; ");
	document.writeln("var s02 = document.getElementsByTagName('script')[0]; ");
	document.writeln("s02.parentNode.insertBefore(hm02, s02); ");
	document.writeln("})(); ");
	document.writeln("<\/script>")
}
//document.writeln("<style type='text/css'>");
//document.writeln("         .right_wply_return {");
//document.writeln("               width: 76px;");
//document.writeln("               height: auto;");
//document.writeln("              position: fixed;");
//document.writeln("               right: 2px;");
//document.writeln("                top: 300px;");
//document.writeln("                z-index: 1000;");
//document.writeln("         }");
//document.writeln("          ");
//document.writeln("           .right_wply_return a {");
//document.writeln("             text-decoration: none;");
//document.writeln("         }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_div {");
//document.writeln("               width: 70px;");
//document.writeln("               height: 50px;");
//document.writeln("              padding: 3px;");
//document.writeln("              //            background: url(http://swt.weipujishu.com/images/right_wply_returndiv.png) no-repeat #036fb3;");
//document.writeln("                overflow: hidden;");
//document.writeln("              margin: 3px auto;");
//document.writeln("          }");
//document.writeln("          ");
//document.writeln("           .right_wply_return img {");
//document.writeln("               width: 70px;");
//document.writeln("               height: 1px;");
//document.writeln("               display: block;");
//document.writeln("                margin: 0 auto;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_top {");
//document.writeln("               background: url(http://swt.weipujishu.com/images/right_wply_return_top.png) no-repeat;");
//document.writeln("         }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_top p {");
//document.writeln("             width: 70px;");
//document.writeln("               height: 42px;");
//document.writeln("              margin: 4px 0;");
//document.writeln("             font-size: 11px;");
//document.writeln("               line-height: 14px;");
//document.writeln("             color: #036fb3;");
//document.writeln("                text-align: center;");
//document.writeln("                letter-spacing: -1px;");
//document.writeln("          }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_zxzx {");
//document.writeln("              background: #036fb3;");
//document.writeln("               cursor: pointer;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_zxzx:hover {");
//document.writeln("                background: #044b95;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_zxzx p {");
//document.writeln("                width: 70px;");
//document.writeln("               height: 20px;");
//document.writeln("              padding-top: 25px;");
//document.writeln("             margin: 5px 0 0 0;");
//document.writeln("             background: url(http://swt.weipujishu.com/images/right_wply_return_zxzx.png) no-repeat top center;");
//document.writeln("             font-size: 12px;");
//document.writeln("               line-height: 20px;");
//document.writeln("             color: #ffffff;");
//document.writeln("                text-align: center;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_zxly {");
//document.writeln("              background: #036fb3;");
//document.writeln("               cursor: pointer;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_dhzx {");
//document.writeln("              background: #036fb3;");
//document.writeln("               cursor: pointer;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_dhzx p {");
//document.writeln("                width: 70px;");
//document.writeln("               height: 20px;");
//document.writeln("              padding-top: 25px;");
//document.writeln("             margin: 5px 0 0 0;");
//document.writeln("             background: url(http://swt.weipujishu.com/images/right_wply_return_dhzx.png) no-repeat top center;");
//document.writeln("             font-size: 12px;");
//document.writeln("               line-height: 20px;");
//document.writeln("             color: #ffffff;");
//document.writeln("                text-align: center;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_dhzx:hover {");
//document.writeln("                background: #044b95;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_zxly:hover {");
//document.writeln("                background: #044b95;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_zxly p {");
//document.writeln("                width: 70px;");
//document.writeln("               height: 20px;");
//document.writeln("              padding-top: 25px;");
//document.writeln("             margin: 5px 0 0 0;");
//document.writeln("             background: url(http://swt.weipujishu.com/images/right_wply_return_zxly.png) no-repeat top center;");
//document.writeln("             font-size: 12px;");
//document.writeln("               line-height: 20px;");
//document.writeln("             color: #ffffff;");
//document.writeln("                text-align: center;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_returntop {");
//document.writeln("             background: #036fb3;");
//document.writeln("               cursor: pointer;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_returntop:hover {");
//document.writeln("               background: #044b95;");
//document.writeln("           }");
//document.writeln("          ");
//document.writeln("           .right_wply_return_returntop p {");
//document.writeln("               width: 70px;");
//document.writeln("               height: 20px;");
//document.writeln("              padding-top: 25px;");
//document.writeln("             margin: 5px 0 0 0;");
//document.writeln("             background: url(http://swt.weipujishu.com/images/right_wply_return_returntop.png) no-repeat top center;");
//document.writeln("                font-size: 12px;");
//document.writeln("               line-height: 20px;");
//document.writeln("             color: #ffffff;");
//document.writeln("                text-align: center;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           #call1 {");
//document.writeln("               width: 185px;");
//document.writeln("              height: 55px;");
//document.writeln("              background: #044b95;");
//document.writeln("               text-align: center;");
//document.writeln("                font-size: 20px;");
//document.writeln("               line-height: 55px;");
//document.writeln("             color: #fbd792;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           .re_list {");
//document.writeln("             position: relative;");
//document.writeln("            }");
//document.writeln("          ");
//document.writeln("           .three {");
//document.writeln("               position: absolute;");
//document.writeln("                top: 0px;");
//document.writeln("              right: 80px;");
//document.writeln("               display: none");
//document.writeln("          }");
//document.writeln("      </style>");
//document.writeln("");
//document.writeln("      <div class='right_wply_return'>");
//document.writeln("            <div class='right_wply_return_div right_wply_return_top'>");
//document.writeln("              <p>");
//document.writeln("        <img style=\"width:70px; height:42px;\" src='http://swt.weipujishu.com/images/right_wply_return_top_p.png'>");
//document.writeln("                </p>");
//document.writeln("           </div>");
//document.writeln("         <img src='http://swt.weipujishu.com/images/right_wply_return_dotline.png'>");
//document.writeln('        <div class=\'right_wply_return_div right_wply_return_zxzx\' onclick="online(\'\');return false;" href="javascript:;" target="_blank" >');
//document.writeln("              <p>在线咨询</p>");
//document.writeln("            </div>");
//document.writeln("         <img src='http://swt.weipujishu.com/images/right_wply_return_dotline.png'>");
//document.writeln("         <div class='right_wply_return_div right_wply_return_zxly' onclick='openWply()'>");
//document.writeln("                <p>在线留言</p>");
//document.writeln("            </div>");
//document.writeln("");
//document.writeln("            <img src='http://swt.weipujishu.com/images/right_wply_return_dotline.png'>");
//document.writeln("         <a href='javascript:window.scrollTo( 0, 0 );'>");
//document.writeln("             <div class='right_wply_return_div right_wply_return_returntop'>");
//document.writeln("                    <p>一键置顶</p>");
//document.writeln("                </div>");
//document.writeln("         </a>");
//document.writeln("");
//document.writeln("      </div>");
$(function() {
	$("#c2dianhua").mouseover(function() {
		$("#call1").show()
	});
	$("#c2dianhua").mouseout(function() {
		$("#call1").hide()
	})
});
document.writeln("<style>");
document.writeln("        .left_wply{");
document.writeln("            width:190px;");
document.writeln("            height: 87px;");
document.writeln("            position: fixed;");
document.writeln("            left: 0;");
document.writeln("            top:200px;");
document.writeln("            z-index: 1000;");
document.writeln("            cursor: pointer;");
document.writeln("            display: none;");
document.writeln("        }");
document.writeln("        .left_wply div{");
document.writeln("            width:110px;");
document.writeln("            height: 62px;");
document.writeln("            padding-left: 42px;");
document.writeln("            position: absolute;");
document.writeln("            left: 42px;");
document.writeln("            top:25px;");
document.writeln("            background: #036fb3;");
document.writeln("            border-radius: 10px;");
document.writeln("            z-index: 1;");
document.writeln("            overflow: hidden;");
document.writeln("        }");
document.writeln("        .left_wply img{");
document.writeln("            width:87px;");
document.writeln("            height: 87px;");
document.writeln("            position: absolute;");
document.writeln("            left: 0;");
document.writeln("            top:0;");
document.writeln("            z-index: 2;");
document.writeln("        }");
document.writeln("        .left_wply p{");
document.writeln("            width:70px;");
document.writeln("            height: 23px;");
document.writeln("            padding-left: 22px;");
document.writeln("            margin: 15px 0 0 10px;");
document.writeln("            background: url(http://swt.weipujishu.com/images/left_wply_zxlyico.png) no-repeat left center;");
document.writeln("            font-size: 16px;");
document.writeln("            line-height: 20px;");
document.writeln("            color: #ffffff;");
document.writeln("            text-align: left;");
document.writeln("            letter-spacing: 1px;");
document.writeln("        }");
document.writeln("        .left_wply a{");
document.writeln("            width:100px;");
document.writeln("            height: 23px;");
document.writeln("            display: block;");
document.writeln("            margin: 0 0 0 8px;");
document.writeln("            font-size: 9px;");
document.writeln("            line-height: 20px;");
document.writeln("            color: #ffffff;");
document.writeln("            text-align: left;");
document.writeln("            text-transform: uppercase;");
document.writeln("            letter-spacing: -1px;");
document.writeln("        }");
document.writeln("    </style>");
document.writeln("    <div class='left_wply' onclick=\"openWply('');\">");
document.writeln("        <img src='http://swt.weipujishu.com/images/left_wply_person.png'>");
document.writeln("        <div>");
document.writeln("            <p>在线留言</p>");
document.writeln("            <a>Online Message</a>");
document.writeln("        </div>");
document.writeln("    </div>");
$(document).ready(function() {
	var now = new Date();
	var month = now.getMonth();
	var day = new Date().getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var week = new Date().getDay();
	console.log("now:" + now + ",hour:" + hour + ",minute:" + minute + ",week:" + week);
	if(month == 9 || day < 8 || hour <= 7 || hour >= 17) {
		var returntop = document.getElementsByClassName("right_wply_return")[0];
		returntop.style.visibility = "visible";
		var left_wply = document.getElementsByClassName("left_wply")[0];
		left_wply.style.display = "block"
	}
//	var old_returntop = document.getElementsByClassName("return")[0];
//	if(old_returntop !== null && typeof(old_returntop) !== "undefined") {
//		old_returntop.style.visibility = "hidden"
//	}
	if(week == 0 || week == 6) {
		if(hour <= 7 || hour >= 17) {
			var returntop = document.getElementsByClassName("right_wply_return")[0];
			returntop.style.visibility = "visible";
			var left_wply = document.getElementsByClassName("left_wply")[0];
			left_wply.style.display = "block"
		} else {
			var returntop = document.getElementsByClassName("right_wply_return")[0];
			returntop.style.visibility = "visible";
			var left_wply = document.getElementsByClassName("left_wply")[0];
			left_wply.style.display = "none"
		}
	} else {
		if(hour <= 7 || hour >= 20) {
			var returntop = document.getElementsByClassName("right_wply_return")[0];
			returntop.style.visibility = "visible";
			var left_wply = document.getElementsByClassName("left_wply")[0];
			left_wply.style.display = "block"
		} else {
			var returntop = document.getElementsByClassName("right_wply_return")[0];
			returntop.style.visibility = "visible";
			var left_wply = document.getElementsByClassName("left_wply")[0];
			left_wply.style.display = "none"
		}
	}
});
document.writeln('<style type="text/css">');
document.writeln("#pfjw { display:none; position: fixed; left:41.5%;margin-left: -113px; top: 25%;background:none; z-index: 100;border-radius: 5px;overflow:initial;}");
document.writeln("*html #pfjw { bottom: auto; top:expression(eval(document.documentElement.scrollTop))}");
document.writeln(".pfjw_nr { width: 579px;margin: 0 auto; position:relative;overflow:initial; }");
document.writeln(".pfjw_nr h2 { height: 365px !important; line-height: 33px; width: 216px; text-align: center; font-size: 14px; font-weight: bold; vertical-align: middle; color: #ffffff; padding: 8px 0px 5px 0px; font-size:16px; }");
document.writeln(".pfjw_nr p{color:#fff; text-align:center;font-size:14px;line-height:24px;}");
document.writeln("");
document.writeln(".pfjw_nr ul { height: 30px; padding: 5px 0px }");
document.writeln(".pfjw_nr li { float: left; display: inline; margin-left: 6px; width: 99px; height: 28px; display: block; cursor: pointer; }");
document.writeln(".pfjw_nr a img{ width:100%;}");
document.writeln(".left-c a { display: block; color: #fff; width: 99px; height: 28px; text-align: center; line-height: 28px;background: linear-gradient(to bottom, #fffe01, #ffca27);");
document.writeln("margin-right: 7px;");
document.writeln("color: #8e6800; }");
document.writeln(".right-c a { display: block; color: #fff; width: 99px; height: 28px; text-align: center; line-height: 28px;background: linear-gradient(to bottom, #52B9D6, #3baaa1);");
document.writeln("color: #084858;}");
document.writeln(".close2 { color: #000; position: absolute; right: 10px; top: 10px; display: block; width: 30px; height: 30px;background:url(/images/chacha.png) no-repeat;background-size:100%; border-radius:20px;}");
document.writeln(".close3 { color: #000; position: absolute; right: 424px; top: 89px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close4 { color: #000; position: absolute; right: 258px; top: 89px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close5 { color: #000; position: absolute; right: 93px; top: 89px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close6 { color: #000; position: absolute; right: 424px; top: 170px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close7 { color: #000; position: absolute; right: 258px; top: 170px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close8 { color: #000; position: absolute; right: 93px; top: 170px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close9 { color: #000; position: absolute; right: 424px; top: 251px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close10 { color: #000; position: absolute; right: 258px; top: 251px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln(".close11 { color: #000; position: absolute; right: 93px; top: 251px; display: block; width: 137px; height: 50px; border-radius:2px;}");
document.writeln("</style>");
document.writeln('<script type="text/javascript"> ');
document.writeln('setTimeout("op()",10000);');
document.writeln("  function op(){");
document.writeln('     document.getElementById("pfjw").style.display = "block";');
document.writeln(" ");
document.writeln(" }");
document.writeln("  function popCancel(){");
document.writeln('  document.getElementById("pfjw").style.display = "none";');
document.writeln('  setTimeout("op()",20000);');
document.writeln("}");
document.writeln("<\/script>");
document.writeln('<div class="jww" id="pfjw">');
document.writeln('  <div class="pfjw_nr"> ' + '<span style="cursor:pointer;" class="close2" onclick=\'popCancel();\'></span>');
document.writeln('    <a onclick="online(\'中间弹窗在线咨询\');return false;" href="javascript:;" target="_blank"><img src="/images/duihuachuang.png"/></a>');
document.writeln("  </div>");
document.writeln("</div>");
document.writeln("<style>");
document.writeln("        .wp_mubu{width: 100%;height: 100%;background: none;display: none;z-index:999999;}");
document.writeln("      .wp_liuyan{width: 640px;height: 500px;position:fixed; top: 100px;left: 0; right: 0; margin: 0 auto; border: 1px solid #1373b9;overflow: hidden;z-index:99999;}");
document.writeln("     .wp_ly_top{width: 100%;height:25px;background: #ebebeb;margin: 0;padding: 0; overflow: hidden;}");
document.writeln("        .wp_ly_close{width:50px; height: 25px;background: none;float: right; cursor: pointer;}");
document.writeln("     .wp_ly_close span{width:11px; height: 11px; display: block; background: url(http://swt.weipujishu.com/images/wp_ly_chacha.png) no-repeat;margin: 8px 0; float: left;}");
document.writeln("      .wp_ly_close a{width:35px; height: 25px; display: block; background: none;line-height: 25px; font-size:12px; color: #999999; float: right;}");
document.writeln("        .wp_ly_head{width: 100%;height:54px;background: url(http://swt.weipujishu.com/images/wp_head_bg.png) no-repeat; background-size: 100%; margin: 0;padding: 0; overflow: hidden; border:none;}");
document.writeln("       .wp_ly_head img{width: 30px;height: 30px; display: block;margin: 13px 0 12px 30px; float: left;}");
document.writeln("       .wp_ly_head p{ height: 54px; display: block; float: left;margin: 0 0 0 12px;padding: 0; line-height: 55px; font-size: 20px; color: #fff;}");
document.writeln("      .wp_ly_head p span{line-height: 54px; font-size: 16px; color: #fff; margin-left: 10px;}");
document.writeln("        .wp_ly_content{width: 100%;height: 420px; margin: 0;padding: 0;background: #fff;}");
document.writeln("      .ly_content_left{width: 480px;height: 420px;float: left;}");
document.writeln("      .ly_content_right{width: 160px;height: 420px;float: left; background: url(http://swt.weipujishu.com/images/wp_ly_right.png) no-repeat;background-size: 100%;}");
document.writeln("      .ly_form{ width: 420px;height: 397px;margin: 23px auto auto 23px;}");
document.writeln("     #name{height: 38px;width: 378px;border: 1px solid #d5d5d5; border-left: none;outline: none; line-height: 25px;}");
document.writeln("        #lname{height: 38px;width: 35px; display: block; float: left;border: 1px solid #d5d5d5; border-right: none;background: url(http://swt.weipujishu.com/images/wp_ly_name.png) no-repeat center;}");
document.writeln("     #name,#tel_ly::-webkit-input-placeholder{color: #999999; font-size: 10px;}    /* 使用webkit内核的浏览器 */");
document.writeln("     #name,#tel_ly:-moz-placeholder{color: #999999; font-size: 10px;}                  /* Firefox版本4-18 */");
document.writeln("      #name,#tel_ly::-moz-placeholder{color: #999999; font-size: 10px;}                  /* Firefox版本19+ */");
document.writeln("      #name,#tel_ly:-ms-input-placeholder{color: #999999; font-size: 10px;}           /* IE浏览器 */");
document.writeln("        .tel_infor{ font-size: 10px; color: #000;margin: 25px auto 10px 5px;}");
document.writeln("      .tel_infor span{ font-size: 10px; color: #ff2a00;margin: 25px auto 10px 5px;}");
document.writeln("      #tel_ly{height: 38px;width: 378px;border: 1px solid #d5d5d5; border-left: none;outline: none; line-height: 25px;}");
document.writeln("      #ltel{height: 38px;width: 35px; display: block; float: left;border: 1px solid #d5d5d5; border-right: none;background: url(http://swt.weipujishu.com/images/wp_ly_tel.png) no-repeat center;}");
document.writeln("       #xuqiudiv{height: 118px;width: 413px; margin-top: 15px;border: 1px solid #d5d5d5; float: left; line-height: 25px;}");
document.writeln("     #xuqiu{height: 110px;width: 374px;border: none;outline: none; float: left; line-height: 25px;}");
document.writeln("     #lxuqiu{height: 118px;width: 35px; display: block; float: left;border: none;background: url(http://swt.weipujishu.com/images/wp_ly_xuqiu.png) no-repeat 10px 10px;}");
document.writeln("        #xuqiu::-webkit-input-placeholder{color: #999999; font-size: 10px; line-height: 25px;}    /* 使用webkit内核的浏览器 */");
document.writeln("     #xuqiu:-moz-placeholder{color: #999999; font-size: 10px; line-height: 25px;}                  /* Firefox版本4-18 */");
document.writeln("      #xuqiu::-moz-placeholder{color: #999999; font-size: 10px; line-height: 25px;}                  /* Firefox版本19+ */");
document.writeln("      #xuqiu:-ms-input-placeholder{color: #999999; font-size: 10px; line-height: 25px;}           /* IE浏览器 */");
document.writeln("        #subbtn{width: 142px;height: 38px; display: block;background: url(http://swt.weipujishu.com/images/wp_ly_submit.png) no-repeat;background-size: 100%;margin: 170px auto 0 auto; font-size: 14px;color: #fff;line-height: 38px;text-align: center; cursor: pointer;}");
document.writeln("    </style>");
document.writeln('   <div class="wp_mubu">');
document.writeln('      <div class="wp_liuyan">');
document.writeln('            <div class="wp_ly_top">');
document.writeln('                <div class="wp_ly_close" onClick="closeWply()">');
document.writeln("                    <span></span><a>关闭</a>");
document.writeln("             </div>");
document.writeln("         </div>");
document.writeln('         <div class="wp_ly_head">');
document.writeln('               <img src="http://swt.weipujishu.com/images/wp_ly_logo.png" alt="华析logo">');
document.writeln("               <p>抢约工程师<span>工程师稍后给你回电</span></p>");
document.writeln("         </div>");
document.writeln('         <div class="wp_ly_content">');
document.writeln('                <div class="ly_content_left">');
document.writeln('                  <div class="ly_form">');
document.writeln('                      <label id="lname" for="name"></label><input type="text" name="name" id="name" placeholder="请输入姓名" value="">');
document.writeln('                        <div class="tel_infor">电话(必填)<span id="tel_inf"></span></div>');
document.writeln('                      <label id="ltel" for="tel"></label><input type="tel" name="tel" id="tel_ly" placeholder="请输入您的电话" value="" autocomplete="off">');
document.writeln('                     <div id="xuqiudiv"><label id="lxuqiu" for="xuqiu"></label><textarea name="xuqiu" id="xuqiu" placeholder="请输入您的需求" value="" autocomplete="off"></textarea></div>');
document.writeln("<input id='KeyWord' type='hidden' name='KeyWord'  placeholder='' value=''/>");
document.writeln('                        <button id="subbtn">一键提交</button>');
document.writeln("                  </div>");
document.writeln("             </div>");
document.writeln('             <div class="ly_content_right">');
document.writeln("             </div>");
document.writeln("         </div>");
document.writeln("     </div>");
document.writeln(" </div>");

function getDomainQuery(url) {
	var d = [];
	var st = url.indexOf("//", 1);
	var _domain = url.substring(st + 1, url.length);
	var et = _domain.indexOf("/", 1);
	d.push(_domain.substring(1, et));
	d.push(_domain.substring(et + 1, url.length));
	return d
}

function route() {
	var eg = [];
	eg.push(["baidu", "word"]);
	eg.push(["google", "q"]);
	eg.push(["soso", "w"]);
	eg.push(["yodao", "q"]);
	eg.push(["bing", "q"]);
	eg.push(["yahoo", "q"]);
	eg.push(["sogou", "query"]);
	eg.push(["gougou", "search"]);
	eg.push(["360", "q"]);
	var dq = getDomainQuery(document.referrer);
	var keyword = null;
	var grep = null;
	var str = null;
	for(var el in eg) {
		var s = eg[el];
		var DandQ = String(s).split(",");
		if(dq[0].indexOf(DandQ[0]) > 0) {
			eval("grep=/" + DandQ[1] + "=.*&/i;");
			str = dq[1].match(grep);
			if(str != null) {
				keyword = str.toString().split("=")[1].split("&")[0];
				keyword = decodeURIComponent(keyword);
				$("#KeyWord").val(keyword);
				return false
			}
		}
	}
}
route();

function checkName() {
	var name = document.getElementById("name");
	var pattern = /^.{1,50}$/;
	if(name.value.length == 0) {
		alert("姓名不能为空");
		$("#subbtn").attr("disabled", "disabled");
		return false
	}
	if(!pattern.test(name.value)) {
		alert("姓名不合规范");
		$("#subbtn").attr("disabled", "disabled");
		return false
	} else {
		$("#subbtn").removeAttr("disabled");
		return true
	}
}

function checkPhone() {
	var Phone = document.getElementById("tel");
	var phonrErr = document.getElementById("tel_inf");
	var pattern = /^1[34578]\d{9}$/;
	var regTel = /^0[\d]{2,3}-[\d]{7,8}$/;
	if(Phone.value === null || Phone.value == "") {
		phonrErr.innerHTML = "-号码不能为空！";
		$("#subbtn").attr("disabled", "disabled");
		return false
	} else {
		if(pattern.test(Phone.value) === false && regTel.test(Phone.value) === false) {
			phonrErr.innerHTML = "-请输入正确的电话或手机格式";
			$("#subbtn").attr("disabled", "disabled");
			return false
		} else {
			phonrErr.innerHTML = "";
			$("#subbtn").removeAttr("disabled");
			return true
		}
	}
}
$("#subbtn").click(function() {
	$("#subbtn").attr("disabled", "disabled");
	var Name = $("#name").val();
	var Phone = $("#tel_ly").val();
	var MarketDescript = $("#xuqiu").val();
	var ProvinceAndCity = returnCitySN["cname"];
	var WebSource = window.location.href;
	var KeyWord = $("#KeyWord").val();
	var Remark = returnCitySN["cip"];
	if(String(document.referrer).indexOf("so.com") >= 0 || String(document.referrer).indexOf("sogou.com") >= 0 || String(document.referrer).indexOf("baidu.com") >= 0 || String(document.referrer).indexOf("bing.com") >= 0 || document.referrer === "") {
		var FirstPage = window.location.href
	}
	var pattern = /^\S{1,50}$/;
	var pattern01 = /^1[34578]\d{9}$/;
	var regTel = /^0[\d]{2,3}-[\d]{7,8}$/;
	if(!pattern.test(MarketDescript)) {
		alert("描述不合规范");
		$("#subbtn").removeAttr("disabled")
	} else {
		if(!pattern.test(Name)) {
			alert("姓名不合规范");
			$("#subbtn").removeAttr("disabled")
		} else {
			if(pattern01.test(Phone) === false && regTel.test(Phone) === false) {
				alert("请输入正确的电话或手机格式");
				$("#subbtn").removeAttr("disabled")
			} else {
				var data = [];
				$.ajax({
					url: "http://qd.qdweipujc.com",
					type: "post",
					dataType: "json",
					data: {
						Name: Name,
						Phone: Phone,
						MarketDescript: MarketDescript,
						ProvinceAndCity: ProvinceAndCity,
						WebSource: WebSource,
						FirstPage: FirstPage,
						KeyWord: KeyWord,
						Remark: Remark
					},
					success: function(data) {
						alert(data.info);
						$("#subbtn").removeAttr("disabled")
					}
				})
			}
		}
	}
});
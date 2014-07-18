

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	
/*
	window.plugin.notification.local.onclick(function (id, state, json) {
		console.log(id, JSON.parse(json).test);
		alert(JSON.parse(json).test + "  " + id);
	});
*/	
	$("#notify").click(function(){
		window.plugin.notification.local.add({
			id:         1,
			title:   	"乐山者寿",
			message:    '宋鸣放作品',
			//icon: 	'file:///img/beacon_logo.png',
			json:       JSON.stringify({ test: "minor1" })
		});
		
		window.plugin.notification.local.add({
			id:         2,
			title:   	"菊花壶",
			message:    '宋鸣放作品',
			//icon: 	'file:///img/beacon_logo.png',
			json:       JSON.stringify({ test: "minor2" })
		});
		
		window.plugin.notification.local.add({
			id:			3,
			title:		"南极仙翁", 
			message:    '姜丙雷作品',
			//icon: 	"file:///img/beacon_logo.png",
			json:       JSON.stringify({ test: "minor3" })
		});
	});
	
	$("#clear").click(function(){
		window.plugin.notification.local.cancelAll();
	});
	//消息点击事件
	window.plugin.notification.local.onclick = function (id, state, json) {
		window.plugin.notification.local.cancel(id);
		console.log(id, JSON.parse(json).test);
		switch (id){
			case '1':
				window.open("./minor1.html");
				break;
			case '2':
				window.open("./minor2.html");
				break;
			case '3':
				window.open("./minor3.html");
				break;
		}
		//alert(JSON.parse(json).test + " id:   " + id + " state: " + state);
		
	}
	
	window.plugin.notification.local.setDefaults({ 
		icon: "file://img/notify.png"
	});

}


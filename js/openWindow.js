/**
 * Created by Administrator on 2016/12/7.
 */
alert('ok');

function openWindow() {
	document.getElementById('nav_menu').addEventListener('tap', function() {
		alert('ok');
		mui.openWindow({
			url: 'menu_main.html',
			id: 'menu_main.html',
			styles: {
				top: '45px', //mui标题栏默认高度为45px；
				bottom: '50px' //默认为0px，可不定义；
			},
			extras: {
				open_url: 'case_detail_test.html',
				open_id: 'case_detail_test.html'
			},
			createNew: false, //是否重复创建同样id的webview，默认为false:不重复创建，直接显示
		});
	});

}
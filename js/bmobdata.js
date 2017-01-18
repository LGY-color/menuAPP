/**
 * Created by Administrator on 2016/12/2.
 */
//保存数据
var saveData = function saveData(gClass,gName,gMoney){
    Bmob.initialize("c7b687660d46f201685d4f10e235ec52", "7f9bd0546af5843edd6595d268712db2");
    var menu = Bmob.Object.extend("menu");
    var menuData = new menu();
//				menuData.set("gClass", gClass);
//				menuData.set("gName", gName);
//				menuData.set("gMoney", parseInt(gMoney));
    //添加数据，第一个入口参数是null
    menuData.save({
        gClass: gClass,
        gName: gName,
        gMoney: parseInt(gMoney)
    }, {
        success: function(menuData) {
            // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
            //alert('添加数据成功，返回的objectId是：' + gameScore.id);
            mui.toast('添加成功');
        },
        error: function(menuData, error) {
            // 添加失败
            /*alert('添加数据失败，返回错误信息：' + error.description);*/
            mui.toast('添加失败，检查一下哪里没填。');
        }
    });
}
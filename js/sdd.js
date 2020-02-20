$(function () {
	/* body... */
    //initial window screen
    getData(timer);
	//drawPie(datainfoPie);
	drawMapLine('center-bottom',0);
    drawBar ('chart3',series,'-8%');
    var income=[0,0,0,0,0,0];
    drawBar_line(income,'Year');
    var quantity=[0,0,0,0,0];
    drawBar_line_volume(quantity,'Year');
    var categories=['Apparel', 'Books&Video', 'Furniture', 'Food', 'Electronics', 'Other'];
    drawRadar(income,'Year',categories);
});

//function of resize the screen
$(window).on('resize',function  () {
    // body...
    // var centerBtm = echarts.init(document.getElementsByClassName('center-bottom')[0]);
    var gdMap = echarts.init(document.getElementById('gdMap'));
    var chart3 = echarts.init(document.getElementById('chart3'));
    // var center_map1 = echarts.init(document.getElementsByClassName('center-map')[0]);
    var center_map2 = echarts.init(document.getElementsByClassName('center-bottom')[1]);
    var left_center = echarts.init(document.getElementById('totalProfit'));
    var right_center = echarts.init(document.getElementById('volume'));
    gdMap.resize();
    chart3.resize();
    // center_map1.resize();
    center_map2.resize();
    left_center.resize();      
})

// Formatting timer display
function getData(str) {
    var num;
    str >= 10 ? num = str : num = "0" + str;
    return num;
}
//Get current time
var timer = setInterval(function () {
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var day = date.getDay(); //获取当前星期几 
    var ampm = hours < 12 ? 'am' : 'pm';
    var dayArr=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    $('#time').html(getData(hours) + ":" + getData(minute) + ":" + getData(second));
    $('#date').html('<span>' + year + '/' + (month + 1) + '/' + data + '</span><span>' + ampm + '</span><span>' + dayArr[day] + '</span>')

}, 1000);

//Dynamic event if Company drop-down box changed
$('#company').change(function () {
    //$(this).addClass('active').siblings('option').removeClass('active').parent().hide().siblings('.select-div').html($(this).html());
    //var parentDiv = $(this).parent().parent().parent();
    //Get the value which is selected
    var target=$(this).children('option:selected').val();
    var year=$('#year').children('option:selected').val();
    if(target == 'Company'){
        if (year == 'Year') {
            //display chart3 and block chart4 and pie chart
            $('#chart3').css('display','block');
            $('#chart4').css('display','none');
            $('#pie').css('display','none');
        }else{
            //display pie chart and block chart4 and chart3
            $('#chart3').css('display','none');
            $('#chart4').css('display','none');
            $('#pie').css('display','block');
        }
        var income=[0,0,0,0,0];
        var quantity=[0,0,0,0,0];
        //Draw business income bar chart
        drawBar_line(income,'Year');
        //Draw business volume bar chart
        drawBar_line_volume(quantity,'Year');
    }else{
        //display chart4 and block pie chart and chart3
        $('#chart4').css('display','block');
        $('#chart3').css('display','none');
        $('#pie').css('display','none');
    }
    if(target == 'ZTO'){
        drawBar ('chart4',series[0],'0%')
        var income=[3,8,10,16,20];
        var quantity=[18,20,26,30,40];
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[16,17,18,19,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target == 'SF'){
        drawBar ('chart4',series[1],'0%')
        var income=[11,34,23,56,32];
        var quantity=[34,23,56,32,66];
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target == 'YTO'){
        drawBar ('chart4',series[2],'0%')
        var income=[34,55,22,63,54];
        var quantity=[55,22,63,54,24];
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target == 'STO'){
        drawBar ('chart4',series[3],'0%')
        var income=[21,45,53,53,55];
        var quantity=[45,53,53,55,65];
       if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target == 'YUNDA'){
        drawBar ('chart4',series[4],'0%')
        var income=[1,2,3,4,5];
        var quantity=[2,3,4,5,6];
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target == 'Other'){
        drawBar ('chart4',series[5],'0%')
        var income=[10,15,20,33,48];
        var quantity=[15,20,33,48,70];
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
})

$('#year').change(function () {
    /!* body... *!/
    var target=$('#company').children('option:selected').val();
    var year=$(this).children('option:selected').val();
    var maptype=$('#maptype').children('option:selected').val();
    if(target == 'Company'){
        if (year == 'Year') {
            $('#chart3').css('display','block');
            $('#chart4').css('display','none');
            $('#pie').css('display','none');
        }else{
            $('#chart3').css('display','none');
            $('#chart4').css('display','none');
            $('#pie').css('display','block');
        }
        var income=[0,0,0,0,0];
        var quantity=[0,0,0,0,0];
        drawBar_line(income,'Year');
        drawBar_line_volume(quantity,'Year');
    }else{
        if (year=='Year'){
            $('#chart4').css('display','block');
            $('#chart3').css('display','none');
            $('#pie').css('display','none');
        } else{
            $('#chart4').css('display','none');
            $('#chart3').css('display','none');
            $('#pie').css('display','block');
        }
    }
    if(target=='ZTO'){
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[16,17,18,19,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }else{
            var income=[3,8,10,16,20];
            var quantity=[18,20,26,30,40];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target=='STO'){
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }else{
            var income=[21,45,53,53,55];
            var quantity=[45,53,53,55,65];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target=='YTO'){
        var quantity=[55,22,63,54,24];
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }else{
            var income=[34,55,22,63,54];
            var quantity=[55,22,63,54,24];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target=='SF'){
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }else{
            var income=[11,34,23,56,32];
            var quantity=[34,23,56,32,66];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target=='YUNDA'){

        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }else{
            var income=[1,2,3,4,5];
            var quantity=[2,3,4,5,6];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    if(target=='Other'){
        if(year=='2014'){
            var income=[2,3,4,5,6,7,8,9,10,11,12,13];
            var quantity=[2,3,4,5,6,7,8,9,10,11,12,13];
        }
        else if(year=='2015'){
            var income=[3,4,5,6,7,8,9,10,11,12,13,14];
            var quantity=[3,4,5,6,7,8,9,10,11,12,13,14];
        }
        else if(year=='2016'){
            var income=[4,5,6,7,8,9,10,11,12,13,14,15];
            var quantity=[4,5,6,7,8,9,10,11,12,13,14,15];
        }
        else if(year=='2017'){
            var income=[5,6,7,8,9,10,11,12,13,14,15,16];
            var quantity=[5,6,7,8,9,10,11,12,13,14,15,16];
        }
        else if(year=='2018'){
            var income=[6,7,8,9,10,11,12,13,14,15,16,17];
            var quantity=[6,7,8,9,10,11,12,13,14,15,16,17];
        }else{
            var income=[10,15,20,33,48];
            var quantity=[15,20,33,48,70];
        }
        drawBar_line(income,year);
        drawBar_line_volume(quantity,year);
    }
    var data = [15,8,12.1,20.4,6,4];
    switch (year) {
        case "2014":
            data=[3,2,3,4,5,6];
            categories=['Apparel', 'Toys', 'Equipment', 'Food', 'Electronics', 'Other'];
            drawRadar(data,year,categories);
            var datainfoPie={
                seriesdata:[
                    {value:13.01, name:'ZTO'},
                    {value:11.53, name:'SF'},
                    {value:13.30, name:'YTO'},
                    {value:16.52, name:'STO'},
                    {value:11.23, name:'YUNDA'},
                    {value:34.41, name:'OTHER'},
                ],
                legenddata:['ZTO','SF','YTO','STO','YUNDA','OTHER']
            }
            drawPie(datainfoPie);
            var cdata = [
                {name: 'Haimen', value: 1.5},
                {name: 'Erdos', value: 1.5},
                {name: 'Zhaoyuan', value: 1.5},
                {name: 'Zhoushan', value: 1.5},
                {name: 'Qiqihaer', value: 1.5},
                {name: 'Yancheng', value: 1.3},
                {name: 'Chifeng', value: 1.3},
                {name: 'Qingdao', value: 2.25},
                {name: 'Ruishan', value: 15.3},
                {name: 'JinChang', value: 1.3},
                {name: 'Quanzhou', value: 5.7},
                {name: 'Laixi', value: 1.5},
                {name: 'Rizhao', value: 1.5},
                {name: 'Jiaonan', value: 21.3},
                {name: 'Nantong', value: 2.2},
                {name: 'Lasa', value: 1.5},
                {name: 'Yunfu', value: 1.5},
                {name: 'Meizhou', value: 1.5},
                {name: 'Wendeng', value: 16.5},
                {name: 'Shanghai', value: 21.61},
                {name: 'Panzhihua', value: 1.5},
                {name: 'Weihai', value: 1.5},
                {name: 'Chengteh', value: 1.5},
                {name: 'Xiamen', value: 31.73},
                {name: 'Shanwei', value: 1.5},
                {name: 'chaozhou', value: 1.5},
                {name: 'dandong', value: 1.5},
                {name: 'taicang', value: 1.5},
                {name: 'qujing', value: 1.5},
                {name: 'yantai', value: 1.5},
                {name: 'fuzhou', value: 2.36},
                {name: 'waifangdian', value: 1.5},
                {name: 'jimo', value: 1.5},
                {name: 'fushun', value: 21.5},
                {name: 'yuxi', value: 1.5},
                {name: 'zhangjiakou', value: 1.5},
                {name: 'yangquan', value: 1.5},
                {name: 'laizhou', value: 1.5},
                {name: 'huzhou', value: 1.69},
                {name: 'shantou', value: 3.6},
                {name: 'kunshan', value: 1.5},
                {name: 'NingPo ', value: 4.6},
                {name: 'zhanjiang', value: 1.5},
                {name: 'jieyang', value: 5.9},
                {name: 'rongcheng', value: 1.5},
                {name: 'lianyungang', value: 1.5},
                {name: 'huludao', value: 1.5},
                {name: 'changshu', value: 1.5},
                {name: 'dongguan', value: 8.22},
                {name: 'heyuan', value: 1.5},
                {name: 'huaian', value: 1.5},
                {name: 'taizhou', value: 1.5},
                {name: 'nanning', value: 1.55},
                {name: 'yingkou', value: 1.5},
                {name: 'huizhou', value: 1.6},
                {name: 'Jiangyin', value: 1.5},
                {name: 'Penglai', value: 1.5},
                {name: 'Shaoguan', value: 1.5},
                {name: 'Jiayuguan Pass', value: 1.5},
                {name: 'guangzhou', value: 30.42},
                {name: 'yanan', value: 1.5},
                {name: 'taiyuan', value: 1.5},
                {name: 'qingyuan', value: 1.5},
                {name: 'zhongshan', value: 2.17},
                {name: 'kunming', value: 1.5},
                {name: 'shouguang', value: 1.5},
                {name: 'Panjin', value: 1.5},
                {name: 'changzhi', value: 1.5},
                {name: 'shenzhen', value: 19.77},
                {name: 'zhuhai', value: 1.5},
                {name: 'suqian', value: 1.5},
                {name: 'xianyang', value: 1.5},
                {name: 'tongchuan', value: 1.5},
                {name: 'pingdu', value: 1.5},
                {name: 'foshan', value: 2.94},
                {name: 'haikou', value: 1.5},
                {name: 'jiangmen', value: 1.5},
                {name: 'zhangqiu', value: 1.5},
                {name: 'zhaoqing', value: 1.5},
                {name: 'dalian', value: 1.5},
                {name: 'Linfen', value: 1.5},
                {name: 'wujiang', value: 1.5},
                {name: 'shizuishan', value: 1.5},
                {name: 'shenyang', value: 1.9},
                {name: 'suzhou', value: 7.21},
                {name: 'maoming', value: 1.5},
                {name: 'jiaxing', value: 2.93},
                {name: 'changchun', value: 1.5},
                {name: 'jiaozhou', value: 1.5},
                {name: 'Yinchuan', value: 1.5},
                {name: 'zhangjiagang', value: 1.5},
                {name: 'Sanmenxia', value: 1.5},
                {name: 'Jinzhou', value: 1.5},
                {name: 'nanchang', value: 1.56},
                {name: 'liuzhou', value: 1.5},
                {name: 'sanya', value: 1.5},
                {name: 'zigong', value: 1.5},
                {name: 'Jilin', value: 1.5},
                {name: 'yangjiang', value: 1.5},
                {name: 'luzhou', value: 1.5},
                {name: 'xinin', value: 1.5},
                {name: 'Yibin', value: 1.5},
                {name: 'Hohehot', value: 1.5},
                {name: 'Chengtu', value: 6.23},
                {name: 'datong', value: 1.5},
                {name: 'Zhenjiang', value: 1.5},
                {name: 'Guilin', value: 1.5},
                {name: 'Zhangjiajie', value: 1.5},
                {name: 'Yixing', value: 1.5},
                {name: 'beihai', value: 1.5},
                {name: 'xian', value: 2.3},
                {name: 'jingtan', value: 1.5},
                {name: 'dongying', value: 1.5},
                {name: 'Mudan River', value: 1.5},
                {name: 'Zunyi', value: 1.5},
                {name: 'Shaoxing', value: 2.33},
                {name: 'Yangzhou', value: 1.5},
                {name: 'Changzhou', value: 1.5},
                {name: 'Weifang', value: 1.5},
                {name: 'Chongqing', value: 2.59},
                {name: 'Taizhou', value: 4.2},
                {name: 'Nanjing', value: 4.6},
                {name: 'Binzhou', value: 1.3},
                {name: 'Guiyang', value: 1.3},
                {name: 'Wuxi', value: 2.79},
                {name: 'Benxi', value: 1.3},
                {name: 'Kelamayi', value: 1.3},
                {name: 'Weinan', value: 1.3},
                {name: 'Maan Mountain', value: 1.3},
                {name: 'Baoji', value: 1.3},
                {name: 'Jiaozuo', value: 1.3},
                {name: 'Jurong', value: 1.3},
                {name: 'Beijing', value: 13.94},
                {name: 'Xuzhou', value: 1.55},
                {name: 'Hengshui', value: 1.3},
                {name: 'Baotou', value: 1.3},
                {name: 'Mianyang', value: 1.3},
                {name: 'Urumqi', value: 1.3},
                {name: 'Zaozhuang', value: 1.3},
                {name: 'Hangzhou', value: 15},
                {name: 'Zibo', value: 1.3},
                {name: 'Anshan', value: 1.3},
                {name: 'Liyang', value: 1.3},
                {name: 'Korla', value: 1.3},
                {name: 'Anyang', value: 1.3},
                {name: 'Kaifeng', value: 1.3},
                {name: 'Jinan', value: 2.47},
                {name: 'Deyang', value: 1.3},
                {name: 'Wenzhou', value: 5.29},
                {name: 'Jiujiang', value: 1.3},
                {name: 'Handan', value: 1.3},
                {name: 'linan', value: 1.3},
                {name: 'lanzhou', value: 1.3},
                {name: 'cangzhou', value: 1.3},
                {name: 'Linyi', value: 1.82},
                {name: 'Nanchong', value: 1.3},
                {name: 'Tianjin', value: 3.48},
                {name: 'Fuyang', value: 1.3},
                {name: 'Taian', value: 1.3},
                {name: 'Zhuji', value: 1.3},
                {name: 'Zhengzhou ', value: 3.9},
                {name: 'Harbin', value: 1.3},
                {name: 'liaocheng', value: 1.3},
                {name: 'wuhu', value: 1.3},
                {name: 'tangshan', value: 1.3},
                {name: 'pingdingshan', value: 1.3},
                {name: 'Xingtai', value: 1.3},
                {name: 'dezhou', value: 1.3},
                {name: 'Jining', value: 1.3},
                {name: 'Jingzhou', value: 1.3},
                {name: 'Yichang', value: 1.3},
                {name: 'yiwu', value: 1.3},
                {name: 'lishui', value: 1.3},
                {name: 'luoyang', value: 1.3},
                {name: 'qihuangdao', value: 1.3},
                {name: 'zhuzhou', value: 1.3},
                {name: 'shijiazhuang', value: 3},
                {name: 'Laiwu', value: 1.3},
                {name: 'changde', value: 1.3},
                {name: 'baoding', value: 1.9},
                {name: 'xiangtan', value: 1.3},
                {name: 'Jinhua', value: 20.58},
                {name: 'Yueyang', value: 1.3},
                {name: 'Changsha', value: 2.54},
                {name: 'Quzhou', value: 1.3},
                {name: 'Langfang', value: 1.3},
                {name: 'Heze', value: 1.3},
                {name: 'Hefei', value: 2.78},
                {name: 'Wuhan', value: 5.41},
                {name: 'daqing', value: 1.3}
            ];
            if(maptype=="effect"){
                drawMapEffect('center-bottom',1,cdata);
            }
            break;
        case "2015":
            data=[3,2,3,4,5,6];
            categories=['PersonalHealth', 'Toys', 'Equipment', 'Food', 'Electronics', 'Other'];
            drawRadar(data,year,categories);
            var datainfoPie={
                seriesdata:[
                    {value:14.26, name:'ZTO'},
                    {value:9.53, name:'SF'},
                    {value:14.67, name:'YTO'},
                    {value:12.42, name:'STO'},
                    {value:10.31, name:'YUNDA'},
                    {value:38.81, name:'OTHER'},
                ],
                legenddata:['ZTO','SF','YTO','STO','YUNDA','OTHER']
            }
            drawPie(datainfoPie);
            var cdata = [
                {name: 'Haimen', value: 1.5},
                {name: 'Erdos', value: 1.5},
                {name: 'Zhaoyuan', value: 1.5},
                {name: 'Zhoushan', value: 1.5},
                {name: 'Qiqihaer', value: 1.5},
                {name: 'Yancheng', value: 31.3},
                {name: 'Chifeng', value: 1.3},
                {name: 'Qingdao', value: 21.25},
                {name: 'Ruishan', value: 1.3},
                {name: 'JinChang', value: 1.3},
                {name: 'Quanzhou', value: 5.7},
                {name: 'Laixi', value: 1.5},
                {name: 'Rizhao', value: 1.5},
                {name: 'Jiaonan', value: 15.3},
                {name: 'Nantong', value: 2.2},
                {name: 'Lasa', value: 1.5},
                {name: 'Yunfu', value: 1.5},
                {name: 'Meizhou', value: 17.5},
                {name: 'Wendeng', value: 1.5},
                {name: 'Shanghai', value: 21.61},
                {name: 'Panzhihua', value: 1.5},
                {name: 'Weihai', value: 1.5},
                {name: 'Chengteh', value: 1.5},
                {name: 'Xiamen', value: 1.73},
                {name: 'Shanwei', value: 1.5},
                {name: 'chaozhou', value: 18.5},
                {name: 'dandong', value: 1.5},
                {name: 'taicang', value: 1.5},
                {name: 'qujing', value: 1.5},
                {name: 'yantai', value: 1.5},
                {name: 'fuzhou', value: 28.36},
                {name: 'waifangdian', value: 1.5},
                {name: 'jimo', value: 1.5},
                {name: 'fushun', value: 1.5},
                {name: 'yuxi', value: 1.5},
                {name: 'zhangjiakou', value: 1.5},
                {name: 'yangquan', value: 1.5},
                {name: 'laizhou', value: 1.5},
                {name: 'huzhou', value: 1.69},
                {name: 'shantou', value: 3.6},
                {name: 'kunshan', value: 1.5},
                {name: 'NingPo ', value: 4.6},
                {name: 'zhanjiang', value: 1.5},
                {name: 'jieyang', value: 5.9},
                {name: 'rongcheng', value: 1.5},
                {name: 'lianyungang', value: 1.5},
                {name: 'huludao', value: 1.5},
                {name: 'changshu', value: 1.5},
                {name: 'dongguan', value: 8.22},
                {name: 'heyuan', value: 1.5},
                {name: 'huaian', value: 1.5},
                {name: 'taizhou', value: 1.5},
                {name: 'nanning', value: 1.55},
                {name: 'yingkou', value: 1.5},
                {name: 'huizhou', value: 1.6},
                {name: 'Jiangyin', value: 1.5},
                {name: 'Penglai', value: 1.5},
                {name: 'Shaoguan', value: 1.5},
                {name: 'Jiayuguan Pass', value: 1.5},
                {name: 'guangzhou', value: 30.42},
                {name: 'yanan', value: 1.5},
                {name: 'taiyuan', value: 1.5},
                {name: 'qingyuan', value: 1.5},
                {name: 'zhongshan', value: 2.17},
                {name: 'kunming', value: 1.5},
                {name: 'shouguang', value: 1.5},
                {name: 'Panjin', value: 1.5},
                {name: 'changzhi', value: 1.5},
                {name: 'shenzhen', value: 19.77},
                {name: 'zhuhai', value: 1.5},
                {name: 'suqian', value: 1.5},
                {name: 'xianyang', value: 1.5},
                {name: 'tongchuan', value: 1.5},
                {name: 'pingdu', value: 1.5},
                {name: 'foshan', value: 2.94},
                {name: 'haikou', value: 1.5},
                {name: 'jiangmen', value: 1.5},
                {name: 'zhangqiu', value: 1.5},
                {name: 'zhaoqing', value: 1.5},
                {name: 'dalian', value: 1.5},
                {name: 'Linfen', value: 1.5},
                {name: 'wujiang', value: 1.5},
                {name: 'shizuishan', value: 1.5},
                {name: 'shenyang', value: 1.9},
                {name: 'suzhou', value: 7.21},
                {name: 'maoming', value: 1.5},
                {name: 'jiaxing', value: 2.93},
                {name: 'changchun', value: 1.5},
                {name: 'jiaozhou', value: 1.5},
                {name: 'Yinchuan', value: 1.5},
                {name: 'zhangjiagang', value: 1.5},
                {name: 'Sanmenxia', value: 1.5},
                {name: 'Jinzhou', value: 1.5},
                {name: 'nanchang', value: 1.56},
                {name: 'liuzhou', value: 1.5},
                {name: 'sanya', value: 1.5},
                {name: 'zigong', value: 1.5},
                {name: 'Jilin', value: 1.5},
                {name: 'yangjiang', value: 1.5},
                {name: 'luzhou', value: 1.5},
                {name: 'xinin', value: 1.5},
                {name: 'Yibin', value: 1.5},
                {name: 'Hohehot', value: 1.5},
                {name: 'Chengtu', value: 6.23},
                {name: 'datong', value: 1.5},
                {name: 'Zhenjiang', value: 1.5},
                {name: 'Guilin', value: 1.5},
                {name: 'Zhangjiajie', value: 1.5},
                {name: 'Yixing', value: 1.5},
                {name: 'beihai', value: 1.5},
                {name: 'xian', value: 2.3},
                {name: 'jingtan', value: 1.5},
                {name: 'dongying', value: 1.5},
                {name: 'Mudan River', value: 1.5},
                {name: 'Zunyi', value: 1.5},
                {name: 'Shaoxing', value: 2.33},
                {name: 'Yangzhou', value: 1.5},
                {name: 'Changzhou', value: 1.5},
                {name: 'Weifang', value: 1.5},
                {name: 'Chongqing', value: 2.59},
                {name: 'Taizhou', value: 4.2},
                {name: 'Nanjing', value: 4.6},
                {name: 'Binzhou', value: 1.3},
                {name: 'Guiyang', value: 1.3},
                {name: 'Wuxi', value: 2.79},
                {name: 'Benxi', value: 1.3},
                {name: 'Kelamayi', value: 1.3},
                {name: 'Weinan', value: 1.3},
                {name: 'Maan Mountain', value: 1.3},
                {name: 'Baoji', value: 1.3},
                {name: 'Jiaozuo', value: 1.3},
                {name: 'Jurong', value: 1.3},
                {name: 'Beijing', value: 13.94},
                {name: 'Xuzhou', value: 1.55},
                {name: 'Hengshui', value: 1.3},
                {name: 'Baotou', value: 1.3},
                {name: 'Mianyang', value: 1.3},
                {name: 'Urumqi', value: 1.3},
                {name: 'Zaozhuang', value: 1.3},
                {name: 'Hangzhou', value: 15},
                {name: 'Zibo', value: 1.3},
                {name: 'Anshan', value: 1.3},
                {name: 'Liyang', value: 1.3},
                {name: 'Korla', value: 1.3},
                {name: 'Anyang', value: 1.3},
                {name: 'Kaifeng', value: 1.3},
                {name: 'Jinan', value: 2.47},
                {name: 'Deyang', value: 1.3},
                {name: 'Wenzhou', value: 5.29},
                {name: 'Jiujiang', value: 1.3},
                {name: 'Handan', value: 1.3},
                {name: 'linan', value: 1.3},
                {name: 'lanzhou', value: 1.3},
                {name: 'cangzhou', value: 1.3},
                {name: 'Linyi', value: 1.82},
                {name: 'Nanchong', value: 1.3},
                {name: 'Tianjin', value: 3.48},
                {name: 'Fuyang', value: 1.3},
                {name: 'Taian', value: 1.3},
                {name: 'Zhuji', value: 1.3},
                {name: 'Zhengzhou ', value: 3.9},
                {name: 'Harbin', value: 1.3},
                {name: 'liaocheng', value: 1.3},
                {name: 'wuhu', value: 1.3},
                {name: 'tangshan', value: 1.3},
                {name: 'pingdingshan', value: 1.3},
                {name: 'Xingtai', value: 1.3},
                {name: 'dezhou', value: 1.3},
                {name: 'Jining', value: 1.3},
                {name: 'Jingzhou', value: 1.3},
                {name: 'Yichang', value: 1.3},
                {name: 'yiwu', value: 1.3},
                {name: 'lishui', value: 1.3},
                {name: 'luoyang', value: 1.3},
                {name: 'qihuangdao', value: 1.3},
                {name: 'zhuzhou', value: 1.3},
                {name: 'shijiazhuang', value: 3},
                {name: 'Laiwu', value: 1.3},
                {name: 'changde', value: 1.3},
                {name: 'baoding', value: 1.9},
                {name: 'xiangtan', value: 1.3},
                {name: 'Jinhua', value: 20.58},
                {name: 'Yueyang', value: 1.3},
                {name: 'Changsha', value: 2.54},
                {name: 'Quzhou', value: 1.3},
                {name: 'Langfang', value: 1.3},
                {name: 'Heze', value: 1.3},
                {name: 'Hefei', value: 2.78},
                {name: 'Wuhan', value: 5.41},
                {name: 'daqing', value: 1.3}
            ];
            break;
            if(maptype=="effect"){
                drawMapEffect('center-bottom',1,cdata);
            }
        case "2016":
            data=[4,2,3,4,5,6];
            categories=['Apparel', 'Furniture', 'PersonalHealth', 'Food', 'Electronics', 'Other'];
            drawRadar(data,year,categories);
            var datainfoPie={
                seriesdata:[
                    {value:14.38, name:'ZTO'},
                    {value:8.25, name:'SF'},
                    {value:14.26, name:'YTO'},
                    {value:10.42, name:'STO'},
                    {value:10.27, name:'YUNDA'},
                    {value:42.42, name:'OTHER'},
                ],
                legenddata:['ZTO','SF','YTO','STO','YUNDA','OTHER']
            }
            drawPie(datainfoPie);
            var cdata = [
                {name: 'Haimen', value: 1.5},
                {name: 'Erdos', value: 1.5},
                {name: 'Zhaoyuan', value: 1.5},
                {name: 'Zhoushan', value: 1.5},
                {name: 'Qiqihaer', value: 1.5},
                {name: 'Yancheng', value: 1.3},
                {name: 'Chifeng', value: 1.3},
                {name: 'Qingdao', value: 2.25},
                {name: 'Ruishan', value: 12.3},
                {name: 'JinChang', value: 1.3},
                {name: 'Quanzhou', value: 5.7},
                {name: 'Laixi', value: 1.5},
                {name: 'Rizhao', value: 1.5},
                {name: 'Jiaonan', value: 1.3},
                {name: 'Nantong', value: 2.2},
                {name: 'Lasa', value: 1.5},
                {name: 'Yunfu', value: 1.5},
                {name: 'Meizhou', value: 18.5},
                {name: 'Wendeng', value: 1.5},
                {name: 'Shanghai', value: 21.61},
                {name: 'Panzhihua', value: 1.5},
                {name: 'Weihai', value: 1.5},
                {name: 'Chengteh', value: 1.5},
                {name: 'Xiamen', value: 1.73},
                {name: 'Shanwei', value: 1.5},
                {name: 'chaozhou', value: 1.5},
                {name: 'dandong', value: 1.5},
                {name: 'taicang', value: 1.5},
                {name: 'qujing', value: 1.5},
                {name: 'yantai', value: 1.5},
                {name: 'fuzhou', value: 2.36},
                {name: 'waifangdian', value: 1.5},
                {name: 'jimo', value: 19.5},
                {name: 'fushun', value: 1.5},
                {name: 'yuxi', value: 1.5},
                {name: 'zhangjiakou', value: 1.5},
                {name: 'yangquan', value: 1.5},
                {name: 'laizhou', value: 1.5},
                {name: 'huzhou', value: 1.69},
                {name: 'shantou', value: 30.6},
                {name: 'kunshan', value: 1.5},
                {name: 'NingPo ', value: 4.6},
                {name: 'zhanjiang', value: 1.5},
                {name: 'jieyang', value: 5.9},
                {name: 'rongcheng', value: 17.5},
                {name: 'lianyungang', value: 1.5},
                {name: 'huludao', value: 1.5},
                {name: 'changshu', value: 1.5},
                {name: 'dongguan', value: 8.22},
                {name: 'heyuan', value: 1.5},
                {name: 'huaian', value: 1.5},
                {name: 'taizhou', value: 1.5},
                {name: 'nanning', value: 1.55},
                {name: 'yingkou', value: 1.5},
                {name: 'huizhou', value: 1.6},
                {name: 'Jiangyin', value: 1.5},
                {name: 'Penglai', value: 1.5},
                {name: 'Shaoguan', value: 1.5},
                {name: 'Jiayuguan Pass', value: 1.5},
                {name: 'guangzhou', value: 30.42},
                {name: 'yanan', value: 1.5},
                {name: 'taiyuan', value: 1.5},
                {name: 'qingyuan', value: 1.5},
                {name: 'zhongshan', value: 2.17},
                {name: 'kunming', value: 1.5},
                {name: 'shouguang', value: 1.5},
                {name: 'Panjin', value: 1.5},
                {name: 'changzhi', value: 1.5},
                {name: 'shenzhen', value: 19.77},
                {name: 'zhuhai', value: 1.5},
                {name: 'suqian', value: 1.5},
                {name: 'xianyang', value: 18.5},
                {name: 'tongchuan', value: 1.5},
                {name: 'pingdu', value: 1.5},
                {name: 'foshan', value: 2.94},
                {name: 'haikou', value: 1.5},
                {name: 'jiangmen', value: 1.5},
                {name: 'zhangqiu', value: 1.5},
                {name: 'zhaoqing', value: 1.5},
                {name: 'dalian', value: 1.5},
                {name: 'Linfen', value: 1.5},
                {name: 'wujiang', value: 1.5},
                {name: 'shizuishan', value: 1.5},
                {name: 'shenyang', value: 1.9},
                {name: 'suzhou', value: 7.21},
                {name: 'maoming', value: 1.5},
                {name: 'jiaxing', value: 2.93},
                {name: 'changchun', value: 1.5},
                {name: 'jiaozhou', value: 1.5},
                {name: 'Yinchuan', value: 1.5},
                {name: 'zhangjiagang', value: 1.5},
                {name: 'Sanmenxia', value: 1.5},
                {name: 'Jinzhou', value: 1.5},
                {name: 'nanchang', value: 1.56},
                {name: 'liuzhou', value: 1.5},
                {name: 'sanya', value: 1.5},
                {name: 'zigong', value: 1.5},
                {name: 'Jilin', value: 1.5},
                {name: 'yangjiang', value: 1.5},
                {name: 'luzhou', value: 1.5},
                {name: 'xinin', value: 1.5},
                {name: 'Yibin', value: 1.5},
                {name: 'Hohehot', value: 1.5},
                {name: 'Chengtu', value: 6.23},
                {name: 'datong', value: 1.5},
                {name: 'Zhenjiang', value: 1.5},
                {name: 'Guilin', value: 1.5},
                {name: 'Zhangjiajie', value: 1.5},
                {name: 'Yixing', value: 1.5},
                {name: 'beihai', value: 1.5},
                {name: 'xian', value: 2.3},
                {name: 'jingtan', value: 1.5},
                {name: 'dongying', value: 1.5},
                {name: 'Mudan River', value: 1.5},
                {name: 'Zunyi', value: 1.5},
                {name: 'Shaoxing', value: 2.33},
                {name: 'Yangzhou', value: 1.5},
                {name: 'Changzhou', value: 1.5},
                {name: 'Weifang', value: 1.5},
                {name: 'Chongqing', value: 2.59},
                {name: 'Taizhou', value: 4.2},
                {name: 'Nanjing', value: 4.6},
                {name: 'Binzhou', value: 1.3},
                {name: 'Guiyang', value: 1.3},
                {name: 'Wuxi', value: 2.79},
                {name: 'Benxi', value: 1.3},
                {name: 'Kelamayi', value: 1.3},
                {name: 'Weinan', value: 1.3},
                {name: 'Maan Mountain', value: 1.3},
                {name: 'Baoji', value: 1.3},
                {name: 'Jiaozuo', value: 1.3},
                {name: 'Jurong', value: 1.3},
                {name: 'Beijing', value: 13.94},
                {name: 'Xuzhou', value: 1.55},
                {name: 'Hengshui', value: 1.3},
                {name: 'Baotou', value: 1.3},
                {name: 'Mianyang', value: 1.3},
                {name: 'Urumqi', value: 1.3},
                {name: 'Zaozhuang', value: 1.3},
                {name: 'Hangzhou', value: 15},
                {name: 'Zibo', value: 1.3},
                {name: 'Anshan', value: 1.3},
                {name: 'Liyang', value: 1.3},
                {name: 'Korla', value: 1.3},
                {name: 'Anyang', value: 1.3},
                {name: 'Kaifeng', value: 1.3},
                {name: 'Jinan', value: 2.47},
                {name: 'Deyang', value: 1.3},
                {name: 'Wenzhou', value: 5.29},
                {name: 'Jiujiang', value: 1.3},
                {name: 'Handan', value: 1.3},
                {name: 'linan', value: 1.3},
                {name: 'lanzhou', value: 1.3},
                {name: 'cangzhou', value: 1.3},
                {name: 'Linyi', value: 1.82},
                {name: 'Nanchong', value: 1.3},
                {name: 'Tianjin', value: 3.48},
                {name: 'Fuyang', value: 1.3},
                {name: 'Taian', value: 1.3},
                {name: 'Zhuji', value: 1.3},
                {name: 'Zhengzhou ', value: 3.9},
                {name: 'Harbin', value: 1.3},
                {name: 'liaocheng', value: 1.3},
                {name: 'wuhu', value: 1.3},
                {name: 'tangshan', value: 1.3},
                {name: 'pingdingshan', value: 1.3},
                {name: 'Xingtai', value: 1.3},
                {name: 'dezhou', value: 1.3},
                {name: 'Jining', value: 1.3},
                {name: 'Jingzhou', value: 1.3},
                {name: 'Yichang', value: 1.3},
                {name: 'yiwu', value: 1.3},
                {name: 'lishui', value: 1.3},
                {name: 'luoyang', value: 1.3},
                {name: 'qihuangdao', value: 1.3},
                {name: 'zhuzhou', value: 1.3},
                {name: 'shijiazhuang', value: 3},
                {name: 'Laiwu', value: 1.3},
                {name: 'changde', value: 1.3},
                {name: 'baoding', value: 1.9},
                {name: 'xiangtan', value: 1.3},
                {name: 'Jinhua', value: 20.58},
                {name: 'Yueyang', value: 1.3},
                {name: 'Changsha', value: 2.54},
                {name: 'Quzhou', value: 1.3},
                {name: 'Langfang', value: 1.3},
                {name: 'Heze', value: 1.3},
                {name: 'Hefei', value: 2.78},
                {name: 'Wuhan', value: 5.41},
                {name: 'daqing', value: 1.3}
            ];
            if(maptype=="effect"){
                drawMapEffect('center-bottom',1,cdata);
            }
            break;
        case "2017":
            data=[5,2,3,4,5,6];
            categories=['Apparel', 'Books&Video', 'Furniture', 'PersonalHealth', 'Food', 'Electronics'];
            drawRadar(data,year,categories);
            var datainfoPie={
                seriesdata:[
                    {value:15.40, name:'ZTO'},
                    {value:7.93, name:'SF'},
                    {value:13.05, name:'YTO'},
                    {value:9.97, name:'STO'},
                    {value:11.36, name:'YUNDA'},
                    {value:42.29, name:'OTHER'},
                ],
                legenddata:['ZTO','SF','YTO','STO','YUNDA','OTHER']
            }
            drawPie(datainfoPie);
            var cdata = [
                {name: 'Haimen', value: 1.5},
                {name: 'Erdos', value: 1.5},
                {name: 'Zhaoyuan', value: 1.5},
                {name: 'Zhoushan', value: 15.5},
                {name: 'Qiqihaer', value: 1.5},
                {name: 'Yancheng', value: 1.3},
                {name: 'Chifeng', value: 1.3},
                {name: 'Qingdao', value: 24.25},
                {name: 'Ruishan', value: 1.3},
                {name: 'JinChang', value: 1.3},
                {name: 'Quanzhou', value: 5.7},
                {name: 'Laixi', value: 1.5},
                {name: 'Rizhao', value: 1.5},
                {name: 'Jiaonan', value: 1.3},
                {name: 'Nantong', value: 2.2},
                {name: 'Lasa', value: 1.5},
                {name: 'Yunfu', value: 1.5},
                {name: 'Meizhou', value: 1.5},
                {name: 'Wendeng', value: 1.5},
                {name: 'Shanghai', value: 21.61},
                {name: 'Panzhihua', value: 1.5},
                {name: 'Weihai', value: 17.5},
                {name: 'Chengteh', value: 1.5},
                {name: 'Xiamen', value: 1.73},
                {name: 'Shanwei', value: 1.5},
                {name: 'chaozhou', value: 1.5},
                {name: 'dandong', value: 1.5},
                {name: 'taicang', value: 1.5},
                {name: 'qujing', value: 1.5},
                {name: 'yantai', value: 1.5},
                {name: 'fuzhou', value: 2.36},
                {name: 'waifangdian', value: 1.5},
                {name: 'jimo', value: 19.5},
                {name: 'fushun', value: 1.5},
                {name: 'yuxi', value: 1.5},
                {name: 'zhangjiakou', value: 1.5},
                {name: 'yangquan', value: 1.5},
                {name: 'laizhou', value: 1.5},
                {name: 'huzhou', value: 1.69},
                {name: 'shantou', value: 3.6},
                {name: 'kunshan', value: 1.5},
                {name: 'NingPo ', value: 4.6},
                {name: 'zhanjiang', value: 1.5},
                {name: 'jieyang', value: 25.9},
                {name: 'rongcheng', value: 1.5},
                {name: 'lianyungang', value: 1.5},
                {name: 'huludao', value: 1.5},
                {name: 'changshu', value: 1.5},
                {name: 'dongguan', value: 8.22},
                {name: 'heyuan', value: 1.5},
                {name: 'huaian', value: 1.5},
                {name: 'taizhou', value: 1.5},
                {name: 'nanning', value: 1.55},
                {name: 'yingkou', value: 1.5},
                {name: 'huizhou', value: 1.6},
                {name: 'Jiangyin', value: 1.5},
                {name: 'Penglai', value: 1.5},
                {name: 'Shaoguan', value: 1.5},
                {name: 'Jiayuguan Pass', value: 1.5},
                {name: 'guangzhou', value: 30.42},
                {name: 'yanan', value: 1.5},
                {name: 'taiyuan', value: 1.5},
                {name: 'qingyuan', value: 1.5},
                {name: 'zhongshan', value: 2.17},
                {name: 'kunming', value: 1.5},
                {name: 'shouguang', value: 1.5},
                {name: 'Panjin', value: 1.5},
                {name: 'changzhi', value: 1.5},
                {name: 'shenzhen', value: 19.77},
                {name: 'zhuhai', value: 1.5},
                {name: 'suqian', value: 1.5},
                {name: 'xianyang', value: 1.5},
                {name: 'tongchuan', value: 1.5},
                {name: 'pingdu', value: 1.5},
                {name: 'foshan', value: 2.94},
                {name: 'haikou', value: 1.5},
                {name: 'jiangmen', value: 1.5},
                {name: 'zhangqiu', value: 1.5},
                {name: 'zhaoqing', value: 1.5},
                {name: 'dalian', value: 1.5},
                {name: 'Linfen', value: 1.5},
                {name: 'wujiang', value: 1.5},
                {name: 'shizuishan', value: 1.5},
                {name: 'shenyang', value: 1.9},
                {name: 'suzhou', value: 7.21},
                {name: 'maoming', value: 1.5},
                {name: 'jiaxing', value: 2.93},
                {name: 'changchun', value: 1.5},
                {name: 'jiaozhou', value: 1.5},
                {name: 'Yinchuan', value: 1.5},
                {name: 'zhangjiagang', value: 1.5},
                {name: 'Sanmenxia', value: 1.5},
                {name: 'Jinzhou', value: 1.5},
                {name: 'nanchang', value: 1.56},
                {name: 'liuzhou', value: 1.5},
                {name: 'sanya', value: 1.5},
                {name: 'zigong', value: 1.5},
                {name: 'Jilin', value: 1.5},
                {name: 'yangjiang', value: 1.5},
                {name: 'luzhou', value: 1.5},
                {name: 'xinin', value: 1.5},
                {name: 'Yibin', value: 1.5},
                {name: 'Hohehot', value: 1.5},
                {name: 'Chengtu', value: 6.23},
                {name: 'datong', value: 1.5},
                {name: 'Zhenjiang', value: 1.5},
                {name: 'Guilin', value: 1.5},
                {name: 'Zhangjiajie', value: 1.5},
                {name: 'Yixing', value: 1.5},
                {name: 'beihai', value: 1.5},
                {name: 'xian', value: 2.3},
                {name: 'jingtan', value: 1.5},
                {name: 'dongying', value: 1.5},
                {name: 'Mudan River', value: 1.5},
                {name: 'Zunyi', value: 1.5},
                {name: 'Shaoxing', value: 2.33},
                {name: 'Yangzhou', value: 1.5},
                {name: 'Changzhou', value: 1.5},
                {name: 'Weifang', value: 1.5},
                {name: 'Chongqing', value: 2.59},
                {name: 'Taizhou', value: 4.2},
                {name: 'Nanjing', value: 4.6},
                {name: 'Binzhou', value: 1.3},
                {name: 'Guiyang', value: 1.3},
                {name: 'Wuxi', value: 2.79},
                {name: 'Benxi', value: 1.3},
                {name: 'Kelamayi', value: 1.3},
                {name: 'Weinan', value: 1.3},
                {name: 'Maan Mountain', value: 1.3},
                {name: 'Baoji', value: 1.3},
                {name: 'Jiaozuo', value: 1.3},
                {name: 'Jurong', value: 1.3},
                {name: 'Beijing', value: 13.94},
                {name: 'Xuzhou', value: 1.55},
                {name: 'Hengshui', value: 1.3},
                {name: 'Baotou', value: 1.3},
                {name: 'Mianyang', value: 1.3},
                {name: 'Urumqi', value: 1.3},
                {name: 'Zaozhuang', value: 1.3},
                {name: 'Hangzhou', value: 15},
                {name: 'Zibo', value: 1.3},
                {name: 'Anshan', value: 1.3},
                {name: 'Liyang', value: 1.3},
                {name: 'Korla', value: 1.3},
                {name: 'Anyang', value: 1.3},
                {name: 'Kaifeng', value: 1.3},
                {name: 'Jinan', value: 2.47},
                {name: 'Deyang', value: 1.3},
                {name: 'Wenzhou', value: 5.29},
                {name: 'Jiujiang', value: 1.3},
                {name: 'Handan', value: 1.3},
                {name: 'linan', value: 1.3},
                {name: 'lanzhou', value: 1.3},
                {name: 'cangzhou', value: 1.3},
                {name: 'Linyi', value: 1.82},
                {name: 'Nanchong', value: 1.3},
                {name: 'Tianjin', value: 3.48},
                {name: 'Fuyang', value: 1.3},
                {name: 'Taian', value: 1.3},
                {name: 'Zhuji', value: 1.3},
                {name: 'Zhengzhou ', value: 3.9},
                {name: 'Harbin', value: 1.3},
                {name: 'liaocheng', value: 1.3},
                {name: 'wuhu', value: 1.3},
                {name: 'tangshan', value: 1.3},
                {name: 'pingdingshan', value: 1.3},
                {name: 'Xingtai', value: 1.3},
                {name: 'dezhou', value: 1.3},
                {name: 'Jining', value: 1.3},
                {name: 'Jingzhou', value: 1.3},
                {name: 'Yichang', value: 1.3},
                {name: 'yiwu', value: 1.3},
                {name: 'lishui', value: 1.3},
                {name: 'luoyang', value: 1.3},
                {name: 'qihuangdao', value: 1.3},
                {name: 'zhuzhou', value: 1.3},
                {name: 'shijiazhuang', value: 3},
                {name: 'Laiwu', value: 1.3},
                {name: 'changde', value: 1.3},
                {name: 'baoding', value: 1.9},
                {name: 'xiangtan', value: 1.3},
                {name: 'Jinhua', value: 20.58},
                {name: 'Yueyang', value: 1.3},
                {name: 'Changsha', value: 2.54},
                {name: 'Quzhou', value: 1.3},
                {name: 'Langfang', value: 1.3},
                {name: 'Heze', value: 1.3},
                {name: 'Hefei', value: 2.78},
                {name: 'Wuhan', value: 5.41},
                {name: 'daqing', value: 1.3}
            ];
            if(maptype=="effect"){
                drawMapEffect('center-bottom',1,cdata);
            }
            break;
        case "2018":
            data=[6,2,3,4,5,6];
            categories=['Books&Video', 'Furniture', 'Toys', 'Equipment', 'Electronics', 'Other'];
            drawRadar(data,year,categories);
            var datainfoPie={
                seriesdata:[
                    {value:14.42, name:'ZTO'},
                    {value:7.09, name:'SF'},
                    {value:14.38, name:'YTO'},
                    {value:9.82, name:'STO'},
                    {value:11.09, name:'YUNDA'},
                    {value:29.25, name:'OTHER'},
                ],
                legenddata:['ZTO','SF','YTO','STO','YUNDA','OTHER']
            }
            drawPie(datainfoPie);
            var cdata = [
                {name: 'Haimen', value: 1.5},
                {name: 'Erdos', value: 1.5},
                {name: 'Zhaoyuan', value: 1.5},
                {name: 'Zhoushan', value: 1.5},
                {name: 'Qiqihaer', value: 1.5},
                {name: 'Yancheng', value: 1.3},
                {name: 'Chifeng', value: 1.3},
                {name: 'Qingdao', value: 2.25},
                {name: 'Ruishan', value: 1.3},
                {name: 'JinChang', value: 1.3},
                {name: 'Quanzhou', value: 5.7},
                {name: 'Laixi', value: 1.5},
                {name: 'Rizhao', value: 1.5},
                {name: 'Jiaonan', value: 1.3},
                {name: 'Nantong', value: 2.2},
                {name: 'Lasa', value: 1.5},
                {name: 'Yunfu', value: 1.5},
                {name: 'Meizhou', value: 1.5},
                {name: 'Wendeng', value: 1.5},
                {name: 'Shanghai', value: 21.61},
                {name: 'Panzhihua', value: 1.5},
                {name: 'Weihai', value: 1.5},
                {name: 'Chengteh', value: 1.5},
                {name: 'Xiamen', value: 1.73},
                {name: 'Shanwei', value: 1.5},
                {name: 'chaozhou', value: 1.5},
                {name: 'dandong', value: 1.5},
                {name: 'taicang', value: 1.5},
                {name: 'qujing', value: 1.5},
                {name: 'yantai', value: 1.5},
                {name: 'fuzhou', value: 2.36},
                {name: 'waifangdian', value: 1.5},
                {name: 'jimo', value: 1.5},
                {name: 'fushun', value: 1.5},
                {name: 'yuxi', value: 1.5},
                {name: 'zhangjiakou', value: 1.5},
                {name: 'yangquan', value: 1.5},
                {name: 'laizhou', value: 1.5},
                {name: 'huzhou', value: 1.69},
                {name: 'shantou', value: 3.6},
                {name: 'kunshan', value: 1.5},
                {name: 'NingPo ', value: 4.6},
                {name: 'zhanjiang', value: 1.5},
                {name: 'jieyang', value: 5.9},
                {name: 'rongcheng', value: 1.5},
                {name: 'lianyungang', value: 1.5},
                {name: 'huludao', value: 1.5},
                {name: 'changshu', value: 1.5},
                {name: 'dongguan', value: 8.22},
                {name: 'heyuan', value: 1.5},
                {name: 'huaian', value: 1.5},
                {name: 'taizhou', value: 1.5},
                {name: 'nanning', value: 1.55},
                {name: 'yingkou', value: 1.5},
                {name: 'huizhou', value: 1.6},
                {name: 'Jiangyin', value: 1.5},
                {name: 'Penglai', value: 1.5},
                {name: 'Shaoguan', value: 1.5},
                {name: 'Jiayuguan Pass', value: 1.5},
                {name: 'guangzhou', value: 30.42},
                {name: 'yanan', value: 1.5},
                {name: 'taiyuan', value: 1.5},
                {name: 'qingyuan', value: 1.5},
                {name: 'zhongshan', value: 2.17},
                {name: 'kunming', value: 1.5},
                {name: 'shouguang', value: 1.5},
                {name: 'Panjin', value: 1.5},
                {name: 'changzhi', value: 1.5},
                {name: 'shenzhen', value: 19.77},
                {name: 'zhuhai', value: 1.5},
                {name: 'suqian', value: 1.5},
                {name: 'xianyang', value: 1.5},
                {name: 'tongchuan', value: 1.5},
                {name: 'pingdu', value: 1.5},
                {name: 'foshan', value: 2.94},
                {name: 'haikou', value: 1.5},
                {name: 'jiangmen', value: 1.5},
                {name: 'zhangqiu', value: 1.5},
                {name: 'zhaoqing', value: 1.5},
                {name: 'dalian', value: 1.5},
                {name: 'Linfen', value: 1.5},
                {name: 'wujiang', value: 1.5},
                {name: 'shizuishan', value: 1.5},
                {name: 'shenyang', value: 1.9},
                {name: 'suzhou', value: 7.21},
                {name: 'maoming', value: 1.5},
                {name: 'jiaxing', value: 2.93},
                {name: 'changchun', value: 1.5},
                {name: 'jiaozhou', value: 1.5},
                {name: 'Yinchuan', value: 1.5},
                {name: 'zhangjiagang', value: 1.5},
                {name: 'Sanmenxia', value: 1.5},
                {name: 'Jinzhou', value: 1.5},
                {name: 'nanchang', value: 1.56},
                {name: 'liuzhou', value: 1.5},
                {name: 'sanya', value: 1.5},
                {name: 'zigong', value: 1.5},
                {name: 'Jilin', value: 1.5},
                {name: 'yangjiang', value: 1.5},
                {name: 'luzhou', value: 1.5},
                {name: 'xinin', value: 1.5},
                {name: 'Yibin', value: 1.5},
                {name: 'Hohehot', value: 1.5},
                {name: 'Chengtu', value: 6.23},
                {name: 'datong', value: 1.5},
                {name: 'Zhenjiang', value: 1.5},
                {name: 'Guilin', value: 1.5},
                {name: 'Zhangjiajie', value: 1.5},
                {name: 'Yixing', value: 1.5},
                {name: 'beihai', value: 1.5},
                {name: 'xian', value: 2.3},
                {name: 'jingtan', value: 1.5},
                {name: 'dongying', value: 1.5},
                {name: 'Mudan River', value: 1.5},
                {name: 'Zunyi', value: 1.5},
                {name: 'Shaoxing', value: 2.33},
                {name: 'Yangzhou', value: 1.5},
                {name: 'Changzhou', value: 1.5},
                {name: 'Weifang', value: 1.5},
                {name: 'Chongqing', value: 2.59},
                {name: 'Taizhou', value: 4.2},
                {name: 'Nanjing', value: 4.6},
                {name: 'Binzhou', value: 1.3},
                {name: 'Guiyang', value: 1.3},
                {name: 'Wuxi', value: 2.79},
                {name: 'Benxi', value: 1.3},
                {name: 'Kelamayi', value: 1.3},
                {name: 'Weinan', value: 1.3},
                {name: 'Maan Mountain', value: 1.3},
                {name: 'Baoji', value: 1.3},
                {name: 'Jiaozuo', value: 1.3},
                {name: 'Jurong', value: 1.3},
                {name: 'Beijing', value: 13.94},
                {name: 'Xuzhou', value: 1.55},
                {name: 'Hengshui', value: 1.3},
                {name: 'Baotou', value: 1.3},
                {name: 'Mianyang', value: 1.3},
                {name: 'Urumqi', value: 1.3},
                {name: 'Zaozhuang', value: 1.3},
                {name: 'Hangzhou', value: 15},
                {name: 'Zibo', value: 1.3},
                {name: 'Anshan', value: 1.3},
                {name: 'Liyang', value: 1.3},
                {name: 'Korla', value: 1.3},
                {name: 'Anyang', value: 1.3},
                {name: 'Kaifeng', value: 1.3},
                {name: 'Jinan', value: 2.47},
                {name: 'Deyang', value: 1.3},
                {name: 'Wenzhou', value: 5.29},
                {name: 'Jiujiang', value: 1.3},
                {name: 'Handan', value: 1.3},
                {name: 'linan', value: 1.3},
                {name: 'lanzhou', value: 1.3},
                {name: 'cangzhou', value: 1.3},
                {name: 'Linyi', value: 1.82},
                {name: 'Nanchong', value: 1.3},
                {name: 'Tianjin', value: 3.48},
                {name: 'Fuyang', value: 1.3},
                {name: 'Taian', value: 1.3},
                {name: 'Zhuji', value: 1.3},
                {name: 'Zhengzhou ', value: 3.9},
                {name: 'Harbin', value: 1.3},
                {name: 'liaocheng', value: 1.3},
                {name: 'wuhu', value: 1.3},
                {name: 'tangshan', value: 1.3},
                {name: 'pingdingshan', value: 1.3},
                {name: 'Xingtai', value: 1.3},
                {name: 'dezhou', value: 1.3},
                {name: 'Jining', value: 1.3},
                {name: 'Jingzhou', value: 1.3},
                {name: 'Yichang', value: 1.3},
                {name: 'yiwu', value: 1.3},
                {name: 'lishui', value: 1.3},
                {name: 'luoyang', value: 1.3},
                {name: 'qihuangdao', value: 1.3},
                {name: 'zhuzhou', value: 1.3},
                {name: 'shijiazhuang', value: 3},
                {name: 'Laiwu', value: 1.3},
                {name: 'changde', value: 1.3},
                {name: 'baoding', value: 1.9},
                {name: 'xiangtan', value: 1.3},
                {name: 'Jinhua', value: 20.58},
                {name: 'Yueyang', value: 1.3},
                {name: 'Changsha', value: 2.54},
                {name: 'Quzhou', value: 1.3},
                {name: 'Langfang', value: 1.3},
                {name: 'Heze', value: 1.3},
                {name: 'Hefei', value: 2.78},
                {name: 'Wuhan', value: 5.41},
                {name: 'daqing', value: 1.3}
            ];
            if(maptype=="effect"){
                drawMapEffect('center-bottom',1,cdata);
            }
            break;
        default:
            categories=['Furniture', 'PersonalHealth', 'Toys','Equipment', 'Electronics', 'Other'];
            drawRadar(data,year,categories);
    }

    /*if(d.target.innerHTML == 'line'){
        $('.center-bottom').eq(0).css('display','block');
        $('.center-bottom').eq(1).css('display','none');
    }
    if(d.target.innerHTML == 'effect'){
        $('.center-bottom').eq(0).css('display','none');
        $('.center-bottom').eq(1).css('display','block');
        drawMapEffect('center-bottom',1);
    }*/
})

$('#maptype').change(function () {
    var target=$(this).children('option:selected').val();
    var year=$('#year').children('option:selected').val();
    if(target == 'line'){
        $('.center-bottom').eq(0).css('display','block');
        $('.center-bottom').eq(1).css('display','none');
    }
    if(target == 'effect'){
        $('.center-bottom').eq(0).css('display','none');
        $('.center-bottom').eq(1).css('display','block');
        var cdata = [
            {name: 'Haimen', value: 1.5},
            {name: 'Erdos', value: 1.5},
            {name: 'Zhaoyuan', value: 1.5},
            {name: 'Zhoushan', value: 1.5},
            {name: 'Qiqihaer', value: 1.5},
            {name: 'Yancheng', value: 1.3},
            {name: 'Chifeng', value: 1.3},
            {name: 'Qingdao', value: 2.25},
            {name: 'Ruishan', value: 1.3},
            {name: 'JinChang', value: 1.3},
            {name: 'Quanzhou', value: 5.7},
            {name: 'Laixi', value: 1.5},
            {name: 'Rizhao', value: 1.5},
            {name: 'Jiaonan', value: 1.3},
            {name: 'Nantong', value: 2.2},
            {name: 'Lasa', value: 1.5},
            {name: 'Yunfu', value: 1.5},
            {name: 'Meizhou', value: 1.5},
            {name: 'Wendeng', value: 1.5},
            {name: 'Shanghai', value: 21.61},
            {name: 'Panzhihua', value: 1.5},
            {name: 'Weihai', value: 1.5},
            {name: 'Chengteh', value: 1.5},
            {name: 'Xiamen', value: 1.73},
            {name: 'Shanwei', value: 1.5},
            {name: 'chaozhou', value: 1.5},
            {name: 'dandong', value: 1.5},
            {name: 'taicang', value: 1.5},
            {name: 'qujing', value: 1.5},
            {name: 'yantai', value: 1.5},
            {name: 'fuzhou', value: 2.36},
            {name: 'waifangdian', value: 1.5},
            {name: 'jimo', value: 1.5},
            {name: 'fushun', value: 1.5},
            {name: 'yuxi', value: 1.5},
            {name: 'zhangjiakou', value: 1.5},
            {name: 'yangquan', value: 1.5},
            {name: 'laizhou', value: 1.5},
            {name: 'huzhou', value: 1.69},
            {name: 'shantou', value: 3.6},
            {name: 'kunshan', value: 1.5},
            {name: 'NingPo ', value: 4.6},
            {name: 'zhanjiang', value: 1.5},
            {name: 'jieyang', value: 5.9},
            {name: 'rongcheng', value: 1.5},
            {name: 'lianyungang', value: 1.5},
            {name: 'huludao', value: 1.5},
            {name: 'changshu', value: 1.5},
            {name: 'dongguan', value: 8.22},
            {name: 'heyuan', value: 1.5},
            {name: 'huaian', value: 1.5},
            {name: 'taizhou', value: 1.5},
            {name: 'nanning', value: 1.55},
            {name: 'yingkou', value: 1.5},
            {name: 'huizhou', value: 1.6},
            {name: 'Jiangyin', value: 1.5},
            {name: 'Penglai', value: 1.5},
            {name: 'Shaoguan', value: 1.5},
            {name: 'Jiayuguan Pass', value: 1.5},
            {name: 'guangzhou', value: 30.42},
            {name: 'yanan', value: 1.5},
            {name: 'taiyuan', value: 1.5},
            {name: 'qingyuan', value: 1.5},
            {name: 'zhongshan', value: 2.17},
            {name: 'kunming', value: 1.5},
            {name: 'shouguang', value: 1.5},
            {name: 'Panjin', value: 1.5},
            {name: 'changzhi', value: 1.5},
            {name: 'shenzhen', value: 19.77},
            {name: 'zhuhai', value: 1.5},
            {name: 'suqian', value: 1.5},
            {name: 'xianyang', value: 1.5},
            {name: 'tongchuan', value: 1.5},
            {name: 'pingdu', value: 1.5},
            {name: 'foshan', value: 2.94},
            {name: 'haikou', value: 1.5},
            {name: 'jiangmen', value: 1.5},
            {name: 'zhangqiu', value: 1.5},
            {name: 'zhaoqing', value: 1.5},
            {name: 'dalian', value: 1.5},
            {name: 'Linfen', value: 1.5},
            {name: 'wujiang', value: 1.5},
            {name: 'shizuishan', value: 1.5},
            {name: 'shenyang', value: 1.9},
            {name: 'suzhou', value: 7.21},
            {name: 'maoming', value: 1.5},
            {name: 'jiaxing', value: 2.93},
            {name: 'changchun', value: 1.5},
            {name: 'jiaozhou', value: 1.5},
            {name: 'Yinchuan', value: 1.5},
            {name: 'zhangjiagang', value: 1.5},
            {name: 'Sanmenxia', value: 1.5},
            {name: 'Jinzhou', value: 1.5},
            {name: 'nanchang', value: 1.56},
            {name: 'liuzhou', value: 1.5},
            {name: 'sanya', value: 1.5},
            {name: 'zigong', value: 1.5},
            {name: 'Jilin', value: 1.5},
            {name: 'yangjiang', value: 1.5},
            {name: 'luzhou', value: 1.5},
            {name: 'xinin', value: 1.5},
            {name: 'Yibin', value: 1.5},
            {name: 'Hohehot', value: 1.5},
            {name: 'Chengtu', value: 6.23},
            {name: 'datong', value: 1.5},
            {name: 'Zhenjiang', value: 1.5},
            {name: 'Guilin', value: 1.5},
            {name: 'Zhangjiajie', value: 1.5},
            {name: 'Yixing', value: 1.5},
            {name: 'beihai', value: 1.5},
            {name: 'xian', value: 2.3},
            {name: 'jingtan', value: 1.5},
            {name: 'dongying', value: 1.5},
            {name: 'Mudan River', value: 1.5},
            {name: 'Zunyi', value: 1.5},
            {name: 'Shaoxing', value: 2.33},
            {name: 'Yangzhou', value: 1.5},
            {name: 'Changzhou', value: 1.5},
            {name: 'Weifang', value: 1.5},
            {name: 'Chongqing', value: 2.59},
            {name: 'Taizhou', value: 4.2},
            {name: 'Nanjing', value: 4.6},
            {name: 'Binzhou', value: 1.3},
            {name: 'Guiyang', value: 1.3},
            {name: 'Wuxi', value: 2.79},
            {name: 'Benxi', value: 1.3},
            {name: 'Kelamayi', value: 1.3},
            {name: 'Weinan', value: 1.3},
            {name: 'Maan Mountain', value: 1.3},
            {name: 'Baoji', value: 1.3},
            {name: 'Jiaozuo', value: 1.3},
            {name: 'Jurong', value: 1.3},
            {name: 'Beijing', value: 13.94},
            {name: 'Xuzhou', value: 1.55},
            {name: 'Hengshui', value: 1.3},
            {name: 'Baotou', value: 1.3},
            {name: 'Mianyang', value: 1.3},
            {name: 'Urumqi', value: 1.3},
            {name: 'Zaozhuang', value: 1.3},
            {name: 'Hangzhou', value: 15},
            {name: 'Zibo', value: 1.3},
            {name: 'Anshan', value: 1.3},
            {name: 'Liyang', value: 1.3},
            {name: 'Korla', value: 1.3},
            {name: 'Anyang', value: 1.3},
            {name: 'Kaifeng', value: 1.3},
            {name: 'Jinan', value: 2.47},
            {name: 'Deyang', value: 1.3},
            {name: 'Wenzhou', value: 5.29},
            {name: 'Jiujiang', value: 1.3},
            {name: 'Handan', value: 1.3},
            {name: 'linan', value: 1.3},
            {name: 'lanzhou', value: 1.3},
            {name: 'cangzhou', value: 1.3},
            {name: 'Linyi', value: 1.82},
            {name: 'Nanchong', value: 1.3},
            {name: 'Tianjin', value: 3.48},
            {name: 'Fuyang', value: 1.3},
            {name: 'Taian', value: 1.3},
            {name: 'Zhuji', value: 1.3},
            {name: 'Zhengzhou ', value: 3.9},
            {name: 'Harbin', value: 1.3},
            {name: 'liaocheng', value: 1.3},
            {name: 'wuhu', value: 1.3},
            {name: 'tangshan', value: 1.3},
            {name: 'pingdingshan', value: 1.3},
            {name: 'Xingtai', value: 1.3},
            {name: 'dezhou', value: 1.3},
            {name: 'Jining', value: 1.3},
            {name: 'Jingzhou', value: 1.3},
            {name: 'Yichang', value: 1.3},
            {name: 'yiwu', value: 1.3},
            {name: 'lishui', value: 1.3},
            {name: 'luoyang', value: 1.3},
            {name: 'qihuangdao', value: 1.3},
            {name: 'zhuzhou', value: 1.3},
            {name: 'shijiazhuang', value: 3},
            {name: 'Laiwu', value: 1.3},
            {name: 'changde', value: 1.3},
            {name: 'baoding', value: 1.9},
            {name: 'xiangtan', value: 1.3},
            {name: 'Jinhua', value: 20.58},
            {name: 'Yueyang', value: 1.3},
            {name: 'Changsha', value: 2.54},
            {name: 'Quzhou', value: 1.3},
            {name: 'Langfang', value: 1.3},
            {name: 'Heze', value: 1.3},
            {name: 'Hefei', value: 2.78},
            {name: 'Wuhan', value: 5.41},
            {name: 'daqing', value: 1.3}
        ];
        drawMapEffect('center-bottom',1,cdata);

    }
})

//Function of drawing radar chart if product category changed
$('#category').change(function () {
    /!* body... *!/
    var cate=$(this).children('option:selected').val();
    var data = [15,8,12.1,20.4,6,4];
    switch (cate) {
        case "Apparel":
            data=[1,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Books,Music,Video":
            data=[3,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Furniture":
            data=[3,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Personal Health":
            data=[4,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Toys & Hobby":
            data=[5,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Office Equipment":
            data=[6,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Food & Beverage":
            data=[6,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Consumer Electronics":
            data=[6,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        case "Other":
            data=[6,2,3,4,5,6];
            drawRadarByCategory(data,cate);
            break;
        default:
            data=[0,0,0,0,0,0];
            drawRadarByCategory(data,cate);
    }
})

// left-center draw business-income bar-chart
function drawBar_line (income,year) {
    var myecharts = echarts.init(document.getElementById('totalProfit'));
    var xaxis;
    if(year!='Year'){
        xaxis=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    }else{
        xaxis= ["2014","2015","2016","2017","2018"];
    }

    var option = {
        // backgroundColor: 'black',
        color: ['#2adecf'],
        textStyle: {
            color: 'rgb(222,222,222)',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '15%',
            containLabel: true
        },
        xAxis: [{
            data: xaxis,
            axisLine: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                rotate: 0
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {}
        },
            {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {}
            }
        ],
        series: [{
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0, [{
                            offset: 0,
                            color: '#719aff'
                        }, {
                            offset: 1,
                            color: '#51c3ff'
                        }]
                    )
                }
            },
            data: income,
        }, {
            type: 'line',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#ffe898',
                    barBorderRadius: [30, 30, 0, 0],
                    lineStyle: {
                        color: '#ffe898'
                    },
                }
            },
            data: income,
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'red'
                        },
                        label: {
                            show: true,
                            position: 'left'
                        }
                    }
                },
                large: true,
                effect: {
                    show: false,
                    loop: true,
                    period: 0,
                    scaleSize: 2,
                    color: null,
                    shadowColor: null,
                    shadowBlur: null
                },
                data: [
                    [{
                        name: '',
                        xAxis: '',
                        yAxis: ''
                    },
                        {
                            name: '',
                            xAxis: '',
                            yAxis: ''
                        }
                    ]
                ]
            }
        }]
    }
    myecharts.setOption(option);
}

//Left-bottom Draw Radar-chart if 'product Category' changed
function drawRadarByCategory(data,cate) {
    // body...
    var myecharts = echarts.init(document.getElementById('gdMap'));
    option = {
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text: 'SF', max: 50},
                    {text: 'STO', max: 50},
                    {text: 'ZTO', max: 50},
                    {text: 'YTO', max: 55},
                    {text: 'YUNDA', max: 50},
                    {text: 'OTHER', max: 100}
                ],
                center: ['50%', '53%'],
            },
        ],
        shape: 'circle',
        splitNumber: 5,
        series : [
            {
                type: 'radar',
                tooltip : {
                    trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data : [
                    {
                        value : data,
                        name : cate,
                    }
                ],
            },
        ]
    };

    myecharts.setOption(option);
}
//Left-bottom Draw Radar-chart if 'year' changed
function drawRadar (data,year,categories) {
    // body...
    var myecharts = echarts.init(document.getElementById('gdMap'));
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };
    option = {
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        polar : [
            {
                indicator : [
                    {text: categories[0], max: 50},
                    {text: categories[1], max: 50},
                    {text: categories[2], max: 50},
                    {text: categories[3], max: 55},
                    {text: categories[4], max: 50},
                    {text: categories[5], max: 100}
                ],
                center: ['50%', '53%'],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)',
                    }
                }
            },

        ],
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '20%',
            containLabel: true,
        },
        series: [
            {
                type: 'radar',
                lineStyle: lineStyle,
                tooltip : {
                    trigger: 'item'
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                data : [
                    {
                        value : data,
                        name : year,
                    }
                ],
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#ed6d3d',
                    }
                },
                center: ['56%', '60%'],
                gird:{
                    top:'10%',
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1,
                    }
                }
            },

        ]
    };
    myecharts.setOption(option);
}

// Right-top bar chart object
var series = [
    {
        name: 'ZTO',
        type: 'bar',
        stack: 'total',
        label: {
            normal: {
                show: true,
                //position: 'insideLeft'
            }
        },
        data: [13.01, 14.26, 14.38, 15.40, 14.42]
    },
    {
        name: 'SF',
        type: 'bar',
        stack: 'total',
        label: {
            normal: {
                show: true,
                //position: 'insideLeft'
            }
        },
        data: [11.53, 9.53, 8.25, 7.93, 7.09]
    },
    {
        name: 'YTO',
        type: 'bar',
        barGap:'30%',
        stack: 'total',
        label: {
            normal: {
                show: true,
                //position: 'insideRight'
            }
        },
        data: [13.30, 14.67, 14.26, 13.05, 14.38]
    },
    {
        name: 'STO',
        type: 'bar',
        stack: 'total',
        label: {
            normal: {
                show: true,
                //position: 'insideRight'
            }
        },
        data: [16.52, 12.42, 10.42, 9.97, 9.82]
    },
    {
        name: 'YUNDA',
        type: 'bar',
        stack: 'total',
        label: {
            normal: {
                show: true,
                // position: 'insideRight'
            }
        },
        data: [11.23, 10.31, 10.27, 11.36, 11.09]
    },
    {
        name: 'Other',
        type: 'bar',
        stack: 'total',
        label: {
            normal: {
                show: true,
                //position: 'insideRight'
            }
        },
        data: [34.41, 38.81, 42.42, 42.29, 43.20]
    },

]

//Right-top Draw bar-chart if 'company' changed
function drawBar (id,data,num) {
    var myecharts = echarts.init(document.getElementById(id));

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow',
            }
        },

        grid: {
            top:'3%',
            left: '3%',
            right: num,
            bottom: '3%',
            containLabel: true,
        },
        xAxis:  {
            type: 'value',
            axisLabel:{
                color:'#91c7af'
            },
        },
        yAxis: {
            type: 'category',
            data:['2014','2015','2016','2017','2018'],
            axisLabel:{
                color:'#91c7af'
            }
        },
        series: data,
    };
    myecharts.setOption(option);
}

//Right-top Draw bar-chart if 'year' changed
function drawPie (data) {
    var myecharts=echarts.init(document.getElementById('pie'));
    var options={
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}% "
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: data.legenddata,
            textStyle: {
                color:'#91c7af',
                opacity:0.7
            }
        },
        series : [
            {
                name: 'Market Share',
                type: 'pie',
                radius : '55%',
                center: ['56%', '50%'],
                data:data.seriesdata,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myecharts.setOption(options);
}

//Right-Center Draw business-volume bar-chart if 'year' or 'company' changed
function drawBar_line_volume (quantity,year) {
    var myecharts = echarts.init(document.getElementById('volume'));
    var xaxis;
    if(year!='Year'){
        xaxis=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    }else{
        xaxis= ["2014","2015","2016","2017","2018"];
    }
    var option = {
        // backgroundColor: 'black',
        color: ['#2adecf'],
        textStyle: {
            color: 'rgb(222,222,222)',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: [{
            data: xaxis,
            axisLine: {
                show: true
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                rotate: 0
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {}
        },
            {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {}
            }
        ],
        series: [{
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 0, 0, [{
                            offset: 0,
                            color: '#719aff'
                        }, {
                            offset: 1,
                            color: '#f58220'
                        }]
                    )
                }
            },
            data: quantity,
        }, {
            type: 'line',
            yAxisIndex: 0,
            data: quantity,
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'red'
                        },
                        label: {
                            show: true,
                            position: 'left'
                        }
                    }
                },
                large: true,
                effect: {
                    show: false,
                    loop: true,
                    period: 0,
                    scaleSize: 2,
                    color: null,
                    shadowColor: null,
                    shadowBlur: null
                },
                data: [
                    [{
                        name: '',
                        xAxis: '',
                        yAxis: ''
                    },
                        {
                            name: '',
                            xAxis: '',
                            yAxis: ''
                        }
                    ]
                ]
            }
        }]
    }
    myecharts.setOption(option);
}


//center
var datainfoMapLine = [
                 {fromName:"Chengtu",toName:"Hangzhou",coords:[[103.9526,30.7617],[120.19,30.26]]},
                 {fromName:"Kunming",toName:"Hangzhou",coords:[[102.9199,25.4663],[120.19,30.26]]},
                 {fromName:"Beijing",toName:"Chengtu",coords:[[116.4551,40.2539],[103.9526,30.7617]]},
                 {fromName:"Urumqi",toName:"Chengtu",coords:[[87.9236,43.5883],[103.9526,30.7617]]},
                 {fromName:"Harbin",toName:"Chengtu",coords:[[126.63,45.75],[103.9526,30.7617]]},
                 {fromName:"Shanghai",toName:"Urumqi",coords:[[121.4648,31.2891],[87.9236,43.5883]]},
                 {fromName:"Urumqi",toName:"Hangzhou",coords:[[87.9236,43.5883],[120.19,30.26]]},
                 {fromName:"Beijing",toName:"Hangzhou",coords:[[116.4551,40.2539],[120.19,30.26]]},
                 {fromName:"Hangzhou",toName:"Shenyang",coords:[[120.19,30.26],[123.38,41.8]]},
                 {fromName:"Beijing",toName:"Fuzhou",coords:[[116.4551,40.2539],[119.3,26.08]]},

            ]
//center Draw transportation line map
function drawMapLine (className,num) {
	// body... 
	var myecharts=echarts.init(document.getElementsByClassName(className)[num]);
	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
	option = {
		// backgroundColor: '#404a59',
		title : {
			text: 'Logistic Transportation Lines',
			subtext: '',
			left: 'center',
			textStyle : {
				color: '#fff',
                fontSize:30,
                fontFamily:'楷体'
			}
		},
		tooltip : {
			trigger: 'item'
		},
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['Beijing Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'single'
        },
        geo: {
        	map: 'china',
        	label: {
        		
        			show: true,
                    color:'#91c7af',
                    opacity:0.7
        		
        	},
        	roam: true,
        	itemStyle: {
        		normal: {
                    areaColor: 'transparent',
                    borderColor: '#0e94eb',
                    shadowBlur: 10,
                    shadowColor: '#0e94ea'
        			// areaColor: '#323c48',
        			// borderColor: '#404a59'
        		},
        		emphasis: {
        			areaColor: '#2a333d'
        		}
        	}
        },
        series: {
          
        	name: datainfoMapLine.fromName,
        	type: 'lines',
        	zlevel: 2,
        	coordinateSystem: 'geo',
        	symbol: ['none', 'arrow'],
        	symbolSize: 10,
        	effect: {
        		show: true,
        		period: 6,
        		trailLength: 0,
        		symbol: planePath,
        		symbolSize: 15,
        		trailLength: 0.1,
        	},
        	lineStyle: {
        		normal: {
        			color:'#a6c84c',
        			width: 1,
        			opacity: 0.6,
        			curveness: -0.2
        		}
        	},
        	data:datainfoMapLine

          }

    };
        myecharts.setOption(option);
}

//Center Draw Distribution of Logistic map

function drawMapEffect (className,num,cdata) {
     var myecharts=echarts.init(document.getElementsByClassName(className)[num]);
     var geoCoordMap = {
        'Haimen':[121.15,31.89],
        'Erdos':[109.781327,39.608266],
        'Zhaoyuan':[120.38,37.35],
        'Zhoushan':[122.207216,29.985295],
        'Qiqihaer':[123.97,47.33],
        'Yancheng':[120.13,33.38],
        'Chifeng':[118.87,42.28],
        'Qingdao':[120.33,36.07],
        'Ruishan':[121.52,36.89],
        'JinChang':[102.188043,38.520089],
        'Quanzhou':[118.58,24.93],
        'Laixi':[120.53,36.86],
        'Rizhao':[119.46,35.42],
        'Jiaonan':[119.97,35.88],
        'Nantong':[121.05,32.08],
        'Lasa':[91.11,29.97],
        'Yunfu':[112.02,22.93],
        'Meizhou':[116.1,24.55],
        'Wendeng':[122.05,37.2],
        'Shanghai':[121.48,31.22],
        'Panzhihua':[101.718637,26.582347],
        'Weihai':[122.1,37.5],
        'Chengteh':[117.93,40.97],
        'Xiamen':[118.1,24.46],
        'Shanwei':[115.375279,22.786211],
        'chaozhou':[116.63,23.68],
        'dandong':[124.37,40.13],
        'taicang':[121.1,31.45],
        'qujing':[103.79,25.51],
        'yantai':[121.39,37.52],
        'fuzhou':[119.3,26.08],
        'waifangdian':[121.979603,39.627114],
        'jimo':[120.45,36.38],
        'fushun':[123.97,41.97],
        'yuxi':[102.52,24.35],
        'zhangjiakou':[114.87,40.82],
        'yangquan':[113.57,37.85],
        'laizhou':[119.942327,37.177017],
        'huzhou':[120.1,30.86],
        'shantou':[116.69,23.39],
        'kunshan':[120.95,31.39],
        'NingPo':[121.56,29.86],
        'zhanjiang':[110.359377,21.270708],
        'jieyang':[116.35,23.55],
        'rongcheng':[122.41,37.16],
        'lianyungang':[119.16,34.59],
        'huludao':[120.836932,40.711052],
        'changshu':[120.74,31.64],
        'dongguan':[113.75,23.04],
        'heyuan':[114.68,23.73],
        'huaian':[119.15,33.5],
        'taizhou':[119.9,32.49],
        'nanning':[108.33,22.84],
        'yingkou':[122.18,40.65],
        'huizhou':[114.4,23.09],
        'Jiangyin':[120.26,31.91],
        'Penglai':[120.75,37.8],
        'Shaoguan':[113.62,24.84],
        'JiayuguanPass':[98.289152,39.77313],
        'guangzhou':[113.23,23.16],
        'yanan':[109.47,36.6],
        'taiyuan':[112.53,37.87],
        'qingyuan':[113.01,23.7],
        'zhongshan':[113.38,22.52],
        'kunming':[102.73,25.04],
        'shouguang':[118.73,36.86],
        'Panjin':[122.070714,41.119997],
        'changzhi':[113.08,36.18],
        'shenzhen':[114.07,22.62],
        'zhuhai':[113.52,22.3],
        'suqian':[118.3,33.96],
        'xianyang':[108.72,34.36],
        'tongchuan':[109.11,35.09],
        'pingdu':[119.97,36.77],
        'foshan':[113.11,23.05],
        'haikou':[110.35,20.02],
        'jiangmen':[113.06,22.61],
        'zhangqiu':[117.53,36.72],
        'zhaoqing':[112.44,23.05],
        'dalian':[121.62,38.92],
        'Linfen':[111.5,36.08],
        'wujiang':[120.63,31.16],
        'shizuishan':[106.39,39.04],
        'shenyang':[123.38,41.8],
        'suzhou':[120.62,31.32],
        'maoming':[110.88,21.68],
        'jiaxing':[120.76,30.77],
        'changchun':[125.35,43.88],
        'jiaozhou':[120.03336,36.264622],
        'Yinchuan':[106.27,38.47],
        'zhangjiagang':[120.555821,31.875428],
        'Sanmenxia':[111.19,34.76],
        'Jinzhou':[121.15,41.13],
        'nanchang':[115.89,28.68],
        'liuzhou':[109.4,24.33],
        'sanya':[109.511909,18.252847],
        'zigong':[104.778442,29.33903],
        'Jilin':[126.57,43.87],
        'yangjiang':[111.95,21.85],
        'luzhou':[105.39,28.91],
        'xinin':[101.74,36.56],
        'Yibin':[104.56,29.77],
        'Hohehot':[111.65,40.82],
        'Chengtu':[104.06,30.67],
        'datong':[113.3,40.12],
        'Zhenjiang':[119.44,32.2],
        'Guilin':[110.28,25.29],
        'Zhangjiajie':[110.479191,29.117096],
        'Yixing':[119.82,31.36],
        'beihai':[109.12,21.49],
        'xian':[108.95,34.27],
        'jingtan':[119.56,31.74],
        'dongying':[118.49,37.46],
        'Mudan River':[129.58,44.6],
        'Zunyi':[106.9,27.7],
        'Shaoxing':[120.58,30.01],
        'Yangzhou':[119.42,32.39],
        'Changzhou':[119.95,31.79],
        'Weifang':[119.1,36.62],
        'Chongqing':[106.54,29.59],
        'Taizhou':[121.420757,28.656386],
        'Nanjing':[118.78,32.04],
        'Binzhou':[118.03,37.36],
        'Guiyang':[106.71,26.57],
        'Wuxi':[120.29,31.59],
        'Benxi':[123.73,41.3],
        'Kelamayi':[84.77,45.59],
        'Weinan':[109.5,34.52],
        'Maan Mountain':[118.48,31.56],
        'Baoji':[107.15,34.38],
        'Jiaozuo':[113.21,35.24],
        'Jurong':[119.16,31.95],
        'Beijing':[116.46,39.92],
        'Xuzhou':[117.2,34.26],
        'Hengshui':[115.72,37.72],
        'Baotou':[110,40.58],
        'Mianyang':[104.73,31.48],
        'Urumqi':[87.68,43.77],
        'Zaozhuang':[117.57,34.86],
        'Hangzhou':[120.19,30.26],
        'Zibo':[118.05,36.78],
        'Anshan':[122.85,41.12],
        'Liyang':[119.48,31.43],
        'Korla':[86.06,41.68],
        'Anyang':[114.35,36.1],
        'Kaifeng':[114.35,34.79],
        'Jinan':[117,36.65],
        'Deyang':[104.37,31.13],
        'Wenzhou':[120.65,28.01],
        'Jiujiang':[115.97,29.71],
        'Handan':[114.47,36.6],
        'linan':[119.72,30.23],
        'lanzhou':[103.73,36.03],
        'cangzhou':[116.83,38.33],
        'Linyi':[118.35,35.05],
        'Nanchong':[106.110698,30.837793],
        'Tianjin':[117.2,39.13],
        'Fuyang':[119.95,30.07],
        'Taian':[117.13,36.18],
        'Zhuji':[120.23,29.71],
        'Zhengzhou':[113.65,34.76],
        'Harbin':[126.63,45.75],
        'liaocheng':[115.97,36.45],
        'wuhu':[118.38,31.33],
        'tangshan':[118.02,39.63],
        'pingdingshan':[113.29,33.75],
        'Xingtai':[114.48,37.05],
        'dezhou':[116.29,37.45],
        'Jining':[116.59,35.38],
        'Jingzhou':[112.239741,30.335165],
        'Yichang':[111.3,30.7],
        'yiwu':[120.06,29.32],
        'lishui':[119.92,28.45],
        'luoyang':[112.44,34.7],
        'qihuangdao':[119.57,39.95],
        'zhuzhou':[113.16,27.83],
        'shijiazhuang':[114.48,38.03],
        'Laiwu':[117.67,36.19],
        'changde':[111.69,29.05],
        'baoding':[115.48,38.85],
        'xiangtan':[112.91,27.87],
        'Jinhua':[119.64,29.12],
        'Yueyang':[113.09,29.37],
        'Changsha':[113,28.21],
        'Quzhou':[118.88,28.97],
        'Langfang':[116.7,39.53],
        'Heze':[115.480656,35.23375],
        'Hefei':[117.27,31.86],
        'Wuhan':[114.31,30.52],
        'daqing':[125.03,46.58]
    };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length-1; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    myecharts.setOption(option = {
        title : {
            text: 'Distribution of Business Volume',
            subtext: 'Unit: a hundred million',
            left: 'center',
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {},
        legend: {
            left: 'left',
            textStyle: {
                color: '#ccc'
            }
        },
        geo: {
            map: 'china',
            show: true,
            roam: true,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#091632',
                    borderColor: '#1773c3',
                    shadowColor: '#1773c3',
                    shadowBlur: 20
                }
            }
        },
        series: [
            {
                type: 'map',
                map: 'china',
                geoIndex: 1,
                aspectScale: 0.75,
                showLegendSymbol: true,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: '#0f2c70'
                    }
                },
                data:[
                    {name: 'GuangZhou',value: 21300 }
                ]
            },
            {
                name: 'Cities',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(cdata),
                symbolSize: function (val) {
                    for(var a=0;a<val[2].length;a++){
                        if(val[2][a]<=5){
                            return val[2] / 0.5;
                        }else{
                            return val[2] / 1.2;
                        }
                    }

                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(cdata.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 2;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    });
    // myecharts.setOption(option);
}


/*function drawRoseBar () {
    // body... 
    var myecharts = echarts.init(document.getElementsByClassName('settings-box')[0]);
    var fontSize = 10;
var echartData = [{
    value: 4923,
    name: '网络模式'
}, {
    value: 985,
    name: '仓配模式'
}, {
    value: 3515,
    name: '即时模式'
}]
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: fontSize * 2,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#ffc72b",
        fontSize: fontSize * 4,
        align: 'center'
    },
    white: {
        color: "#fff",
        align: 'center',
        fontSize: fontSize * 1.4,
    },
    blue: {
        color: '#49dff0',
        fontSize: fontSize * 1.4,
        align: 'center'
    },
    hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0,
    }
}
option = {
    // backgroundColor: '#001C69',
    title: {
        text: '模式',
        left: 'center',
        top: '41%',
        textStyle: {
            color: '#fff',
            fontSize: fontSize * 2.5,
            align: 'center'
        }
    },
    
    tooltip: {
        trigger: 'item',
        formatter: "{b}<br/>{c} ({d}%)",
        textStyle: {
            fontSize: fontSize * 1.6
        }
    },
    series: [{
        name: 'pie',
        type: 'pie',
        radius: ['42%', '50%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{yellow|' + params.value + '}{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        data: echartData
    }]
};
   myecharts.setOption(option);
}*/

// Dynamic event setting
$('.select').on('blur', function () {
        $(this).find('.select-ul').hide();
    })
$('.select-div').on('click',function (d) {
    if ($(this).siblings('.select-ul').is(":hidden")) {
        $(this).siblings('.select-ul').show();
    } else {
        $(this).siblings('.select-ul').hide();
    }
    // console.log(d);   
})


// left-top total-volume forcasting
    // body... 
    var i=0,j=0,x=10,y=10;
    var time1 = setInterval(function () {
        // body...
        i++;
        $('#num40').html(i);
        // console.log(i);
        if(i>=40){
        clearInterval(time1);
    }
    },50);
    var time2 = setInterval(function () {
        /* body... */
        $('#num60').html(j)
        if(j>=60){
            clearInterval(time2);
        }
    }, 70)
    var time2 = setInterval(function () {
        /* body... */
        j++;
        $('#num60').html(j)
        if(j>=60){
            clearInterval(time2);
        }
    }, 70)
     var time3 = setInterval(function () {
        /* body... */
        x++;
        $('#num1').html(x)
        if(x==99){
            x=10;
        }
    }, 3000)
     var time4 = setInterval(function () {
        /* body... */
        y++;
        $('#num2').html(y)
        if(y==99){
            y=10;
        }
    }, 1500)
    
    


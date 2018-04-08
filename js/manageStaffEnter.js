// $(function () {
//     // 基于准备好的dom，初始化echarts实例
//     // console.log(1);
//     // var obj=$(".btm")
//     // console.log(obj);
//     var myChart = echarts.init(document.getElementsByClassName("btm")[0]);
//     console.log(myChart);
//     // 指定图表的配置项和数据
//     var option = {
//         xAxis: {
//             show:false,
//             type: 'category',
//             boundaryGap:false,
//             data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//         },
//         yAxis: {
//             show:false,
//             type: 'value'
//         },
//         series: [{
//             data: [10, 20, 30, 20, 10, 30, 20],
//             type: 'line',
//             smooth:true,
//             itemStyle: {normal: {areaStyle: {type: 'default'}}},
//             symbolSize:'0'
//         }]
//     };
//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
// })
$(function () {
    var c=document.getElementsByClassName("myCanvas");
    for(var i=0;i<c.length;i++){
        var context=c[i].getContext("2d");
        context.beginPath();     //新建一条路径
        context.moveTo(0,65);
        context.lineTo(30,55);
        context.lineTo(60,35);
        context.lineTo(90,45);
        context.lineTo(120,15);
        context.lineTo(179,55);
        context.lineTo(179,70);
        context.lineTo(0,70);
        context.lineTo(0,65);
        context.fillStyle="pink";
        context.fill();
    }

})

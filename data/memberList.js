 
const data=[
{
    title:"個人基本資料",
    type:"memberData",
    bindErr:"errhandle",
    href:"/home"
  }
  ,
  {
    title:"付款方式設定",
    type:"paymentWay", 
    bindErr:"errhandle",
    href:"/home"

  } 
  ,{
   
    title:"商品與QRcode",
 type:"productQrcode",
    bindErr:"errhandle",
    href:"/home"

  }
  ,
  {
    title:"我的點數",
    type:"mTicket", 
    bindErr:"errhandle",
    href:"/home"

  }

  ,{
    title:"我的最愛",
    type:"mLove",  
    bindErr:"errhandle"
  } ,{
    title:"我的留言",
    type:"mTalk",   
    bindErr:"errhandle"
  }
  ];
   export default {  data };
function fillCanvasWithText(e,t){if(svgCache.innerHTML="",e.length>1){const n=document.getElementById("printedCanvas"),l=n.getContext("2d");l.fillStyle="white",l.fillRect(0,0,n.width,n.height);let i=50,r=20,o=30,g=270,s=30,a=s*o;drawBoxWithText({x:n.width-95,y:n.height-30,text:t,fontSize:14,fontColor:"white",backgroundColor:"black",padding:5,borderRadius:7},l),l.fillStyle="black";for(let t=0,n=0;n<e.length;n++){let f=r+t*o-Math.floor(t/s)*a,x=i+Math.floor(t/s)*g;if(61===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61e3===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61000";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,0,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61001===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61001";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,0,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61010===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61010";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,0,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61011===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61011";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,0,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61100===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61100";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,1,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61101===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61101";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,1,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61110===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61110";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,1,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(61111===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-61111";svgCache.innerHTML+=svgType61cache(e[n][1],e[n][2],i,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62e3===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62000";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,0,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62001===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62001";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,0,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62010===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62010";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,0,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62011===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62011";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,0,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62100===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62100";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,1,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62101===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62101";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,1,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62110===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62110";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,1,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(62111===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-62111";svgCache.innerHTML+=svgType62cache(e[n][1],e[n][2],i,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(71===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-71";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(71e4===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710000";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,0,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710001===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710001";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,0,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710010===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710010";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,0,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710011===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710011";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,0,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710100===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710100";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,1,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710101===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710101";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,1,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710110===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710110";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,1,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(710111===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-710111";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,0,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711e3===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711000";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,0,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711001===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711001";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,0,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711010===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711010";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,0,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711011===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711011";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,0,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711100===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711100";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,1,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711101===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711101";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,1,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711110===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711110";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,1,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(711111===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-711111";svgCache.innerHTML+=svgType71cache(e[n][1],e[n][2],e[n][5],i,1,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(72===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-72";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(72e4===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720000";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,0,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720001===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720001";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,0,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720010===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720010";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,0,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720011===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720011";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,0,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720100===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720100";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,1,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720101===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720101";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,1,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720110===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720110";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,1,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(720111===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-720111";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,0,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721e3===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721000";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,0,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721001===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721001";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,0,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721010===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721010";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,0,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721011===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721011";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,0,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721100===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721100";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,1,0,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721101===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721101";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,1,0,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721110===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721110";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,1,1,0),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else if(721111===e[n][4]){t=changeRowIndex(t,s),l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f+o),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+180,f+o);let i=e[n][1]+"-"+e[n][2]+"-"+e[n][5]+"-721111";svgCache.innerHTML+=svgType72cache(e[n][1],e[n][2],e[n][5],i,1,1,1,1),fillSvgToCanvas(l,document.getElementById(i),.75,x,f)}else switch(l.textAlign="right",l.font="10px Serif",l.letterSpacing="-1px",l.fillText(null==e[n][1]?"":e[n][0].substring(0,3),x-5,f),l.letterSpacing="normal",l.font="26px Serif",l.fillText(null==e[n][1]?"":e[n][1],x+45,f),0!=e[n][4]&&(l.font="16px Serif",l.fillText(null==e[n][2]?"":"x",x+60,f),l.font="26px Serif",l.textAlign="left",l.fillText(null==e[n][2]?"":e[n][2],x+68,f)),l.font="22px Serif",l.textAlign="center",l.fillText(null==e[n][3]?"":e[n][3],x+125,f),l.textAlign="center",l.font="30px Serif",null==e[n][4]?"1":e[n][4]){case 3:case 31:fillImgToCanvas(l,genTypeOfHappouDiv_case_31,.4,x+180,f);break;case 32:fillImgToCanvas(l,genTypeOfHappouDiv_case_32,.4,x+180,f);break;case 4:fillImgToCanvas(l,genTypeOfHappouDiv_case_4,.4,x+180,f);break;case 85:fillImgToCanvas(l,genTypeOfHappouDiv_case_85,.4,x+180,f)}t++}l.fillStyle="grey",l.lineWidth=.1,l.beginPath(),l.moveTo(g-10,0),l.lineTo(g-10,n.height),l.stroke(),l.beginPath(),l.moveTo(2*g-10,0),l.lineTo(2*g-10,n.height),l.stroke(),l.beginPath(),l.moveTo(3*g-10,0),l.lineTo(3*g-10,n.height),l.stroke(),l.beginPath(),l.moveTo(4*g-10,0),l.lineTo(4*g-10,n.height),l.stroke()}}function drawBoxWithText(e,t){t.save();var n=e.x||0,l=e.y||0,i=e.text||"",r=e.fontSize||18,o=e.fontColor||"white",g=e.backgroundColor||"black",s=e.padding||2,a=e.borderRadius||5;t.font=r+"px sans-serif";var f=t.measureText(i),x=f.width+2*s,c=r+2*s;t.fillStyle=g,t.beginPath(),t.moveTo(n+a,l),t.lineTo(n+x-a,l),t.arcTo(n+x,l,n+x,l+a,a),t.lineTo(n+x,l+c-a),t.arcTo(n+x,l+c,n+x-a,l+c,a),t.lineTo(n+a,l+c),t.arcTo(n,l+c,n,l+c-a,a),t.lineTo(n,l+a),t.arcTo(n,l,n+a,l,a),t.closePath(),t.fill(),t.fillStyle=o,t.textAlign="left",t.textBaseline="top",t.fillText(i,n+s,l+s),t.restore()}function fillImgToCanvas(e,t,n,l,i){const r=new Image;r.src=t,r.onload=(()=>{let t=r.width*n,o=r.height*n;e.drawImage(r,l-10,i-15,t,o)})}function fillSvgToCanvas(e,t,n,l,i){var r=new Image,o=(new XMLSerializer).serializeToString(t),g=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),s=URL.createObjectURL(g);r.onload=function(){let t=r.width*n,o=r.height*n;e.drawImage(r,l+5,i-20,t,o),URL.revokeObjectURL(s)},r.src=s}function changeRowIndex(e,t){return e+=2,e}function svgType61cache(e,t,n,l,i,r){var o="crimson",g="crimson",s="crimson",a=3,f=3,x=3;l||(o="black",a=1),i||(g="black",f=1),r||(s="black",x=1);var c,d=Math.hypot(e,t).toFixed(0),h=Math.acos(e/d)*(180/Math.PI).toFixed(0);if(100*e/t<210){let l=10+100*e/t,i=10+100*e/t/2;c=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${n}">\n    <line x1="10" y1="110" x2="${l}" y2="110" stroke="${o}" stroke-width="${a}" stroke-linecap="round"/>\n    <line x1="10" y1="110" x2="10" y2="10" stroke="${g}" stroke-width="${f}" stroke-linecap="round"/>\n    <line x1="10" y1="10" x2="${l}" y2="110" stroke="${s}" stroke-width="${x}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${n+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" x="${i}" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(${i-5}, 60) rotate(${h})" stroke="black" font-size="20px" >${d}</text>\n  </svg>`}else{let l=100-t*(200/e),i=105-t*(200/e)/2;c=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${n}">\n    <line x1="10" y1="110" x2="210" y2="110" stroke="${o}" stroke-width="${a}" stroke-linecap="round"/>\n    <line x1="10" y1="110" x2="10" y2="${l}" stroke="${g}" stroke-width="${f}" stroke-linecap="round"/>\n    <line x1="10" y1="${l}" x2="210" y2="110" stroke="${s}" stroke-width="${x}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${n+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(10, ${i}) rotate(90)" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" x="110" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(105, ${i}) rotate(${h})" stroke="black" font-size="20px" >${d}</text>\n  </svg>`}return c}function svgType62cache(e,t,n,l,i,r){var o="crimson",g="crimson",s="crimson",a=3,f=3,x=3;l||(o="black",a=1),i||(g="black",f=1),r||(s="black",x=1);var c,d=Math.hypot(e,t).toFixed(0),h=360-Math.acos(e/d)*(180/Math.PI).toFixed(0);if(100*e/t<210){let l=10+100*e/t,i=10+100*e/t/2;c=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${n}">\n    <line x1="10" y1="110" x2="${l}" y2="110" stroke="${o}" stroke-width="${a}" stroke-linecap="round"/>\n    <line x1="${l}" y1="110" x2="${l}" y2="10" stroke="${g}" stroke-width="${f}" stroke-linecap="round"/>\n    <line x1="10" y1="110" x2="${l}" y2="10" stroke="${s}" stroke-width="${x}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${n+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(${l}, 60) rotate(270)" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" x="${i}" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(${i+5}, 60) rotate(${h})" stroke="black" font-size="20px" >${d}</text>\n  </svg>`}else{let l=100-t*(200/e),i=105-t*(200/e)/2;c=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${n}">\n    <line x1="10" y1="110" x2="210" y2="110" stroke="${o}" stroke-width="${a}" stroke-linecap="round"/>\n    <line x1="210" y1="110" x2="210" y2="${l}" stroke="${g}" stroke-width="${f}" stroke-linecap="round"/>\n    <line x1="210" y1="${l}" x2="10" y2="110" stroke="${s}" stroke-width="${x}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${n+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(210, ${i}) rotate(270)" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" x="110" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${n+"-filter"})" transform="translate(115, ${i}) rotate(${h})" stroke="black" font-size="20px" >${d}</text>\n  </svg>`}return c}function svgType71cache(e,t,n,l,i,r,o,g){var s="crimson",a="crimson",f="crimson",x="crimson",c=3,d=3,h=3,p=3;i||(s="black",c=1),r||(a="black",d=1),g||(f="black",h=1),o||(x="black",p=1);var u,T=Math.hypot(e-t,n).toFixed(0),v=Math.asin(n/T)*(180/Math.PI).toFixed(0);if(100*e/n<210){let i=10+100*e/n,r=10+100*e/n/2,o=10+100*t/n,g=10+100*t/n/2,m=100*(e-(e-t)/2)/n+7;u=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${l}">\n    <line x1="10" y1="110" x2="${i}" y2="110" stroke="${s}" stroke-width="${c}" stroke-linecap="round"/>\n    <line x1="10" y1="110" x2="10" y2="10" stroke="${x}" stroke-width="${p}" stroke-linecap="round"/>\n    <line x1="10" y1="10" x2="${o}" y2="10" stroke="${a}" stroke-width="${d}" stroke-linecap="round"/>\n    <line x1="${o}" y1="10" x2="${i}" y2="110" stroke="${f}" stroke-width="${h}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${l+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(10, 60) rotate(90)" stroke="black" font-size="20px" >${n}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="${r}" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="${g}" y="10" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(${m}, 60) rotate(${v})" stroke="black" font-size="20px" >${T}</text>\n  </svg>`}else{
let i=100-n*(200/e),r=105-n*(200/e)/2,o=10+t/e*200,g=7+t*(200/e)/2,m=200*(e-(e-t)/2)/e+7;u=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${l}">\n    <line x1="10" y1="110" x2="210" y2="110" stroke="${s}" stroke-width="${c}" stroke-linecap="round"/>\n    <line x1="10" y1="110" x2="10" y2="${i}" stroke="${x}" stroke-width="${p}" stroke-linecap="round"/>\n    <line x1="10" y1="${i}" x2="${o}" y2="${i}" stroke="${a}" stroke-width="${d}" stroke-linecap="round"/>\n    <line x1="${o}" y1="${i}" x2="210" y2="110" stroke="${f}" stroke-width="${h}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${l+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(10, ${r}) rotate(90)" stroke="black" font-size="20px" >${n}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="113" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="${g}" y="${i}" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(${m}, ${r}) rotate(${v})" stroke="black" font-size="20px" >${T}</text>\n  </svg>`}return u}function svgType72cache(e,t,n,l,i,r,o,g){var s="crimson",a="crimson",f="crimson",x="crimson",c=3,d=3,h=3,p=3;i||(s="black",c=1),r||(a="black",d=1),g||(f="black",h=1),o||(x="black",p=1);var u,T=Math.hypot(e-t,n).toFixed(0),v=360-Math.asin(n/T)*(180/Math.PI).toFixed(0);if(100*e/n<210){let i=10+100*e/n,r=10+100*e/n/2,o=10+100*t/n,g=10+100*t/n/2,m=i-100*(e-(e-t)/2)/n;u=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${l}">\n    <line x1="10" y1="110" x2="${i}" y2="110" stroke="${s}" stroke-width="${c}" stroke-linecap="round"/>\n    <line x1="${i}" y1="110" x2="${i}" y2="10" stroke="${x}" stroke-width="${p}" stroke-linecap="round"/>\n    <line x1="${i}" y1="10" x2="${i-o+10}" y2="10" stroke="${a}" stroke-width="${d}" stroke-linecap="round"/>\n    <line x1="${i-o+10}" y1="10" x2="10" y2="110" stroke="${f}" stroke-width="${h}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${l+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(${i}, 60) rotate(270)" stroke="black" font-size="20px" >${n}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="${r}" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="${i-g+10}" y="10" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(${m}, 60) rotate(${v})" stroke="black" font-size="20px" >${T}</text>\n  </svg>`}else{let i=100-n*(200/e),r=105-n*(200/e)/2,o=10+t/e*200,g=213-t*(200/e)/2,m=213-200*(e-(e-t)/2)/e;u=`\n  <svg width="220" height="120" xmlns="http://www.w3.org/2000/svg" version="1.1" id="${l}">\n    <line x1="10" y1="110" x2="210" y2="110" stroke="${s}" stroke-width="${c}" stroke-linecap="round"/>\n    <line x1="210" y1="110" x2="210" y2="${i}" stroke="${x}" stroke-width="${p}" stroke-linecap="round"/>\n    <line x1="210" y1="${i}" x2="${220-o}" y2="${i}" stroke="${a}" stroke-width="${d}" stroke-linecap="round"/>\n    <line x1="${220-o}" y1="${i}" x2="10" y2="110" stroke="${f}" stroke-width="${h}" stroke-linecap="round"/>\n    <defs>\n      <filter x="0" y="0.2" width="1" height="0.6" id="${l+"-filter"}">\n        <feFlood flood-color="white" result="bg" />\n        <feMerge>\n          <feMergeNode in="bg" />\n          <feMergeNode in="SourceGraphic" />\n        </feMerge>\n      </filter>\n    </defs>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(210, ${r}) rotate(270)" stroke="black" font-size="20px" >${n}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="107" y="110" stroke="black" font-size="20px" >${e}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" x="${g}" y="${i}" stroke="black" font-size="20px" >${t}</text>\n    <text text-anchor="middle" alignment-baseline="middle" filter="url(#${l+"-filter"})" transform="translate(${m}, ${r}) rotate(${v})" stroke="black" font-size="20px" >${T}</text>\n  </svg>`}return u}function sortMergeArray(e,t,n,l,i,r){e.sort(function(e,r){return e[t]<r[t]?-1:e[t]>r[t]?1:e[n]<r[n]?-1:e[n]>r[n]?1:e[l]<r[l]?-1:e[l]>r[l]?1:e[i]<r[i]?-1:e[i]>r[i]?1:void 0});const o=[],g=new Map;return e.forEach(e=>{const o=[e[t],e[n],e[l],e[i]].toString();g.has(o)?g.get(o)[r]+=e[r]:g.set(o,[...e])}),g.forEach(e=>{o.push(e)}),o}function bindTextToArray(e){var t=[],n=[],l=[],i=[],r=[],o=[],g=[],s=[],a=[],f=[],x=e.value.trim().split("\n");let c="-";for(let e of x)if(""===e.trim());else if(/[a-zA-Z\-]/.test(e))c=e.split("-")[0].substring(0,3).toUpperCase();else{const f=e.trim().split(" ").map(e=>parseInt(e,10));switch(f.length){case 1:f.push(f[0],1,2);break;case 2:f.push(1,2);break;case 3:f.push(2)}"61"==f[3].toString().substring(0,2)||"62"==f[3].toString().substring(0,2)?g.push([c,...f]):"71"==f[3].toString().substring(0,2)||"72"==f[3].toString().substring(0,2)?s.push([c,...f]):0==f[3]?a.push(["ⵁ",...f]):f[1]<=99?t.push([c,...f]):f[0]>=100&&f[0]<=599?n.push([c,...f]):f[0]>=600&&f[0]<=899?f[1]<=299?l.push([c,...f]):i.push([c,...f]):f[0]>=900&&f[0]<=999?r.push([c,...f]):o.push([c,...f])}return f=sortMergeArray(t,2,1,4,0,3).concat([["-"]],sortMergeArray(i,1,2,4,0,3),sortMergeArray(o,1,2,4,0,3),[["-"]],sortMergeArray(l,1,2,4,0,3),sortMergeArray(r,1,2,4,0,3),[["-"]],sortMergeArray(n,1,2,4,0,3),[["-"]],sortMergeArray(g,1,2,4,0,3),sortMergeArray(s,1,2,4,0,3),[["-"]],sortMergeArray(a,1,2,4,0,3)),f}document.getElementById("print-btn").addEventListener("click",()=>{const e=document.getElementById("printedCanvas"),t=e.toDataURL("image/png");var n=window.open("","Gary Oldman without an r","width=400,height=400");n.document.write('<img src="'+t+'" alt="Canvas Image">'),n.document.close()});var svgCache=document.getElementById("svg-canvas-cache");
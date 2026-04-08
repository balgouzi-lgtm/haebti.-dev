/* === حاسبتي المالية — Shared JS === */
function fmt(n){return new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(n)}
function fI(n){return new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(Math.round(n))}
function show(id){document.getElementById(id).style.display='block'}
function hide(id){document.getElementById(id).style.display='none'}
function V(id){return +(document.getElementById(id).value)||0}
var defR={USD:1,SAR:3.75,EUR:0.92,GBP:0.79,AED:3.67,KWD:0.31,EGP:50.5,TRY:36.2};
var lR=null;
async function loadR(){
  try{
    var res=await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json');
    var d=await res.json();
    if(d&&d.usd){lR={USD:1,SAR:d.usd.sar,EUR:d.usd.eur,GBP:d.usd.gbp,AED:d.usd.aed,KWD:d.usd.kwd,EGP:d.usd.egp,TRY:d.usd.try}}
  }catch(e){}
}
function gRt(){return lR||defR}
function openSidebar(){
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('open');
}
function closeSidebar(){
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('open');
}
document.addEventListener('DOMContentLoaded',function(){
  var path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.sidebar-item').forEach(function(el){
    if(el.getAttribute('href')===path)el.classList.add('active');
  });
});

/* ===== Chapter 5: the Keepers' armoury ===== */
var ARMF=false;
/* Keepers' plate for Judy, Dan and Mr. Rocket (Chapter 5, after the armoury) */
var ARMEMB={shield:["xxxxx","xyyyx","xyxyx","xyyyx",".xyx.","..x.."],star:["..x..",".xxx.","xxxxx",".xxx.",".x.x."],gear:[".x.x.","xxxxx","xx.xx","xxxxx",".x.x."]};
function armF(px,py,d,sit,a){var p=a.p,h=a.h,k=a.k;
  R(px+8,py+13,16,11,p);R(px+8,py+13,16,1,h);R(px+8,py+21,16,1,k);
  R(px+3,py+12,7,4,p);R(px+22,py+12,7,4,p);R(px+3,py+12,7,1,h);R(px+22,py+12,7,1,h);R(px+3,py+15,7,1,k);R(px+22,py+15,7,1,k);
  R(px+5,py+19,4,3,p);R(px+23,py+19,4,3,p);R(px+5,py+19,4,1,h);R(px+23,py+19,4,1,h);
  if(d!==0){R(px+13,py+14,6,8,a.t);var m=ARMEMB[a.e];for(var j=0;j<m.length;j++)for(var i=0;i<5;i++){var q=m[j][i];if(q==="x")R(px+14+i,py+15+j,1,1,a.c);else if(q==="y")R(px+14+i,py+15+j,1,1,a.c2||a.c)}}
  else R(px+15,py+14,2,8,k);
  R(px+8,py+22,16,2,"#4a3020");if(d!==0)R(px+15,py+22,2,2,"#ffd34d");
  if(!sit){R(px+10,py+26,5,4,p);R(px+17,py+26,5,4,p);R(px+10,py+26,5,1,h);R(px+17,py+26,5,1,h)}}

/* the scene after the rally *//* ---- after the rally: Ralph and the Keepers' armoury ---- */
function vaultBack(){R(0,0,320,108,"#2a2530");for(var y=0;y<108;y+=12)for(var x=(y/12)%2?0:16;x<320;x+=32){R(x,y,31,11,"#332d3a");R(x,y,31,1,"#3e3846")}
  R(0,104,320,6,"#1a1620");
  [40,280].forEach(function(x){R(x-2,58,4,10,"#6a4a2a");var fl=Math.sin(time*9+x)*1.5;R(x-3,50+fl,6,8,"#ffb347");R(x-1,48+fl,2,4,"#fff1b0");glowC(x,54,46,"rgba(255,190,110,1)",.35+Math.sin(time*7+x)*.05)});
  cx.save();cx.globalAlpha=.55+Math.sin(time*1.7)*.15;cx.font="9px serif";cx.textAlign="center";cx.fillStyle="#b99bff";cx.fillText("ᚲ ᛖ ᛖ ᛈ   ᛏ ᚺ ᛖ   ᛚ ᛁ ᚷ ᚺ ᛏ",160,28);cx.restore();
  [["judy",100],["dan",160],["rocket",220]].forEach(function(q){var x=q[1],y=152;R(x-1,y-44,2,44,"#6a4a2a");R(x-12,y-38,24,2,"#6a4a2a");R(x-9,y-2,18,3,"#4a3020");R(x-7,y+4,14,5,"#7a6a52");R(x-6,y+5,12,1,"#b99bff88");
    if(!ARMF){var a=VSPEC[q[0]].arm;armF(x-16,y-29,2,false,a);glowC(x,y-12,22,"rgba(220,230,255,1)",.12)}})}
async function armoury(){
  await seq([["Ralph","Before you go in. All of you. Come with me. It will take one minute, and I do not think it can wait."],["Ralph","Under the back steps of the shrine there is a door. I have swept past it for forty years and I have never once liked it. The handle is cold in August. The air smells of rain when it has not rained."],["Ralph","Hesper's grandmother gave me the key when I was a boy. She said, keep it, and hope you never need it. I think she knew which night it would be."]]);
  await fadeOut();
  cut({map:"vault",theme:"vault",party:["doodi","danoya","judy","dan","rocket"],pos:[[160,300],[140,306],[180,306],[118,312],[202,312]],place:"The Keepers' Armoury",dark:.2,npcs:[NP("bram",262,262,3,1)],back:vaultBack});
  G.hs.forEach(function(h){h.d=0});
  await fadeIn();
  await seq([["","Under the shrine, a long stone room. Three stands. Three suits of armour. Dust on everything except the plates. The plates are clean."],["Ralph","I have never polished them. I would like that noted."],["Mr. Rocket","(very quietly) Look at the rivets. Nobody rivets like this anymore. Nobody rivets like this at all."],["Ralph","There is writing on the stands. I could never read it."],["Danoya","(reading, slowly) For the ones who walk in beside the Keeper's light. So that they walk back out."],["Doodi","Three stands. Three of you."],["Judy","The one with the shield on the chest is mine. Don't argue."],["Dan","Why is this one purple? Why is it exactly my size? I am not okay with how well this fits."],["Ralph","The Keepers built for the ones who would come after. It seems they knew one of you would be nervous."],["Dan","That is so specific."],["Mr. Rocket","Bronze, orange trim, a gear on the chest. Whoever made this knew me four hundred years before I was born, and I would like a word with them."]]);
  var J=HR("judy"),Dn=HR("dan"),Rk=HR("rocket");
  await Promise.all([walk(J,100,176,900),walk(Dn,160,176,900),walk(Rk,220,176,900)]);
  [J,Dn,Rk].forEach(function(h){h.d=0});await beat(700);
  G.flash=.7;G.shake=.15;sfx5("open");ARMF=true;ARMOR=true;[J,Dn,Rk].forEach(function(h){puff(h.x,h.y-14,"#e8f2fa");G.fx.push({k:"ring",x:h.x,y:h.y-14,r:4,mx:40,t:.6,c:"#d8e4ff"})});
  await beat(900);[J,Dn,Rk].forEach(function(h){h.d=2});await beat(500);
  await Promise.all([walk(J,180,306,800),walk(Dn,118,312,800),walk(Rk,202,312,800)]);G.hs.forEach(function(h){h.d=2});
  await seq([["Danoya","(buckling on the armour Judy and Dan made her) There. Now we all match."],["Judy","(rolling her shoulders) Okay. Now I'm rude and armoured."],["Danoya","You look like you were born in it."],["Dan","I can't feel my legs. Is that the armour or the fear?"],["Doodi","Both. Mostly the fear. Same as me."],["Mr. Rocket","It's light. It shouldn't be this light. I'm going to have so many questions afterwards."],["Ralph","Forty years I did not like this room. I think it was only waiting for the right people to be nervous in it."],["Mr. Rocket","Ralph. That was poetry."],["Ralph","I tend graves and gardens. It is the same job with different flowers. Go on. Read the stand again on your way out, and do what it says."]]);
}

/* the defence boost: while the plate is on, one hit in four is turned aside */
function hurtHero(n,sx,sy){var done=false;
  var l=lead();if(l&&l.inv>0)return;
  if(ARMF&&l&&Math.random()<.25){G.hs.forEach(function(h){h.inv=Math.max(h.inv,.5)});G.fx.push({k:"ring",x:l.x,y:l.y-14,r:4,mx:28,t:.35,c:"#e8f2fa"});sfx5("hit");return}G.hs.forEach(function(h){h.inv=Math.max(h.inv,.9)});
  G.hp=Math.max(0,G.hp-n);G.flash=.3;G.shake=.2;sfx5("hurt");}

/*
    MIT License
*/
!function(u){function D(b){for(var c=b.length;c--;)b[c]=("0000000"+(b[c]>>>0).toString(16)).slice(-8);return b.join("")}function E(b){b=unescape(encodeURIComponent(b));for(var c=b.length,a=0,d=[];a<c;)d[a>>2]=b.charCodeAt(a++)<<24|b.charCodeAt(a++)<<16|b.charCodeAt(a++)<<8|b.charCodeAt(a++);d.len=c;return d}function q(b,c,a,d){var e=0,g=[],l=[];for(c=64<c.length?b(c,1):E(c);16>e;)g[e]=c[e]^909522486,l[e]=c[e++]^1549556828;"string"==typeof a?(a=E(a),c=a.len):c=4*a.length;e=b(l.concat(b(g.concat(a),
1,64+c)),1);return d?e:D(e)}function G(){function b(a){return 4294967296*(a-(a>>>0))|0}var c=0,a=2,d;a:for(;64>c;a++){for(d=2;d*d<=a;d++)if(0===a%d)continue a;8>c&&(m[c]=b(Math.pow(a,.5)));F[c++]=b(Math.pow(a,1/3))}}var n=u.crypto||(u.crypto={});n.hmac=function(b,c,a){return q(n[b],c,a)};n.pbkdf2=n.pbkdf2Sync=function(b,c,a,d,e,g){"function"==typeof e&&(g=e,e="sha1");e=n[e]||n.sha1;a=a||1E3;var l,p,m,h,k,f=[],s=d>>2||5;for(k=1;f.length<s;k++){l=p=q(e,b,c+String.fromCharCode(k>>24&15,k>>16&15,k>>8&
15,k&15),1);for(m=a;--m;)for(p=q(e,b,p,1),h=p.length;h--;)l[h]^=p[h];f.push.apply(f,l)}f=D(f).slice(0,2*d||40);if(g)g(null,f);else return f};var m=[],F=[];n.sha256=function(b,c,a){m[0]||G();var d,e,g,l,p,n,h,k,f,s=0,r=[],v=m[0],w=m[1],x=m[2],y=m[3],z=m[4],A=m[5],B=m[6],C=m[7],q;"string"==typeof b?(b=E(b),a=b.len):a=a||b.length<<2;b[a>>2]|=128<<24-(31&(a<<=3));b[(a+64>>9<<4)+15]=a;q=b;for(var u=q.length,H=F;s<u;){a=v;b=w;d=x;e=y;g=z;l=A;p=B;n=C;for(f=0;64>f;)16>f?r[f]=q[s+f]:(h=r[f-2],k=r[f-15],r[f]=
(h>>>17^h<<15^h>>>19^h<<13^h>>>10)+(r[f-7]|0)+(k>>>7^k<<25^k>>>18^k<<14^k>>>3)+(r[f-16]|0)),h=(r[f]|0)+n+(g>>>6^g<<26^g>>>11^g<<21^g>>>25^g<<7)+(g&l^~g&p)+H[f],k=(a>>>2^a<<30^a>>>13^a<<19^a>>>22^a<<10)+(a&b^a&d^b&d),n=p,p=l,l=g,g=e+h>>>0,e=d,d=b,b=a,a=h+k>>>0,f++;v+=a;w+=b;x+=d;y+=e;z+=g;A+=l;B+=p;C+=n;s+=16}t=[v,w,x,y,z,A,B,C];return c?t:D(t)}}(this);

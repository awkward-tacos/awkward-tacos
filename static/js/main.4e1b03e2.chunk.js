(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{131:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(1),c=n.n(r),a=n(4),i=n(32),o=n(66),s=new i.d.PublicKey("cndyAnrLdpjq1Ssp1z8xxDsB8dxe7u4HL5Nxi2K5WXZ"),u=new i.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),b=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,o,s,u,b,f=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>3&&void 0!==f[3]?f[3]:"recent",o=f.length>4&&void 0!==f[4]&&f[4],s=!1,u={slot:0,confirmations:0,err:null},b=0,e.next=7,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(f,d){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{b=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),f(u))}),i)}catch(l){s=!0,console.error("WS error in setup",t,l)}case 2:if(s||!o){e.next=8;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,f(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,x(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[b]&&r.removeSignatureListener(b),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),d=function(t,n,r,c){var a=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:i.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:i.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new i.d.TransactionInstruction({keys:a,programId:u,data:e.from([])})},l=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,o,u,b,f,d,l,p,m;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new i.b(r,t,{preflightCommitment:"recent"}),e.next=3,i.a.fetchIdl(s,a);case 3:return o=e.sent,u=new i.a(o,s,a),b={id:n,connection:r,program:u},e.next=8,u.account.candyMachine.fetch(n);case 8:return f=e.sent,d=f.data.itemsAvailable.toNumber(),l=f.itemsRedeemed.toNumber(),p=d-l,m=f.data.goLiveDate.toNumber(),m=new Date(1e3*m),console.log({itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m}),e.abrupt("return",{candyMachine:b,itemsAvailable:d,itemsRedeemed:l,itemsRemaining:p,goLiveDate:m});case 16:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer(),e.from("edition")],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),b.toBuffer(),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.d.PublicKey.findProgramAddress([t.toBuffer(),o.b.toBuffer(),n.toBuffer()],u);case 2:return e.abrupt("return",e.sent[0]);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r,a){var s,u,f,l,O,g,x;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.d.Keypair.generate(),e.next=3,j(r,s.publicKey);case 3:return u=e.sent,f=t.connection,l=t.program,e.next=7,m(s.publicKey);case 7:return O=e.sent,e.next=10,p(s.publicKey);case 10:return g=e.sent,e.next=13,f.getMinimumBalanceForRentExemption(o.a.span);case 13:return x=e.sent,e.next=16,l.rpc.mintNft({accounts:{config:n,candyMachine:t.id,payer:r,wallet:a,mint:s.publicKey,metadata:O,masterEdition:g,mintAuthority:r,updateAuthority:r,tokenMetadataProgram:b,tokenProgram:o.b,systemProgram:i.d.SystemProgram.programId,rent:i.d.SYSVAR_RENT_PUBKEY,clock:i.d.SYSVAR_CLOCK_PUBKEY},signers:[s],instructions:[i.d.SystemProgram.createAccount({fromPubkey:r,newAccountPubkey:s.publicKey,space:o.a.span,lamports:x,programId:o.b}),o.c.createInitMintInstruction(o.b,s.publicKey,0,r,r),d(u,r,r,s.publicKey),o.c.createMintToInstruction(o.b,s.publicKey,u,r,[],1)]});case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return"".concat(e.slice(0,t),"...").concat(e.slice(-t))},x=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(6).Buffer)},362:function(e,t,n){},363:function(e,t,n){},366:function(e,t){},368:function(e,t){},375:function(e,t){},390:function(e,t){},391:function(e,t){},416:function(e,t){},417:function(e,t){},424:function(e,t){},425:function(e,t){},483:function(e,t){},485:function(e,t){},499:function(e,t){},503:function(e,t){},505:function(e,t){},515:function(e,t){},517:function(e,t){},548:function(e,t){},550:function(e,t){},557:function(e,t){},558:function(e,t){},583:function(e,t){},584:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o=n(2),s=n.n(o),u=n(28),b=n.n(u),f=(n(362),n(363),n(10)),d=n(1),l=n.n(d),p=n(4),m=n(13),j=n(130),O=n(132),g=n(321),x=n(611),y=n(616),v=n(620),h=n(619),S=n(37),w=n(53),k=n(170),P=n(131),L=n(35),K=Object(O.a)(k.a)(r||(r=Object(j.a)([""]))),R=O.a.span(c||(c=Object(j.a)([""]))),T=O.a.div(a||(a=Object(j.a)([""]))),M=Object(O.a)(x.a)(i||(i=Object(j.a)([""]))),A=function(e){var t=e.days,n=e.hours,r=e.minutes,c=e.seconds;e.completed;return Object(L.jsxs)(R,{children:[n+24*(t||0)," hours, ",r," minutes, ",c," seconds"]})},B=function(e){var t=Object(o.useState)(),n=Object(m.a)(t,2),r=n[0],c=n[1],a=Object(o.useState)(!1),i=Object(m.a)(a,2),s=i[0],u=i[1],b=Object(o.useState)(!1),d=Object(m.a)(b,2),j=d[0],O=d[1],x=Object(o.useState)(!1),k=Object(m.a)(x,2),R=k[0],B=k[1],E=Object(o.useState)(0),I=Object(m.a)(E,2),W=(I[0],I[1]),C=Object(o.useState)(0),N=Object(m.a)(C,2),D=(N[0],N[1]),_=Object(o.useState)(0),Y=Object(m.a)(_,2),U=(Y[0],Y[1]),F=Object(o.useState)({open:!1,message:"",severity:void 0}),J=Object(m.a)(F,2),q=J[0],V=J[1],H=Object(o.useState)(new Date(e.startDate)),Z=Object(m.a)(H,2),G=Z[0],X=Z[1],z=Object(w.c)(),Q=Object(o.useState)(),$=Object(m.a)(Q,2),ee=$[0],te=$[1],ne=function(){Object(p.a)(l.a.mark((function t(){var n,r,c,a,i,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(z){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(P.b)(z,e.candyMachineId,e.connection);case 4:n=t.sent,r=n.candyMachine,c=n.goLiveDate,a=n.itemsAvailable,i=n.itemsRemaining,o=n.itemsRedeemed,W(a),U(i),D(o),O(0===i),X(c),te(r);case 16:case"end":return t.stop()}}),t)})))()},re=function(){var t=Object(p.a)(l.a.mark((function t(){var n,r,a,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,B(!0),!z||!(null===ee||void 0===ee?void 0:ee.program)){t.next=10;break}return t.next=5,Object(P.c)(ee,e.config,z.publicKey,e.treasury);case 5:return n=t.sent,t.next=8,Object(P.a)(n,e.txTimeout,e.connection,"singleGossip",!1);case 8:(null===(r=t.sent)||void 0===r?void 0:r.err)?V({open:!0,message:"Mint failed! Please try again!",severity:"error"}):V({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"});case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),a=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(a="SOLD OUT!",O(!0)):312===t.t0.code&&(a="Minting period hasn't started yet."):t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?a="SOLD OUT!":t.t0.message.indexOf("0x135")&&(a="Insufficient funds to mint. Please fund your wallet.")),V({open:!0,message:a,severity:"error"});case 17:if(t.prev=17,!z){t.next=23;break}return t.next=21,e.connection.getBalance(z.publicKey);case 21:i=t.sent,c(i/S.LAMPORTS_PER_SOL);case 23:return B(!1),ne(),t.finish(17);case 26:case"end":return t.stop()}}),t,null,[[0,12,17,26]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){Object(p.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!z){t.next=5;break}return t.next=3,e.connection.getBalance(z.publicKey);case 3:n=t.sent,c(n/S.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[z,e.connection]),Object(o.useEffect)(ne,[z,e.candyMachineId,e.connection]),Object(L.jsxs)("main",{className:"u-border-3 u-border-custom-color-sol u-custom-font u-none u-text-active-custom-color-4 u-text-custom-color-4",children:[z&&Object(L.jsxs)("p",{children:["Wallet ",Object(P.d)(z.publicKey.toBase58()||"")]}),z&&Object(L.jsxs)("p",{children:["Balance: ",(r||0).toLocaleString()," SOL"]}),z&&Object(L.jsx)("p",{children:"Total Available: 5000"}),z&&Object(L.jsx)("p",{children:"Price: 0.5 SOL"}),Object(L.jsx)(T,{children:z?Object(L.jsx)(M,{disabled:j||R||!s,onClick:re,variant:"contained",children:j?"SOLD OUT":s?R?Object(L.jsx)(y.a,{}):"MINT":Object(L.jsx)(g.a,{date:G,onMount:function(e){return e.completed&&u(!0)},onComplete:function(){return u(!0)},renderer:A})}):Object(L.jsx)(K,{className:"u-btn u-button-style",children:"Connect Wallet"})}),Object(L.jsx)(v.a,{open:q.open,autoHideDuration:6e3,onClose:function(){return V(Object(f.a)(Object(f.a)({},q),{},{open:!1}))},children:Object(L.jsx)(h.a,{onClose:function(){return V(Object(f.a)(Object(f.a)({},q),{},{open:!1}))},severity:q.severity,children:q.message})})]})},E=n(32),I=n(114),W=n(349),C=n(617),N=new E.d.PublicKey("EuLFxBNijEhfj7UPtGxb1qJXZmpd2yxHQQjxrLgdrdNV"),D=new E.d.PublicKey("8KS73sAwDHYrP8NpLLze7WXcqYdY4LwtZbxfdhNnj43B"),_=new E.d.PublicKey("AkhL94Wyu9jZM9wreJSg1TaWeCKF2JsgjeNSVJXjwLe3"),Y="mainnet-beta",U=new E.d.Connection("https://explorer-api.mainnet-beta.solana.com"),F=parseInt("1637424000000",10),J=Object(W.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),q=function(){var e=Object(o.useMemo)((function(){return Object(S.clusterApiUrl)(Y)}),[]),t=Object(o.useMemo)((function(){return[Object(I.a)(),Object(I.b)(),Object(I.c)(),Object(I.e)({network:Y}),Object(I.d)({network:Y})]}),[]);return Object(L.jsx)(C.a,{theme:J,children:Object(L.jsx)(w.a,{endpoint:e,children:Object(L.jsx)(w.b,{wallets:t,autoConnect:!0,children:Object(L.jsx)(k.b,{children:Object(L.jsx)(B,{candyMachineId:_,config:D,connection:U,startDate:F,treasury:N,txTimeout:3e4})})})})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,621)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};b.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsx)(q,{})}),document.getElementById("root")),V()}},[[584,1,2]]]);
//# sourceMappingURL=main.4e1b03e2.chunk.js.map
const CONFIG={whatsappNumber:"5564992455576",orderWebhookUrl:"https://rancho-minduim-api.fernandochafariz2019.chatgpt.site/api/orders"};
const categories=[
["espetos","Espetos","Acompanhamento: mandioca, molho vermelho e vinagrete."],
["jantas","Jantas Completas","Jantinha servida com arroz, feijão tropeiro, mandioca, molho de tomate, vinagrete e molhos verde/alho."],
["espetoes","Espetões Grandes","Serve 4 pessoas. O completo acompanha arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete."],
["porcoes","Porções Completas",""],["premium","Pratos Premium",""],["caldos","Caldos",""],
["lanches","Lanches Minduim","Molhos: ketchup, maionese, barbecue, mostarda e mel, maionese de alho e maionese verde."],
["bebidas","Bebidas Diversas",""],
["sucos","Sucos & Cremes","Sucos naturais preparados na hora e cremes de frutas."]
].map(([id,name,note])=>({id,name,note}));

const raw=[
["espetos","Asinha de Frango — Só Espeto","Espetinho de asinha de frango.",13],["espetos","Asinha de Frango — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",15.9],
["espetos","Contra Filé — Só Espeto","Espetinho de contra filé.",15],["espetos","Contra Filé — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",17.9],
["espetos","Coração de Frango — Só Espeto","Espetinho de coração de frango.",13],["espetos","Coração de Frango — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",15.9],
["espetos","Cupim — Só Espeto","Espetinho de cupim.",20],["espetos","Cupim — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",22.9],
["espetos","Frango c/ Bacon — Só Espeto","Espetinho de frango com bacon.",13],["espetos","Frango c/ Bacon — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",15.9],
["espetos","Lombo Suíno — Só Espeto","Espetinho de lombo de porco.",15],["espetos","Lombo Suíno — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",17.9],
["espetos","Picanha — Só Espeto","Espetinho de picanha.",30],["espetos","Picanha — Com Acompanhamento","Mandioca, molho vermelho e vinagrete.",32.9],
["espetos","Queijo Coalho — Só Espeto","Queijo Coalho da Canastra assado na brasa.",13],["espetos","Queijo Coalho — Com Mel","Queijo Coalho da Canastra passado no mel.",14.9],
["espetos","Queijo Provolone — Só Espeto","Queijo provolone derretido na brasa.",13],["espetos","Queijo Provolone — Com Mel","Espeto de Provolone, passado no mel.",14.9],
["espetos","Pão de Alho","Pão de alho preparado na brasa.",11.9],
["jantas","Janta Dupla","Arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete. Serve 2 pessoas. Espeto à parte.",29.9],
["jantas","Janta Individual c/ Espetinho","Arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete. Espeto à escolha.",29.9],
["jantas","Janta Individual com Picanha","Espeto de picanha, arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete. Servida no prato.",34.9],
["jantas","Janta Econômica Frango","1/2 janta acompanhada de espetinho de frango com bacon.",19.9],
["jantas","Janta Econômica Contrafilé/Cupim","1/2 janta acompanhada de espetinho de contrafilé ou cupim.",24.9],
["espetoes","Picanha Grande — Só Espeto","Espetão grande. Serve 4 pessoas.",130],["espetoes","Picanha Grande — Completo","Arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete. Serve 4 pessoas.",149.9],
["espetoes","Fraldinha Grande — Só Espeto","Espetão grande. Serve 4 pessoas.",120],["espetoes","Fraldinha Grande — Completo","Arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete. Serve 4 pessoas.",144.9],
["espetoes","Cupim Grande — Só Espeto","Espetão grande. Serve 4 pessoas.",100],["espetoes","Cupim Grande — Completo","Arroz, feijão tropeiro, mandioca, molho vermelho e vinagrete. Serve 4 pessoas.",124.9],
["porcoes","Batatas Fritas Palito","400g de batatas palito crocantes, sal a gosto e ketchup. Serve 2 pessoas.",29.9],
["porcoes","Batatas Palito Especial","400g de batatas crocantes, queijo cheddar, bacon, ketchup e sal a gosto. Serve 2 pessoas.",39.9],
["porcoes","Ceviche de Tilápia","400g de tilápia em cubos, limão, cebola roxa, pepino japonês, tomate cereja e pimentões. Serve 2 pessoas.",59.9],
["porcoes","Coraçãozinho Acebolado","400g de coração de frango acebolado, tomate cereja e alface decorativa. Serve 2 pessoas.",34.9],
["porcoes","Filé com Fritas","400g de filé bovino em tiras com muçarela derretida, batatas fritas e molho verde. Serve 2 pessoas.",64.9],
["porcoes","Filé Tilápia","400g de tilápia empanada em iscas, alface decorativa e molho de alho. Serve 2 pessoas.",59.9],
["porcoes","Fígado Bovino Acebolado","400g de fígado acebolado, tomate saladete, alface decorativa e molho verde. Serve 2 pessoas.",39.9],
["porcoes","Frango a Passarinho","400g de frango a passarinho, tomate cereja, alface decorativa e molho verde. Serve 2 pessoas.",39.9],
["porcoes","Almôndegas com Mandioca","400g de almôndegas fritas com mandioca cozida e molho verde. Serve 2 pessoas.",34.9],
["porcoes","Mandioca Frita","400g de mandioca frita na hora com molho verde da casa. Serve 2 pessoas.",22.9],
["porcoes","Tábuas de Frios","Muçarela, presunto, palmito, azeitona, tomate cereja, limão, azeite e molho verde. Serve 2 pessoas.",49.9],
["porcoes","Taça de Legumes","Pepino e cenoura preparados com tempero caseiro, servidos na taça. Serve 2 pessoas.",24.9],
["porcoes","Torresminho com Mandioca","Porção de torresminho com mandioca. Serve 2 pessoas.",19.9],
["premium","Parmegiana de Tilápia — Individual","Arroz, filé de tilápia empanada, molho vermelho, queijo derretido e batatas fritas.",39.9],
["premium","Parmegiana de Tilápia — Duplo 500g","Arroz, filé de tilápia empanada, molho vermelho, queijo derretido e batatas fritas.",74.9],
["premium","Parmegiana de Carne — Individual","Arroz, bife bovino empanado, molho vermelho, queijo derretido e batatas fritas.",34.9],
["premium","Parmegiana de Carne — Duplo 500g","Arroz, bife bovino empanado, molho vermelho, queijo derretido e batatas fritas.",69.9],
["premium","Parmegiana de Frango — Individual","Arroz, filé de frango empanado, molho vermelho, queijo derretido e batatas fritas.",29.9],
["premium","Parmegiana de Frango — Duplo 500g","Arroz, filé de frango empanado, molho vermelho, queijo derretido e batatas fritas.",54.9],
["premium","Strogonoff de Tilápia","150g de filé de tilápia, creme de leite premium, azeitona, palmito, arroz, batata palha e salada.",39.9],
["premium","Strogonoff de Carne","150g de carne bovina, creme de leite premium, azeitona, palmito, arroz, batata palha e salada.",34.9],
["premium","Strogonoff de Frango","150g de carne, creme de leite premium, azeitona, palmito, arroz, batata palha e salada.",29.9],
["premium","Bife à Cavalo","Bife bovino, ovo, arroz, feijão caldo e salada.",29.9],
["premium","Omelete de Carne Seca","Omelete com 4 ovos, costela bovina desfiada, presunto, muçarela e salada.",29.9],
["premium","Omelete de Frango Desfiado","Omelete com 4 ovos, peito de frango desfiado, presunto, muçarela e salada.",24.9],
["premium","Omelete Simples","Omelete com 4 ovos, presunto, muçarela e salada.",19.9],
["caldos","Caldo de Frango","Cliente se serve. Torradas, torresmo pururuca, muçarela em cubinhos e cebolinha.",20],
["caldos","Caldo de Feijão","Cliente se serve. Torradas, torresmo pururuca, muçarela em cubinhos e cebolinha.",20],
["caldos","Caldo de Costela","Cliente se serve. Torradas, torresmo pururuca, muçarela em cubinhos e cebolinha.",20],
["caldos","Caldo de Mocotó","Cliente se serve. Torradas, torresmo pururuca, muçarela em cubinhos e cebolinha.",20],
["caldos","Caldo de Dobradinha","Cliente se serve. Torradas, torresmo pururuca, muçarela em cubinhos e cebolinha.",20],
["lanches","SubMinduim Baguete","Baguete 30cm, 200g de carne bovina ou frango, muçarela, tomate, alface e molhos à escolha.",19.9],
["lanches","SubMinduim Francês","Pão francês, 100g de carne bovina ou frango, muçarela, tomate, alface e molhos à escolha.",9.9],
["lanches","Minduim Burguer","Pão de hambúrguer, 150g de hambúrguer bovino, muçarela, tomate e alface.",21.9],
["bebidas","Soda Italiana","Água com gás e xarope de morango, maçã verde ou groselha.",14.9],
["bebidas","Água com Gás","Unidade.",6],["bebidas","Água Mineral sem Gás","Unidade.",5],["bebidas","Água Tônica Lata","Lata.",7],
["bebidas","Limoneto H2O 1,5L","Garrafa 1,5L.",12],["bebidas","Limoneto H2O 500ml","Garrafa 500ml.",8],["bebidas","Monster 473ml","Lata 473ml.",12],["bebidas","Red Bull 250ml","Lata 250ml.",15],
["bebidas","Refrigerante 1L","Garrafa 1L.",12],["bebidas","Refrigerante 2L","Garrafa 2L.",15],["bebidas","Refrigerante 600ml","Garrafa 600ml.",10],["bebidas","Refrigerante KS","Garrafa KS.",5],["bebidas","Refrigerante Lata","Lata.",6],["bebidas","Suco Kapo","Unidade.",5],
["bebidas","Copo com Gelo / Limão ou Laranja","Copo preparado com gelo e limão ou laranja.",1],
["sucos","Suco de Laranja Natural — 500ml","Suco de laranja natural preparado na hora.",11.9],
["sucos","Suco de Laranja Natural — 1L","Suco de laranja natural preparado na hora.",19.9],
["sucos","Suco de Limão Natural — 500ml","Suco de limão natural preparado na hora.",11.9],
["sucos","Suco de Limão Natural — 1L","Suco de limão natural preparado na hora.",19.9],
["sucos","Suco de Polpa — 500ml","Escolha entre morango, maracujá, uva ou abacaxi.",11.9],
["sucos","Suco de Polpa — 1L","Escolha entre morango, maracujá, uva ou abacaxi.",19.9],
["sucos","Creme — 500ml","Escolha entre morango, maracujá, uva ou abacaxi.",14.9]
];
const products=raw.map((x,i)=>({id:"p"+i,category:x[0],name:x[1],description:x[2],price:x[3],adultOnly:Boolean(x[4])}));
const state={cart:JSON.parse(localStorage.getItem("rancho_cart")||"{}"),currentCategory:categories[0].id,lastWhatsAppUrl:""};
const money=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const totalQuantity=()=>Object.values(state.cart).reduce((s,q)=>s+q,0);
const totalValue=()=>Object.entries(state.cart).reduce((s,[id,q])=>{const p=products.find(x=>x.id===id);return s+(p?p.price*q:0)},0);
function saveCart(){localStorage.setItem("rancho_cart",JSON.stringify(state.cart));updateCartDock()}
function renderCategories(){const n=document.getElementById("category-bar");n.innerHTML=categories.map(c=>`<button class="category-chip ${c.id===state.currentCategory?"active":""}" data-category="${c.id}" type="button">${c.name}</button>`).join("");n.addEventListener("click",e=>{const b=e.target.closest("[data-category]");if(!b)return;state.currentCategory=b.dataset.category;document.querySelectorAll(".category-chip").forEach(x=>x.classList.toggle("active",x===b));document.getElementById(state.currentCategory).scrollIntoView({behavior:"smooth",block:"start"})})}
function renderProducts(){const root=document.getElementById("products-root");root.innerHTML=categories.map(c=>{const items=products.filter(p=>p.category===c.id);return `<section class="category-section" id="${c.id}"><div class="category-heading"><h2>${c.name}</h2><span>${items.length} opções</span></div>${c.note?`<p class="category-description">${c.note}</p>`:""}<div class="product-grid">${items.map(p=>`<article class="product-card"><img class="product-image" src="assets/products/${p.id}.webp" alt="${p.name}" loading="lazy" width="640" height="640"><h3>${p.name}</h3><p>${p.description}</p><div class="product-bottom"><strong class="product-price">${money(p.price)}</strong><button class="add-button" type="button" data-add="${p.id}">Adicionar</button></div></article>`).join("")}</div></section>`}).join("");root.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(!b)return;state.cart[b.dataset.add]=(state.cart[b.dataset.add]||0)+1;saveCart();showToast()})}
function updateCartDock(){const q=totalQuantity();document.getElementById("cart-button-label").textContent=`Ver Pedido (${q} ${q===1?"item":"itens"})`;document.getElementById("cart-button-total").textContent=money(totalValue())}
function showToast(){const t=document.getElementById("toast");t.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove("show"),1800)}
function showScreen(id){document.querySelectorAll(".screen").forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"instant"})}
function renderCart(){const entries=Object.entries(state.cart).filter(([,q])=>q>0),box=document.getElementById("cart-items"),q=totalQuantity();document.getElementById("cart-count-badge").textContent=`${q} ${q===1?"item":"itens"}`;document.getElementById("order-total").textContent=money(totalValue());document.getElementById("confirm-order").disabled=!entries.length;if(!entries.length){box.innerHTML='<div class="empty-cart"><strong>Seu pedido está vazio.</strong><br>Volte ao cardápio e escolha seus itens.</div>';return}box.innerHTML=entries.map(([id,n])=>{const p=products.find(x=>x.id===id);return `<article class="cart-item"><div><h3>${p.name}</h3><div class="cart-item-price">${money(p.price*n)}</div></div><div class="quantity-control"><button class="${n===1?"remove":""}" type="button" data-decrease="${id}" aria-label="${n===1?"Remover":"Diminuir"} ${p.name}">${n===1?"×":"−"}</button><span>${n}</span><button type="button" data-increase="${id}" aria-label="Aumentar ${p.name}">+</button></div></article>`}).join("")}
function changeQuantity(id,a){const n=(state.cart[id]||0)+a;if(n<=0)delete state.cart[id];else state.cart[id]=n;saveCart();renderCart()}
function createOrderNumber(){const n=Number(localStorage.getItem("rancho_order_sequence")||"41")+1;localStorage.setItem("rancho_order_sequence",String(n));return "#"+String(n).padStart(4,"0")}
function buildOrder(f){const e=f.elements,pickup=e.pickup.checked;return{dateTime:new Date().toLocaleString("pt-BR"),orderNumber:createOrderNumber(),name:e.name.value.trim(),phone:e.phone.value.trim(),pickup,address:pickup?"Retirada no balcão":e.address.value.trim(),paymentMethod:e.payment.value,items:Object.entries(state.cart).map(([id,q])=>{const p=products.find(x=>x.id===id);return{id,name:p.name,quantity:q,unitPrice:p.price,subtotal:p.price*q}}),total:totalValue(),note:e.note.value.trim()}}
function buildMessage(o){const lines=o.items.map(i=>`• ${i.quantity}x ${i.name} — ${money(i.subtotal)}`).join("\n"),payments={pix:"Pix",dinheiro:"Dinheiro",cartao:"Cartão"};return [`*NOVO PEDIDO ${o.orderNumber}*`,`Data: ${o.dateTime}`,"",`*Cliente:* ${o.name}`,`*Telefone:* ${o.phone}`,`*Tipo:* ${o.pickup?"Retirada no balcão":"Entrega"}`,o.pickup?"":`*Endereço:* ${o.address}`,`*Pagamento:* ${payments[o.paymentMethod]||o.paymentMethod}`,"","*ITENS*",lines,"",`*TOTAL: ${money(o.total)}*`,o.note?`*Observação:* ${o.note}`:"*Observação:* Nenhuma"].filter(Boolean).join("\n")}
async function saveOrder(o){if(!CONFIG.orderWebhookUrl)return{synced:false,error:"Serviço de pedidos indisponível."};try{const r=await fetch(CONFIG.orderWebhookUrl,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});const data=await r.json().catch(()=>({}));if(!r.ok)return{synced:false,error:data.error||"Não foi possível registrar o pedido."};o.orderNumber=data.orderNumber||o.orderNumber;o.dateTime=data.receivedAt?new Date(data.receivedAt).toLocaleString("pt-BR"):o.dateTime;const saved=JSON.parse(localStorage.getItem("rancho_orders")||"[]");saved.push(o);localStorage.setItem("rancho_orders",JSON.stringify(saved));return{synced:true,orderNumber:o.orderNumber}}catch{return{synced:false,error:"Sem conexão com o serviço de pedidos. Tente novamente."}}}
document.getElementById("open-cart").addEventListener("click",()=>{renderCart();showScreen("cart-screen")});
document.getElementById("back-to-menu").addEventListener("click",()=>showScreen("menu-screen"));document.getElementById("back-to-menu-bottom").addEventListener("click",()=>showScreen("menu-screen"));
document.getElementById("cart-items").addEventListener("click",e=>{const a=e.target.closest("[data-increase]"),d=e.target.closest("[data-decrease]");if(a)changeQuantity(a.dataset.increase,1);if(d)changeQuantity(d.dataset.decrease,-1)});
document.getElementById("customer-phone").addEventListener("input",e=>{const d=e.target.value.replace(/\D/g,"").slice(0,11);e.target.value=(d.length<=10?d.replace(/(\d{2})(\d{0,4})(\d{0,4})/,"($1) $2-$3"):d.replace(/(\d{2})(\d{0,5})(\d{0,4})/,"($1) $2-$3")).replace(/-$/,"")});
function updateFulfillment(){const pickup=document.getElementById("pickup-order"),address=document.getElementById("customer-address"),label=document.getElementById("address-label");address.required=!pickup.checked;address.disabled=pickup.checked;if(pickup.checked)address.value="";label.classList.toggle("address-disabled",pickup.checked)}
document.getElementById("pickup-order").addEventListener("change",updateFulfillment);
document.getElementById("customer-form").addEventListener("submit",async e=>{e.preventDefault();if(!totalQuantity())return;const f=e.currentTarget;if(!f.reportValidity())return;const b=document.getElementById("confirm-order"),status=document.getElementById("form-status");status.classList.remove("show");status.textContent="";b.disabled=true;b.textContent="Confirmando...";const o=buildOrder(f),result=await saveOrder(o);if(!result.synced){status.textContent=result.error;status.classList.add("show");b.disabled=false;b.textContent="Confirmar Pedido";return}const url=`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(buildMessage(o))}`;document.getElementById("confirmed-order-number").textContent=o.orderNumber;document.getElementById("whatsapp-link").href=url;showScreen("confirmation-screen");window.open(url,"_blank","noopener,noreferrer");b.disabled=false;b.textContent="Confirmar Pedido"});
document.getElementById("new-order").addEventListener("click",()=>{state.cart={};saveCart();document.getElementById("customer-form").reset();updateFulfillment();showScreen("menu-screen")});
renderCategories();renderProducts();updateCartDock();

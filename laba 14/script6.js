let link = document.getElementById("myLink");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

button1.addEventListener("click", function() {
link.setAttribute("href", "https://yandex.by");
});

button2.addEventListener("click", handleButtonClick);

function handleButtonClick() {
link.setAttribute("href", "https://www.21vek.by/special_offers/promo.html?utm_source=opera&utm_medium=browser&utm_campaign=desktop");
}

button3.addEventListener("click", () => {
link.setAttribute("href", "https://aliexpress.ru/?af=739_630324&cn=2urus7wzrijg17evq0u1adpo9wutrc1l&cv=3&cv_source=default&dp=2urus7wzrijg17evq0u1adpo9wutrc1l&sub=630324&sub1=1068989&utm_campaign=630324&utm_content=1068989&utm_medium=cpa&utm_source=admitad&aff_fcid=1890f0b7a5d9455199b0f9cb8f4fa977-1706349582620-03218-_DD3gNJp&aff_fsk=_DD3gNJp&aff_platform=api-new-link-generate&sk=_DD3gNJp&aff_trace_key=1890f0b7a5d9455199b0f9cb8f4fa977-1706349582620-03218-_DD3gNJp&terminal_id=d69ef24db60441999c69547b13ecff7a");
});
function startStudy(){

const topic =
document.getElementById("topic").value;

const data =
knowledgeBase[topic];

document.getElementById("content").innerHTML = `
<h2>${data.title}</h2>

<pre style="
white-space:pre-wrap;
font-size:16px;
line-height:1.6;
">
${data.summary}
</pre>
`;

}

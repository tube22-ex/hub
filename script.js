const siteData = [
    {
        Name : 'TYTUBE',
        URL : 'https://tube22-ex.github.io/startScreen/',
        other : "たいつべ風サイト"
    },
    {
        Name : 'BITyping',
        URL : 'https://tube22-ex.github.io/biTyping/',
        other : "10進数直して打つだけ"
    },
    {
        Name : 'StyleEditer',
        URL : 'https://tube22-ex.github.io/lyrics_style_editer/',
        other : 'たいつべ用エディター'
    },
    {
        Name : '画面共有',
        URL : 'https://tube22-ex.github.io/webRTC/',
        other : '画面共有ツール'
    },
    {
        Name : 'numTyping',
        URL : 'https://tube22-ex.github.io/num_typing/',
        other : '数字タイピングサイト'
    },
    {
        Name : 'onelook検索',
        URL : 'https://tube22-ex.github.io/',
        other : 'onelookAPI検索'
    },
    {
        Name : '簡易録画ツール',
        URL : 'https://tube22-ex.github.io/RECtool/',
        other : 'サクッと録画'
    },
    {
        Name : 'xKUN-xxx',
        URL : 'https://tube22-ex.github.io/xKUN-xxx/',
        other : '3桁の数字を打て！'
    }
]
const contents = document.getElementById('contents');
siteData.forEach((d)=>{
    contents.insertAdjacentHTML('beforeend',`
    <div class="item">
        <a href='${d["URL"]}'><span class="NameText">${d["Name"]}</span></a>
        <p>${d["other"]}</p>
    </div>
    `)
})
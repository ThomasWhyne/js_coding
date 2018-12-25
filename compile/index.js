const html=`
    <view>
        <text>{{username}}</text>
    </view>`;
let reg=/\{\{(.*)\}\}/gm;
//console.log(reg.test(html),RegExp.$1);
let username='唐唐';
function compile(html){
    let obj={};
    obj[RegExp.$1]=username;
    return (reg.test(html))
        ?html.replace(reg,obj[RegExp.$1.toString()])
        :false
}

const compiledHTML=compile(html);
console.log(compiledHTML);
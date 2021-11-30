document.getElementById("text").onclick = function(){
    document.getElementById("output-box").style.bottom = "100%"
}
document.getElementById("text").onchange = function(event){
    document.getElementById("output-text").setAttribute("name", event.target.value)
}
document.getElementById("btn").addEventListener("click",function(){
    let name= document.getElementById("output-text").getAttribute("name")
    document.getElementById("text").value=""
    select = Math.floor(Math.random() * 3 )
    switch(select){
        case 0: document.getElementById("output-text").innerText='Gọi '+ name +' là cây xăng vì lúc nào nhìn thấy '+ name +' anh cũng muốn đổ.'
            break;
        case 1: document.getElementById("output-text").innerText="Hey "+ name +'. Nếu chúng ta cùng đóng Táo Quân, thì anh sẽ là Nam Tào còn '+ name +' sẽ là Co Dau nhé.'
            break;
        case 2: document.getElementById("output-text").innerText="Hey "+ name +'. Nếu có 2 con cua, 1 to và 1 nhỏ. Tớ là con cua nhỏ còn cau la cua to.'
            break;
    }
    document.getElementById("output-box").style.bottom = "calc( 100% - 40px )"
})


//                                            AJUSTAR ALTURA DINAMICAMENTE DEL TEXTAREA

function ajustarAltura(ele) { // El (ele) es el <textarea>
    // ele.style.height = "auto"; //No necesito esta linea porque ya le di auto en css
    ele.style.height = (ele.scrollHeight) + "px";
}


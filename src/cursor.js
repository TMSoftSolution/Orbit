//Custom cursor to follow cursor
export function cursor() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY-5)+"px; left: "+(e.pageX-5)+"px;")
    })
}
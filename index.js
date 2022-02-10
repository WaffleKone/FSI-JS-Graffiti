let header = document.querySelector('#page-header')
let doggos = document.querySelectorAll('.dog-image')
let doggonames = document.querySelectorAll('.dog-name')
let doggodesc = document.querySelectorAll('.dog-description')
let footer = document.querySelector('.footer')
// Select some elements...
header.style.textAlign = 'left'
for (let i=0; i<doggos.length; i++) {
    doggos[i].style.borderRadius = '50px'
    doggos[i].style.transform = 'rotate(189deg)'
}
footer.style.color = 'orange'
for (let i=0; i<doggonames.length; i++) {
    doggonames[i].style.textAlign = 'left'
}
for (let i=0; i<doggodesc.length; i++) {
    doggodesc[i].style.textAlign = right
}
function showSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='flex'
    const ham=document.querySelector('.ham')
    ham.style.display='none'

 }

 function hideSidebar(){
    const sidebar=document.querySelector('.sidebar')
    sidebar.style.display='none'
    const ham=document.querySelector('.ham')
    ham.style.display='flex'

 }
const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('mouseover',()=>{
        removePanelClasses()
        panel.classList.add('active')
    })
})

const removePanelClasses = ()=>{
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}

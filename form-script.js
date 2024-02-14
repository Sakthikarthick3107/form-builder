let textBtn = document.getElementById('createText');

textBtn.addEventListener('click' ,()=>{
    let p = document.createElement('input');
    let inputParameter = document.getElementById('inputParameter').value;
    if(inputParameter){
        p.type = 'text';
        p.placeholder = inputParameter;

        let rowFields = document.createElement('div');
        rowFields.className = 'row-fields'
        rowFields.appendChild(p);
        let label = document.createElement('label');
        label.innerHTML = inputParameter;

        let container = document.createElement('div');
        container.className = 'input-container';
        container.appendChild(label);
        container.appendChild(rowFields)
        document.getElementById('form').appendChild(container);
    }
    else{
        alert('Provide a label name for your new textfield')
    }
    
})
let textBtn = document.getElementById('createText');

textBtn.addEventListener('click' ,()=>{
    let p = document.createElement('input');
    p.type = 'text';
    p.placeholder = 'Placeholder';

    let rowFields = document.createElement('div');
    rowFields.className = 'row-fields'
    rowFields.appendChild(p);
    let label = document.createElement('label');
    label.innerHTML = 'TextInput';

    let container = document.createElement('div');
    container.className = 'input-container';
    container.appendChild(label);
    container.appendChild(rowFields)
    document.getElementById('form').appendChild(container);
})
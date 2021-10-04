
    let addButton = document.querySelector("#add");
    let addInput = document.querySelector("#item");

    addButton.addEventListener("click", function() {
        let newItem = addInput.value;
        if (newItem) {
            addItemTodo(newItem);        
            addInput.value = "";
        }
    });

    // user press enter 

    addInput.addEventListener("keypress", function(e) {
        if (13 === e.keyCode) {
            let newItem = document.getElementById("item").value;
            if (newItem) {
                addItemTodo(newItem);
                document.getElementById("item").value = "";
            }
        }
    });

    function addItemTodo(text) {
        let list = document.getElementById("todo");
        let item = document.createElement('li');
        item.innerText = text;
        item.classList.add('flex', 'justify-between','bg-secondary','rounded-xl','px-4','py-1','mb-1' , 'text-primary');

        let buttons = document.createElement('div');
        buttons.classList.add('buttons','inline');

        let remove = document.createElement('button');
        remove.classList.add('remove','fa','fa-trash-o','p-2');
        remove.addEventListener("click", removeItem);

        let complete = document.createElement('button');
        complete.classList.add('complete','fa','fa-check');
        complete.addEventListener("click", completeItem);

        /************ * append *******************/
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        item.appendChild(buttons);
        list.insertBefore(item, list.childNodes[0]); 
    }

    function completeItem() {
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        let id = parent.id;
        let target = (id === "todo") ? document.getElementById("completed") : document.getElementById("todo");

        parent.removeChild(item);
        item.classList.toggle('line-through');
        target.insertBefore(item, target.childNodes[0]);
    }

    function removeItem() {
        let item = this.parentNode.parentNode;
        let parent = item.parentNode;
        parent.removeChild(item);
    }

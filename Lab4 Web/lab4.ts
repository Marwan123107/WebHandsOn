let tasks: string[] = []; 


    const button = document.getElementById("add") as HTMLButtonElement;


    button.addEventListener("click", () => {
        const textInput = document.getElementById("input") as HTMLInputElement;
        
            tasks.push(textInput.value);
            render();
            
        
    });
    


function render() {
    const div = document.getElementById("tasks")  as HTMLDivElement; 
    
    const p = document.createElement("p");
    p.textContent = tasks[tasks.length - 1];
    div.appendChild(p);

}
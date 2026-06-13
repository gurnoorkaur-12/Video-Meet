export function triggerToast(toastTrigger,msg){
    const toast = document.getElementById('toast-message');
    const messages = document.querySelectorAll('.toast-body');

    if(messages.length > 0) {
        messages.forEach((ele)=>ele.remove());
    }
    
    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toast)
        const div = document.createElement("div");
        div.className = "toast-body";
        div.textContent = msg;
        toast.appendChild(div);
        toastBootstrap.show();
    }
}


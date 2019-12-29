function doSomething(){
    console.log(`Screen: (${event.screenX}, ${event.screenY}),
    page: (${event.pageX}, ${event.pageY}), 
    client: (${event.clientX}, ${event.clientY})`);
}

addEventListener('click', doSomething);
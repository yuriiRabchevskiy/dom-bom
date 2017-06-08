var onClick = function (e) {
    var $el = e.target;
    e.stopPropagation();

    $el.style.backgroundColor = 'yellow';
    alert('CLICK!' + ' ' + $el.id + '\n' + 'The event.stopPropagation() method stops the bubbling of an' + 
        ' event to parent elements, preventing any parent event handlers from being executed.');
    $el.style.backgroundColor = 'yellow';
}
var div = document.getElementsByTagName('div');
for (var i = 0; i < div.length; i++) {
    var element = div[i];
    element.onclick = onClick;
}
var body =  function (e) {
    var el = e.target;
    e.preventDefault();
    alert('This event has be stopped preventDefault()\n' + 
        'The preventDefault() method cancels the event if it is cancelable, meaning that the default action ' + 
        'that belongs to the event will not occur.')
    el.style.backgroundColor = 'black';
};
document.body.onclick = body;
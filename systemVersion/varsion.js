var navigatorMessageMap = {
    'mac': 'macos',
    'iphone': 'macos',
    'win': 'windows',
    'linux': 'linux'
};

var platform = navigator.platform.toLowerCase();

for (var key in navigatorMessageMap) {
    key = key.toLowerCase();
    var version = navigatorMessageMap[key];

    if (platform.indexOf(key) >= 0) {
        var div = document.getElementsByClassName('download-message');
        for (var i = 0; i < div.length; i++) {
            var element = div[i];
            if (element.getAttribute('data-version') == version) {
                element.style.display = "block";
            }
        }

    }
}
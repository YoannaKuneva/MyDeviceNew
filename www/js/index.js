document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    window.addEventListener("batterystatus", onBatteryStatus, false);
    applyDeviceData();
}

function applyDeviceData() {
    $("#cordovaVersion").text(device.cordova);
    $("#manufacturer").text(device.manufacturer);
    $("#isVirtual").text(device.isVirtual);
    $("#deviceModel").text(device.model);

    $("#operatingSystem").text(device.platform);
    $("#osVersion").text(device.version);
    $("#uuid").text(device.uuid);
    $("#serial").text(device.serial);
}

function onBatteryStatus(status) {
    $("#batteryStatus").text(status.level);
    $("#isPlugged").text(status.isPlugged);
}
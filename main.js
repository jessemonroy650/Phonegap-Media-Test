    var my_media = null;
    var mediaTimer = null;
    //
    function onSuccess() {
        document.getElementById('status').textContent = "found file";
		return;
    };
    function onError(e) {
        alert('err.code:' + e.code + '\nerr.message:' + e.message)
		return;
    };
    //
    function onDeviceReady() {
        var audioFile = "fanfare3.ogg";

        document.getElementById('status').textContent = "onDeviceReady";

        // Get rid of 300ms delay 
        document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);

        // Android get the audio file given a FQFN (Fully Qualified File Name)
        // https://www.npmjs.com/package/cordova-plugin-file#android-file-system-layout
        //document.getElementById('status').textContent = cordova.file.applicationDirectory;
        document.getElementById('status').textContent = audioFile;

        //return;
        
        // Check for the file. 
        // https://www.raymondcamden.com/2014/07/01/Cordova-Sample-Check-for-a-file-and-download-if-it-isnt-there/
        window.resolveLocalFileSystemURL(audioFile, onSuccess, onError);
        document.getElementById('status').textContent = "Found file";

        // Don't do much with this right now. Just play it.
        my_media = new Media(audioFile, onSuccess, onError);
        document.getElementById('status').textContent = "audio loaded -> " + audioFile;

        // The 'numberOfLoops' is iOS only.
        my_media.play();
        document.getElementById('status').textContent = "audio playing -> " + audioFile;
    }
    // Wait for PhoneGap to load
    document.addEventListener("deviceready", onDeviceReady, false);
    document.getElementById('status').textContent = "init js block loaded";

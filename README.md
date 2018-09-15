# phonegap-media-test
A base test of phonegap's Media plugin

.ogg and .wav sounds included in package

* .ogg is for Android
* .wav is for iOS

As of the time of this demo, Android requires the filepath to be absolute. With Phonegap Build, the root of the path is `/android_asset/www/`

For iOS, the path is relative to the root. For example, if your root is */www* and the "audioFile" is in that directory, then the javascript function call looks like this: 
`my_media = new Media("audioFile", onSuccess, onError);`




const androidVersion =  parseInt(Ti.Platform.version);
let currentFile;

// This condition is required to avoid security and permission issues
if (androidVersion < 6) {
	currentFile = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "photo.jpg");
} else {
	currentFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, "photo.jpg");
}

console.info("CameraTest", `Android version: ${Ti.Platform.version} (${androidVersion})`);

function doClick(e) {
	androidTakePhoto();
}

function androidTakePhoto() {
	const photoCaptureIntent = Ti.Android.createIntent({
			action: 'android.media.action.IMAGE_CAPTURE'
	});

	photoCaptureIntent.addFlags(Titanium.Android.FLAG_GRANT_WRITE_URI_PERMISSION);
	photoCaptureIntent.putExtraUri('output', currentFile.resolve());


	$.index.getActivity().startActivityForResult(photoCaptureIntent, (_result) => {
			console.info("CameraTest", 'Android takePicture', _result);

			if (_result.resultCode == Titanium.Android.RESULT_OK) {
				console.info("CameraTest", ' file created succesfully in ' + currentFile.nativePath);
				$.preview.image = null;
				$.preview.image = currentFile.nativePath;
			}

	});
}


$.preview.image = currentFile.nativePath;

$.index.open();

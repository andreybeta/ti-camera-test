function doClick(e) {
	androidTakePhoto();
}

function androidTakePhoto() {
	const photoCaptureIntent = Ti.Android.createIntent({
			action: 'android.media.action.IMAGE_CAPTURE'
	});
	const currentFile2 = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "photo.jpg");
	//const currentFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, "photo.jpg");
	photoCaptureIntent.addFlags(Titanium.Android.FLAG_GRANT_WRITE_URI_PERMISSION);
	photoCaptureIntent.putExtraUri('output', currentFile2.resolve());

	// if (currentFile.createFile()){
	// 	console.info("CameraTest", ' file created succesfully in ' + currentFile.nativePath);
	// } else {
	// 	console.warn("CameraTest", 'Could not create image file before taking photo');
	// }

	//Ti.App.Properties.setBool('waiting_picture', true);

	$.index.getActivity().startActivityForResult(photoCaptureIntent, (_result) => {
			console.info("CameraTest", 'Android takePicture', _result);
			console.info("CameraTest", 'Titanium.Android.RESULT_OK --> ' + Titanium.Android.RESULT_OK );
			//Ti.App.Properties.setBool('waiting_picture', false);
			if (_result.resultCode == Titanium.Android.RESULT_OK) {

				const currentFile3 = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "photo.jpg");
				// const currentFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, "photo.jpg");
				console.info("CameraTest", ' file created succesfully in ' + currentFile3.nativePath);
				$.preview.image = null;
				$.preview.image = currentFile.nativePath;
				// setTimeout(function(){
				// 	const currentFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, "photo.jpg");
				// 	$.preview.image = currentFile.nativePath;
				// }, 500);
					// uploadPhoto(file, callback);
					// logger.info('MimeType', successResult.media.mimeType);
					// logger.info('FileSize', (successResult.media.length / 1024.0) + ' KB');
					// logger.info('Dimensions', successResult.media.width + ' x ' + successResult.media.height);
					// logger.info('NativePath', successResult.media.nativePath); // Also has a .media.file attr

					//onPhotoHandleResult(currentFile);
			}

	});
}

// const currentFile = Ti.Filesystem.getFile(Ti.Filesystem.applicationCacheDirectory, "photo.jpg");
const currentFile = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, "photo.jpg");

$.preview.image = currentFile.nativePath;



$.index.open();

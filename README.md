# ti-camera-test
## Android camera via intent
This titanium example show how to implement camera actions via intents.

```javascript
  const photoCaptureIntent = Ti.Android.createIntent({
    action: 'android.media.action.IMAGE_CAPTURE'
  });
```
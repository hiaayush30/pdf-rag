**`multipart/form-data`** is a special way of encoding data when submitting forms that include **files** (images, PDFs, videos, etc.) or large binary data.

Normally:

* `application/x-www-form-urlencoded` → sends data as simple `key=value&key2=value2` (good for text).
* `application/json` → sends data as JSON (good for APIs).

But when uploading files:

* `multipart/form-data` is used.
* The request body is split into **multiple parts**:

  * One part for each field (text input, etc.)
  * One part for each file (with its metadata: filename, content type, etc.)
* Each part is separated by a boundary string.

Example (simplified):

```
POST /upload HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary123

------WebKitFormBoundary123
Content-Disposition: form-data; name="username"

Aayush
------WebKitFormBoundary123
Content-Disposition: form-data; name="pdf"; filename="file.pdf"
Content-Type: application/pdf

(binary file content here)
------WebKitFormBoundary123--
```

👉 So in short: **`multipart/form-data` is the encoding that lets browsers send both text fields and binary files together in one HTTP request.**

Would you like me to show you a small **Node.js/Express backend example** that receives such a file?

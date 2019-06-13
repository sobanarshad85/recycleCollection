import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { _storeData } from '../../backend/AsyncFuncs';

let currentUserId = '';

export async function connectFirebase(){
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC017zOQBU6mlhSq2InOUShRTNMMuqKvHY",
    authDomain: "recycler-a347a.firebaseapp.com",
    databaseURL: "https://recycler-a347a.firebaseio.com",
    projectId: "recycler-a347a",
    storageBucket: "recycler-a347a.appspot.com",
    messagingSenderId: "542581667946",
    appId: "1:542581667946:web:662c16fd9e1f3ae8"
  };
 if (!firebase.apps.length) {
   firebase.initializeApp(config);
 }
}

export async function getAllOfCollection(collection){
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).get();
  querySnapshot.forEach(function(doc) {
    if (doc.exists) {
      //console.log(doc.data());
      data.push(doc.data());
    } else {
      console.log('No document found!');
    }
  });
  return data;
}

export function getData(collection, doc, objectKey){
  // check if data exists on the given path
  if(objectKey === undefined){
    return firebase.firestore().collection(collection).doc(doc).get().then(function(doc) {
      if (doc.exists) {
        return doc.data();
      } else{
        return false;
      }
    })
  }
  else{
    return firebase.firestore().collection(collection).doc(doc).get().then(function(doc) {
      if (doc.exists && (doc.data()[objectKey] != undefined) ) {
        return ( doc.data()[objectKey] );
      } else{
        return false;
      }
    })
  }
}

export async function saveDataWithoutDocId(collection, jsonObject){
  let upload = await firebase.firestore().collection(collection).doc().set(jsonObject);
  return upload;
}

export async function saveData(collection, doc, jsonObject){
  firebase.firestore().collection(collection).doc(doc).set(jsonObject, { merge: true })
  .then(function() {
      console.log("Document successfully written!");
  })
  .catch(function(error) {
      console.error("Error writing document: ", error);
  });
}

export async function addToArray(collection, doc, array, value){
  firebase.firestore().collection(collection).doc(doc).update({
    [array]: firebase.firestore.FieldValue.arrayUnion(value)
  });
}

export async function uploadImage(folder, imageName, imageBase64){
  var storageRef = firebase.storage().ref();
  var pathRef = storageRef.child(folder + '/' + imageName);
  var metadata = {
    contentType: 'image/jpeg'
  };

  let uploadTask = pathRef.putString(imageBase64, 'base64', metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    function(snapshot) {
      var progress = ( (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ).toFixed(2);;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED:
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING:
          console.log('Upload is running');
          break;
      }
    },
    function(error) {
      console.log(error);
    },
    function() {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);

        var listings = firebase.firestore().collection("listings");
        let querySnapshot = listings.where("image", "==", 'imageName').get();
        querySnapshot.forEach(function(doc) {
          if (doc.exists) {
            console.log(doc.data());

              console.log(listings)
              console.log(doc)
              doc.update({image: downloadURL});
          } else {
            console.log('No document found!');
          }
        });
    })
  }
)}

export async function downloadImage(folder, imageName){
  var storageRef = firebase.storage().ref();
  var pathRef = storageRef.child(folder + '/' + imageName);

  let url = await pathRef.getDownloadURL()
  return url;
}

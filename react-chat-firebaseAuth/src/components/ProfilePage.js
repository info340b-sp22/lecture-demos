// import React, { useState } from 'react';

// export default function ProfilePage(props) {
//   //convenience
//   const displayName = props.currentUser ? props.currentUser.userName : null;

//   const [imageFile, setImageFile] = useState(undefined)
//   let initialURL = '/img/null.png'
//   if(props.user && props.currentUser.photoURL) {
//     initialURL = props.currentUser.photoURL
//   }
//   const [imageUrl, setImageUrl] = useState(initialURL)

//   //image uploading!
//   const handleChange = (event) => {
//     if(event.target.files.length > 0 && event.target.files[0]) {
//       const imageFile = event.target.files[0]
//       setImageFile(imageFile);
//       setImageUrl(URL.createObjectURL(imageFile));
//     }
//   }

//   const handleImageUpload = (event) => {
//     console.log("Uploading", imageFile);
//   }

//   return (
//     <div className="container">
//       <h2>
//         {props.currentUser && displayName+"'s"} Profile
//       </h2>

//       <div className="mb-5 image-upload-form">
//         <img src={imageUrl} alt="user avatar preview" className="mb-2"/>
//         <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
//         <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
//         <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
//       </div>
//     </div>
//   )
// }

// //Example 6
// import React, { useState } from 'react';

// //Example 6
// import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

// export default function ProfilePage(props) {
//   //convenience
//   const displayName = props.currentUser ? props.currentUser.userName : null;

//   const [imageFile, setImageFile] = useState(undefined)
//   let initialURL = '/img/null.png'
//   if (props.user && props.currentUser.photoURL) {
//     initialURL = props.currentUser.photoURL
//   }
//   const [imageUrl, setImageUrl] = useState(initialURL)


//   // Example 6
//   const [favoriteFood, setFavoriteFood] = useState('');

//   //image uploading!
//   const handleChange = (event) => {
//     if (event.target.files.length > 0 && event.target.files[0]) {
//       const imageFile = event.target.files[0]
//       setImageFile(imageFile);
//       setImageUrl(URL.createObjectURL(imageFile));
//     }
//   }

//   const handleImageUpload = (event) => {
//     console.log("Uploading", imageFile);
//   }

//   const handleFoodChange = (event) => {
//     setFavoriteFood(event.target.value);
//   }
//   const handleFoodClick = (event) => {
//     //update database
//     const db = getDatabase();
//     const foodRef = ref(db, "userData/"+props.currentUser.uid+"/favoriteFood")
//     firebaseSet(foodRef, favoriteFood);
//   }

//   return (
//     <div className="container">
//       <h2>
//         {props.currentUser && displayName + "'s"} Profile
//       </h2>

//       <div className="mb-5 image-upload-form">
//         <img src={imageUrl} alt="user avatar preview" className="mb-2" />
//         <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
//         <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
//         <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange} />
//       </div>
      
//       {/*Example 6 */}
//       <div>
//         <label htmlFor="foodInput">Food</label>
//         <input id="foodInput" value={favoriteFood} onChange={handleFoodChange} />
//         <button onClick={handleFoodClick}>Save Food</button>
//       </div>
//     </div>


//   )
// }


//Example 7

import React, { useState } from 'react';

import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

//Example 7
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth';


export default function ProfilePage(props) {
  //convenience
  const displayName = props.currentUser ? props.currentUser.userName : null;

  const [imageFile, setImageFile] = useState(undefined)
  let initialURL = props.currentUser.photoURL || '/img/null.png'
  if(props.user && props.currentUser.photoURL) {
    initialURL = props.currentUser.photoURL
  }
  const [imageUrl, setImageUrl] = useState(initialURL)

  const [favoriteFood, setFavoriteFood] = useState('');

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);

    //Example 7

    const storage = getStorage();
    const imageRef = storageRef(storage, "userImages/"+props.currentUser.uid+".png");
    await uploadBytes(imageRef, imageFile)
    const imageUrlOnFirebase = await getDownloadURL(imageRef)

    //save the storage image in the profile
    updateProfile(props.currentUser, { photoURL: imageUrlOnFirebase })

    //Example 7a (store to the database as well)
    //save the storage image in the rtdb
    const db = getDatabase();
    const avatarRef = ref(db, "userData/"+props.currentUser.uid+"/avatarImage")
    firebaseSet(avatarRef, imageUrlOnFirebase);

  }

  const handleFoodChange = (event) => {
    setFavoriteFood(event.target.value);
  }
  const handleFoodClick = (event) => {
    //update database
    const db = getDatabase();
    const foodRef = ref(db, "userData/"+props.currentUser.uid+"/favoriteFood")
    firebaseSet(foodRef, favoriteFood);
  }

  return (
    <div className="container">
      <h2>
        {props.currentUser && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <img src={imageUrl} alt="user avatar preview" className="mb-2"/>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor="foodInput">Food</label>
        <input id="foodInput" value={favoriteFood} onChange={handleFoodChange} />
        <button onClick={handleFoodClick}>Save Food</button>
      </div>

    </div>
  )
}
// // SubjectManager.js
// import React, { useState, useEffect } from 'react';

// const SubjectManager = () => {
//   const [subjects, setSubjects] = useState([]);

//   useEffect(() => {
//     const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
//     if (storedSubjects) {
//       setSubjects(storedSubjects);
//     }
//   }, []);

//   const handleAddSubject = () => {
//     const newSubject = { name: '', hours: 0 };
//     setSubjects([...subjects, newSubject]);
//   };

//   const handleSubjectChange = (index, event) => {
//     const { name, value } = event.target;
//     const updatedSubjects = [...subjects];
//     updatedSubjects[index][name] = value;
//     setSubjects(updatedSubjects);
//     localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
//   };

//   const handleRemoveSubject = (index) => {
//     const updatedSubjects = [...subjects];
//     updatedSubjects.splice(index, 1);
//     setSubjects(updatedSubjects);
//     localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
//   };

//   return (
//     <div>
//       <h2>Subject Manager</h2>
//       <button onClick={handleAddSubject}>Add Subject</button>
//       {subjects.map((subject, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             name="name"
//             value={subject.name}
//             onChange={(e) => handleSubjectChange(index, e)}
//             placeholder="Subject Name"
//           />
//           <input
//             type="number"
//             name="hours"
//             value={subject.hours}
//             onChange={(e) => handleSubjectChange(index, e)}
//             placeholder="Study Hours"
//           />
//           <button onClick={() => handleRemoveSubject(index)}>Remove</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SubjectManager;


// SubjectManager.js
import React, { useState, useEffect } from 'react';

const SubjectManager = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
    if (storedSubjects) {
      setSubjects(storedSubjects);
    }
  }, []);

  const handleAddSubject = () => {
    const newSubject = { name: '', hours: 0 };
    setSubjects([...subjects, newSubject]);
  };

  const handleSubjectChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSubjects = [...subjects];
    updatedSubjects[index][name] = value;
    setSubjects(updatedSubjects);
    localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
    localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
  };

  const handleIncreaseHours = (index) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index].hours += 1;
    setSubjects(updatedSubjects);
    localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
  };

  const handleDecreaseHours = (index) => {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[index].hours > 0) {
      updatedSubjects[index].hours -= 1;
      setSubjects(updatedSubjects);
      localStorage.setItem('subjects', JSON.stringify(updatedSubjects));
    }
  };

  return (
    <div>
      <h2>Subject Manager</h2>
      <button onClick={handleAddSubject}>Add Subject</button>
      {subjects.map((subject, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={subject.name}
            onChange={(e) => handleSubjectChange(index, e)}
            placeholder="Subject Name"
          />
          <input
            type="number"
            name="hours"
            value={subject.hours}
            onChange={(e) => handleSubjectChange(index, e)}
            placeholder="Study Hours"
          />
          <button onClick={() => handleIncreaseHours(index)}>+</button>
          <button onClick={() => handleDecreaseHours(index)}>-</button>
          <button onClick={() => handleRemoveSubject(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default SubjectManager;

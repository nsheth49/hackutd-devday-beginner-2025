import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className="container grid grid-col-1 grid-rows-1 gap-4 rounded-lg mx-auto py-8 border-2 border-solid border-gray-300 bg-white shadow-lg p-6 md:grid-cols-3 md:grid-rows-1">
      <div className="col-span-2">
        <h1 className="font-bold text-blue-800 text-2xl">{props.courseCode}</h1>
        <h3 className="font-bold text-black">{props.title}</h3>
        <h4 className="text-gray-500">{props.description}</h4>
        <span className="text-green-600 rounded-xl border-5 border-solid border-lime-300 bg-lime-300">Credit Hours: {props.creditHours}</span>
      </div>
    </div>
  );
};

export default CourseCard;
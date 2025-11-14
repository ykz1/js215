const WEIGHTS = {
  exams:      0.65,
  exercises:  0.35,
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // Extract values of scores
  // Iterate through each student's scores
  // Iterate through exam scores, push to 

  // Initialize output variables
  const output = {
    studentGrades:  [],
    exams:          [[], [], [], []],
  }

  const examScores = [];

  function processScores(scores) {
    output.studentGrades.push(calculateStudentGrade(scores));
    scores.exams.forEach((examScore, examIndex) => output.exams[examIndex].push(examScore));
  }

  function calculateStudentGrade(scores) {
      const sum = (sum, score) => sum + score;
      const exams = scores.exams.reduce(sum) / scores.exams.length;
      const exercises = scores.exercises.reduce(sum);
      const finalGrade = Math.round(exams * WEIGHTS.exams + exercises * WEIGHTS.exercises, 2);
      const finalGpa = calculateStudentGpas(finalGrade);
      return `${finalGrade} (${finalGpa})`;
    }

  function calculateStudentGpas(grade) {
    if (grade >= 93) return 'A';
    if (grade >= 85) return 'B';
    if (grade >= 77) return 'C';
    if (grade >= 69) return 'D';
    if (grade >= 60) return 'E';
    return 'F'
  }

  function calculateExamAverages(examScores) {
    return {
      average: (examScores.reduce((sum, num) => sum + num) / examScores.length).toFixed(1),
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores),
    }
  }


  Object.values(scores)               // array of objects with each student's data
        .map(record => record.scores) // array of objects with each student's scores
        .forEach(processScores)       // process each student's scores

  output.exams = output.exams.map(calculateExamAverages);

  return output;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
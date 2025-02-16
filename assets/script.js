function analyzeGrades() {
  const grades = Array.from(
    { length: 12 },
    () => Math.floor(Math.random() * 100) + 1
  );

  const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

  const maxGrade = Math.max(...grades);

  const minGrade = Math.min(...grades);

  const positiveGrades = grades.filter((grade) => grade >= 60);

  const negativeGrades = grades.filter((grade) => grade < 60);

  const letterGrades = grades.map((grade) => {
    if (grade >= 80) return "A";
    if (grade >= 60) return "B";
    if (grade >= 40) return "C";
    if (grade >= 20) return "D";
    return "E";
  });
  document.getElementById("output").innerText = `
Оценки студентов: ${grades.join(", ")}
Средний балл: ${average.toFixed(2)}
Максимальный балл: ${maxGrade}
Минимальный балл: ${minGrade}
Количество студентов с положительной оценкой: ${positiveGrades.length}
Количество студентов с отрицательной оценкой: ${negativeGrades.length}
Буквенные оценки: ${letterGrades.join(", ")}`;
}

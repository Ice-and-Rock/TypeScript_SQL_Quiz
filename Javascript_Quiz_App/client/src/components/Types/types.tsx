export interface QuizQuestion {
    questionText: string;
    // Make codeSnippet optional
    codeSnippet?: string 
    optionText: {
      answerText: string;
      isCorrect: boolean;
    }[];
  }
  
export interface AnswerSubmission {
  createMultipleAnswersAndOneQuestionDto: {
    questionId: string;
    answers: { id: number }[];
  };
}


import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check, AlertCircle } from "lucide-react";
import QuizRegistrationForm from "./QuizRegistrationForm";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  id: string;
  title: string;
  subjectCode: string;
  category: string;
  questions: QuizQuestion[];
}

const Quiz = ({ id, title, subjectCode, category, questions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setIsCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    const correct = selectedAnswers.reduce((count, answer, index) => {
      return answer === questions[index].correctAnswer ? count + 1 : count;
    }, 0);
    
    setScore(correct);
    setShowResults(true);

    toast.success(`Quiz completed!`, {
      description: `Your score: ${correct} out of ${questions.length}`,
    });
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(Array(questions.length).fill(-1));
    setIsCompleted(false);
    setShowResults(false);
  };

  const handleStartQuiz = () => {
    if (!isRegistered) {
      setIsDialogOpen(true);
    }
  };

  const handleRegistrationSuccess = () => {
    setIsRegistered(true);
    setIsDialogOpen(false);
  };

  const currentQuestion = questions[currentQuestionIndex];
  
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>{title}</span>
            {!isCompleted && (
              <span className="text-sm font-normal text-gray-500">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          {!isRegistered ? (
            <div className="text-center py-8">
              <h3 className="text-xl font-medium mb-4">Interactive Quiz on {title}</h3>
              <p className="text-gray-600 mb-6">
                Test your knowledge with {questions.length} questions about {title}.
                You need to register to access this quiz.
              </p>
              <Button onClick={handleStartQuiz}>Register & Start Quiz</Button>
            </div>
          ) : isCompleted ? (
            <div className="space-y-6">
              <div className="text-center py-4">
                <h3 className="text-2xl font-semibold mb-2">Quiz Completed!</h3>
                <p className="text-3xl font-bold mb-2">
                  Your Score: {score} / {questions.length}
                </p>
                <p className="text-gray-600">
                  {score === questions.length
                    ? "Perfect score! Excellent work!"
                    : score >= questions.length * 0.7
                    ? "Great job! You've mastered most of the content."
                    : score >= questions.length * 0.5
                    ? "Good effort! You're on the right track."
                    : "Keep studying! You'll do better next time."}
                </p>
              </div>
              
              {showResults && (
                <div className="mt-6 space-y-4">
                  <h3 className="font-semibold">Review Your Answers:</h3>
                  {questions.map((q, index) => (
                    <div 
                      key={q.id} 
                      className={`p-4 rounded-md ${
                        selectedAnswers[index] === q.correctAnswer
                          ? "bg-green-50 border border-green-200"
                          : "bg-red-50 border border-red-200"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {selectedAnswers[index] === q.correctAnswer ? (
                          <Check className="h-5 w-5 text-green-600 mt-0.5" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium">{q.question}</p>
                          <p className="text-sm mt-1">
                            Your answer: <span className={selectedAnswers[index] === q.correctAnswer ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                              {q.options[selectedAnswers[index]]}
                            </span>
                          </p>
                          {selectedAnswers[index] !== q.correctAnswer && (
                            <p className="text-sm mt-1">
                              Correct answer: <span className="text-green-600 font-medium">{q.options[q.correctAnswer]}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-2">{currentQuestion.question}</h3>
              <RadioGroup 
                value={selectedAnswers[currentQuestionIndex].toString()} 
                onValueChange={(value) => handleAnswerSelect(parseInt(value))}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}
        </CardContent>
        
        <CardFooter className="flex justify-between">
          {isRegistered && !isCompleted ? (
            <>
              <Button 
                variant="outline" 
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestionIndex] === -1}
              >
                {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish Quiz"}
              </Button>
            </>
          ) : (
            isCompleted && (
              <Button onClick={resetQuiz} className="mx-auto">
                Retake Quiz
              </Button>
            )
          )}
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Register to Access Quiz</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground mb-4">
            Please provide your information to access <span className="font-medium">{title}</span> quiz
          </div>
          <QuizRegistrationForm 
            onSuccess={handleRegistrationSuccess}
            onCancel={() => setIsDialogOpen(false)}
            quizDetails={{
              title,
              subjectCode,
              category
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Quiz;

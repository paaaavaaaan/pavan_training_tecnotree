#quiz program
questions = [
    {
        "text": "What is the capital of France?",
        "choices": ["London", "Paris", "Berlin", "Madrid"],
        "answer": "Paris"
    },
    {
        "text": "What is the capital of India?",
        "choices": ["New Delhi,Mumbai,Bengaluru,Kolkata"],
        "answer": "New Delhi"
    }
]

score = 0

for i, question in enumerate(questions):
    print(f"Question {i+1}: {question['text']}")
    for j, choice in enumerate(question['choices']):
        print(f"{chr(ord('A')+j)}. {choice}")
    user_answer = input("Your answer: ")
    if user_answer.lower() == question['answer'].lower():
        print("Correct!")
        score += 1
    else:
        print("Incorrect.")

print(f"You scored {score}/{len(questions)}")

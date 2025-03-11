
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MessageType } from "@/components/ChatMessage";
import ChatContainer from "@/components/ChatContainer";
import ChatInput from "@/components/ChatInput";
import { toast } from "sonner";

const Index = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    // Create a new user message
    const userMessage: MessageType = {
      id: uuidv4(),
      content,
      role: "user",
      timestamp: new Date(),
    };

    // Add user message to the chat
    setMessages((prev) => [...prev, userMessage]);
    
    // Set loading state
    setLoading(true);

    try {
      // Mock API response for demo purposes (Python code display)
      setTimeout(() => {
        let responseContent = "";
        
        // Check for python related questions and provide sample Python code
        const lowerContent = content.toLowerCase();
        if (lowerContent.includes("hello") || lowerContent.includes("hi")) {
          responseContent = "Hello! How can I help you with Python programming today?";
        } 
        else if (lowerContent.includes("chatbot") || lowerContent.includes("chat bot")) {
          responseContent = `Here's a simple Python chatbot using the OpenAI API:

\`\`\`python
import openai

# Set your API key
openai.api_key = "your-api-key"

def get_response(user_input):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": user_input}
        ]
    )
    return response.choices[0].message.content

def main():
    print("Python AI Chatbot (type 'exit' to quit)")
    while True:
        user_input = input("You: ")
        if user_input.lower() == 'exit':
            print("Chatbot: Goodbye!")
            break
        
        response = get_response(user_input)
        print(f"Chatbot: {response}")

if __name__ == "__main__":
    main()
\`\`\`

This code creates a simple chatbot that uses OpenAI's API to generate responses. You'd need to install the OpenAI package with \`pip install openai\` and add your API key.`;
        }
        else if (lowerContent.includes("loop") || lowerContent.includes("for")) {
          responseContent = `Here's an example of a for loop in Python:

\`\`\`python
# Basic for loop
for i in range(5):
    print(f"Iteration {i}")

# Looping through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"I like {fruit}")

# Using enumerate for index and value
for index, fruit in enumerate(fruits):
    print(f"Fruit {index} is {fruit}")
\`\`\``;
        }
        else if (lowerContent.includes("function") || lowerContent.includes("def")) {
          responseContent = `Here's how to define and use functions in Python:

\`\`\`python
# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameters
def greet_with_time(name, time_of_day="day"):
    return f"Good {time_of_day}, {name}!"

# Function with multiple return values
def get_name_parts(full_name):
    parts = full_name.split()
    first_name = parts[0]
    last_name = parts[-1] if len(parts) > 1 else ""
    return first_name, last_name

# Using the functions
print(greet("Alice"))  # Output: Hello, Alice!
print(greet_with_time("Bob", "morning"))  # Output: Good morning, Bob!

first, last = get_name_parts("Charlie Brown")
print(f"First name: {first}, Last name: {last}")
\`\`\``;
        }
        else if (lowerContent.includes("list") || lowerContent.includes("array")) {
          responseContent = `Here's how to work with lists in Python:

\`\`\`python
# Creating lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]

# Accessing elements
print(fruits[0])  # Output: apple
print(numbers[-1])  # Output: 5

# Slicing
print(numbers[1:3])  # Output: [2, 3]

# List methods
fruits.append("orange")  # Add to the end
fruits.insert(1, "blueberry")  # Insert at index 1
removed_fruit = fruits.pop()  # Remove and return the last item
fruits.remove("banana")  # Remove specific item
fruits.sort()  # Sort in place

# List comprehensions
squares = [x**2 for x in range(5)]
print(squares)  # Output: [0, 1, 4, 9, 16]
\`\`\``;
        }
        else {
          responseContent = `I'd be happy to help with Python programming! Here's a simple example to get started:

\`\`\`python
# Simple Python program
def main():
    name = input("What's your name? ")
    print(f"Hello, {name}! Welcome to Python programming.")
    
    # Getting user age
    try:
        age = int(input("How old are you? "))
        if age < 18:
            print("You're quite young!")
        else:
            print("Welcome, adult!")
    except ValueError:
        print("That's not a valid age!")
    
    print("Thanks for using this program!")

if __name__ == "__main__":
    main()
\`\`\`

Feel free to ask me about specific Python concepts like loops, functions, classes, or libraries!`;
        }

        // Create assistant message
        const assistantMessage: MessageType = {
          id: uuidv4(),
          content: responseContent,
          role: "assistant",
          timestamp: new Date(),
        };

        // Add assistant message to chat
        setMessages((prev) => [...prev, assistantMessage]);
        setLoading(false);
      }, 1500);  // Simulated delay for typing effect
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-gradient-to-b from-background to-secondary/30">
      <header className="py-4 px-6 flex items-center justify-center border-b bg-white/80 backdrop-blur-sm">
        <h1 className="text-xl font-medium">Python Code Assistant</h1>
      </header>
      
      <main className="flex-1 flex flex-col overflow-hidden max-w-3xl w-full mx-auto">
        <ChatContainer messages={messages} loading={loading} />
        
        <div className="p-4 border-t bg-white/80 backdrop-blur-sm">
          <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
          <p className="text-xs text-center mt-2 text-muted-foreground">
            Ask about Python coding examples and I'll provide sample code
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;

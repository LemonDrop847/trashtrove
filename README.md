# Trashtrove

## Problem Statement

- The lack of waste management practices has caused significant issues.
- One major concern is overwhelming landfills, leading to environmental degradation and health hazards.
- Valuable resources are wasted due to lack of awareness about recyclable materials.
- Improper disposal methods often lead to valuable resources being wasted, causing significant environmental consequences.
- Improper disposal practices contribute to air and water pollution, posing severe health risks to nearby communities.
- The absence of recycling and waste-to-energy initiatives hampers efforts to combat climate change and rely on alternative energy sources.
- The failure to segregate, recycle, and dispose of waste properly has triggered serious issues like overflowing landfills, resource depletion, pollution, and climate change.
- Urgent action is required to implement efficient waste management practices and pave the way for a more sustainable future.

## Solution

- TrashTrove provides a user-friendly platform that utilizes advanced image recognition technology.
- Users can determine the recyclability of a product by uploading an image to the platform.
- The platform swiftly analyzes uploaded product images to identify their recyclability status.
- For recyclable products, comprehensive information about recycling methods is provided to encourage environmentally friendly choices.
- Non-recyclable products are guided towards appropriate disposal methods to minimize environmental and health harm.
- Responsible waste management is essential for mitigating pollution, reducing landfill burden, and combatting climate change.

## Deployment Links

- Vercel Deployment - [https://trashtrove.vercel.app/](https://trashtrove.vercel.app/)

# TrashTrove - Recycling Item Detection and Recycling Suggestions

TrashTrove is a web application that utilizes machine learning to detect recyclable and non-recyclable items from images provided by the user. It aims to promote recycling practices by providing users with valuable information about how to properly recycle different items. The application is built using Vite + React for the frontend, Flask for the backend, and TensorFlow with Keras for the machine learning model.

![TrashTrove Logo](https://i.postimg.cc/DyVW7Wpy/trashtrove.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Recycling has become an essential aspect of preserving the environment. However, it can be challenging for people to determine which items are recyclable and how to recycle them correctly. TrashTrove comes to the rescue by providing an easy-to-use web application that identifies recyclable and non-recyclable items through the power of machine learning. Moreover, it offers users practical and informative recycling suggestions for each item.

## Features

- **Image Upload**: Users can upload images of items they want to identify as recyclable or non-recyclable.
- **Recycling Suggestions**: After identifying the item, the application provides users with detailed recycling instructions for that particular item.
- **User-Friendly Interface**: TrashTrove has an intuitive and responsive user interface for a smooth user experience.
- **Machine Learning Model**: The core of TrashTrove's functionality is a machine learning model built using TensorFlow and Keras, trained to recognize recyclable items.

## Tech Stack

The TrashTrove project leverages the following technologies:

- Frontend:

  - Vite - A fast build tool for React-based web applications.
  - React - A popular JavaScript library for building user interfaces.
  - Bootstrap - A CSS framework for creating responsive and visually appealing designs.

- Backend:

  - Flask - A lightweight Python web framework to handle backend functionalities.

- Machine Learning:
  - TensorFlow - An open-source machine learning framework developed by Google.
  - Keras - A high-level neural networks API that runs on top of TensorFlow.
  - Fastai -  Focused on deep learning and artificial intelligence.
  - Openai api - Can be used for various purposes, including semantic search, content generation, translation, sentiment analysis, and many others.
  - Torch - An open-source machine learning library, a scientific computing framework, and a scripting language based on Lua.
  - NumPy - NumPy contains a large number of various mathematical operations, foundation on ML stack.

## Getting Started

Follow these instructions to set up a development environment and run TrashTrove locally on your machine.

1. **Prerequisites**:

   - Make sure you have Python installed. (Preferably Python 3.6+)
   - Install Node.js and npm for frontend development.
   - Make sure you have TensorFlow and Keras installed. You can install them using pip:

     ```bash
     pip install tensorflow keras
     ```

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/TrashTrove.git
   cd TrashTrove
   ```

### Frontend Setup:

```bash
cd frontend
npm install
```

### Backend Setup:

```bash
cd backend
pip install -r requirements.txt
```

### Start the Development Servers:

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend
python app.py
```

### Open TrashTrove in your Browser:

Visit http://localhost:3000 to access TrashTrove on your local machine.

### Usage

1. Launch the TrashTrove web application.
2. Upload an image of the item you want to identify.
3. Click on the "Detect" button to let the machine learning model analyze the item.
4. TrashTrove will display the result, indicating whether the item is recyclable or not.
5. If the item is recyclable, the application will provide you with recycling suggestions and tips on how to recycle it properly.

### Contributing

We welcome contributions to make TrashTrove better! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name: git checkout -b feature/your-feature-name.
3. Make your modifications and commit them with appropriate messages.
4. Push the changes to your branch: git push origin feature/your-feature-name.
5. Open a Pull Request, describing the changes you made.

### License

TrashTrove is open-source software licensed under the MIT License. See the LICENSE file for more details.

Thank you for using TrashTrove to promote recycling and environmental sustainability! If you have any questions or feedback, feel free to reach out to us via the Issues section of this repository. Happy recycling! 🌱

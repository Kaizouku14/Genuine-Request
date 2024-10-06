
export const emailTemplate = ({date , selectedIdeas}) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Confirmation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        .container {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            max-width: 600px;
            margin: auto;
        }
        h1 {
            color: #ff5c8e;
        }
        .date {
            font-size: 1.2em;
            font-weight: bold;
        }
        .ideas {
            margin-top: 20px;
            padding: 10px;
            border-left: 5px solid #ff5c8e;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🎉 Thank You for Your Date Request! 🎉</h1>
    <p>Hello Darling,</p>
    <p>We are excited to confirm your date request! Here are the details:</p>
    
    <p class="date">Selected Date: <strong>${date}</strong></p>
    
    <h2>Your Selected Ideas:</h2>
    <div class="ideas">
        <ul>
            ${selectedIdeas.map(idea => `<li>${idea}</li>`).join('')}
        </ul>
    </div>
    
    <p>We can't wait to celebrate this special day with you!</p>
    <p>Best Wishes,</p>
    <p>Your Date Planner Team</p>
</div>

</body>
</html>
`;
}
// Disable F5 key (key code 116) and prevent page refresh
// window.addEventListener('keydown', function (e) {
//   if (e.keyCode === 116) {
//     e.preventDefault();
//     // alert("F5 is disabled.");
//   }
// });


// Fisher-Yates Shuffle Function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    array[i].numb = i + 1;
  }
}

// Creating an array and passing the number, questions, options, and answers
let questions = [


  // Word
  {
    question: "What is the keyboard shortcut to insert a new comment in Microsoft Word?",
    answer: "Ctrl+Alt+C",
    options: [
      "Ctrl+Alt+C",
      "Alt+Shift+C",
      "Ctrl+Shift+C",
      "Ctrl+Alt+M"
    ]
  },
  {
    question: "In Word, which view allows you to see how a document will look when it's printed?",
    answer: "Print Layout View",
    options: [
      "Draft View",
      "Print Layout View",
      "Full Screen Reading View",
      "Web Layout View"
    ]
  },
  {
    question: "Which feature in Word allows you to create custom, reusable document elements like cover pages and headers?",
    answer: "Quick Parts",
    options: [
      "WordArt",
      "Quick Parts",
      "Styles",
      "Shapes"
    ]
  },
  // {
  //   question: "Which file format is the default for saving documents in Microsoft Word?",
  //   answer: "DOCX",
  //   options: [
  //     "DOCX",
  //     "PDF",
  //     "RTF",
  //     "TXT"
  //   ]
  // },
  // {
  //   question: "To remove all formatting from a selected text in Word, which keyboard shortcut is used?",
  //   answer: "Ctrl+Shift+N",
  //   options: [
  //     "Ctrl+Space",
  //     "Ctrl+Shift+Z",
  //     "Ctrl+Spacebar",
  //     "Ctrl+Shift+N"
  //   ]
  // },
  // {
  //   question: "To remove all formatting from a selected text in Word, which keyboard shortcut is used?",
  //   answer: "Ctrl+Shift+N",
  //   options: [
  //     "Ctrl+Space",
  //     "Ctrl+Shift+Z",
  //     "Ctrl+Spacebar",
  //     "Ctrl+Shift+N"
  //   ]
  // },
  // {
  //   question: "Which tab in Word contains the commands for adding charts and tables to a document?",
  //   answer: "Insert",
  //   options: [
  //     "Page Layout",
  //     "Insert",
  //     "Home",
  //     "Review"
  //   ]
  // },
  // {
  //   question: "In Microsoft Word, what does the acronym 'BCC' stand for when referring to email options?",
  //   answer: "Blind Carbon Copy",
  //   options: [
  //     "Blind Carbon Copy",
  //     "Background Color Control",
  //     "Bold, Center, Copy",
  //     "Basic Character Control"
  //   ]
  // },
  // {
  //   question: "What is the maximum number of columns you can insert into a table in Microsoft Word 2019?",
  //   answer: "256",
  //   options: [
  //     "63",
  //     "256",
  //     "32",
  //     "100"
  //   ]
  // },
  // {
  //   question: "Which feature in Microsoft Word helps you quickly replicate the formatting of one object onto another?",
  //   answer: "Format Painter",
  //   options: [
  //     "Paint Format",
  //     "Format Painter",
  //     "Style Painter",
  //     "Copy Format"
  //   ]
  // },
  // {
  //   question: "Which of the following is NOT a valid file extension for saving a Word document?",
  //   answer: ".wrk",
  //   options: [
  //     ".docx",
  //     ".dot",
  //     ".wrk",
  //     ".docm"
  //   ]
  // },
  // {
  //   question: `What does the "Mail Merge" feature in Word allow you to do?`,
  //   answer: "Merge and print personalized documents",
  //   options: [
  //     "Send emails directly from Word",
  //     "Merge and print personalized documents",
  //     "Share documents via cloud storage",
  //     "Create hyperlinks within a document"
  //   ]
  // },
  // {
  //   question: `In Word, what is the purpose of the "Find and Replace" feature?`,
  //   answer: "To search for specific words or phrases and replace them with another",
  //   options: [
  //     "To search for and format text",
  //     "To locate and insert clip art",
  //     "To search for specific words or phrases and replace them with another",
  //     "To spell-check a document"
  //   ]
  // },
  // {
  //   question: `Which tab in Word allows you to create and modify tables and charts?`,
  //   answer: "Insert",
  //   options: [
  //     "Insert",
  //     "Layout",
  //     "Home",
  //     "References"
  //   ]
  // },
  // {
  //   question: `What is the maximum number of headers or footers you can have in a Word document?`,
  //   answer: "unlimited",
  //   options: [
  //     "1",
  //     "2",
  //     "3",
  //     "unlimited"
  //   ]
  // },
  // {
  //   question: `Which keyboard shortcut is used to split a table in Microsoft Word?`,
  //   answer: "Ctrl+Shift+T",
  //   options: [
  //     "Ctrl+Shift+Enter",
  //     "Alt+Shift+S",
  //     "Ctrl+Shift+T",
  //     "Ctrl+Alt+X"
  //   ]
  // },
  // {
  //   question: `What is the purpose of the "Thesaurus" feature in Microsoft Word?`,
  //   answer: "To provide synonyms and antonyms for selected words",
  //   options: [
  //     "To check for document plagiarism",
  //     "To translate text to other languages",
  //     "To provide synonyms and antonyms for selected words",
  //     "To create a table of contents"
  //   ]
  // },
  // {
  //   question: `In Word, which view allows you to see how your document will look when it's published on the web?`,
  //   answer: "Web Layout View",
  //   options: [
  //     "Web Layout View",
  //     "Print Layout View",
  //     "Draft View",
  //     "Outline View"
  //   ]
  // },
  // {
  //   question: `What is the maximum number of recent documents displayed in the "Recent" section of the Word Start screen by default?`,
  //   answer: "15",
  //   options: [
  //     "10",
  //     "15",
  //     "20",
  //     "25"
  //   ]
  // },
  // {
  //   question: `In Word, which option is used to create a clickable link to an external website or email address?`,
  //   answer: "Hyperlink",
  //   options: [
  //     "Hyperlink",
  //     "Bookmark",
  //     "Cross-reference",
  //     "Anchor"
  //   ]
  // },
  // {
  //   question: `How can you insert a non-breaking space between words in a Word document?`,
  //   answer: "Ctrl+Shift+Space",
  //   options: [
  //     "Ctrl+Space",
  //     "Ctrl+Shift+Space",
  //     "Alt+Space",
  //     "Shift+Space"
  //   ]
  // },
  // {
  //   question: `What is the keyboard shortcut to quickly switch between open documents in Microsoft Word?`,
  //   answer: "Ctrl+Tab",
  //   options: [
  //     "Ctrl+Tab",
  //     "Alt+Tab",
  //     "Ctrl+Page Up",
  //     "Ctrl+Shift+T"
  //   ]
  // },
  // {
  //   question: `Which keyboard shortcut is used to select the entire document in Microsoft Word?`,
  //   answer: "Ctrl+A",
  //   options: [
  //     "Ctrl+A",
  //     "Ctrl+E",
  //     "Ctrl+D",
  //     "Ctrl+Z"
  //   ]
  // },
  // {
  //   question: `What is the shortcut key for creating a new document in Microsoft Word?`,
  //   answer: "Ctrl+N",
  //   options: [
  //     "Ctrl+N",
  //     "Ctrl+O",
  //     "Ctrl+S",
  //     "Ctrl+P"
  //   ]
  // },
  // {
  //   question: `Which shortcut key is used to undo the last action in Word?`,
  //   answer: "Ctrl+Z",
  //   options: [
  //     "Ctrl+U",
  //     "Ctrl+Z",
  //     "Ctrl+Y",
  //     "Ctrl+X"
  //   ]
  // },
  // {
  //   question: `To open the "Find and Replace" dialog box in Word, you can use which keyboard shortcut?`,
  //   answer: "Ctrl+F",
  //   options: [
  //     "Ctrl+F",
  //     "Ctrl+R",
  //     "Ctrl+H",
  //     "Ctrl+G"
  //   ]
  // },
  // {
  //   question: `What is the shortcut key to insert a new page break in a Word document?`,
  //   answer: "Ctrl+Enter",
  //   options: [
  //     "Ctrl+Shift+Enter",
  //     "Ctrl+P",
  //     "Ctrl+Enter",
  //     "Ctrl+J"
  //   ]
  // },
  // {
  //   question: `Which keyboard shortcut allows you to cut selected text or objects in Word?`,
  //   answer: "Ctrl+X",
  //   options: [
  //     "Ctrl+X",
  //     "Ctrl+C",
  //     "Ctrl+V",
  //     "Ctrl+Z"
  //   ]
  // },
  // {
  //   question: `What is the shortcut key to apply or remove bold formatting to selected text in Word?`,
  //   answer: "Ctrl+B",
  //   options: [
  //     "Ctrl+I",
  //     "Ctrl+U",
  //     "Ctrl+B",
  //     "Ctrl+L"
  //   ]
  // },
  // {
  //   question: `Which keyboard shortcut is used to align selected text or objects to the right in Microsoft Word?`,
  //   answer: "Ctrl+R",
  //   options: [
  //     "Ctrl+Shift+R",
  //     "Ctrl+R",
  //     "Ctrl+T",
  //     "Ctrl+Shift+T"
  //   ]
  // },
  // {
  //   question: `To close the active document in Word, what is the keyboard shortcut?`,
  //   answer: "Ctrl+W",
  //   options: [
  //     "Ctrl+F4",
  //     "Alt+F4",
  //     "Alt+W",
  //     "Ctrl+W"
  //   ]
  // },

  // // Excel

  // {
  //   question: "Which keyboard shortcut is used to create a non-breaking space in Microsoft Word?",
  //   answer: "Ctrl+Shift+Space",
  //   options: [
  //     "Ctrl+Space",
  //     "Ctrl+Shift+Space",
  //     "Ctrl+Alt+Space",
  //     "Alt+Space"
  //   ]
  // },
  // {
  //   question: "What is the shortcut key to toggle the 'Show/Hide' feature to display non-printing characters in Word?",
  //   answer: "Ctrl+Shift+8",
  //   options: [
  //     "Ctrl+Shift+S",
  //     "Ctrl+*",
  //     "Alt+Shift+N",
  //     "Ctrl+Shift+8"
  //   ]
  // },
  // {
  //   question: "What is the keyboard shortcut to insert a new comment in a Word document?",
  //   answer: "Alt+Ctrl+M",
  //   options: [
  //     "Alt+Ctrl+C",
  //     "Alt+Shift+M",
  //     "Ctrl+Alt+I",
  //     "Alt+Ctrl+M"
  //   ]
  // },
  // {
  //   question: "Which shortcut key combination is used to select the entire table in Microsoft Word?",
  //   answer: "Ctrl+Shift+T",
  //   options: [
  //     "Ctrl+T",
  //     "Ctrl+Shift+T",
  //     "Alt+T",
  //     "Alt+Shift+T"
  //   ]
  // },
  // {
  //   question: "What is the keyboard shortcut to create a new document in Word without closing the existing one?",
  //   answer: "Ctrl+Shift+N",
  //   options: [
  //     "Ctrl+N",
  //     "Ctrl+O",
  //     "Ctrl+Shift+N",
  //     "Ctrl+Alt+N"
  //   ]
  // },
  // {
  //   question: "Which shortcut key allows you to switch between the open Word documents?",
  //   answer: "Ctrl+Tab",
  //   options: [
  //     "Alt+Tab",
  //     "Ctrl+Tab",
  //     "Alt+Shift+S",
  //     "Ctrl+Shift+T"
  //   ]
  // },
  // {
  //   question: "What is the keyboard shortcut to merge selected cells in a table in Word?",
  //   answer: "Alt+M",
  //   options: [
  //     "Alt+M",
  //     "Ctrl+M",
  //     "Ctrl+Shift+M",
  //     "Alt+Shift+M"
  //   ]
  // },
  // {
  //   question: "Which shortcut key combination is used to insert a page break in Word?",
  //   answer: "Ctrl+Enter",
  //   options: [
  //     "Ctrl+Enter",
  //     "Ctrl+P",
  //     "Ctrl+Shift+Enter",
  //     "Ctrl+PageDown"
  //   ]
  // },
  // {
  //   question: "What is the keyboard shortcut to format text as subscript in Word?",
  //   answer: "Ctrl+Shift+=",
  //   options: [
  //     "Ctrl+=",
  //     "Ctrl+.",
  //     "Ctrl+Alt+S",
  //     "Ctrl+Shift+="
  //   ]
  // },
  // {
  //   question: "Which keyboard shortcut is used to open the 'Find and Replace' dialog box in Word?",
  //   answer: "Ctrl+H",
  //   options: [
  //     "Ctrl+F",
  //     "Ctrl+R",
  //     "Ctrl+H",
  //     "Ctrl+Shift+F"
  //   ]
  // },
  // {
  //   question: "What does the function VLOOKUP in Excel do?",
  //   answer: "Searches for a value in a vertical column and returns a corresponding value from another column",
  //   options: [
  //     "Searches for a value in a vertical column and returns a corresponding value from another column",
  //     "Calculates the variance between two datasets",
  //     "Adds up all the values in a range",
  //     "Rounds a number to the nearest integer"
  //   ]
  // },
  // {
  //   question: "Which Excel function is used to find the largest value in a range?",
  //   answer: "MAX",
  //   options: [
  //     "MAX",
  //     "LARGE",
  //     "BIGGEST",
  //     "HIGHEST"
  //   ]
  // },
  // {
  //   question: "In Excel, which keyboard shortcut allows you to create a new worksheet within a workbook?",
  //   answer: "Ctrl + Shift + N",
  //   options: [
  //     "Ctrl + N",
  //     "Ctrl + Shift + N",
  //     "Alt + N",
  //     "Shift + W"
  //   ]
  // },
  // {
  //   question: "What does the 'Circular Reference' error in Excel indicate?",
  //   answer: "A cell references itself, creating an infinite loop",
  //   options: [
  //     "A cell references itself, creating an infinite loop",
  //     "A cell contains an incorrect formula",
  //     "The worksheet is too large to calculate",
  //     "Excel is not responding"
  //   ]
  // },
  // {
  //   question: "In Excel, which function is used to count the number of cells in a range that meet a specific condition?",
  //   answer: "COUNTIF",
  //   options: [
  //     "COUNT",
  //     "SUM",
  //     "IF",
  //     "COUNTIF"
  //   ]
  // },
  // {
  //   question: "What does the 'Concatenate' function in Excel do?",
  //   answer: "Combines text from multiple cells into one cell",
  //   options: [
  //     "Adds two numbers",
  //     "Combines text from multiple cells into one cell",
  //     "Calculates the product of two values",
  //     "Divides a cell into multiple cells"
  //   ]
  // },
  // {
  //   question: "Which Excel feature allows you to protect a worksheet from unwanted changes by other users?",
  //   answer: "Worksheet Locking",
  //   options: [
  //     "Data Validation",
  //     "Password Encryption",
  //     "Worksheet Locking",
  //     "Workbook Sharing"
  //   ]
  // },
  // {
  //   question: "What does the 'PMT' function in Excel calculate?",
  //   answer: "The payment for a loan based on a fixed interest rate and number of periods",
  //   options: [
  //     "The payment for a loan based on a fixed interest rate and number of periods",
  //     "The total sum of a range of values",
  //     "The difference between two dates",
  //     "The percentage increase in a value"
  //   ]
  // },
  // {
  //   question: "In Excel, what is the result of the formula '=IF(ISBLANK(A1), B1, A1)' if cell A1 is empty?",
  //   answer: "B1",
  //   options: [
  //     "#VALUE!",
  //     "#REF!",
  //     "A1",
  //     "B1"
  //   ]
  // },
  // {
  //   question: "What is the maximum number of worksheets you can have in a single Excel workbook?",
  //   answer: "65,536",
  //   options: [
  //     "256",
  //     "65,536",
  //     "1,048,576",
  //     "32,767"
  //   ]
  // },
  // {
  //   question: "In Excel, what does the 'TRIM' function do?",
  //   answer: "Removes leading and trailing spaces from text",
  //   options: [
  //     "Removes leading and trailing spaces from text",
  //     "Rounds a number to the nearest integer",
  //     "Converts text to uppercase",
  //     "Returns the length of a text string"
  //   ]
  // },
  // {
  //   question: "Which option in Excel allows you to create a drop-down list in a cell?",
  //   answer: "Data Validation",
  //   options: [
  //     "Data Validation",
  //     "AutoFilter",
  //     "Sort and Filter",
  //     "Conditional Formatting"
  //   ]
  // },
  // {
  //   question: "Which function is used to find the smallest value in a range in Excel?",
  //   answer: "MIN",
  //   options: [
  //     "MIN",
  //     "SMALL",
  //     "SMALLEST",
  //     "MINIMUM"
  //   ]
  // },
  // {
  //   question: "What is the purpose of the Excel function 'HLOOKUP'?",
  //   answer: "Searches for a value in a horizontal row and returns a corresponding value from another row",
  //   options: [
  //     "Searches for a value in a horizontal row and returns a corresponding value from another row",
  //     "Calculates the sum of values in a vertical column",
  //     "Performs a horizontal text alignment",
  //     "Converts a number into hexadecimal format"
  //   ]
  // },
  // {
  //   question: "In Excel, what does the 'NOW' function return?",
  //   answer: "The current date and time",
  //   options: [
  //     "The current date and time",
  //     "The current date",
  //     "The current time",
  //     "The number of cells in a range"
  //   ]
  // },
  // {
  //   question: "How can you freeze the top row and first column in Excel so that they remain visible while scrolling?",
  //   answer: "Use the 'Freeze Panes' option under the 'View' tab.",
  //   options: [
  //     "Apply conditional formatting to the top row and first column.",
  //     "Use the 'Freeze Panes' option under the 'View' tab.",
  //     "Right-click and choose 'Freeze Top Row' and 'Freeze First Column.'",
  //     "Use the 'Lock Cells' option in the 'Format' menu."
  //   ]
  // },
  // {
  //   question: "Which Excel function returns the current row number of a cell?",
  //   answer: "ROW",
  //   options: [
  //     "CELLROW",
  //     "ROW",
  //     "ROWNUM",
  //     "CURRENTROW"
  //   ]
  // },
  // {
  //   question: "What does the 'Goal Seek' feature in Excel allow you to do?",
  //   answer: "Set a target value for a formula and find the input value needed to achieve it",
  //   options: [
  //     "Find and replace specific text in a worksheet",
  //     "Set a target value for a formula and find the input value needed to achieve it",
  //     "Perform complex statistical analysis",
  //     "Create a chart or graph from data"
  //   ]
  // },
  // {
  //   question: "In Excel, what does the 'SUBTOTAL' function do?",
  //   answer: "Provides a subtotal for a filtered list",
  //   options: [
  //     "Returns the sum of a range of values",
  //     "Provides a subtotal for a filtered list",
  //     "Calculates the difference between two dates",
  //     "Multiplies two numbers together"
  //   ]
  // },
  // {
  //   question: "Which Excel function is used to count the number of unique values in a range?",
  //   answer: "UNIQUE",
  //   options: [
  //     "COUNT",
  //     "COUNTIF",
  //     "UNIQUE",
  //     "DISTINCTCOUNT"
  //   ]
  // },

  // // Windows Shortcut
  // {
  //   question: "What is the shortcut key to open the Task Manager in Windows?",
  //   answer: "Ctrl + Shift + Esc",
  //   options: [
  //     "Ctrl + Shift + Esc",
  //     "Ctrl + Alt + Del",
  //     "Win + Tab",
  //     "Alt + F4"
  //   ]
  // },
  // {
  //   question: "Which shortcut key allows you to minimize all open windows and show the desktop?",
  //   answer: "Win + D",
  //   options: [
  //     "Win + D",
  //     "Alt + Tab",
  //     "Ctrl + A",
  //     "Win + E"
  //   ]
  // },
  // {
  //   question: "How do you lock your computer quickly using a shortcut key?",
  //   answer: "Win + L",
  //   options: [
  //     "Win + L",
  //     "Alt + F4",
  //     "Ctrl + Alt + Del",
  //     "Win + U"
  //   ]
  // },
  // {
  //   question: "What is the shortcut key to rename a selected file or folder in Windows?",
  //   answer: "F2",
  //   options: [
  //     "F2",
  //     "Ctrl + R",
  //     "Alt + Enter",
  //     "Shift + R"
  //   ]
  // },
  // {
  //   question: "To open the Run dialog box, you can use which shortcut key?",
  //   answer: "Win + R",
  //   options: [
  //     "Win + R",
  //     "Ctrl + R",
  //     "Alt + R",
  //     "Shift + R"
  //   ]
  // },
  // {
  //   question: "Which shortcut key allows you to switch between open applications or windows?",
  //   answer: "Alt + Tab",
  //   options: [
  //     "Alt + Tab",
  //     "Win + Tab",
  //     "Ctrl + Tab",
  //     "Shift + Tab"
  //   ]
  // },
  // {
  //   question: "How do you take a screenshot of the current window using a shortcut key?",
  //   answer: "Alt + Print Screen",
  //   options: [
  //     "Alt + Print Screen",
  //     "Win + Shift + S",
  //     "Ctrl + S",
  //     "F12"
  //   ]
  // },
  // {
  //   question: "What is the shortcut key to undo the last action in many Windows applications?",
  //   answer: "Ctrl + Z",
  //   options: [
  //     "Ctrl + Z",
  //     "Ctrl + U",
  //     "Alt + Z",
  //     "Win + Z"
  //   ]
  // },
  // {
  //   question: "To close the active window, which shortcut key can you use?",
  //   answer: "Alt + F4",
  //   options: [
  //     "Alt + F4",
  //     "Ctrl + W",
  //     "Win + C",
  //     "Shift + F4"
  //   ]
  // },
  // {
  //   question: "Which shortcut key lets you cycle through the open tabs or documents in your web browser or application?",
  //   answer: "Ctrl + Tab",
  //   options: [
  //     "Ctrl + Tab",
  //     "Alt + F4",
  //     "Win + Tab",
  //     "Shift + Tab"
  //   ]
  // },
  // {
  //   question: "How do you cut selected text or files using a shortcut key?",
  //   answer: "Ctrl + X",
  //   options: [
  //     "Ctrl + X",
  //     "Alt + X",
  //     "Win + X",
  //     "Shift + X"
  //   ]
  // },
  // {
  //   question: "What is the shortcut key to open the Windows Explorer (File Explorer) in Windows?",
  //   answer: "Win + E",
  //   options: [
  //     "Win + E",
  //     "Alt + E",
  //     "Ctrl + E",
  //     "F4"
  //   ]
  // },
  // {
  //   question: "Which shortcut key allows you to paste the copied content using a shortcut key?",
  //   answer: "Ctrl + V",
  //   options: [
  //     "Ctrl + V",
  //     "Alt + V",
  //     "Win + V",
  //     "Shift + V"
  //   ]
  // },
  // {
  //   question: "To open the Windows Settings app, which shortcut key should you use?",
  //   answer: "Win + I",
  //   options: [
  //     "Win + I",
  //     "Ctrl + S",
  //     "Alt + S",
  //     "Shift + I"
  //   ]
  // },
  // {
  //   question: "How do you navigate between the items on the desktop or Start menu using a shortcut key?",
  //   answer: "Arrow keys",
  //   options: [
  //     "Arrow keys",
  //     "Ctrl + Arrow keys",
  //     "Win + Arrow keys",
  //     "Alt + Arrow keys"
  //   ]
  // },
  // {
  //   question: "What is the shortcut key to open the context menu for a selected item in Windows?",
  //   answer: "Shift + F10",
  //   options: [
  //     "Shift + F10",
  //     "Ctrl + F10",
  //     "Win + F10",
  //     "Alt + F10"
  //   ]
  // },
  // {
  //   question: "Which shortcut key combination is used to close a tab in most web browsers?",
  //   answer: "Ctrl + W",
  //   options: [
  //     "Ctrl + W",
  //     "Alt + F4",
  //     "Win + W",
  //     "Shift + W"
  //   ]
  // },
  // {
  //   question: "To open the Action Center in Windows, you can use which shortcut key?",
  //   answer: "Win + A",
  //   options: [
  //     "Win + A",
  //     "Ctrl + A",
  //     "Alt + A",
  //     "F5"
  //   ]
  // },
  // {
  //   question: "What is the shortcut key to switch between virtual desktops in Windows?",
  //   answer: "Ctrl + Win + Left/Right",
  //   options: [
  //     "Ctrl + Win + Left/Right",
  //     "Alt + Win + Up/Down",
  //     "Shift + Win + 1/2/3...",
  //     "Win + Alt + V"
  //   ]
  // },
  // {
  //   question: "To quickly open the Windows Task View to manage open applications and virtual desktops, which shortcut key should you use?",
  //   answer: "Win + Tab",
  //   options: [
  //     "Win + Tab",
  //     "Alt + Tab",
  //     "Ctrl + Tab",
  //     "Shift + Tab"
  //   ]
  // },

  // // Computer Hardware
  // {
  //   question: "What type of computer memory is non-volatile and retains data even when the power is turned off?",
  //   answer: "ROM",
  //   options: [
  //     "RAM",
  //     "ROM",
  //     "Cache",
  //     "CPU"
  //   ]
  // },
  // {
  //   question: "Which component of a CPU is responsible for performing arithmetic and logic operations?",
  //   answer: "ALU (Arithmetic Logic Unit)",
  //   options: [
  //     "Control Unit",
  //     "ALU (Arithmetic Logic Unit)",
  //     "Register",
  //     "Cache"
  //   ]
  // },
  // {
  //   question: "What is the primary function of a GPU (Graphics Processing Unit)?",
  //   answer: "Render graphics and images",
  //   options: [
  //     "Execute program instructions",
  //     "Manage system memory",
  //     "Render graphics and images",
  //     "Store data temporarily"
  //   ]
  // },
  // {
  //   question: "Which type of storage device uses spinning platters to store data?",
  //   answer: "HDD (Hard Disk Drive)",
  //   options: [
  //     "SSD (Solid-State Drive)",
  //     "HDD (Hard Disk Drive)",
  //     "USB flash drive",
  //     "CD-ROM"
  //   ]
  // },
  // {
  //   question: "What does RAID stand for in the context of data storage?",
  //   answer: "Redundant Array of Inexpensive Disks",
  //   options: [
  //     "Random Array of Independent Disks",
  //     "Redundant Array of Inexpensive Disks",
  //     "Rapid Access and Instant Data",
  //     "Relational Analysis of Integrated Data"
  //   ]
  // },
  // {
  //   question: "Which type of motherboard slot is commonly used for high-performance graphics cards?",
  //   answer: "PCIe",
  //   options: [
  //     "PCI",
  //     "AGP",
  //     "PCIe",
  //     "ISA"
  //   ]
  // },
  // {
  //   question: "What does BIOS stand for in the context of a computer?",
  //   answer: "Basic Input/Output System",
  //   options: [
  //     "Basic Input/Output System",
  //     "Binary Input/Output System",
  //     "Basic Integrated Operating System",
  //     "Bootloader Input/Output System"
  //   ]
  // },
  // {
  //   question: "Which component is responsible for managing the power supply and distributing power to various hardware components in a computer?",
  //   answer: "PSU (Power Supply Unit)",
  //   options: [
  //     "CPU",
  //     "PSU (Power Supply Unit)",
  //     "RAM",
  //     "GPU"
  //   ]
  // },
  // {
  //   question: "What is the primary function of a Northbridge chip on a motherboard?",
  //   answer: "Connect the CPU to high-speed components",
  //   options: [
  //     "Manage data storage",
  //     "Control power distribution",
  //     "Connect the CPU to high-speed components",
  //     "Handle network connections"
  //   ]
  // },
  // {
  //   question: "Which type of monitor technology uses organic compounds that emit light when an electric current is applied?",
  //   answer: "OLED (Organic Light-Emitting Diode)",
  //   options: [
  //     "LCD (Liquid Crystal Display)",
  //     "CRT (Cathode Ray Tube)",
  //     "OLED (Organic Light-Emitting Diode)",
  //     "LED (Light-Emitting Diode)"
  //   ]
  // },
  // {
  //   question: "What is the primary purpose of a sound card in a computer?",
  //   answer: "Process and output audio",
  //   options: [
  //     "Display graphics",
  //     "Control power supply",
  //     "Process and output audio",
  //     "Manage network connections"
  //   ]
  // },
  // {
  //   question: "Which type of port is commonly used for connecting external hard drives and other peripherals?",
  //   answer: "USB",
  //   options: [
  //     "VGA",
  //     "USB",
  //     "HDMI",
  //     "DVI"
  //   ]
  // },
  // {
  //   question: "Which component is responsible for temporarily storing data that is actively being processed by the CPU?",
  //   answer: "RAM",
  //   options: [
  //     "Hard drive",
  //     "RAM",
  //     "GPU",
  //     "Monitor"
  //   ]
  // },
  // {
  //   question: "What is the primary function of a UPS (Uninterruptible Power Supply) in a computer setup?",
  //   answer: "Provide backup power during outages",
  //   options: [
  //     "Store data",
  //     "Enhance graphics performance",
  //     "Provide backup power during outages",
  //     "Manage network connections"
  //   ]
  // },
  // {
  //   question: "Which component is responsible for translating virtual memory addresses to physical memory addresses in a computer's memory management unit (MMU)?",
  //   answer: "TLB (Translation Lookaside Buffer)",
  //   options: [
  //     "ALU",
  //     "CPU",
  //     "TLB (Translation Lookaside Buffer)",
  //     "RAM"
  //   ]
  // },
  // {
  //   question: "What is the primary function of a NIC (Network Interface Carin a computer?",
  //   answer: "Connect the computer to a network",
  //   options: [
  //     "Process graphics",
  //     "Store operating system files",
  //     "Connect the computer to a network",
  //     "Control power supply"
  //   ]
  // },
  // {
  //   question: "Which type of port is commonly used to connect an external keyboard and mouse to a computer?",
  //   answer: "USB",
  //   options: [
  //     "USB",
  //     "HDMI",
  //     "DisplayPort",
  //     "Thunderbolt"
  //   ]
  // },
  // {
  //   question: "What is the purpose of a CMOS battery on a motherboard?",
  //   answer: "Maintain BIOS settings",
  //   options: [
  //     "Power the CPU",
  //     "Maintain BIOS settings",
  //     "Improve graphics performance",
  //     "Manage network connections"
  //   ]
  // },
  // {
  //   question: "Which type of storage device is known for its extremely fast read and write speeds and has no moving parts?",
  //   answer: "SSD (Solid-State Drive)",
  //   options: [
  //     "HDD (Hard Disk Drive)",
  //     "SSD (Solid-State Drive)",
  //     "CD-ROM",
  //     "Floppy disk"
  //   ]
  // },



  // {
  //   question: ``,
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   question: ``,
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },
  // {
  //   question: ``,
  //   answer: "",
  //   options: [
  //     "",
  //     "",
  //     "",
  //     ""
  //   ]
  // },




];

// Shuffle the questions array randomly and update the 'numb' property
shuffleArray(questions);

// Track which questions have been displayed
const displayedQuestions = [];

// Function to get the next question without repetition
function getNextQuestion() {
  if (displayedQuestions.length === questions.length) {
    // All questions have been displayed
    return null;
  }
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (displayedQuestions.includes(randomIndex));
  displayedQuestions.push(randomIndex);
  return questions[randomIndex];
}

// Example of how to get the next question
const nextQuestion = getNextQuestion();
if (nextQuestion) {
  console.log(nextQuestion.question);
  console.log(nextQuestion.options);
} else {
  console.log("All questions have been displayed.");
}
